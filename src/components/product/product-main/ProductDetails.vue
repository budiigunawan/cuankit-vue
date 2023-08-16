<script setup>
defineProps({
  description: String,
});
</script>

<template>
  <section class="" id="orders">
    <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
    <div class="text-gray-500" v-html="description"></div>
  </section>
</template>
