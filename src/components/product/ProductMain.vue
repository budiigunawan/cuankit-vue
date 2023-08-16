<script setup>
import ProductDetails from "./product-main/ProductDetails.vue";
import ProductGallery from "./product-main/ProductGallery.vue";

defineProps({
  name: String,
  subtitle: String,
  galleries: Array,
  thumbnails: String,
  description: String,
});
</script>

<template>
  <div role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
    <h1
      class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
    >
      {{ name }}
    </h1>
    <p class="text-gray-500">{{ subtitle }}</p>

    <ProductGallery :galleries="galleries" :thumbnails="thumbnails" />
    <ProductDetails :description="description" />
  </div>
</template>
