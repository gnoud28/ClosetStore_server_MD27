CREATE TABLE Users (
    maND INT AUTO_INCREMENT PRIMARY KEY ,
    tenND VARCHAR(255),
    MatKhauND VARCHAR(255),
    SDTND VARCHAR(255),
    DiachiND VARCHAR(255),
    TuoiND INT,
    Email VARCHAR(255),
    HinhAnhND VARCHAR(255)
);

CREATE TABLE LoaiSanPham
(
    MaLoai INT AUTO_INCREMENT PRIMARY KEY ,
    TenLoai VARCHAR(255),
    HinhanhLSP VARCHAR(255)
);

CREATE TABLE NhanHang
(
    MaNH INT AUTO_INCREMENT PRIMARY KEY ,
    TenNH VARCHAR(255), 
    ThongtinNH VARCHAR(255)
);

CREATE TABLE SanPham
(
    maSP INT AUTO_INCREMENT PRIMARY KEY,
    TenSP VARCHAR(100),
    GiaSP INT ,
    SizeSP INT,
    ColorSP VARCHAR(100),
    HinhanhSP VARCHAR(100),
    Mota VARCHAR(100),
    MaLoai INT,
    SoLuong INT,
    MaNH INT,
    FOREIGN KEY (MaLoai) REFERENCES LoaiSanPham(MaLoai),
    FOREIGN KEY (MaNH) REFERENCES NhanHang(MaNH)
);


CREATE TABLE DonHang 
(
    MaDH INT AUTO_INCREMENT PRIMARY KEY,
    maND INT,
    tenND VARCHAR(100),
    DiaChi VARCHAR(100),
    Sdt INT ,
    Email VARCHAR(100),
    SoLuong VARCHAR(100),
    TongTien INT,
    TrangThai VARCHAR(100), 
    NgayTao DATE,
    FOREIGN KEY (maND) REFERENCES Users(maND)
);

CREATE TABLE GioHang 
(
    MaSPGH INT AUTO_INCREMENT PRIMARY KEY,
    maND INT,
    TenSPGH VARCHAR(100),
    GiaSPGH INT,
    SizeSPGH INT,
    ColorSPGH VARCHAR(100),
    HinhanhSPGH VARCHAR(100),
    SoLuongSPGH INT,
    FOREIGN KEY (maND) REFERENCES Users(maND)
);