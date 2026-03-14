# PHP
FROM php:8.5.2-fpm

# Dependências do PHP
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev zip unzip libicu-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd intl

# Instalar Node.js + npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.11.1 | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@11.11.1

# Criar diretórios necessários
RUN mkdir -p storage bootstrap/cache

# Ajustar permissões
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Composer com versão fixa
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html