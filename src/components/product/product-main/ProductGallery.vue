<script setup>
import { ref, watch } from "vue";

const selectedImage = ref();

function handleSelectImage(imageName) {
  selectedImage.value = imageName;
}

const props = defineProps({
  galleries: Array,
  thumbnails: String,
});

watch(
  () => props.thumbnails,
  (defaultThumbnails) => {
    selectedImage.value = defaultThumbnails;
  }
);
</script>

<template>
  <section id="gallery">
    <img :src="selectedImage" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div
        v-for="(gallery, index) in galleries"
        :key="index"
        @click="handleSelectImage(gallery.url)"
        class="overflow-hidden cursor-pointer rounded-2xl"
        :class="{
          'ring-2 ring-indigo-500': selectedImage === gallery.url,
        }"
      >
        <img :src="gallery.url" class="w-full" alt="" />
      </div>
    </div>
  </section>
</template>
