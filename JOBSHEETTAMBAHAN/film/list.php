<?php
$page_title = "Daftar Film & Serial - CineLog";
include __DIR__ . '/../includes/header.php';
include __DIR__ . '/../includes/koneksi.php';

$filmList = $_SESSION['film_serial'] ?? [];
?>

<section class="content-container">
    <div class="section-header">
        <div>
            <h2>Daftar Film & Serial</h2>
            <p>Kelola semua koleksi tontonan dan watchlist kamu.</p>
        </div>
        <a href="tambah.php" class="btn btn-primary">+ Tambah Film</a>
    </div>

    <div class="table-container">
        <table class="data-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Genre</th>
                    <th>Platform</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Ulasan</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($filmList)): ?>
                    <?php foreach ($filmList as $index => $film): ?>
                        <tr>
                            <td><?= $index + 1 ?></td>
                            <td><strong><?= htmlspecialchars($film['judul'] ?? '-') ?></strong></td>
                            <td><?= htmlspecialchars($film['genre'] ?? '-') ?></td>
                            <td><span class="tag-platform"><?= htmlspecialchars($film['platform'] ?? '-') ?></span></td>
                            <td>⭐ <?= htmlspecialchars($film['rating'] ?? '0') ?>/5</td>
                            <td>
                                <span class="status-badge <?= strtolower(str_replace(' ', '-', $film['status'] ?? '')) ?>">
                                    <?= htmlspecialchars($film['status'] ?? '-') ?>
                                </span>
                            </td>
                            <td><?= htmlspecialchars($film['ulasan'] ?? '-') ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="7" class="empty-state">Belum ada data film atau serial. Klik tombol di atas untuk menambahkan!</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</section>

<?php include __DIR__ . '/../includes/footer.php'; ?>