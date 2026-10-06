<?php
require __DIR__ . '/../includes/auth.php';
$page_title = "Tambah Buku";
include __DIR__ . '/../includes/header.php';

$flash = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);
?>
<main>
    <section>
        <h2 style="text-align: center; margin-bottom: 1.5rem;">Tambah Buku</h2>

        <form action="proses_tambah.php" method="POST">
            <div class="form-group">
                <label for="judul">Judul Buku</label>
                <input type="text" id="judul" name="judul" required placeholder="Masukkan judul buku">
            </div>

            <div class="form-group">
                <label for="pengarang">Pengarang</label>
                <input type="text" id="pengarang" name="pengarang" required placeholder="Nama pengarang">
            </div>

            <div class="form-group">
                <label for="tahun_terbit">Tahun Terbit</label>
                <input type="number" id="tahun_terbit" name="tahun_terbit" required placeholder="Contoh: 2024">
            </div>

            <div class="form-group">
                <label for="isbn">ISBN</label>
                <input type="text" id="isbn" name="isbn" placeholder="Nomor ISBN">
            </div>

            <div class="form-group">
                <label for="stok">Stok</label>
                <input type="number" id="stok" name="stok" required min="0" placeholder="Jumlah stok">
            </div>

            <div class="form-group">
                <label for="kategori">Kategori</label>
                <select id="kategori" name="kategori" required>
                    <option value="">-- Pilih Kategori --</option>
                    <option value="Fiksi">Fiksi</option>
                    <option value="Non-Fiksi">Non-Fiksi</option>
                    <option value="Pelajaran">Pelajaran</option>
                </select>
            </div>

            <button type="submit" class="btn-submit">Simpan Buku</button>
        </form>
    </section>
</main>
<?php include __DIR__ . '/../includes/footer.php'; ?>