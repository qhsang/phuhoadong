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
    tieuDe: "ĐẢNG UỶ- UỶ BAN MTTQ VIỆT NAM XÃ PHÚ HOÀ ĐÔNG",
    diaChi: "463 Tỉnh lộ 15, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.8927.750",
    nhanSu: [
      { chucVu: "Bí thư Đảng uỷ xã", hoTen: "Nguyễn Văn Nghĩa" },
      { chucVu: "Phó Bí Thư Thường trực Đảng uỷ xã", hoTen: "Lê Thị Ánh Tuyết" },
      { chucVu: "UVBTV/Trưởng Ban Xây dựng Đảng Đảng uỷ xã", hoTen: "Võ Thị Thanh Hằng" },
      { chucVu: "UVBTV/Chủ nhiệm UBKT Đảng uỷ xã", hoTen: "Phan Võ Thuý Phượng" },
      { chucVu: "UVBTV/Chủ tịch Uỷ ban MTTQ Việt Nam xã", hoTen: "Nguyễn Thị Thuận" },
      { chucVu: "UVBTV/Chỉ huy trưởng Ban CHQS xã", hoTen: "Lê Văn Ty" },
      { chucVu: "ĐUV/Chánh Văn phòng Đảng uỷ xã", hoTen: "Lê Thị Minh Đan" },
      { chucVu: "ĐUV/PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Hội Liên hiệp phụ nữ xã", hoTen: "Trần Thị Thanh Huyền" },
      { chucVu: "ĐUV/PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Hội Cựu Chiến binh xã", hoTen: "Lương Đức Toản" },
      { chucVu: "ĐUV/PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Hội Nông dân xã", hoTen: "Trương Minh Phương" },
      { chucVu: "ĐUV/PCT. Uỷ ban MTTQ đồng thời là Bí Thư Đoàn xã", hoTen: "Trần Đỗ Xuân Thương" },
      { chucVu: "ĐUV/PCT. Uỷ ban MTTQ đồng thời là Chủ tịch Công đoàn xã", hoTen: "Nguyễn Huỳnh Quang" }
    ]
  },
  {
    id: 2,
    tieuDe: "HỘI ĐỒNG NHÂN DÂN – UỶ BAN NHÂN DÂN (Trung tâm phục vụ hành chính công)",
    diaChi: "469 Tỉnh lộ 8, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.7950.793",
    nhanSu: [
      { chucVu: "Bí thư Đảng uỷ/Chủ tịch Hội đồng nhân dân xã", hoTen: "Nguyễn Văn Nghĩa" },
      { chucVu: "UVBTV/Phó Chủ tịch Hội đồng nhân dân xã", hoTen: "Đỗ Thị Thanh Thuý" },
      { chucVu: "UVBTV/Trưởng ban Văn hoá – Xã hội HĐND xã", hoTen: "Võ Thị Thanh Hằng" },
      { chucVu: "UVBTV/Trưởng ban Kinh tế - Ngân sách HĐND xã", hoTen: "Phan Võ Thuý Phượng" },
      { chucVu: "Phó bí thư/Chủ tịch UBND xã", hoTen: "Nguyễn Minh Tuấn" },
      { chucVu: "UVBTV/Phó Chủ tịch UBND đồng thời là Giám đốc Trung Tâm Phục vụ Hành Chính Công", hoTen: "Trần Tuấn Khanh" },
      { chucVu: "ĐUV/Phó Chủ tịch UBND", hoTen: "Đinh Hoài Phong" },
      { chucVu: "ĐUV/Trưởng phòng Kinh tế", hoTen: "Nguyễn Thị Đẹp" },
      { chucVu: "ĐUV/Trưởng phòng Văn hoá – Xã hội", hoTen: "Nguyễn Văn Thuận" },
      { chucVu: "Chánh văn phòng HĐND – UBND", hoTen: "Lê Hoàng Nguyên" }
    ]
  },
  {
    id: 3,
    tieuDe: "BAN CHỈ HUY CÔNG AN XÃ PHÚ HOÀ ĐÔNG",
    diaChi: "181 Tỉnh lộ 15, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.8927.048",
    nhanSu: [
      { chucVu: "UVBTV/Trưởng Công an xã", hoTen: "Nguyễn Văn Tâm" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Nguyễn Duy Nhất" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Nguyễn Ngọc Tú" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Nguyễn Thành Hôn" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Trần Phước Lộc" },
      { chucVu: "Phó Trưởng Công an", hoTen: "Lê Văn Tuấn" }
    ]
  }
];