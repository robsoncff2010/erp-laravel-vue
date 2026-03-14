<template>
  <input
    :id    = "id"
    :type  = "type"
    :value = "modelValue"
    @input = "$emit('update:modelValue', $event.target.value)"
    v-bind = "$attrs"
    :class = "inputClass"/>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  modelValue: { type: [String, Number, Boolean], default: '' }
});

const inputClass = computed(() => {
  if (props.type === 'checkbox') {
    return 'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500';
  }
  
  return 'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full';
});

</script>
