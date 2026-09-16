# **LAPORAN PRAKTIKUM JOBSHEET 5 - DESAIN PEMROGRAMAN WEB**
---
#### Nama  : Salsabila Keisha Ayu Setiadi
#### Kelas : TI-2F
#### NIM   : 254107020048
---

File JS dapat dilihat di : 
- [File app.js](assets/js/app.js)

## 1. Perubahan di HTML 💻
Pada file html sebelumnya hal yang diubah adalah :
- Mengubah kode untuk membuat menu hamburger yang awalnya menggunakan pasangan `<input type="checkbox">` + `<label>`. Menjadi `<button type="button" id="nav-toggle-btn" class="nav-toggle-label" aria-label="Menu">&#9776;</button>`
- Membuat div baru sebelum tabel :
```
<div class="search-box">
    <label for="search-input">Cari Judul Buku</label>
    <input type="text" id="search-input" placeholder="Ketik judul buku...">
</div>
```
- Memberi class btn-hapus pada tombol hapus.
```
<button type="button">Edit</button>
<button type="button" class="btn-hapus">Hapus</button>
```
- Memberi id pada form tambah di file Tambah Buku dan Tambah Anggota.

## 2. Important Things 🌠
Dari jobsheet ini terdapat beberapa hal baru tentang JavaScript yang bisa digunakan :

- **JavaScript adalah "Penggerak":** HTML itu kerangka dan CSS itu desain visual. JS berfungsi bikin web interaktif, dan diletakkan di baris paling bawah agar web tidak lemot saat pertama dimuat.

- **DOM adalah "Denah" Web:** Cara JS mengenali dan mencari bagian web (pakai querySelector) supaya isi elemennya bisa kita ubah-ubah.

- **Event Listener itu "Sensor":** Perintah untuk merespon aksi user. Kalau tombol diklik atau keyboard diketik, web akan langsung memberikan reaksi.

- **Manipulasi Class (Saklar CSS):** Cara paling praktis untuk ganti tampilan secara instan (misal menyembunyikan atau memunculkan menu), ibarat menyalakan/mematikan saklar lampu.

- **Guard Clause sebagai "Pengaman":** Kode pencegah error yang memastikan sebuah elemen benar-benar ada di halaman sebelum JS mengeksekusi perintah.

- **Validasi Hanya untuk Kenyamanan:** Peringatan salah input di form (seperti lupa pakai "@") murni untuk memandu user, bukan sistem keamanan data. Keamanan sesungguhnya tetap ada di server.


## 3. Modifikasi 🖌️


## 4. Kesimpulan ✒️
Kesimpulan dari praktikum Jobsheet 5 ini adalah JavaScript berfungsi sebagai "otak" yang menggerakkan interaktivitas web melalui manipulasi DOM dan event listener, bekerja secara terpisah dari kerangka HTML dan desain CSS. Selain itu, materi ini menekankan pentingnya menulis kode yang aman dengan guard clause serta memahami bahwa validasi input dari sisi pengguna murni untuk kenyamanan, bukan sebagai sistem keamanan utama.

