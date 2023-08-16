<script setup>
import { ref, onMounted, inject } from "vue";
import { useRoute } from "vue-router";

import ItemCard from "../homepage/items/itemcard.vue";

const api = inject("$api");
const route = useRoute();

const categoryData = ref({});

async function getCategoryData() {
  api.get(
    `categories?id=${route.params.id}`,
    (resp) => {
      categoryData.value = resp;
    },
    (err) => {
      console.error(err);
    }
  );
}

onMounted(() => {
  getCategoryData();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
      {{ categoryData.name }}
    </h2>

    <div
      v-if="categoryData?.products?.length"
      class="flex flex-wrap -mx-1 lg:-mx-4"
    >
      <!-- CARD LIST -->
      <ItemCard
        v-for="(item, index) in categoryData.products"
        :key="index"
        :id="item.id"
        :img="item.thumbnails"
        :title="item.name"
        :subtitle="item.subtitle"
      />
    </div>
    <h3 v-else class="mb-4 font-medium md:mb-0">No items found</h3>
  </div>
</template>
