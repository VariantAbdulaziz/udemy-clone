<template>
  <div>
    <div class="flex items-center">
      <span class="text-3xl font-bold">{{ currentPrice }}</span>
      <span
        v-if="originalPrice"
        class="text-lg line-through ml-3 text-[#b6b6b6]"
        >{{ originalPrice }}</span
      >
      <span v-if="discount" class="ml-3 text-lg text-[#b6b6b6]"
        >{{ discount }}% off</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPrice: string;
  originalPrice?: string;
  discount?: number;
}>();
</script>
