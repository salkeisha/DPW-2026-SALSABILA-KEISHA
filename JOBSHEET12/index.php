<?php
$page_title = "Beranda";
include __DIR__ . '/includes/header.php';
require __DIR__ . '/includes/koneksi.php';

$totalBuku = $pdo->query("SELECT COUNT(*) FROM buku")->fetchColumn();
$totalAnggota = $pdo->query("SELECT COUNT(*) FROM anggota")->fetchColumn();
$totalDipinjam = $pdo->query("SELECT COUNT(*) FROM peminjaman WHERE status = 'dipinjam'")->fetchColumn();
?>

<section>
    <h2>Selamat Datang di Sistem Perpustakaan Mini</h2>
    <p>Aplikasi sederhana untuk mengelola data buku dan anggota perpustakaan.</p>
</section>

<section style="display: block; width: 100%; background-color: #fff; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
    <h2 style="display: block; margin-bottom: 20px; color: #540505;">Ringkasan</h2>
    
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; width: 100%;">
        <article style="background-color: #eef4fa; border-radius: 8px; padding: 1.25rem; text-align: center;">
            <h3 style="font-size: 0.95rem; color: #55677a; margin: 0 0 0.5rem 0;">Total Buku</h3>
            <p style="font-size: 1.8rem; font-weight: 700; color: #af3a22; margin: 0;"><?php echo $totalBuku; ?></p>
        </article>
        
        <article style="background-color: #eef4fa; border-radius: 8px; padding: 1.25rem; text-align: center;">
            <h3 style="font-size: 0.95rem; color: #55677a; margin: 0 0 0.5rem 0;">Total Anggota</h3>
            <p style="font-size: 1.8rem; font-weight: 700; color: #af3a22; margin: 0;"><?php echo $totalAnggota; ?></p>
        </article>
        
        <article style="background-color: #eef4fa; border-radius: 8px; padding: 1.25rem; text-align: center;">
            <h3 style="font-size: 0.95rem; color: #55677a; margin: 0 0 0.5rem 0;">Sedang Dipinjam</h3>
            <p style="font-size: 1.8rem; font-weight: 700; color: #af3a22; margin: 0;"><?php echo $totalDipinjam; ?></p>
        </article>
    </div>
</section>
<?php include __DIR__ . '/includes/footer.php'; ?>