const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

var nodemailer = require("nodemailer");

const mongoUrl = "mongodb://0.0.0.0:27017";

const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongoDB successfully");
  })
  .catch((e) => console.log(e));

require("./userDetails");
require("./pdfDetail");

const User = mongoose.model("UserInfo");
const Pdf = mongoose.model("PdfInfo");

app.post("/addPdf", async (req, res) => {
  console.log(req.body);
  const { branch, year, subject, unit, pdfUrl } = req.body;

  try {
    await Pdf.create({
      branch,
      year,
      subject,
      unit,
      pdfUrl,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "10h",
    });
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error" });
    }
  } else {
    return res.json({ status: "error", error: "Invalid Password" });
  }
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "Token Expired";
      }
      return res;
    });

    if (user == "Token Expired") {
      console.log(user);
      return res.send({ status: "error", data: "Token Expired" });
    }
    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.send({ status:"User does not exist!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "10m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      // secure: false,
      auth: {
        user: process.env.REACT_APP_GMAIL,
        pass: process.env.REACT_APP_GMAIL_PASSKEY,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    console.log(process.env.REACT_APP_GMAIL);
    var mailOptions = {
      from: `"${process.env.REACT_APP_GMAIL}"`,
      to: email,
      subject: "Password Reset",
      text:
        "Click on this link to change your password.The link is valid for 10 minutes only - " +
        link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.send({ status: "ok" })
        console.log("Email sent: " + info.response);
      }
    });

    console.log(link);
  } catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User does not exist!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    // res.send("Link is verified")
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    res.send("Not a verified link");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User does not exist!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      { $set: { password: encryptedPassword } }
    );
    // res.json("Password Updated Successfully");
    res.render("index", { email: verify.email, status: "Verified" });
  } catch (error) {
    res.send("Something went wrong!");
  }
});

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({ userType: "User" });
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});
app.get("/getAllUploadedPdf", async (req, res) => {
  try {
    const { branch, year } = req.query;
    let query = {};
    if (branch && year) {
      query = {
        branch,
        year,
      };
    }
    const allUploadedPdf = await Pdf.find(query);
    res.send({ status: "ok", data: allUploadedPdf });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", message: "Internal Server Error" });
  }
});

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  console.log(userid);
  User.deleteOne({ _id: userid })
    .then((result) => {
      res.send({ status: "ok", data: "Deleted" });
      console.log(result);
    })
    .catch((error) => {
      res
        .status(500)
        .send({ status: "error", message: "Failed to delete user" });
      console.log(error);
    });
});
app.post("/deleteUploadedPdf", async (req, res) => {
  const { pdfid } = req.body;
  console.log(pdfid);
  Pdf.deleteOne({ _id: pdfid })
    .then((result) => {
      res.send({ status: "ok", data: "Deleted" });
      console.log(result);
    })
    .catch((error) => {
      res
        .status(500)
        .send({ status: "error", message: "Failed to delete pdf entry!!" });
      console.log(error);
    });
});

app.listen(5000, () => {
  console.log("Server Started");
});
