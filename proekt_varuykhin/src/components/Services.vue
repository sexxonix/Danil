<template>
  <div class="services-container">
    <h1 class="center-text">Наши Услуги</h1>

    <div class="services-list">
      <div v-for="(service, index) in services" :key="index" class="service-card white-border">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <router-link :to="{ name: 'service-details', params: { id: index + 1 } }">Подробнее</router-link>
      </div>
    </div>

    <div class="photo-list">
      <div v-for="(newService, newIndex) in newServices" :key="newIndex" :class="{ 'service-card': true, 'full-width': newIndex < 2 }">
        <div class="service-image" :style="{ backgroundImage: 'url(' + newService.imageUrl + ')' }">
          <div class="overlay">
            <h2>{{ newService.title }}</h2>
            <p>{{ newService.description }}</p>
            <p class="price">{{ newService.price }}</p>
          </div>
        </div>
        <router-link :to="{ name: 'service-details', params: { id: services.length + newIndex + 1 } }">Подробнее</router-link>
      </div>
    </div>

    <button class="more-works-button">Больше работ</button>

    <div class="additional-text">
      <p class="large-text"><strong>Почему именно "vary_wedding"?</strong></p>
      <div class="main-text">
        <p>Команда профессионалов, которым можно доверить проведение свадьбы, работает с множеством пар из Санкт-Петербурга и всегда готова поделиться опытом с клиентами.</p>
        <p>Профессиональные организаторы свадьбы всегда на связи с клиентами и готовы ответить на все вопросы.</p>
        <p>Агентство активно работает в социальных сетях, делясь статьями и предложениями о свадебной организации.</p>
        <p>Агентство гордится партнерствами с лучшими поставщиками услуг для свадьбы в Санкт-Петербурге.</p>
        <p>Работаем для того, чтобы ваша свадьба в СПб стала незабываемым праздником. Свяжитесь с нами для получения подробной информации о ценах и услугах, и доверьте проведение этого важного события в вашей жизни агентству "vary_wedding".</p>
        <p>Организация свадьбы под ключ в Петербурге - это просто! Берем на себя все права и сбор всех деталей, чтобы вы могли наслаждаться этим важным событием. Команда профессионалов поможет с выбором лучших площадок для вашей свадьбы. Предоставляем полный спектр услуг, включая аренду, организацию прогулок и учет всех прочих пожеланий. Создадим незабываемый день рождения вашей любви!!!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Свадебная церемония',
          description: 'Организация свадебной церемонии в самых красивых загсах Петербурга.',
        },
        {
          title: 'Подбор площадок',
          description: 'Подбор уникальных мест для проведения банкета и прогулок.',
        },
        {
          title: 'Профессиональный макияж',
          description: 'Помощь стилистов и визажистов в создании идеального образа.',
        },
        {
          title: 'Детские зоны',
          description: 'Организация детских зон и развлечений на свадебных мероприятиях.',
        },
      ],
      newServices: [
        {
          title: 'Свадьба Екатерины и Никиты',
          description: 'Архитектура любви. Время подготовки: 6 мес; Команда проекта: 65 чел; Кол-во гостей: 70 чел',
          imageUrl: require('@/assets/a.jpg'),
          price: '₽4000000',
        },
        {
          title: 'Свадьба Егения Екатерины',
          description: 'Свадебная вечеринка. Время подготовки: 3 мес; Команда проекта: 35 чел; Кол-во гостей: 40 чел',
          imageUrl: require('@/assets/s.jpg'),
          price: '₽2000000',
        },
        {
          title: 'Свадьба Кирилла и Насти',
          description: 'Кол-во гостей: 40; Времени подготовки: 5 мес; Команда проекта: 31 чел',
          imageUrl: require('@/assets/d.jpg'),
          price: '₽3000000',
        },
        {
          title: 'Свадьба Сони и Сергея',
          description: 'Время подготовки: 2 мес; Команда проекта: 31 чел; Кол-во гостей: 80 чел',
          imageUrl: require('@/assets/f.jpg'),
          price: '₽2000000',
        },
        {
          title: 'Свадьба Анны и Алексея',
          description: 'Свадьба во дворце. Время подготовки: 11 мес; Команда проекта: 34 чел; Кол-во гостей: 50 чел',
          imageUrl: require('@/assets/g.jpg'),
          price: '₽3000000',
        },
        {
          title: 'Свадьба Александра и Полины',
          description: 'Современная классика. Время подготовки: 3 мес; Команда проекта: 25 чел; Кол-во гостей: 17 чел',
          imageUrl: require('@/assets/h.jpg'),
          price: '₽2000000',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.services-container {
  background-color: #aedff7;
  padding: 40px;
  min-height: 100vh;
}

.center-text {
  margin-top: 70px;
  margin-bottom: 30px;
  text-align: center;
}

.services-list, .photo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
}

.service-card {
  position: relative;
  flex: 1 1 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #227fbd;
  }

  p {
    margin-top: 10px;
  }

  router-link {
    display: block;
    margin-top: 10px;
    color: #227fbd;
    text-decoration: none;
    font-weight: bold;
  }

  &.white-border:hover {
    border: 2px solid #227fbd;
  }

  .service-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 10px;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover .overlay {
      opacity: 1;
    }

    .overlay h2 {
      margin: 0;
      font-size: 18px;
    }

    .overlay p {
      margin: 5px 0;
      font-size: 14px;
    }

    .overlay .price {
      font-size: 16px;
      font-weight: bold;
    }
  }
}

.photo-list .full-width {
  flex: 1 1 calc(20% - 10px);
}

.more-works-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #227fbd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  display: inline-block; 
  text-align: center; 
  text-decoration: none; 
  white-space: nowrap; 

  &:hover {
    background-color: #00508c;
  }

  &:focus {
    outline: none; 
  }
}

.additional-text {
  margin-top: 20px;
  line-height: 1.6;

  .large-text {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }

  .main-text {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    p {
      flex: 1 1 45%;
      margin: 0;
    }
  }
}
</style>

