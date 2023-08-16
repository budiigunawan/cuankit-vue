<script setup>
import { ref, onMounted, inject } from "vue";

import CategoryCard from "./categories/CategoryCard.vue";

const api = inject("$api");
const categoryList = ref([]);

async function getCategories() {
  api.get(
    "categories",
    (resp) => {
      categoryList.value = resp.data;
    },
    (err) => {
      console.error(err);
    },
  );
}

onMounted(() => {
  getCategories();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- CARD LIST -->
      <CategoryCard
        v-for="(category, index) in categoryList"
        :id="category.id"
        :key="index"
        :title="category.name"
        :count="category.products_count"
        :img="category.thumbnails"
      />
    </div>
  </div>
</template>
