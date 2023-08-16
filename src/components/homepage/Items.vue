<script setup>
import { ref, onMounted, inject } from "vue";

import ItemCard from "./items/ItemCard.vue";

const api = inject("$api");
const itemList = ref([]);

async function getItems() {
  api.get(
    "products",
    (resp) => {
      itemList.value = resp.data;
    },
    (err) => {
      console.error(err);
    },
  );
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
        :id="item.id"
        :key="index"
        :img="item.thumbnails"
        :title="item.name"
        :subtitle="item.subtitle"
      />
    </div>
  </div>
</template>
