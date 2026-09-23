<?php
$page_title = "Daftar Teman Nobar - CineLog";
include __DIR__ . '/../includes/header.php';
include __DIR__ .'/../includes/koneksi.php';

$temanList = $_SESSION['teman_nobar'] ?? [];
?>

<section class="content-container">
    <div class="section-header">
        <div>
            <h2>Daftar Teman Nobar</h2>
            <p>Daftar partner nonton beserta platform dan genre favoritnya.</p>
        </div>
        <a href="tambah.php" class="btn btn-primary">+ Tambah Teman</a>
    </div>

    <div class="table-container">
        <table class="data-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Platform Favorit</th>
                    <th>Genre Favorit</th>
                    <th>Kontak</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($temanList)): ?>
                    <?php foreach ($temanList as $index => $teman): ?>
                        <tr>
                            <td><?= $index + 1 ?></td>
                            <td><strong><?= htmlspecialchars($teman['nama'] ?? '-') ?></strong></td>
                            <td><span class="tag-platform"><?= htmlspecialchars($teman['platform_favorit'] ?? '-') ?></span></td>
                            <td><?= htmlspecialchars($teman['genre_favorit'] ?? '-') ?></td>
                            <td><?= htmlspecialchars($teman['kontak'] ?? '-') ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="5" class="empty-state">Belum ada data teman nobar. Klik tombol di atas untuk menambahkan!</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</section>

<?php include __DIR__ . '/../includes/footer.php'; ?>