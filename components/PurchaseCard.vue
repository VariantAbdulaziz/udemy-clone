<template>
  <div
    class="bg-white border border-[#F6F7F9] rounded-lg shadow-card overflow-hidden"
    :class="{ 'fixed top-24 max-w-[22rem]': isFixed }"
  >
    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
      <img
        src="/images/course-preview.png"
        alt="Course Preview"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <UButton
          variant="solid"
          class="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3"
        >
          <UIcon name="i-heroicons-play" class="text-black w-8 h-8" />
        </UButton>
      </div>
      <div
        class="absolute bottom-2 left-2 text-xs text-white bg-black/70 px-2 py-1 rounded"
      >
        Preview this course
      </div>
    </div>

    <div class="p-6">
      <PriceDisplay
        :current-price="formattedPrice"
        :original-price="formattedOriginalPrice"
        :discount="discount"
      />

      <div class="my-4 space-y-4">
        <UButton
          block
          variant="ghost"
          class="bg-white border border-[#7E00D5] text-[#7E00D5]"
        >
          Buy now
        </UButton>

        <UButton block variant="solid" class="text-white bg-[#7E00D5]">
          Add to cart
        </UButton>
      </div>

      <p class="text-center text-sm mb-4">30-Day Money-Back Guarantee</p>

      <div class="space-y-4">
        <h3 class="font-bold text-lg">This course includes:</h3>

        <ul class="space-y-2">
          <li
            v-for="(value, key) in courseIncludes"
            :key="key"
            class="flex items-start"
          >
            <UIcon
              :name="includesIcons[key] || 'i-heroicons-check'"
              class="text-[#b6b6b6] mt-1 mr-3 flex-shrink-0"
            />
            <span>{{ value }}</span>
          </li>
        </ul>

        <div class="flex pt-2 border-t border-[#F6F7F9] justify-between">
          <UButton
            variant="ghost"
            class="text-[#8D68E0] font-semibold hover:text-[#8D68E0]-dark"
          >
            Share
          </UButton>

          <UButton
            variant="ghost"
            class="text-[#add to cart8D68E0] font-semibold hover:text-[#8D68E0]-dark"
          >
            Gift this course
          </UButton>

          <UButton
            variant="ghost"
            class="text-[#8D68E0] font-semibold hover:text-[#8D68E0]-dark"
          >
            Apply Coupon
          </UButton>
        </div>
      </div>
    </div>

    <div class="p-6 border-t border-[#F6F7F9]">
      <h3 class="font-bold text-lg mb-2">Training 5 or more people?</h3>
      <p class="text-sm mb-3">
        Get your team access to 27,000+ top Udemy courses anytime, anywhere.
      </p>
      <UButton variant="outline" class="btn-secondary w-full text-black">
        Try Udemy Business
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
type IncludesKey = keyof typeof includesIcons;

defineProps<{
  formattedPrice: string;
  formattedOriginalPrice: string;
  discount: number;
  isFixed: boolean;
  courseIncludes: Record<IncludesKey, string>;
}>();

const includesIcons = {
  videoLength: "i-heroicons-video-camera",
  articles: "i-heroicons-document-text",
  resources: "i-heroicons-arrow-down-tray",
  mobileAccess: "i-heroicons-device-phone-mobile",
  lifetime: "i-heroicons-infinity",
  certificate: "i-heroicons-academic-cap",
} as const;
</script>
