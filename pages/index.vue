<template>
  <div>
    <CourseTemplate
      :course="courseData"
      :expanded-sections="expandedSections"
      :is-all-sections-expanded="isAllSectionsExpanded"
      :is-header-fixed="isHeaderFixed"
      :is-cart-fixed="isCartFixed"
      :formatted-price="formattedPrice"
      :formatted-original-price="formattedOriginalPrice"
      @toggle-section="toggleSection"
      @toggle-all="toggleAllSections"
    />
  </div>
</template>

<script setup lang="ts">
import { useCourse } from "~/composables/useCourse";
import { useScroll } from "~/composables/useScroll";

const {
  courseData,
  expandedSections,
  isAllSectionsExpanded,
  toggleSection,
  toggleAllSections,
  formattedPrice,
  formattedOriginalPrice,
} = useCourse();

const { isHeaderFixed, isCartFixed } = useScroll();
</script>
