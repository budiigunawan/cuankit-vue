import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BASEURL;

export const useUserStore = defineStore("user", () => {
  // STATE
  const user = ref(false);

  const userInStorage = localStorage.getItem("user");
  if (userInStorage) {
    user.value = JSON.parse(userInStorage);
  }

  watch(user, (state) => {
    if (state) localStorage.setItem("user", JSON.stringify(state));
  });

  // GETTERS
  const isLoggedIn = computed(() => {
    return user.value !== false;
  });
  const getUser = computed(() => user);

  // ACTIONS
  async function fetchUser(tokenType, accessToken) {
    try {
      const { data } = await axios.get(`${baseUrl}/api/user`, {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      });

      user.value = data.data;
      return true;
    } catch (error) {
      console.error(error);
      user.value = false;
      return false;
    }
  }
  function removeUser() {
    user.value = false;
    localStorage.removeItem("user");
  }

  return { user, isLoggedIn, getUser, fetchUser, removeUser };
});
