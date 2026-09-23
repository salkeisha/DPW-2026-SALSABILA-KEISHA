<?php
$page_title = "Tambah Teman Nobar";
include __DIR__ . '/../includes/header.php';

$flash = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);
?>

<section>
    <h2>Tambah Teman Nobar</h2>

    <?php if ($flash): ?>
        <p class="flash flash-<?php echo $flash['type']; ?>"><?php echo $flash['pesan']; ?></p>
    <?php endif; ?>

    <form id="form-tambah" method="post" action="proses_tambah_teman.php">
        <p>
            <label for="nama">Nama Teman</label><br>
            <input type="text" id="nama" name="nama" required>
        </p>
        <p>
            <label for="platform_favorit">Platform Favorit</label><br>
            <select id="platform_favorit" name="platform_favorit">
                <option value="Netflix">Netflix</option>
                <option value="Cinema">Cinema / Bioskop</option>
                <option value="Disney+">Disney+</option>
                <option value="Prime Video">Prime Video</option>
                <option value="Discord/PC">Discord / PC</option>
            </select>
        </p>
        <p>
            <label for="genre_favorit">Genre Favorit</label><br>
            <input type="text" id="genre_favorit" name="genre_favorit" placeholder="Contoh: Horror, Thriller">
        </p>
        <p>
            <label for="kontak">Kontak (No. WA / Discord)</label><br>
            <input type="text" id="kontak" name="kontak" placeholder="Contoh: 08123456789 / @username" required>
        </p>
        <p>
            <button type="submit" class="btn btn-primary">Simpan Teman</button>
            <a href="daftar_teman.php" class="btn btn-secondary">Batal</a>
        </p>
    </form>
</section>

<?php include __DIR__ . '/../includes/footer.php'; ?>