<template>
  <div class="border-b border-[#F6F7F9] py-6">
    <h2 class="text-2xl font-bold mb-6">Instructor</h2>

    <div class="flex flex-col md:flex-row">
      <div class="w-24 h-24 rounded-full overflow-hidden mr-6 mb-4 md:mb-0">
        <img
          :src="
            instructor.avatar ||
            'https://via.placeholder.com/100?text=Instructor'
          "
          :alt="instructor.name"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex-1">
        <h3 class="text-lg font-bold mb-1 text-[#8D68E0]">
          {{ instructor.name }}
        </h3>
        <p class="text-sm text-[#b6b6b6] mb-3">{{ instructor.title }}</p>

        <div class="flex flex-wrap mb-4">
          <div class="flex items-center mr-6 mb-2">
            <UIcon name="i-heroicons-star" class="text-[#b6b6b6] mr-2" />
            <span>{{ instructor.rating.score }} Instructor Rating</span>
          </div>
          <div class="flex items-center mr-6 mb-2">
            <UIcon
              name="i-heroicons-academic-cap"
              class="text-[#b6b6b6] mr-2"
            />
            <span>{{ instructor.reviews }} Reviews</span>
          </div>
          <div class="flex items-center mr-6 mb-2">
            <UIcon name="i-heroicons-users" class="text-[#b6b6b6] mr-2" />
            <span>{{ instructor.students }} Students</span>
          </div>
          <div class="flex items-center mb-2">
            <UIcon name="i-heroicons-play" class="text-[#b6b6b6] mr-2" />
            <span>{{ instructor.courses }} Courses</span>
          </div>
        </div>

        <p class="text-sm mb-3">{{ shortBio }}</p>

        <UButton
          variant="ghost"
          class="text-[#8D68E0] p-0 font-semibold"
          @click="showFullBio = !showFullBio"
        >
          {{ showFullBio ? "Show less" : "Show more" }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Instructor } from "~/types/course";
import { ref, computed } from "vue";

const props = defineProps<{
  instructor: Instructor;
}>();

const showFullBio = ref(false);

const shortBio = computed(() => {
  if (showFullBio.value) {
    return props.instructor.bio;
  }
  return props.instructor.bio.length > 150
    ? props.instructor.bio.slice(0, 150) + "..."
    : props.instructor.bio;
});
</script>
