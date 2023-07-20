<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

import CategoryCard from "../homepage/categories/CategoryCard.vue";

const baseUrl = import.meta.env.VITE_APP_BASEURL;
const categoryList = ref([]);

async function getCategories() {
  try {
    const response = await axios.get(`${baseUrl}/api/categories`);
    categoryList.value = response.data.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getCategories();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">All Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- CARD LIST -->
      <CategoryCard
        v-for="(category, index) in categoryList"
        :key="index"
        :title="category.name"
        :count="category.products_count"
        :img="category.thumbnails"
      />
    </div>
  </div>
</template>
