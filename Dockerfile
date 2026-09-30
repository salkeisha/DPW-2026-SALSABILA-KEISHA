# 1. Gunakan image resmi PHP dengan server Apache
FROM php:8.2-apache

# 2. Install dependensi sistem dan driver PostgreSQL (pdo_pgsql & pgsql)
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql

# 3. Salin semua file dari folder lokal Anda ke folder server Apache
COPY . /var/www/html/

# 4. Aktifkan mod_rewrite Apache (berguna jika proyek Anda memakai routing)
RUN a2enmod rewrite

# 5. Buka port 80 untuk lalu lintas web
EXPOSE 80