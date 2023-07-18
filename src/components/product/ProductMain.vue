<script setup>
import ProductDetails from "./product-main/ProductDetails.vue";
import ProductGallery from "./product-main/ProductGallery.vue";
</script>

<template>
  <div role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
    <h1
      class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
    >
      RoboCrypto UI Kit
    </h1>
    <p class="text-gray-500">Build your next coin startup</p>

    <ProductGallery />
    <ProductDetails />
  </div>
</template>
