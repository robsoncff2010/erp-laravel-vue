<template>
  <div class="min-h-screen flex flex-col justify-center items-center px-6 py-4 bg-gray-100 dark:bg-gray-900">
    <div class="fixed top-0 max-w-7xl mx-auto w-full flex justify-end px-6 py-4">
      <BasePreferencesForm />
    </div>

    <div>
      <a href="/">
        <BaseApplicationLogo />
      </a>
    </div>

    <main class="max-w-7xl mx-auto w-full flex justify-center">
      <slot />
    </main>
  </div>
</template>
