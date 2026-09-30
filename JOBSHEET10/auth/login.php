<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
if (isset($_SESSION['user_id'])) {
    header('Location: ../index.php');
    exit;
}

$page_title = "Login";
include __DIR__ . '/../includes/header.php';

$flash = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);
?>
<main>
    <section>
        <h2 style="text-align: center; margin-bottom: 1.5rem;">Login Petugas</h2>

        <?php if ($flash): ?>
            <p class="flash flash-<?php echo $flash['type']; ?>"><?php echo $flash['pesan']; ?></p>
        <?php endif; ?>

        <form method="post" action="proses_login.php">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>

            <button type="submit">Masuk</button>
        </form>

        <p style="text-align: center; margin-top: 1rem;">
            Belum punya akun? <a href="register.php">Daftar di sini</a>
        </p>
    </section>
</main>
<?php include __DIR__ . '/../includes/footer.php'; ?>