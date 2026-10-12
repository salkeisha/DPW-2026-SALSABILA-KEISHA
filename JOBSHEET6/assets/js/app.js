/**
 * 1. Toggle Sidebar Mobile (Off-Canvas Drawer)
 */
function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const sidebar = document.querySelector("header.sidebar");
    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        sidebar.classList.toggle("nav-open");
    });

    document.addEventListener("click", function (e) {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target) && sidebar.classList.contains("nav-open")) {
            sidebar.classList.remove("nav-open");
        }
    });
}

/**
 * 2. Konfirmasi & Hapus Baris Tabel
 */
function initHapusConfirm() {
    document.addEventListener("click", function (e) {
        const btn = e.target.closest(".btn-hapus");
        if (!btn) return;

        const row = btn.closest("tr");
        const judul = row ? (row.querySelector("td strong")?.textContent || row.querySelector("td")?.textContent) : "item ini";
        const yakin = confirm(`Yakin ingin menghapus "${judul}" dari daftar?`);
        if (yakin && row) {
            row.style.transition = "opacity 0.3s";
            row.style.opacity = "0";
            setTimeout(() => row.remove(), 300);
        }
    });
}

/**
 * 3. Filter Pencarian Tabel Real-Time
 */
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    if (!input || !table) return;

    input.addEventListener("input", function () {
        const keyword = input.value.trim().toLowerCase();
        const rows = table.querySelectorAll("tbody tr");

        rows.forEach(function (row) {
            if (row.querySelector("td[colspan]")) return;

            const teks = row.textContent.toLowerCase();
            row.style.display = teks.includes(keyword) ? "" : "none";
        });
    });
}

/**
 * 4. Helper Pesan Error Validasi
 */
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

/**
 * 5. Validasi Form Tambah Tontonan & Review
 */
function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let valid = true;

        // Validasi Judul
        const judul = form.querySelector("[name='judul']");
        if (judul && judul.value.trim() === "") {
            tampilkanError(judul, "Judul wajib diisi.");
            valid = false;
        } else if (judul) {
            hapusError(judul);
        }

        // Validasi Sutradara (khusus form tontonan)
        const sutradara = form.querySelector("[name='sutradara']");
        if (sutradara && sutradara.value.trim() === "") {
            tampilkanError(sutradara, "Nama sutradara/kreator wajib diisi.");
            valid = false;
        } else if (sutradara) {
            hapusError(sutradara);
        }

        // Validasi Tahun (khusus form tontonan)
        const tahun = form.querySelector("[name='tahun']");
        if (tahun) {
            const val = parseInt(tahun.value, 10);
            if (isNaN(val) || val < 1900 || val > 2026) {
                tampilkanError(tahun, "Tahun harus antara 1900 - 2026.");
                valid = false;
            } else {
                hapusError(tahun);
            }
        }

        // Validasi Rating (khusus form tontonan)
        const rating = form.querySelector("[name='rating']");
        if (rating) {
            const val = parseFloat(rating.value);
            if (isNaN(val) || val < 1 || val > 10) {
                tampilkanError(rating, "Rating harus berada di antara 1.0 sampai 10.0.");
                valid = false;
            } else {
                hapusError(rating);
            }
        }

        if (!valid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            alert("Data berhasil disimpan!");
            form.reset();
        }
    });
}

/**
 * 6. Mengisi Kartu Statistik Beranda Otomatis dari data/film.json & data/review.json
 */
async function muatStatistikBeranda() {
    const statsGrid = document.querySelector("section.stats-grid");
    if (!statsGrid) return; // Hanya dijalankan di index.html

    try {
        // Ambil data film
        const resFilm = await fetch("data/film.json");
        const dataFilm = resFilm.ok ? await resFilm.json() : [];

        // Ambil data review
        const resReview = await fetch("data/review.json");
        const dataReview = resReview.ok ? await resReview.json() : [];

        // Hitung statistik
        const total = dataFilm.length;
        const totalMovie = dataFilm.filter(item => (item.tipe || "").toLowerCase() === "movie").length;
        const totalSeries = dataFilm.filter(item => (item.tipe || "").toLowerCase() === "series").length;
        const totalReview = dataReview.length;

        // Render angka ke kartu
        const articles = statsGrid.querySelectorAll("article p");
        if (articles.length >= 4) {
            articles[0].textContent = total;
            articles[1].textContent = totalMovie;
            articles[2].textContent = totalSeries;
            articles[3].textContent = totalReview;
        }
    } catch (err) {
        console.warn("Gagal menghitung statistik otomatis:", err);
    }
}

// Inisialisasi Event Listener
document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
    muatStatistikBeranda();
});