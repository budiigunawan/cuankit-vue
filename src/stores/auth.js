import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  // STATE
  const accessToken = ref("");
  const tokenType = ref("");

  const accessTokenInStorage = localStorage.getItem("accessToken");
  if (accessTokenInStorage) {
    accessToken.value = JSON.parse(accessTokenInStorage);
  }
  watch(accessToken, (state) => {
    if (state) localStorage.setItem("accessToken", JSON.stringify(state));
  });

  const tokenTypeInStorage = localStorage.getItem("tokenType");
  if (tokenTypeInStorage) {
    tokenType.value = JSON.parse(tokenTypeInStorage);
  }
  watch(tokenType, (state) => {
    if (state) localStorage.setItem("tokenType", JSON.stringify(state));
  });

  // GETTERS
  // ACTIONS
  function setAuthData(payloadTokenType, payloadAccessToken) {
    tokenType.value = payloadTokenType;
    accessToken.value = payloadAccessToken;
  }

  function removeAuthData() {
    accessToken.value = "";
    tokenType.value = "";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenType");
  }

  return { accessToken, tokenType, setAuthData, removeAuthData };
});
