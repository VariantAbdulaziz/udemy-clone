<template>
  <div class="relative">
    <div
      class="w-full py-8 bg-[#16161D] text-white"
      :class="{ 'pb-24': !isFixed }"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <div
            class="flex items-center text-base font-bold text-[#9abefb] mb-2"
          >
            <span class="cursor-pointer">Finance & Accounting</span>
            <span class="mx-1">/</span>
            <span class="cursor-pointer">Cryptocurrency & Blockchain </span>
            <span class="mx-1">/</span>
            <span class="cursor-pointer">Bitcoin</span>
          </div>
          <h1 class="text-3xl font-bold">{{ title }}</h1>
          <p class="text-lg my-2">{{ subtitle }}</p>

          <div class="flex flex-wrap items-center my-3">
            <CourseRating :rating="rating" :students="students" />
          </div>

          <div class="flex items-center text-sm">
            <span>Created by</span>
            <span class="ml-1 text-purple-300 underline cursor-pointer">{{
              instructor
            }}</span>
          </div>

          <div class="flex items-center text-sm mt-2">
            <div class="flex items-center mr-4">
              <UIcon name="i-heroicons-calendar" class="mr-1" />
              <span>Last updated {{ lastUpdated }}</span>
            </div>
            <div class="flex items-center mr-4">
              <UIcon name="i-heroicons-globe-alt" class="mr-1" />
              <span>{{ language }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isFixed"
      class="fixed top-0 left-0 bg-[#17141D] text-white right-0 z-10 shadow-sm shadow-[#2A2B3F] transition-transform duration-300 transform animate-slideDown"
      :class="{ 'translate-y-0': isFixed, '-translate-y-full': !isFixed }"
    >
      <div
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <div class="flex-1 flex flex-wrap flex-col">
          <h2 class="text-lg font-bold truncate">{{ title }}</h2>
          <CourseRating :rating="rating" :students="students" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Rating } from "~/types/course";

defineProps<{
  title: string;
  subtitle: string;
  rating: Rating;
  students: number;
  instructor: string;
  lastUpdated: string;
  language: string;
  price: string;
  isFixed: boolean;
}>();
</script>

<style scoped>
.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
