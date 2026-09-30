FROM php:8.2-apache

# Install extension pgsql & pdo_pgsql
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql

# Cukup copy SELURUH isi proyek ke folder Apache
COPY . /var/www/html/

RUN a2enmod rewrite

EXPOSE 80