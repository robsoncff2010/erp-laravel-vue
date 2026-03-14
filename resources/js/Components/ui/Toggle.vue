<template>
  <button
    type="button"
    :class="[
      modelValue ? 'bg-indigo-600' : 'bg-gray-300',
      'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none'
    ]"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      :class="[
        modelValue ? 'translate-x-6' : 'translate-x-1',
        'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
      ]"
    />
  </button>
</template>

<script setup>
  defineProps({
    modelValue: { type: Boolean, default: false }
  })
  defineEmits(['update:modelValue'])
</script>
