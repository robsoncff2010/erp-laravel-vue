<template>
  <select
    :value="modelValue"
    v-bind="$attrs"
    @change="$emit('update:modelValue', $event.target.value)"
    :class="[
      'border rounded px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
      'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300',
      'border-gray-300 dark:border-gray-700'
    ]"
  >
    <slot />
  </select>
</template>

<script setup>
  defineProps({
    modelValue: { type: String, default: '' }
  })
  defineEmits(['update:modelValue'])
</script>
