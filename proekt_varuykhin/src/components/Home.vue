<template>
  <!-- Открываем раздел шаблона Vue-компонента -->
  <div class="home-container">
    <!-- Контейнер для раздела главной страницы -->
    <div class="background" style="background-color: #aedff7;">
      <!-- Фоновый блок с приветствием и информацией -->
      <h1>Приветствуем вас в нашем по предоставлению свадебных услуг</h1>
      
      <!-- Вводный текст для описания предоставляемых услуг -->
      <p class="intro-text">Вот такие варианты мы можем вам предложить</p>

      <!-- Кнопка для перехода к услугам -->
      <div class="services-button">
        <router-link to="/services">
          <button class="services-btn">Перейти к услугам</button>
        </router-link>
      </div>

      <!-- Карусель с фотографиями свадеб -->
      <div class="carousel-container">
        <!-- Используем компоненты карусели из библиотеки vue-carousel -->
        <carousel :navigation-enabled="true" :navigation-prev-label="'←'" :navigation-next-label="'→'">
          <!-- Итерация по массиву фотографий для создания слайдов -->
          <slide v-for="(photo, index) in photos" :key="index">
            <!-- Отображение каждой фотографии с динамическим путем -->
            <img :src="require(`@/assets/${photo}`)" alt="Wedding Photo" width="50%">
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
// Импортируем компоненты карусели из библиотеки vue-carousel
import { Carousel, Slide } from 'vue-carousel';

// Экспортируем Vue-компонент
export default {
  // Регистрируем использование компонентов карусели в данном компоненте
  components: {
    Carousel,
    Slide,
  },
  // Определяем данные компонента
  data() {
    return {
      // Массив с названиями фотографий для карусели
      photos: [
        'b.jpg',
        'n.jpg',
        'c.jpg',
        'v.jpg',
        'z.jpg',
        'x.jpg',
      ],
    };
  },
};
</script>

<style scoped lang="scss">
/* Стили для компонента, ограниченные областью компонента (scoped) */

/* Стили для контейнера главной страницы */
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

/* Стили для фонового блока главной страницы */
.background {
  text-align: center;
  padding: 20px;
}

/* Стили для заголовка страницы */
h1 {
  color: rgb(0, 0, 0);
  margin-top: 100px;
}

/* Стили для вводного текста */
.intro-text {
  font-size: 20px;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
  margin-top: 7px;
}

/* Стили для блока с кнопкой перехода к услугам */
.services-button {
  margin-top: 15px;
}

/* Стили для кнопки перехода к услугам */
.services-btn {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #227fbd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  /* Стили при наведении на кнопку */
  &:hover {
    background-color: #00508c;
  }
}

/* Стили для контейнера карусели */
.carousel-container {
  margin-top: 20px;
}

/* Стили для изображений внутри карусели */
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
