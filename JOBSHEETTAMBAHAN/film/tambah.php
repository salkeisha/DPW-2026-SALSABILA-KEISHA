<?php
$page_title = "Tambah Film / Serial";
include __DIR__ . '/../includes/header.php';

$flash = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);
?>

<section>
    <h2>Tambah Film / Serial</h2>

    <?php if ($flash): ?>
        <p class="flash flash-<?php echo $flash['type']; ?>"><?php echo $flash['pesan']; ?></p>
    <?php endif; ?>

    <form id="form-tambah" method="post" action="proses_tambah_film.php">
        <p>
            <label for="judul">Judul Film / Serial</label><br>
            <input type="text" id="judul" name="judul" required>
        </p>
        <p>
            <label for="genre">Genre</label><br>
            <input type="text" id="genre" name="genre" placeholder="Contoh: Action, Sci-Fi" required>
        </p>
        <p>
            <label for="platform">Platform</label><br>
            <select id="platform" name="platform">
                <option value="Netflix">Netflix</option>
                <option value="Cinema">Cinema / Bioskop</option>
                <option value="Disney+">Disney+</option>
                <option value="Prime Video">Prime Video</option>
                <option value="Lainnya">Lainnya</option>
            </select>
        </p>
        <p>
            <label for="rating">Rating (0.0 - 5.0)</label><br>
            <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" placeholder="Contoh: 4.5">
        </p>
        <p>
            <label for="status">Status Tontonan</label><br>
            <select id="status" name="status">
                <option value="Daftar Tunggu">Daftar Tunggu</option>
                <option value="Sedang Ditonton">Sedang Ditonton</option>
                <option value="Selesai">Selesai</option>
            </select>
        </p>
        <p>
            <label for="ulasan">Ulasan Singkat</label><br>
            <textarea id="ulasan" name="ulasan" rows="3" placeholder="Masukkan kesan atau ulasan singkat..."></textarea>
        </p>
        <p>
            <button type="submit" class="btn btn-primary">Simpan Film</button>
            <a href="daftar_film.php" class="btn btn-secondary">Batal</a>
        </p>
    </form>
</section>

<?php include __DIR__ . '/../includes/footer.php'; ?>