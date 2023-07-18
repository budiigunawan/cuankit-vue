<script setup>
import { ref } from "vue";

const selectedImage = ref("src/assets/img/gallery-1.png");

const imageUrlList = ref([
  "src/assets/img/gallery-1.png",
  "src/assets/img/gallery-2.png",
  "src/assets/img/gallery-4.png",
  "src/assets/img/gallery-5.png",
]);

function handleSelectImage(imageName) {
  selectedImage.value = imageName;
}
</script>

<template>
  <section id="gallery">
    <img :src="selectedImage" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div
        v-for="(imageUrl, index) in imageUrlList"
        :key="index"
        @click="handleSelectImage(imageUrl)"
        class="overflow-hidden cursor-pointer rounded-2xl"
        :class="{
          'ring-2 ring-indigo-500': selectedImage === imageUrl,
        }"
      >
        <img :src="imageUrl" class="w-full" alt="" />
      </div>
    </div>
  </section>
</template>
