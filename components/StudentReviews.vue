<template>
  <section>
    <h2 class="mb-6">Student feedback</h2>

    <div class="flex flex-col md:flex-row">
      <div
        class="md:w-1/3 mb-6 md:mb-0 md:pr-8 flex flex-col items-center justify-center"
      >
        <div class="text-6xl font-bold text-black mb-2">
          {{ rating.score }}
        </div>
        <div class="flex mb-2">
          <template v-for="i in 5" :key="i">
            <UIcon
              :name="
                i <= Math.floor(rating.score)
                  ? 'i-heroicons-star-solid'
                  : 'i-heroicons-star'
              "
              class="w-6 h-6 text-amber-700"
            />
          </template>
        </div>
        <div class="text-sm text-[#b6b6b6]">Course Rating</div>
      </div>

      <div class="md:w-2/3">
        <div
          v-for="(count, index) in [60, 25, 10, 3, 2]"
          :key="index"
          class="flex items-center mb-2"
        >
          <div class="flex mr-3">
            <template v-for="i in 5" :key="i">
              <UIcon
                :name="
                  5 - index <= i ? 'i-heroicons-star-solid' : 'i-heroicons-star'
                "
                class="w-4 h-4 text-amber-700"
              />
            </template>
          </div>

          <div class="w-full bg-gray-200 rounded-full h-2 mr-3">
            <div
              class="bg-amber-700 h-2 rounded-full"
              :style="{ width: `${count}%` }"
            ></div>
          </div>

          <div class="text-sm text-[#b6b6b6] w-12">{{ count }}%</div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <div class="flex items-center gap-1 mb-4">
        <span class="text-amber-700">★</span>
        <span class="font-bold">{{ rating.score }} course rating</span>
        <span class="text-gray-600">•</span>
        <span class="text-gray-600">{{ rating.count }} ratings</span>
      </div>

      <div class="space-y-1 flex flex-col gap-4 md:grid md:grid-cols-2">
        <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          :user="review.user"
          :rating="review.rating"
          :date="review.date"
          :content="review.content"
          :helpful="review.helpful"
        />
      </div>

      <div class="text-center mt-8">
        <UButton variant="outline" class="btn-secondary">
          View all reviews
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Rating, Review } from "~/types/course";

defineProps<{
  rating: Rating;
  reviews: Review[];
}>();
</script>
