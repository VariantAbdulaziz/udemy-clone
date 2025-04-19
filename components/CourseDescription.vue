<template>
  <section class="course-section">
    <h2 class="section-title">Description</h2>

    <div>
      <p class="mb-4">{{ description }}</p>

      <div
        :class="{
          'max-h-52 overflow-hidden relative': !showMore && hasMoreContent,
        }"
      >
        <div
          v-if="!showMore && hasMoreContent"
          class="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"
        ></div>

        <p class="mb-4">
          Coinbase è un'offerta molto facile da usare con la sua interfaccia
          user-friendly ed è la soluzione perfetta per chi inizia.
        </p>

        <p class="mb-4">
          Inoltre abbiamo spiegato anche come guadagnare criptomonete come
          Bitcoin, Ethereum, Litecoin e altre.
        </p>

        <p class="mb-4">
          Coinbase è un software molto facile da usare con la sua interfaccia
          user-friendly ed è la soluzione perfetta per chi inizia.
        </p>

        <div v-for="i in 2" :key="i" class="mb-4">
          <p class="mb-2">Questo corso ti insegnerà:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Come creare un account Coinbase</li>
            <li>Come verificare la tua identità</li>
            <li>Come acquistare la tua prima criptovaluta</li>
            <li>Come trasferire criptovalute</li>
            <li>Come vendere criptovalute per profitto</li>
          </ul>
        </div>
      </div>

      <UButton
        variant="ghost"
        class="text-[#8D68E0] font-semibold mt-2"
        @click="showMore = !showMore"
      >
        {{ showMore ? "Show less" : "Show more" }}
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  description: string;
}>();

const showMore = ref(false);
const hasMoreContent = ref(true);
</script>
