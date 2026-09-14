function initNavToggle() {
    // Mengambil 2 elemen yang dibutuhkan
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    // Menjaga jika ditak ditemukan
    if (!toggleBtn || !nav) return;

    // Untuk membuka dan menutup navigasi
    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
    });
}

// Konfirmasi hapus 
function initHapusConfirm() {
    // Memasang event listener ke banyak tombol sekaligus
    document.querySelectorAll(".btn-hapus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            // Menvari baris tabel yang jadi induk tombol
            const row = btn.closest("tr");
            // Mengambil nama/judul dari baris
            const nama = row ? row.querySelector("td")?.textContent : "data ini";
            // Menampilkan dialog konfirmasi
            const yakin = confirm("Yakin ingin menghapus \"" + nama + "\"?");
            // Mengahpus baris dari tampilan
            if (yakin && row) {
                row.remove();
            }
        });
    });
}

function initTableFilter() {
    // Mengambil kotak input dari tabelnya
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    // agar aman jika dipanggil di halaman apapun
    if (!input || !table) return;

    // keyup=tabel langsung tersaring ketika pengguna mengetik
    input.addEventListener("keyup", function () {
        // mengambil kata kunci pencarian
        const keyword = input.value.toLowerCase();
        // mengulang setiap baris tabel 
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(function (row) {
            const teks = row.textContent.toLowerCase();
            row.style.display = teks.includes(keyword) ? "" : "none";
        });
    });
}

// Validasi form
function tampilkanError(input, pesan) {
    // memanggil fungsi lain untuk membersihkan pesan error lama sebelum menambah yang baru
    hapusError(input);
    // untuk membuat elemen html baru dari JS
    const span = document.createElement("span");
    // Memberi elemen span dengan class error
    span.className = "error";
    // Mengisi teks di dalam span dengan pesan error yang diberikan
    span.textContent = pesan;
    // untuk menyisipkan elemen baru ke posisi tertentu. afterend berarti tepat setelah elemen input
    input.insertAdjacentElement("afterend", span);
}

// Fungsi pembantu
function hapusError(input) {
    // mengambil elemen tepat setelah input di level yang sama 
    const next = input.nextElementSibling;
    // memeriksa apakah elemen berikutnya punya class error
    if (next && next.classList.contains("error")) {
        // jika ada class error maka akan dihapus.
        next.remove();
    }
}

function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        // menggunakan let karena nilai valid akan diubah menjadi false kalau ada field yang tidak valid saat pengecekan
        let valid = true;

        // mencari field yang namanya judul atau nama
        const judul = form.querySelector("[name='judul'], [name='nama']");
        // trim menghapus spasi kosong di awal dan akhir teks
        if (judul && judul.value.trim() === "") {
            tampilkanError(judul, "Field ini wajib diisi.");
            valid = false;
        } else if (judul) {
            hapusError(judul);
        }

        // form pengarang
        const pengarang = form.querySelector("[name='pengarang']");
        if (pengarang && pengarang.value.trim() === "") {
            tampilkanError(pengarang, "Pengarang wajib diisi.");
            valid = false;
        } else if (pengarang) {
            hapusError(pengarang);
        }

        // Untuk form tahun
        const tahun = form.querySelector("[name='tahun']");
        if (tahun) {
            // mengubah teks menjadi angka, 10 menandakan basis bilangan desimal
            const nilai = parseInt(tahun.value, 10);
            // Nan = not an number, nilai yang muncul kalau parseINT gagal merubah teks jadi angka
            if (isNaN(nilai) || nilai < 1900 || nilai > 2026) {
                tampilkanError(tahun, "Tahun harus di antara 1900-2026.");
                valid = false;
            } else {
                hapusError(tahun);
            }
        }

        // form stok
        const stok = form.querySelector("[name='stok']");
        if (stok) {
            const nilai = parseInt(stok.value, 10);
            if (isNaN(nilai) || nilai < 0) {
                tampilkanError(stok, "Stok tidak boleh negatif.");
                valid = false;
            } else {
                hapusError(stok);
            }
        }

        // mencegah submit jika tidak valid
        if (!valid) {
            e.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
});