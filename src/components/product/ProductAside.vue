<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const props = defineProps({
  features: String,
  isFigma: Number,
  isSketch: Number,
  file: String,
});

const featureList = computed(() => props.features?.split(","));
</script>

<template>
  <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
    <div class="sticky top-0 w-full pt-4 md:mt-24">
      <div class="p-6 border rounded-2xl">
        <div class="mb-4" v-if="isFigma">
          <div class="flex mb-2">
            <div>
              <img src="@/assets/img/icon-figma.png" alt="" class="w-16" />
            </div>
            <div class="block mt-1 ml-4">
              <h3 class="font-semibold text-md">Figma</h3>
              <p class="text-gray-400 text-md">Project Included</p>
            </div>
          </div>
        </div>
        <div class="mb-4" v-if="isSketch">
          <div class="flex mb-2">
            <div>
              <img src="@/assets/img/icon-sketch.png" alt="" class="w-16" />
            </div>
            <div class="block mt-1 ml-4">
              <h3 class="font-semibold text-md">Sketch</h3>
              <p class="text-gray-400 text-md">Project Included</p>
            </div>
          </div>
        </div>
        <div>
          <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
          <ul class="mb-6 text-gray-500">
            <li
              class="mb-2"
              v-for="(feature, index) in featureList"
              :key="index"
            >
              {{ feature }}
              <img
                src="@/assets/img/icon-check.png"
                class="float-right w-5 mt-1"
                alt=""
              />
            </li>
          </ul>
        </div>
        <template v-if="user?.subscription.length">
          <a
            :href="file"
            class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
          >
            Download Now
          </a>
        </template>
        <template v-else>
          <RouterLink
            to="/pricing"
            class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
          >
            Subscribe Now
          </RouterLink>
        </template>
      </div>
    </div>
  </aside>
</template>
