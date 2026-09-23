<?php
$page_title = "Beranda - CineLog";
include __DIR__ . '/includes/header.php';

// Mengambil data (kompatibel dengan $_SESSION atau bisa diganti query DB)
$filmList = $_SESSION['film_serial'] ?? [];
$temanList = $_SESSION['teman_nobar'] ?? [];

$totalFilm = count($filmList);
$totalTeman = count($temanList);
$sedangDitonton = count(array_filter($filmList, fn($f) => ($f['status'] ?? '') === 'Sedang Ditonton'));
$watchlist = count(array_filter($filmList, fn($f) => ($f['status'] ?? '') === 'Daftar Tunggu'));
?>

<!-- Banner Welcome & Quick Action -->
<section class="hero-banner">
    <div class="banner-content">
        <h2>Selamat Datang di <span>CineLog</span></h2>
        <p>Kelola daftar tontonan film, serial favorit, dan agenda nonton bareng teman dalam satu tempat.</p>
    </div>
    <div class="banner-actions">
        <a href="film/tambah.php" class="btn btn-primary">+ Tambah Film</a>
        <a href="temanNobar/tambah.php" class="btn btn-outline">+ Tambah Teman</a>
    </div>
</section>

<!-- Grid Ringkasan Statistik -->
<section class="dashboard-stats">
    <div class="stat-card">
        <div class="stat-data">
            <span class="stat-label">Total Koleksi</span>
            <strong class="stat-value"><?= $totalFilm ?></strong>
            <span class="stat-sub">Film & Serial</span>
        </div>
    </div>

    <div class="stat-card card-highlight">
        <div class="stat-data">
            <span class="stat-label">Sedang Ditonton</span>
            <strong class="stat-value"><?= $sedangDitonton ?></strong>
            <span class="stat-sub">Dalam Proses</span>
        </div>
    </div>

    <div class="stat-card">
        <div class="stat-data">
            <span class="stat-label">Watchlist</span>
            <strong class="stat-value"><?= $watchlist ?></strong>
            <span class="stat-sub">Daftar Tunggu</span>
        </div>
    </div>

    <div class="stat-card">
        <div class="stat-data">
            <span class="stat-label">Teman Nobar</span>
            <strong class="stat-value"><?= $totalTeman ?></strong>
            <span class="stat-sub">Partner Nonton</span>
        </div>
    </div>
</section>

<!-- Preview Data Terbaru -->
<section class="recent-watchlist">
    <div class="section-header">
        <h3>Tontonan Terbaru</h3>
        <a href="film/list.php" class="view-all-link">Lihat Semua →</a>
    </div>

    <div class="table-container">
        <table class="data-table">
            <thead>
                <tr>
                    <th>Judul</th>
                    <th>Genre</th>
                    <th>Platform</th>
                    <th>Rating</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($filmList)): ?>
                    <?php foreach (array_slice($filmList, -5) as $film): ?>
                        <tr>
                            <td><strong><?= htmlspecialchars($film['judul'] ?? '-') ?></strong></td>
                            <td><?= htmlspecialchars($film['genre'] ?? '-') ?></td>
                            <td><span class="tag-platform"><?= htmlspecialchars($film['platform'] ?? '-') ?></span></td>
                            <td>⭐ <?= htmlspecialchars($film['rating'] ?? '0') ?>/5</td>
                            <td><span class="status-badge <?= strtolower(str_replace(' ', '-', $film['status'] ?? '')) ?>"><?= htmlspecialchars($film['status'] ?? '-') ?></span></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="5" class="empty-state">Belum ada data tontonan. Silakan tambahkan film atau serial pertama kamu!</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>