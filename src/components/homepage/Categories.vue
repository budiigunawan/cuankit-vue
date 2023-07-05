<script setup>
import { ref } from "vue";
import CategoriesCard from "./categories/CategoriesCard.vue";
const categoryList = ref([
  { title: "Mobile UI Kit", count: 731, img: "categories-1.jpg" },
  { title: "Fonts", count: 657, img: "categories-2.jpg" },
  { title: "Icon Set", count: 83559, img: "categories-3.jpg" },
  { title: "Website UI Kit", count: 4500, img: "categories-4.jpg" },
]);
</script>
<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- CARD LIST -->
      <CategoriesCard
        v-for="(category, index) in categoryList"
        :key="index"
        :title="category.title"
        :count="category.title"
        :img="category.img"
      />
    </div>
  </div>
</template>
<style></style>
