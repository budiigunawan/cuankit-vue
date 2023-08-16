<script setup>
import RegisterTitle from "./register/RegisterTitle.vue";
import RegisterForm from "./register/RegisterForm.vue";
import BenefitList from "./register/BenefitList.vue";
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto">
      <div
        class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
      >
        <!-- REGISTER TITLE -->
        <RegisterTitle />

        <div class="w-full p-5 mx-auto md:max-w-4xl">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <!-- BENEFIT LIST -->
            <BenefitList />

            <!-- REGISTER FORM -->
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
