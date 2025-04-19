<template>
  <span
    :class="[
      'inline-block px-2 py-1 text-xs font-semibold rounded-sm',
      typeClasses[type!],
    ]"
  >
    {{ text }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  type?: "default";
  default?: "default";
}>();

const typeClasses = {
  default: "bg-white border border-[#16161D] text-[#16161D]",
};
</script>
