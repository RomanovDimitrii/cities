<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
import VsSelect from 'vs-vue3-select';
import 'vs-vue3-select/dist/vs-vue3-select.css';
import { cities } from '../mock/cities';
import Slider from '../components/Slider.vue';

const options = ref(
  cities.map(city => ({
    value: city.id.toString(),
    label: city.name
  }))
);

const selectedOption = ref<{ label: string; value: string } | null>(null);
const authStore = useAuthStore();
const router = useRouter();

const selectedCityDescription = computed(() => {
  if (!selectedOption.value) return '';
  const city = cities.find(c => c.id.toString() === selectedOption.value.value);
  return city?.description || 'Город не найден';
});

const handleLogout = () => {
  authStore.clearLogin();
  router.push('/login');
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="main-container">
    <header class="header">
      <div>
        <span class="greeting" @click="goToLogin"
          >Привет, <strong>{{ authStore.login }}</strong></span
        >
      </div>
      <button class="logout-button" @click="handleLogout">Выйти</button>
    </header>
    <main class="content">
      <VsSelect v-model="selectedOption" :options="options" placeholder="Выберите город">
        <template v-slot:no-options>
          <div class="no-options-text">Город не найден</div>
        </template>
      </VsSelect>

      <h1 v-if="selectedOption" class="city-name">{{ selectedOption.label }}</h1>
      <h1 v-else class="city-name">Город не выбран</h1>

      <p v-if="selectedCityDescription" class="city-description">{{ selectedCityDescription }}</p>
      <Slider />
    </main>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/mixins.scss';
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
  color: #000;
  font-size: 0.75rem;

  .greeting {
    cursor: pointer;
  }

  .logout-button {
    background: transparent;
    color: #000;
    border: none;
    padding: 8px 16px;

    cursor: pointer;
    @include hover-transform;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.select {
  width: 18vw;
  font-size: 0.75rem;
}

.city-name {
  margin: 112px 0 32px;
}

.city-description {
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  max-width: 600px;
  text-align: start;
}
</style>
