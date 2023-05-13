const mongoose = require("mongoose");

const pdfDetailsSchema = new mongoose.Schema(
  {
    branch: { type: String, required: true },
    year: { type: Number, required: true },
    subject: { type: String, required: true },
    unit: { type: Number, required: true },
    pdf: { data: Buffer, contentType: String },
  },
  {
    collection: "PdfInfo",
  }
);

mongoose.model("PdfInfo", pdfDetailsSchema);
