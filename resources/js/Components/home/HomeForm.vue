<template>
    <div class="w-full">
        <div class="mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden rounded-lg text-center">
            <BaseLabel for="home" size="xl">
                {{ $t('home.title_project') }}
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
    </div>
</template>