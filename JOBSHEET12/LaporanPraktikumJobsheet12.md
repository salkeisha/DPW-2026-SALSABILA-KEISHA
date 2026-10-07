# **LAPORAN PRAKTIKUM JOBSHEET 12 - DESAIN PEMROGRAMAN WEB**
---
#### Nama  : Salsabila Keisha Ayu Setiadi
#### Kelas : TI-2F
#### NIM   : 254107020048
---

## STRUKTUR FOLDER
```
jobsheet-12/
├── index.php                       
├── includes/
│   ├── header.php                    
│   └── ...                            
├── peminjaman/
│   ├── tambah.php, proses_tambah.php 
│   ├── kembali.php, proses_kembali.php 
│   └── riwayat.php                     
├── sql/
│   ├── 01_buku_anggota.sql
│   ├── 02_users.sql
│   └── 03_peminjaman.sql               
├── buku/, anggota/, auth/              
├── wireframe.md                    
├── security-checklist.md            
├── README.md
└── Dokumentasi/                          
```


## 1. Perubahan-perubahan 
- Skema & Relasi Database: Penambahan tabel peminjaman dengan foreign key (REFERENCES) yang menghubungkan tabel buku dan anggota (relasi many-to-many).

- Modul Peminjaman Baru: Penerapan database transaction (beginTransaction, commit, rollBack) dan penguncian baris (SELECT ... FOR UPDATE) untuk menangani pengurangan stok dan peminjaman secara aman.

- Modul Pengembalian Buku: Penanganan transaksi kebalikan untuk mengembalikan stok buku serta memperbarui status peminjaman.

- Modul Riwayat & Query JOIN: Penggunaan JOIN ... ON dan alias tabel untuk menampilkan riwayat peminjaman secara terstruktur.

- Sistem Keamanan (Defense in Depth): Proteksi bertingkat pada file pemrosesan melalui pengecekan method HTTP, token CSRF, dan guard autentikasi session (auth.php).

## 2. Important Things 🌠
Dari jobsheet ini terdapat beberapa hal baru tentang Database Transaction, Query JOIN, dan Security yang bisa digunakan :

1. Database Transaction: Memastikan serangkaian eksekusi kueri SQL (seperti pencatatan peminjaman dan pengurangan stok) berhasil atau gagal secara bersama-sama guna menjaga integritas data.

2. Penguncian Baris (SELECT ... FOR UPDATE): Mencegah race condition saat dua proses mencoba mengubah data/stok yang sama secara bersamaan.

3. Penggabungan Tabel (JOIN ... ON): Menggabungkan data dari tabel peminjaman, buku, dan anggota berdasarkan hubungan foreign key / primary key.

4. Penerapan Defense in Depth: Mengamankan alur transaksi dengan melapisi beberapa pertahanan sekaligus (pemeriksaan method HTTP, token CSRF, dan guard session).


## 3. Kesimpulan ✒️
Jobsheet 12 memberikan pemahaman komprehensif mengenai pentingnya pengelolaan transaksi relasional dan integritas data pada aplikasi berbasis web. Penggunaan database transaction dan SELECT ... FOR UPDATE terbukti krusial dalam mencegah data setengah-jadi dan penanganan race condition pada lingkungan multi-user. Selain itu, integrasi query JOIN serta penerapan keamanan defense in depth memastikan aplikasi dapat menyajikan data relasional secara lengkap sekaligus aman dari potensi celah akses.


