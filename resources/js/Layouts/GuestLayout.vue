<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
    <div class="fixed top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end px-6 py-4">
      <BasePreferencesForm />
    </div>

    <div>
      <a href="/">
        <BaseApplicationLogo />
      </a>
    </div>

    <main>
      <slot />
    </main>
  </div>
</template>