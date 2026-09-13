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