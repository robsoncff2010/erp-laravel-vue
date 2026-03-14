<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
    <!-- Barra de preferências -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end px-6 py-4">
      <PreferencesForm />
    </div>

    <!-- Logo -->
    <div>
      <a href="/">
      </a>
    </div>

    <!-- Conteúdo da página -->
    <main class="w-full">
      <slot />
    </main>
  </div>
</template>