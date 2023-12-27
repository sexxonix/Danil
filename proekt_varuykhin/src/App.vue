<template>
  <!-- Открываем раздел шаблона Vue-компонента -->
  <div id="app">
    <!-- Вставляем компонент Header -->
    <Header />
    
    <!-- Используем router-view для отображения компонентов, соответствующих маршрутам -->
    <router-view />
    
    <!-- Вставляем компонент Footer -->
    <Footer />
  </div>
</template>

<script>
// Импортируем компоненты Header и Footer из соответствующих файлов
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// Экспортируем Vue-компонент
export default {
// Регистрируем компоненты Header и Footer для использования внутри шаблона
components: {
  Header,
  Footer,
},
};
</script>

<style>
/* Определяем стили для элемента с id "app" */
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
text-align: center;
color: #2c3e50;
}

/* Применяем общие стили для всех элементов в документе */
* {
margin: 0px;
text-decoration: none;
}
</style>

<!-- 
Закомментированный блок представляет собой SCSS-стили, которые можно использовать вместо обычных CSS
Однако, в данном случае, он закомментирован, и используются обычные CSS-стили
-->
<!-- <style lang="scss">
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
text-align: center;
color: #2c3e50;

* {
  margin: 0;
  text-decoration: none;
}
}
</style> -->
