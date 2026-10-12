/**
 * Mengambil & merender Daftar Tontonan Film/Series dari data/film.json
 */
async function muatDaftarTontonan() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    if (loading) loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Mengambil data langsung dari data/film.json
        const res = await fetch("../data/film.json");
        if (!res.ok) {
            throw new Error(`Gagal memuat film.json (Status: ${res.status})`);
        }

        const daftarFilm = await res.json();

        if (daftarFilm.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#64748b;">Belum ada riwayat tontonan.</td></tr>`;
            return;
        }

        daftarFilm.forEach(function (item) {
            const tr = document.createElement("tr");

            // Menentukan warna badge berdasarkan tipe
            const tipe = item.tipe || "Movie";
            let badgeClass = "badge-movie";
            if (tipe.toLowerCase() === "series") badgeClass = "badge-series";
            if (tipe.toLowerCase() === "anime") badgeClass = "badge-anime";

            tr.innerHTML = `
                <td><strong>${item.judul}</strong></td>
                <td><span class="badge ${badgeClass}">${tipe}</span></td>
                <td>${item.sutradara}</td>
                <td>${item.tahun}</td>
                <td><span class="rating-pill">★ ${item.rating}/10</span></td>
                <td>${item.platform || "-"}</td>
                <td>
                    <button type="button" class="btn-edit">Edit</button>
                    <button type="button" class="btn-hapus">Hapus</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

    } catch (err) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; color: #ef4444; padding: 1.5rem;">
                    ⚠️ Gagal memuat data: ${err.message}<br>
                    <small style="color: #64748b;">Pastikan file berada di <code>data/film.json</code> dan dibuka lewat Live Server.</small>
                </td>
            </tr>
        `;
    } finally {
        if (loading) loading.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", muatDaftarTontonan);