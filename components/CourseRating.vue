<template>
  <div class="flex items-center">
    <span class="text-amber-700 font-bold mr-1">{{ rating.score }}</span>
    <div class="flex mr-1">
      <template v-for="i in 5" :key="i">
        <UIcon
          v-if="i <= Math.floor(rating.score)"
          name="i-heroicons-star-solid"
          class="text-amber-700 w-4 h-4"
        />
        <UIcon
          v-else-if="i - 0.5 <= rating.score"
          name="i-heroicons-star-half-solid"
          class="text-amber-700 w-4 h-4"
        />
        <UIcon v-else name="i-heroicons-star" class="text-amber-700 w-4 h-4" />
      </template>
    </div>
    <span class="text-sm text-[#b6b6b6]">({{ rating.count }} ratings)</span>
    <span v-if="students" class="text-sm text-[#b6b6b6] ml-2"
      >{{ students }} students</span
    >
  </div>
</template>

<script setup lang="ts">
import type { Rating } from "~/types/course";

defineProps<{
  rating: Rating;
  students?: number;
}>();
</script>
