const mongoose = require("mongoose");

const KhoaSchema = mongoose.Schema({
  tenSinhVien: {
    type: String,
    required: true,
  },
  chiTietSinhVien: {
    type: String,
  },
});

const KhoaModel = mongoose.model("khoa", KhoaSchema);

module.exports = KhoaModel;
