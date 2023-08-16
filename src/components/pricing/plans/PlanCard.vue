<script setup>
import { inject } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../../stores/auth";
import { useRouter } from "vue-router";

const api = inject("$api");
const router = useRouter();

const authStore = useAuthStore();
const { accessToken, tokenType } = storeToRefs(authStore);

const props = defineProps({
  plan: Object,
});

function showPrice(price) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 2,
  });

  return formatter.format(price);
}

function handleCheckout(price) {
  api.post(
    "checkout",
    {
      payment_total: price,
      payment_status: "SUCCESS",
    },
    (resp) => {
      if (resp.data) router.push({ name: "success" });
    },
    (err) => {
      console.error(err);
    },
    {
      headers: {
        Authorization: `${tokenType.value} ${accessToken.value}`,
      },
    },
  );
}
</script>

<template>
  <div>
    <div class="p-8 border rounded-3xl">
      <h1 class="text-5xl font-semibold">
        {{ showPrice(plan.price) + " " }}
        <span class="text-xl font-light text-gray-500">/month</span>
      </h1>
      <h2 class="text-lg font-semibold mt-7">{{ plan.title }}</h2>
      <p class="mb-6 text-gray-500">{{ plan.subTitle }}</p>
      <ul v-if="plan.features.length" class="mb-6 text-gray-700">
        <li v-for="(feature, index) in plan.features" :key="index" class="mb-3">
          <img
            src="@/assets/img/icon-check.png"
            class="float-left w-6 mr-2"
            alt=""
          />
          {{ feature }}
        </li>
      </ul>
      <button
        type="button"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-md md:px-10 hover:shadow"
        @click="handleCheckout(plan.price)"
      >
        Checkout Now
      </button>
    </div>
  </div>
</template>
