# **LAPORAN PRAKTIKUM JOBSHEET 6 - DESAIN PEMROGRAMAN WEB**
---
#### Nama  : Salsabila Keisha Ayu Setiadi
#### Kelas : TI-2F
#### NIM   : 254107020048
---

File JS dan JSON dapat dilihat di :
- [File app.js](assets/js/app.js)
- [File buku.js](assets/js/buku.js)
- [File anggota.js](assets/js/anggota.js)
- [File anggota.json](data/anggota.json)
- [File buku.json](data/buku.json)

## 1. Perubahan di HTML 💻
Pada file html sebelumnya hal yang diubah adalah :
- Bagian tbody yang dikosongkan. Karena bagian data diisi menggunakan JSON.
- Meletakkan elemen <p> di antara kolom pencarian dan tabel.
```
<p id="loading-indicator" style="display:none;">Memuat data...</p>
```
- Merubah urutan tag script. Sebelumnya hanya ada script yang menghubungkan `ke app.js` saja, sekarang menghubungkan juga ke `buku.js`. Dengan urutan script ke app.js diletakkan terlebih dahulu sebelum ke buku.js.
```
<script src="../assets/js/app.js"></script>
<script src="../assets/js/buku.js"></script>
```

## 2. Important Things 🌠
Dari jobsheet ini terdapat beberapa hal baru tentang JavaScript yang bisa digunakan :

- `fetch()` butuh waktu nunggu. Ternyata pas ngambil data pakai fetch(), datanya nggak langsung muncul detik itu juga. Jadi, kodenya wajib dikasih await (di dalam fungsi async) biar programnya "sabar menunggu" datanya beneran kekumpul, nggak langsung jalan ke baris kode berikutnya.

- Wajib cek res.ok manual. Kalau misal file yang mau diambil nggak ketemu, fetch() itu nggak otomatis menganggap kodenya error. Harus tambahin pengecekan manual pakai res.ok buat mastiin datanya bener-bener sukses keambil.

- Penyelamat web dari blank (try/catch/finally). Blok kode ini penting banget buat jaga-jaga. Kalau tiba-tiba koneksi putus atau gagal ambil data, webnya nggak bakal langsung rusak atau blank putih. Sebaliknya, program bakal nampilin pesan error yang rapi, jadi pengguna nggak bingung.

- Trik untuk elemen dinamis (Event Delegation). Kalau ada elemen HTML yang baru aja dibuat dari hasil fetch, kita nggak bisa langsung pasang perintah klik (listener) di elemen itu. Solusinya, aku harus "nitipin" perintah tersebut di elemen induknya yang memang udah ada dari awal, biar elemen baru ini tetap bisa merespon pas diklik.

- Nggak bisa buka file biasa (wajib pakai local server). Fungsi `fetch()` nggak mau merespon kalau cuma buka file HTML lewat double-click biasa (di URL tertulis file://). Jadi setiap ngerjain ini, webnya wajib dijalankan lewat server lokal/live server.


## 3. Modifikasi 🖌️


## 4. Kesimpulan ✒️
Kesimpulan dari praktikum Jobsheet 6 ini adalah JavaScript sangat penting untuk membuat halaman web menjadi hidup dan interaktif melalui manipulasi DOM. Selain itu, saat menarik data secara dinamis dengan `fetch()`, kodenya tidak bisa asal dijalankan; kita wajib menggunakan local server, memakai perintah await untuk sabar menunggu data masuk, serta selalu menerapkan `try/catch` agar web tidak langsung blank saat terjadi gangguan jaringan.

