const Khoa = require("../models/Khoa");

const getAllKhoa = async (req, res) => {
  try {
    const Khoas = await Khoa.find({});
    return res.status(200).json({ data: Khoas });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const createKhoa = async (req, res) => {
  const { tenSinhVien, chiTietSinhVien } = req.body;
  try {
    let ten = tenSinhVien.trim();
    let tenTrim = ten.replace(/\s+/g, " ");
    const checkTrung = await Khoa.findOne({
      tenSinhVien: {
        $regex: tenTrim,
        $options: "i",
      },
    });
    console.log(checkTrung);
    if (checkTrung?._id) {
      res.status(400).json({
        error: {
          message: "Tên sinh viên đã tồn tại",
        },
      });
    } else {
      const khoa = await Khoa.create({ tenSinhVien, chiTietSinhVien });
      res.status(200).json({ message: "Thêm thành công", data: khoa });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
module.exports = {
  getAllKhoa,
  createKhoa,
};
