<template>
    <div class="w-full mx-auto mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg text-center">
        <BaseLabel for="home" size="xl">
            Projeto de ERP com Laravel(12) e Vue(pinia, vite) - Estudos
        </BaseLabel>
    </div>
    <div class="mt-6">
        <nav class="flex items-center justify-end gap-4">
            <BaseButton href="/login" variant="secondary" class="text-center">
                {{ $t('home.login') }}
            </BaseButton>
            <BaseButton href="/register" variant="primary" class="text-center">
                {{ $t('home.register') }}
            </BaseButton>
        </nav>
    </div>
</template>