<template>
  <div class="bg-white p-6 border border-gray-200 rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Students also bought</h2>
    <div class="divide-y">
      <AlsoBoughtItem
        v-for="course in courses"
        :key="course.title"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AlsoBoughtCourse } from "~/types/course";

defineProps<{
  courses: AlsoBoughtCourse[];
}>();
</script>
