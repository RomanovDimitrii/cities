<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const login = ref('');
const password = ref('');

const handleLogin = () => {
  if (login.value.trim()) {
    authStore.setLogin(login.value);
    router.push('/mainpage');
  } else {
    alert('Введите логин');
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Войти в панель</h2>
    <div class="form-group">
      <label for="login"></label>
      <input v-model="login" id="login" type="text" placeholder="Введите логин" />
    </div>
    <div class="form-group">
      <label for="password"></label>
      <input v-model="password" id="password" type="password" placeholder="Введите пароль" />
    </div>
    <button class="login-button" @click="handleLogin">Войти</button>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/mixins.scss';
.login-container {
  display: block;
  text-align: center;
  margin: 38vh auto;
  width: 18vw;
}

.form-group {
  margin: 32px 0;
  text-align: left;
}

input {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid rgba(215, 215, 215, 1);
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 0.66rem;

  &::placeholder {
    color: rgba(215, 215, 215, 1);
    font-size: 0.66rem;
  }
}

.login-button {
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 8px;
  cursor: pointer;
  box-sizing: border-box;
  @include hover-transform;
}
</style>
