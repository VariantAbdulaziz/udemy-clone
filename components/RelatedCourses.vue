<template>
  <section class="course-section">
    <h2 class="section-title">More Courses by {{ instructorName }}</h2>

    <div class="overflow-x-auto scrollbar-hide pb-4">
      <div class="flex space-x-4 min-w-max">
        <div
          v-for="course in relatedCourses"
          :key="course.id"
          class="w-64 flex-shrink-0"
        >
          <CourseCard
            :title="course.title"
            :instructor="course.instructor"
            :thumbnail="course.thumbnail"
            :rating="course.rating"
            :price="course.price.current"
            :original-price="course.price.original"
            :is-bestseller="true"
          />
        </div>
      </div>
    </div>

    <div class="text-center mt-6">
      <UButton variant="outline" class="btn-secondary">
        Show all courses
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RelatedCourse } from "~/types/course";

defineProps<{
  instructorName: string;
  relatedCourses: RelatedCourse[];
}>();
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
