<script setup>
import { ref } from "vue";
import BenefitCard from "./BenefitCard.vue";
const benefits = ref([
  {
    icon: "one",
    title: "Customizable",
    description:
      "Accelerate your work with our millions of ready-to-use design projects.",
  },
  {
    icon: "two",
    title: "500 Fortune",
    description:
      "Accelerate your work with our millions of ready-to-use design projects.",
  },
  {
    icon: "three",
    title: "Documentation",
    description:
      "Accelerate your work with our millions of ready-to-use design projects.",
  },
]);
</script>

<template>
  <div class="mx-auto md:mx-0">
    <BenefitCard
      v-for="(benefit, index) in benefits"
      :key="index"
      :icon="benefit.icon"
      :title="benefit.title"
      :description="benefit.description"
    />
  </div>
</template>
