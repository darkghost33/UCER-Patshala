const mongoose = require("mongoose");

const pdfDetailsSchema = new mongoose.Schema(
  {
    branch: { type: String, required: true },
    year: { type: String, required: true },
    subject: { type: String, required: true },
    unit: { type: String, required: true },
    pdfUrl: { type: String, required: true },
  },
  {
    collection: "PdfInfo",
  }
);

mongoose.model("PdfInfo", pdfDetailsSchema);
