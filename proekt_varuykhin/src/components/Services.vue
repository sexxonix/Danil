<template>
  <!-- Открываем раздел шаблона Vue-компонента -->
  <div class="services-container">
    <!-- Заголовок блока с услугами -->
    <h1 class="center-text">Наши Услуги</h1>

    <!-- Блок с перечислением основных услуг -->
    <div class="services-list">
      <!-- Используем директиву v-for для создания карточек услуг -->
      <div v-for="(service, index) in services" :key="index" class="service-card white-border">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <!-- Создаем ссылку на страницу с подробностями услуги, используя маршрутизацию -->
        <router-link :to="{ name: 'service-details', params: { id: index + 1 } }">Подробнее</router-link>
      </div>
    </div>

    <!-- Блок с фотографиями новых услуг -->
    <div class="photo-list">
      <!-- Используем директиву v-for для создания карточек с фотографиями услуг -->
      <div v-for="(newService, newIndex) in newServices" :key="newIndex" :class="{ 'service-card': true, 'full-width': newIndex < 2 }">
        <!-- Изображение услуги с оверлеем и информацией -->
        <div class="service-image" :style="{ backgroundImage: 'url(' + newService.imageUrl + ')' }">
          <div class="overlay">
            <h2>{{ newService.title }}</h2>
            <p>{{ newService.description }}</p>
            <p class="price">{{ newService.price }}</p>
          </div>
        </div>
        <!-- Создаем ссылку на страницу с подробностями услуги для новых услуг -->
        <router-link :to="{ name: 'service-details', params: { id: services.length + newIndex + 1 } }">Подробнее</router-link>
      </div>
    </div>

    <!-- Кнопка для отображения больше работ -->
    <button class="more-works-button">Больше работ</button>

    <!-- Дополнительный текст с объяснением выбора "vary_wedding" -->
    <div class="additional-text">
      <p class="large-text"><strong>Почему именно "vary_wedding"?</strong></p>
      <div class="main-text">
        <!-- Перечисление преимуществ и опыта команды "vary_wedding" -->
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
// Экспортируем Vue-компонент
export default {
  // Используем функцию data для определения данных компонента
  data() {
    return {
      // Массив услуг
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
      // Массив новых услуг с фотографиями
      newServices: [
        // Каждая новая услуга представлена объектом с соответствующими полями
        {
          title: 'Свадьба Екатерины и Никиты',
          description: 'Архитектура любви. Время подготовки: 6 мес; Команда проекта: 65 чел; Кол-во гостей: 70 чел',
          imageUrl: require('@/assets/a.jpg'), // Путь к изображению
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
        // ...
        // Аналогичные объекты для других новых услуг
      ],
    };
  },
};
</script>

<style scoped lang="scss">
/* Стили для компонента, ограниченные областью компонента (scoped) */

/* Стили для контейнера с услугами */
.services-container {
  background-color: #aedff7;
  padding: 40px;
  min-height: 100vh;
}

/* Стили для центрированного текста */
.center-text {
  margin-top: 70px;
  margin-bottom: 30px;
  text-align: center;
}

/* Стили для блока с услугами и фотографиями */
.services-list, .photo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
}

/* Стили для карточки услуги */
.service-card {
  position: relative;
  flex: 1 1 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  /* Стили для заголовка услуги */
  h2 {
    color: #227fbd;
  }

  /* Стили для абзаца с описанием услуги */
  p {
    margin-top: 10px;
  }

  /* Стили для ссылки на страницу с подробностями услуги */
  router-link {
    display: block;
    margin-top: 10px;
    color: #227fbd;
    text-decoration: none;
    font-weight: bold;
  }

  /* Стили при наведении для карточки услуги */
  &.white-border:hover {
    border: 2px solid #227fbd;
  }

  /* Стили для изображения услуги */
  .service-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    /* Стили для оверлея с информацией о фотографии услуги */
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

    /* Стили для отображения оверлея при наведении */
    &:hover .overlay {
      opacity: 1;
    }

    /* Стили для заголовка в оверлее */
    .overlay h2 {
      margin: 0;
      font-size: 18px;
    }

    /* Стили для абзаца в оверлее */
    .overlay p {
      margin: 5px 0;
      font-size: 14px;
    }

    /* Стили для цены в оверлее */
    .overlay .price {
      font-size: 16px;
      font-weight: bold;
    }
  }
}

/* Стили для полноширинных карточек в блоке с фотографиями */
.photo-list .full-width {
  flex: 1 1 calc(20% - 10px);
}

/* Стили для кнопки "Больше работ" */
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

  /* Стили при наведении на кнопку */
  &:hover {
    background-color: #00508c;
  }

  /* Стили для фокуса на кнопке */
  &:focus {
    outline: none; 
  }
}

/* Стили для дополнительного текста */
.additional-text {
  margin-top: 20px;
  line-height: 1.6;

  /* Стили для крупного текста */
  .large-text {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }

  /* Стили для основного текста */
  .main-text {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    /* Стили для абзацев в основном тексте */
    p {
      flex: 1 1 45%;
      margin: 0;
    }
  }
}
</style>

        
    
