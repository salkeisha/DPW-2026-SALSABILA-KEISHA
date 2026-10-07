<?php
$page_title = "Beranda";
include __DIR__ . '/includes/header.php';
require __DIR__ . '/includes/koneksi.php';

$totalBuku = $pdo->query("SELECT COUNT(*) FROM buku")->fetchColumn();
$totalAnggota = $pdo->query("SELECT COUNT(*) FROM anggota")->fetchColumn();
$totalDipinjam = $pdo->query("SELECT COUNT(*) FROM peminjaman WHERE status = 'dipinjam'")->fetchColumn();
?>
<section class="ringkasan-section">
    <h2 class="ringkasan-judul">Ringkasan</h2>
    <div class="card-container">
        <article class="card">
            <h3>Total Buku</h3>
            <p><?php echo $totalBuku; ?></p>
        </article>

        <article class="card">
            <h3>Total Anggota</h3>
            <p><?php echo $totalAnggota; ?></p>
        </article>

        <article class="card">
            <h3>Sedang Dipinjam</h3>
            <p><?php echo $totalDipinjam; // Sesuaikan dengan variabelmu ?></p>
        </article>
    </div>
</section>
<?php include __DIR__ . '/includes/footer.php'; ?>