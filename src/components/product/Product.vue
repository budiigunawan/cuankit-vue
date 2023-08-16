<script setup>
import { ref, onMounted, inject } from "vue";
import { useRoute } from "vue-router";

import ProductMain from "./ProductMain.vue";
import ProductAside from "./ProductAside.vue";

const api = inject("$api");
const route = useRoute();

const productData = ref({});

async function getProductData() {
  api.get(
    `products?id=${route.params.id}`,
    (resp) => {
      productData.value = resp;
    },
    (err) => {
      console.error(err);
    },
  );
}

onMounted(() => {
  getProductData();
});
</script>

<template>
  <div class="container p-2 mx-auto my-10 max-w-7xl">
    <div class="flex flex-row flex-wrap py-4">
      <ProductMain
        :name="productData?.name"
        :subtitle="productData?.subtitle"
        :galleries="productData?.galleries"
        :thumbnails="productData?.thumbnails"
        :description="productData?.description"
      />
      <ProductAside
        :features="productData?.features"
        :is-figma="productData?.is_figma"
        :is-sketch="productData?.is_sketch"
        :file="productData?.file"
      />
    </div>
  </div>
</template>
