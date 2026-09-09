# **LAPORAN PRAKTIKUM JOBSHEET 3 - DESAIN PEMROGRAMAN WEB**
---
#### Nama  : Salsabila Keisha Ayu Setiadi
#### Kelas : TI-2F
#### NIM   : 254107020048
---

File CSS dapat dilihat di : [assets/css/style.css](asstes/css/style.css)

## 1. Perubahan di HTML 💻
Pada file html sebelumnya hal yang diubah adalah :
- Menambah `<meta name="viewport">` di semua halaman.
- Menambah Navbar: hamburger menu memakai teknik checkbox hack murni CSS (input`[type=checkbox]` + label), aktif di layar ≤480px.
- Tabel dibungkus `<div class="table-responsive">` agar bisa di-scroll horizontal di layar sempit.
- Menambah media query di style.css: grid kartu statistik 3 → 2 → 1 kolom mengikuti breakpoint tablet/mobile.

## 2. Important Things 🌠
Dari jobsheet ini terdapat beberapa hal baru tentang CSS yang bisa digunakan untuk style file html.

- `<meta name="viewport">` merupakan syarat wajib jika mau membuat **responsive design**.
- CSS tetap bisa dibuat interaktif tanpa JS dengan memanfaatkan pseudo-class state bawaan.
- `overflow-x: auto` merupakan pola umum untuk menangani tabel/konten lebar di layar sempit tanpa merusak tata letak halaman lain.

## 3. Modifikasi 🖌️
1. Menambahkan breakpoint baru dengan `main { max-width: 1000px; }` agar dapat dilihat di layar yang sangat lebar.
2. Mengubah breakpoint tablet ke 900px.

## 4. Kesimpulan ✒️
Kesimpulan dari praktikum Jobsheet 3 ini adalah penerapan Responsive Web Design sangat penting agar layout web bisa menyesuaikan dengan berbagai ukuran layar. Pembuatan desain ini bergantung pada tag `<meta name="viewport">` sebagai dasar utamanya dan penggunaan Media Queries di CSS untuk mengatur breakpoint. Praktikum ini juga menunjukkan kalau fitur interaktif bisa dibuat menggunakan CSS murni saja tanpa bantuan JavaScript. Contoh penerapannya adalah pembuatan navigasi hamburger menu dengan teknik checkbox hack dan penanganan tabel responsif, sehingga tampilan UI/UX tetap rapi saat diakses dari layar yang kecil.

