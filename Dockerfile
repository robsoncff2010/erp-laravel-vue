FROM php:8.5-fpm

# Dependências do PHP
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev zip unzip libicu-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd intl

# Instalar Node.js + npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html