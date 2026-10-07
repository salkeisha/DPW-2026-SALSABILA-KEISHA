FROM php:8.2-apache

# Install driver PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql

# Copy HANYA isi folder JOBSHEET10 ke folder utama web Apache
COPY JOBSHEET12/ /var/www/html/

RUN a2enmod rewrite

EXPOSE 80