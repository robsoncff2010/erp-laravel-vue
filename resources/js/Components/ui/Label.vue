<template>
  <label
    :for   = "for"
    v-bind = "$attrs"
    :class  = "['block font-medium text-gray-700 dark:text-gray-300', sizeClass]">
    <slot />
  </label>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  for: { type: String, required: true },
  size: { type: String, default: 'sm' }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'lg':
      return 'text-lg'
    case 'xl':
      return 'text-xl'
    case '2xl':
      return 'text-2xl'
    default:
      return 'text-sm'
  }
})
</script>