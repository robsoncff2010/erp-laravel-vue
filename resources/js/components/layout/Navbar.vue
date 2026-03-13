<template>
  <div>
    <nav class="p-4 bg-gray-800 text-white">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/produtos">Produtos</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
