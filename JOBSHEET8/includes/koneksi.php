<?php
$host = 'localhost';
$port = '5432'; // Port default PostgreSQL
$db   = 'simpus-mini';
$user = 'postgres'; // Sesuaikan dengan username PostgreSQL kamu
$pass = '12345678'; // Sesuaikan dengan password PostgreSQL kamu

try {
    $dsn = "pgsql:host=$host;port=$port;dbname=$db";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    die("Koneksi ke database gagal: " . $e->getMessage());
}