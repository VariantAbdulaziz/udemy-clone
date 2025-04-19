<template>
  <div
    class="bg-white shadow-card border border-[#F6F7F9] rounded-lg overflow-hidden transition-shadow hover:shadow-lg"
  >
    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
      <img
        :src="
          thumbnail || 'https://via.placeholder.com/640x360?text=Course+Image'
        "
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-4">
      <h3 class="font-bold text-base line-clamp-2 mb-1">{{ title }}</h3>
      <p class="text-sm text-[#b6b6b6] mb-1">{{ instructor }}</p>

      <CourseRating :rating="rating" />

      <div class="mt-2 flex items-center">
        <span class="font-bold">{{ formattedPrice }}</span>
        <span
          v-if="originalPrice"
          class="ml-2 text-sm line-through text-[#b6b6b6]"
        >
          {{ formattedOriginalPrice }}
        </span>
      </div>

      <span v-if="isBestseller" class="mt-2 inline-block">
        <CourseBadge text="Bestseller" type="bestseller" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Rating } from "~/types/course";
import { computed } from "vue";

const props = defineProps<{
  title: string;
  instructor: string;
  thumbnail?: string;
  rating: Rating;
  price: number;
  originalPrice?: number;
  isBestseller?: boolean;
}>();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(props.price);
});

const formattedOriginalPrice = computed(() => {
  if (!props.originalPrice) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(props.originalPrice);
});
</script>
