<template>
  <div
    :class="[
      'border-x border-t border-[#b6b6b6] overflow-hidden',
      last && 'border-b',
    ]"
  >
    <div
      class="flex items-center justify-between bg-[#F6F7F9] p-4 cursor-pointer"
      @click="toggleExpanded"
    >
      <div class="flex items-center">
        <UIcon
          :name="
            expanded ? 'i-heroicons-chevron-down' : 'i-heroicons-chevron-right'
          "
          class="mr-2"
        />
        <h3 class="font-bold">{{ title }}</h3>
      </div>
      <div class="text-sm text-[#1D1E27]">
        {{ lectureCount }} lectures • {{ totalTime }}
      </div>
    </div>

    <div v-if="expanded" class="p-2">
      <LectureItem
        v-for="lecture in lectures"
        :key="lecture.id"
        :title="lecture.title"
        :duration="lecture.duration"
        :preview="lecture.preview"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CourseLecture } from "~/types/course";
import { computed } from "vue";
const props = defineProps<{
  title: string;
  lectures: CourseLecture[];
  totalTime: string;
  expanded: boolean;
  last?: boolean;
}>();

const emit = defineEmits(["toggle"]);

const lectureCount = computed(() => {
  return props.lectures.length;
});

const toggleExpanded = () => {
  emit("toggle");
};
</script>
