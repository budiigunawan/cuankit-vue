<script setup>
import { ref } from "vue";
import ItemCard from "./items/ItemCard.vue";

const itemList = ref([
  { img: "items-1.jpg", title: "Mobile UI Kit", category: "Mobile UI Kit" },
  {
    img: "items-2.jpg",
    title: "Online Doctor Consultation",
    category: "Website UI Kit",
  },
  { img: "items-3.jpg", title: "Banking Crypto", category: "Mobile UI Kit" },
]);
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- CARD LIST -->
      <ItemCard
        v-for="(item, index) in itemList"
        :key="index"
        :img="item.img"
        :title="item.title"
        :category="item.category"
      />
    </div>
  </div>
</template>
