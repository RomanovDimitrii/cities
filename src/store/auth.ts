import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    login: ''
  }),
  actions: {
    setLogin(username: string) {
      this.login = username;
    },
    clearLogin() {
      this.login = '';
    }
  }
});
