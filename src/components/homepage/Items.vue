<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

import ItemCard from "./items/ItemCard.vue";

const baseUrl = import.meta.env.VITE_APP_BASEURL;
const itemList = ref([]);

async function getItems() {
  try {
    const response = await axios.get(`${baseUrl}/api/products`);
    itemList.value = response.data.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getItems();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- CARD LIST -->
      <ItemCard
        v-for="(item, index) in itemList"
        :key="index"
        :id="item.id"
        :img="item.thumbnails"
        :title="item.name"
        :subtitle="item.subtitle"
      />
    </div>
  </div>
</template>
