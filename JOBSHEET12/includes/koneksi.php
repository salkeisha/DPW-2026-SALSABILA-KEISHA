<?php
// Mengambil konfigurasi dari Environment Variables Render
$host = getenv('DB_HOST') ?: 'localhost';
$port = getenv('DB_PORT') ?: '5432';
$db   = getenv('DB_NAME');
$user = getenv('DB_USER');
$pass = getenv('DB_PASSWORD');

// String koneksi PostgreSQL dengan Mode SSL (Wajib untuk Supabase)
$dsn = "pgsql:host=$host;port=$port;dbname=$db;sslmode=require";

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
    // Jika menggunakan pg_connect bawaan native PHP:
    // $conn = pg_connect("host=$host port=$port dbname=$db user=$user password=$pass sslmode=require");
} catch (PDOException $e) {
    die("Koneksi ke database gagal: " . $e->getMessage());
}
?>