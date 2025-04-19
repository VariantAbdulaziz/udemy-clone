<template>
  <div
    class="flex items-center text-sm gap-2 justify-between py-3 border-[#F6F7F9]"
  >
    <div class="flex items-start flex-1">
      <UIcon
        :name="preview ? 'i-heroicons-play-circle' : 'i-heroicons-lock-closed'"
        class="mt-1 mr-3 flex-shrink-0"
        :class="preview ? 'text-[#8D68E0]' : 'text-[#b6b6b6]'"
      />
      <div class="flex justify-between w-full">
        <div class="font-medium">{{ title }}</div>
        <div
          v-if="preview"
          class="text-sm text-[#8D68E0] text-center underline font-medium mt-1"
        >
          <span class="cursor-pointer">Preview</span>
        </div>
      </div>
    </div>
    <div class="text-sm text-[#b6b6b6]">{{ duration }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  duration: string;
  preview: boolean;
}>();
</script>
