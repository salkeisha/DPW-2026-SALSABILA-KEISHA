/**
 * Mengambil & merender Daftar Review dari data/review.json
 */
async function muatDaftarReview() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    if (loading) loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Mengambil data langsung dari data/review.json
        const res = await fetch("../data/review.json");
        if (!res.ok) {
            throw new Error(`Gagal memuat review.json (Status: ${res.status})`);
        }

        const daftarReview = await res.json();

        if (daftarReview.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#64748b;">Belum ada ulasan yang ditulis.</td></tr>`;
            return;
        }

        daftarReview.forEach(function (rev) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><code>${rev.id}</code></td>
                <td><strong>${rev.judul}</strong></td>
                <td>${rev.catatan}</td>
                <td>${rev.tanggal}</td>
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
                <td colspan="5" style="text-align: center; color: #ef4444; padding: 1.5rem;">
                    ⚠️ Gagal memuat ulasan: ${err.message}<br>
                    <small style="color: #64748b;">Pastikan file berada di <code>data/review.json</code> dan dibuka lewat Live Server.</small>
                </td>
            </tr>
        `;
    } finally {
        if (loading) loading.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", muatDaftarReview);