<template>
  <section class="course-section">
    <h2 class="section-title">Explore Related topics</h2>

    <ul class="flex list-none flex-wrap gap-2">
      <li v-for="(item, i) in items" :key="i">
        <CourseBadge :text="item" type="default" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>
