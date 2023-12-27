<template>
  <div class="home-container">
    <div class="background" style="background-color: #aedff7;">
      <h1>Приветствуем вас в нашем по предоставлению свадебных услуг</h1>
      
      <p class="intro-text">Вот такие варианты мы можем вам предложить</p>

      <div class="services-button">
        <router-link to="/services">
          <button class="services-btn">Перейти к услугам</button>
        </router-link>
      </div>

      <div class="carousel-container">
        <carousel :navigation-enabled="true" :navigation-prev-label="'←'" :navigation-next-label="'→'">
          <slide v-for="(photo, index) in photos" :key="index">
            <img :src="require(`@/assets/${photo}`)" alt="Wedding Photo" width="50%">
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
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
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.background {
  text-align: center;
  padding: 20px;
}

h1 {
  color: rgb(0, 0, 0);
  margin-top: 80px;
}

.intro-text {
  font-size: 20px;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
}

.services-button {
  margin-top: 15px;
}

.services-btn {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
}

.carousel-container {
  margin-top: 20px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

