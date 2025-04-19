<template>
  <div class="bg-white text-[#16161D]">
    <TheHeader />

    <CourseHeader
      :title="course.title"
      :subtitle="course.subtitle"
      :rating="course.rating"
      :students="course.students"
      :instructor="course.instructor.name"
      :last-updated="course.lastUpdated"
      :language="course.language"
      :price="formattedPrice"
      :is-fixed="isHeaderFixed"
    />

    <main class="container bg-white mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="max-w-xl mx-auto space-y-4">
          <WhatYouLearn :items="course.whatYouWillLearn" />

          <RelatedTopics :items="course.relatedTopics" />

          <CourseContent
            :sections="course.content"
            :expanded-sections="expandedSections"
            :is-all-expanded="isAllSectionsExpanded"
            @toggle-section="toggleSection"
            @toggle-all="toggleAllSections"
          />

          <CourseDescription :description="course.description" />

          <AlsoBought :courses="course.alsoBought" />
          <InstructorCard :instructor="course.instructor" />

          <StudentReviews :rating="course.rating" :reviews="course.reviews" />

          <RelatedCourses
            :instructor-name="course.instructor.name"
            :related-courses="course.relatedCourses"
          />
        </div>

        <div class="lg:w-1/3 -mt-32">
          <div class="lg:sticky lg:bottom-0">
            <PurchaseCard
              :formatted-price="formattedPrice"
              :formatted-original-price="formattedOriginalPrice"
              :discount="course.price.discount"
              :is-fixed="isCartFixed"
              :course-includes="{
                videoLength: course.includes.videoLength + ' on-demand video',
                articles: course.includes.articles + ' article',
                resources:
                  course.includes.resources + ' downloadable resources',
                mobileAccess: 'Access on mobile and TV',
                lifetime: 'Full lifetime access',
                certificate: 'Certificate of completion',
              }"
            />
          </div>
        </div>
      </div>
    </main>
    <CourseFooter class="bg-[#16161D] text-white" />
  </div>
</template>

<script setup lang="ts">
import type { CourseDetails } from "~/types/course";

defineProps<{
  course: CourseDetails;
  expandedSections: Record<string, boolean>;
  isAllSectionsExpanded: boolean;
  isHeaderFixed: boolean;
  isCartFixed: boolean;
  formattedPrice: string;
  formattedOriginalPrice: string;
}>();

const emit = defineEmits(["toggle-section", "toggle-all"]);

const toggleSection = (sectionId: string) => {
  emit("toggle-section", sectionId);
};

const toggleAllSections = () => {
  emit("toggle-all");
};
</script>
