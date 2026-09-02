# **LAPORAN PRAKTIKUM JOBSHEET 2 - DESAIN PEMROGRAMAN WEB**
---
#### Nama  : Salsabila Keisha Ayu Setiadi
#### Kelas : TI-2F
#### NIM   : 254107020048
---

File CSS dapat dilihat di : [assets/css/style.css](asstes/css/style.css)

## 1. Perubahan di HTML 💻
Pada file html sebelumnya hanya perlu merubah link referensi tiap halaman untuk merujuk kepada file css. Untuk struktur di dalam file htmlnya tidak perlu diubah. Penambahan link referensi dilakukan dengan penambahan kode :

```
<link rel="stylesheet" href="assets/css/style.css">
```

## 2. CSS Style 🌠
Dari jobsheet ini terdapat beberapa hal baru tentang CSS yang bisa digunakan untuk style file html.

- CSS Reset : CSS Reset digunakan untuk ==menetralkan gaya bawaan== sehingga styling terlihat konsisten.
- Flexbox : Sistem tata letak 1 dimensi yang mengatur bagaimana elemen-elemen anak tersusun di dalam sebuah kotak pembungkus.
- Grid : Grid biasanya digunakan untuk layout 2 dimensi yang lebih kompleks seperti kartu statistik.

## 3. Modifikasi 🖌️
1. Merubah warna awal yaitu `#1d5b8a` menjadi `#530a0b`, menggunakan warna merah tua.
2. Menambah kolom keempat di grid kartu statistik,sehingga terdapat 4 kartu statistik.
3. Membuat tombol detail di antara edit dan hapus, lalu merubah warnanya agar sesuai. Hal ini dilakukan dengan merubah file html sehingga tiap tombol diberi class dan mereferensikan class tiap button di css nya agar memiliki warna yang berbeda.

### Sebelum dimodifikasi : 
![Beranda](<Screenshot 2026-09-02 222453.png>) <br>
![Daftar Buku](<Screenshot 2026-09-02 222502.png>) 

### Setelah dimodifikasi :
![Beranda](<Screenshot 2026-09-02 230137.png>) <br>
![Daftar Buku](<Screenshot 2026-09-02 230144.png>)

## 4. Kesimpulan ✒️
Kombinasi teknik CSS modern mempermudah pembuatan layout web yang rapi dan terstruktur. Langkah seperti CSS Reset terbukti krusial untuk menyeragamkan tampilan bawaan antar browser. Untuk tata letaknya, penggunaan Flexbox sangat efisien dalam meratakan elemen satu dimensi seperti navbar, sedangkan CSS Grid jauh lebih praktis untuk membagi ruang secara presisi pada elemen dua dimensi seperti kumpulan kartu statistik. Selain urusan tata letak, penambahan styling visual pada tabel dan form membuktikan bagaimana CSS berperan besar dalam meningkatkan kenyamanan baca pengguna (UI/UX). Terakhir, dari penyelesaian masalah pada tombol aksi di tabel, terbukti bahwa penggunaan class selector yang spesifik jauh lebih aman dan direkomendasikan ketimbang mengandalkan urutan elemen bawaan (pseudo-class), sehingga desain web tidak rusak saat ada penambahan atau perubahan elemen di masa depan.


