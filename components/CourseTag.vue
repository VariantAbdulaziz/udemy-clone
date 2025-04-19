<template>
  <UButton
    variant="ghost"
    class="border border-gray-900 rounded py-2 px-4 mr-2 mb-2 hover:bg-gray-100 transition-colors"
  >
    {{ text }}
  </UButton>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
