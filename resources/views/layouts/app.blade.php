<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>{{ config('app.name', 'ERP Laravel') }}</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <div class="flex justify-end w-full px-6 py-4">
        <button 
            id="theme-toggle" 
            class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
            Alternar Tema
        </button>
    </div>

    <script>
        const btn = document.getElementById('theme-toggle');
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    </script>

    <body class="bg-gray-100 text-gray-900">
        {{ $slot }} <!-- Breeze usa slot para injetar conteúdo -->
    </body>
</html>
