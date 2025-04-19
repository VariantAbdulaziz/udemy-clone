<template>
  <div
    class="border-t flex flex-col h-full justify-between border-[#F6F7F9] py-6"
  >
    <div class="flex">
      <div
        class="w-10 h-10 rounded-full justify-center items-center bg-gray-300 overflow-hidden mr-4 flex-shrink-0"
      >
        {{ user.name.charAt(0).toLocaleUpperCase() }}
      </div>
      <div class="flex items-start flex-col">
        <h4 class="font-bold">{{ user.name }}</h4>
        <div class="flex items-center my-1">
          <div class="flex">
            <UIcon
              v-for="i in 5"
              :key="i"
              :name="
                i <= rating ? 'i-heroicons-star-solid' : 'i-heroicons-star'
              "
              class="w-4 h-4 text-amber-700"
            />
          </div>
          <span class="text-sm text-[#b6b6b6] ml-2">{{ date }}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col mt-0">
      <p class="text-sm mt-2">{{ content }}</p>

      <div class="flex flex-col items-center mt-3 text-sm">
        <div class="flex items-center mt-3">
          <span>Was this review helpful?</span>
          <UButton
            variant="ghost"
            size="xs"
            class="ml-3 flex items-center justify-center"
          >
            <UIcon name="i-heroicons-hand-thumb-up" class="mr-1" />
            <span>Yes</span>
          </UButton>
          <UButton
            variant="ghost"
            size="xs"
            class="ml-2 flex items-center justify-center"
          >
            <UIcon name="i-heroicons-hand-thumb-down" class="mr-1" />
            <span>No</span>
          </UButton>
        </div>
        <span class="self-start text-[#b6b6b6]"
          >{{ helpful }} people found this helpful</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  date: string;
  content: string;
  helpful: number;
}>();
</script>
