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