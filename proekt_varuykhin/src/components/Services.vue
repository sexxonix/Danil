<template>
  <div class="services-container">
    <h1 class="center-text">Наши Услуги</h1>
    <div class="services-list">
      <div v-for="(service, index) in services" :key="index" class="service-card">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <router-link :to="{ name: 'service-details', params: { id: index + 1 } }">Подробнее</router-link>
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
        // Добавьте свои услуги по аналогии
      ],
    };
  },
};
</script>

<style scoped>
.services-container {
  background-color: #aedff7;
  padding: 40px;
  min-height: 100vh;
}

.center-text {
  text-align: center;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.service-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 300px; /* Гибкий размер карточки с минимальной шириной 300px */
}

.service-card h2 {
  color: #227fbd;
}

.service-card p {
  margin-top: 10px;
}

.service-card router-link {
  display: block;
  margin-top: 10px;
  color: #227fbd;
  text-decoration: none;
  font-weight: bold;
}
.center-text{
  margin-bottom: 25px;
  margin-top: 80px;
}
</style>
