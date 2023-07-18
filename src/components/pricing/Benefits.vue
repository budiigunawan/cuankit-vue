<script setup>
import { ref } from "vue";
import BenefitCard from "../authentication/register/BenefitCard.vue";

const benefits = ref([
  {
    icon: "stack",
    title: "Customizable",
    description:
      "Accelerate your work with our millions of ready-to-use design projects.",
  },
  {
    icon: "medal",
    title: "500 Fortune",
    description:
      "Accelerate your work with our millions of ready-to-use design projects.",
  },
  {
    icon: "book",
    title: "Documentation",
    description:
      "Accelerate your work with our millions of ready-to-use design projects.",
  },
]);
</script>

<template>
  <div class="w-full p-5 mx-auto mb-10 md:max-w-7xl">
    <div class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 md:mx-0">
      <BenefitCard
        v-for="(benefit, index) in benefits"
        :key="index"
        :icon="benefit.icon"
        :title="benefit.title"
        :description="benefit.description"
      />
    </div>
  </div>
</template>
