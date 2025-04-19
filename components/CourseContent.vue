<template>
  <section class="course-section">
    <div class="flex justify-between items-center mb-4">
      <h2 class="section-title">Course content</h2>
      <UButton
        variant="ghost"
        class="text-[#8D68E0] font-semibold"
        @click="toggleAllSections"
      >
        {{ isAllExpanded ? "Collapse all sections" : "Expand all sections" }}
      </UButton>
    </div>

    <div class="text-sm text-[#b6b6b6] mb-4">
      {{ totalSections }} sections • {{ totalLectures }} lectures •
      {{ totalLength }} total length
    </div>

    <div>
      <CourseSectionItem
        v-for="(section, index) in sections"
        :key="section.id"
        :title="section.title"
        :lectures="section.lectures"
        :total-time="section.totalTime"
        :expanded="expandedSections[section.id]"
        @toggle="toggleSection(section.id)"
        :last="index === sections.length - 1"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CourseSection } from "~/types/course";
import { computed } from "vue";

const props = defineProps<{
  sections: CourseSection[];
  expandedSections: Record<string, boolean>;
  isAllExpanded: boolean;
}>();

const emit = defineEmits(["toggle-section", "toggle-all"]);

const totalSections = computed(() => props.sections.length);

const totalLectures = computed(() => {
  return props.sections.reduce(
    (acc, section) => acc + section.lectures.length,
    0
  );
});

const totalLength = computed(() => {
  return props.sections.reduce((acc, section) => {
    return section.totalTime;
  }, "2h 7m");
});

const toggleSection = (sectionId: string) => {
  emit("toggle-section", sectionId);
};

const toggleAllSections = () => {
  emit("toggle-all");
};
</script>
