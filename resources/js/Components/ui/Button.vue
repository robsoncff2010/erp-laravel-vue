<template>
  <component
    :is    = "href ? 'a' : 'button'"
    :href  = "href"
    :type  = "href ? null : type"
    :class = "['w-full px-4 py-2 rounded font-semibold focus:outline-none', variantClass]"
    @click = "$emit('click')">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type   : { type: String, default: 'button' },
  variant: { type: String, default: 'primary' },
  href   : { type: String, default: null }
});

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-indigo-600 text-white hover:bg-indigo-500 transition-colors';
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:hover:bg-white transition-colors';
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-500 transition-colors';
    default:
      return 'bg-gray-700 text-white transition-colors';
  }
});
</script>