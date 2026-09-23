function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
    });
}

// Konfirmasi hapus data
function initHapusConfirm() {
    document.addEventListener("click", function (e) {
        const btn = e.target.closest(".btn-hapus");
        if (!btn) return;

        const row = btn.closest("tr");
        // Mengambil teks kolom kedua (biasanya kolom Judul / Nama)
        const nama = row ? row.querySelector("td:nth-child(2)")?.textContent.trim() : "data ini";
        const yakin = confirm("Yakin ingin menghapus \"" + nama + "\"?");
        if (yakin && row) {
            row.remove();
        }
    });
}

// Pencarian tabel
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-container table, .data-table");
    if (!input || !table) return;

    input.addEventListener("keyup", function () {
        const keyword = input.value.toLowerCase();
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(function (row) {
            const teks = row.textContent.toLowerCase();
            row.style.display = teks.includes(keyword) ? "" : "none";
        });
    });
}

// Helper validasi error
function tampilkanError(input, pesan) {
    hapusError(input);
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = pesan;
    input.insertAdjacentElement("afterend", span);
}

function hapusError(input) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error")) {
        next.remove();
    }
}

// Validasi Form CineLog (Handling Form Film & Form Teman)
function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let valid = true;

        // 1. Validasi Judul Film / Nama Teman
        const fieldUtama = form.querySelector("[name='judul'], [name='nama']");
        if (fieldUtama && fieldUtama.value.trim() === "") {
            const labelPesan = fieldUtama.name === "judul" ? "Judul film/serial wajib diisi." : "Nama teman wajib diisi.";
            tampilkanError(fieldUtama, labelPesan);
            valid = false;
        } else if (fieldUtama) {
            hapusError(fieldUtama);
        }

        // 2. Validasi Genre (Form Film)
        const genre = form.querySelector("[name='genre']");
        if (genre && genre.value.trim() === "") {
            tampilkanError(genre, "Genre wajib diisi.");
            valid = false;
        } else if (genre) {
            hapusError(genre);
        }

        // 3. Validasi Rating (Form Film) -> Rentang 0.0 - 5.0
        const rating = form.querySelector("[name='rating']");
        if (rating && rating.value.trim() !== "") {
            const nilaiRating = parseFloat(rating.value);
            if (isNaN(nilaiRating) || nilaiRating < 0 || nilaiRating > 5) {
                tampilkanError(rating, "Rating harus berada di antara 0.0 sampai 5.0.");
                valid = false;
            } else {
                hapusError(rating);
            }
        }

        // 4. Validasi Kontak (Form Teman)
        const kontak = form.querySelector("[name='kontak']");
        if (kontak && kontak.value.trim() === "") {
            tampilkanError(kontak, "Kontak wajib diisi.");
            valid = false;
        } else if (kontak) {
            hapusError(kontak);
        }

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