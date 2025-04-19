<template>
  <section class="bg-white p-4 border">
    <h2 class="text-lg font-bold mb-4">What you'll learn</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4">
      <div v-for="(item, i) in items" :key="i" class="flex">
        <UIcon
          name="i-heroicons-check"
          class="mt-1 mr-4 text-gray-600 flex-shrink-0"
        />
        <span class="text-[#16161D] text-sm">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>
