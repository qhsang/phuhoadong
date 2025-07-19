export interface NhanSu {
  chucVu: string;
  hoTen: string;
}

export interface CoQuan {
  id: number;
  tieuDe: string;
  diaChi: string;
  soDienThoai: string;
  nhanSu: NhanSu[];
}

export const coQuan: CoQuan[] = [
  {
    id: 1,
    tieuDe: "TRỤ SỞ: ĐẢNG UỶ - UỶ BAN MTTQ VIỆT NAM XÃ",
    diaChi: "463 Tỉnh lộ 15, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.8927.750",
    nhanSu: [
      { chucVu: "Bí thư", hoTen: "Nguyễn Văn Nghĩa" },
      { chucVu: "Phó Bí Thư", hoTen: "Lê Thị Ánh Tuyết" },
      { chucVu: "Chánh Văn phòng Đảng uỷ", hoTen: "Lê Thị Minh Đan" },
      { chucVu: "Trưởng Ban Xây dựng Đảng", hoTen: "Võ Thị Thanh Hằng" },
      { chucVu: "Chủ nhiệm UBKT", hoTen: "Phan Võ Thuý Phượng" },
      { chucVu: "Chủ tịch Uỷ ban MTTQ Việt Nam xã", hoTen: "Nguyễn Thị Thuận" },
      { chucVu: "PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Hội Liên hiệp phụ nữ xã", hoTen: "Trần Thị Thanh Huyền" },
      { chucVu: "PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Hội Cựu Chiến binh xã", hoTen: "Lương Đức Toản" },
      { chucVu: "PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Hội Nông dân xã", hoTen: "Trương Minh Phương" },
      { chucVu: "PCT. Uỷ ban MTTQ đồng thời là Bí Thư Đoàn xã", hoTen: "Trần Đỗ Xuân Thương" },
      { chucVu: "PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Công đoàn xã", hoTen: "Nguyễn Huỳnh Quang" }
    ]
  },
  {
    id: 2,
    tieuDe: "TRỤ SỞ: HỘI ĐỒNG NHÂN DÂN - UỶ BAN NHÂN DÂN",
    diaChi: "469 Tỉnh lộ 8, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.7950.793",
    nhanSu: [
      { chucVu: "Chủ tịch Hội đồng nhân dân", hoTen: "Nguyễn Văn Nghĩa" },
      { chucVu: "Phó Chủ tịch Hội đồng nhân dân", hoTen: "Đỗ Thị Thanh Thuý" },
      { chucVu: "Trưởng ban Văn hoá – Xã hội HĐND", hoTen: "Võ Thị Thanh Hằng" },
      { chucVu: "Trưởng ban Kinh tế - Ngân sách HĐND", hoTen: "Phan Võ Thuý Phượng" },
      { chucVu: "Chủ tịch UBND", hoTen: "Nguyễn Minh Tuấn" },
      { chucVu: "Phó Chủ tịch UBND đồng thời là Giám đốc Trung Tâm Phục vụ Hành Chính Công", hoTen: "Trần Tuấn Khanh" },
      { chucVu: "Phó Chủ tịch UBND", hoTen: "Đinh Hoài Phong" },
      { chucVu: "Chánh văn phòng HĐND – UBND", hoTen: "Lê Hoàng Nguyên" },
      { chucVu: "Trưởng phòng Kinh tế", hoTen: "Nguyễn Thị Đẹp" },
      { chucVu: "Trưởng phòng Văn hoá – Xã hội", hoTen: "Nguyễn Văn Thuận" }
    ]
  },
  {
    id: 3,
    tieuDe: "BAN CHỈ HUY CÔNG AN XÃ PHÚ HOÀ ĐÔNG",
    diaChi: "181 Tỉnh lộ 15, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.8927.048",
    nhanSu: [
      { chucVu: "Trưởng Công an", hoTen: "Nguyễn Văn Tâm" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Nguyễn Duy Nhất" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Nguyễn Ngọc Tú" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Nguyễn Thành Hôn" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Trần Phước Lộc" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Lê Văn Tuấn" }
    ]
  }
];