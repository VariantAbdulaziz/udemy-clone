<template>
  <div class="flex items-center justify-between py-4 border-b last:border-b-0">
    <div class="flex gap-4">
      <img
        :src="course.image"
        :alt="course.title"
        class="w-16 h-16 object-cover rounded"
      />
      <div class="flex flex-col justify-between">
        <h3 class="font-bold text-base">{{ course.title }}</h3>
        <div class="flex items-center gap-2 text-sm">
          <span>{{ course.duration }} total hours</span>
          <span>•</span>
          <span>Updated {{ course.updatedDate }}</span>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <span class="text-[#b4690e] font-bold">{{ course.rating }}</span>
        <span class="text-[#b4690e]">★</span>
        <span class="text-gray-600"
          >({{ course.students.toLocaleString() }})</span
        >
      </div>
      <span class="font-bold">${{ course.price }}</span>
      <button class="text-purple-600 hover:text-purple-700">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  course: {
    image: string;
    title: string;
    duration: string;
    updatedDate: string;
    rating: number;
    students: number;
    price: string;
    bestseller?: boolean;
  };
}>();
</script>
