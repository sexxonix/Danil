// Импортируем Vue из библиотеки "vue"
import Vue from "vue";

// Импортируем компонент App из файла "./App.vue"
import App from "./App.vue";

// Импортируем объект router из файла "./router"
import router from "./router";

// Отключаем подсказки по продакшну в консоли Vue
Vue.config.productionTip = false;

// Создаем новый экземпляр Vue
new Vue({
  // Рендерим корневой компонент App, используя функцию h
  render: (h) => h(App),

  // Подключаем объект router к экземпляру Vue
  router,

  // Монтируем (устанавливаем) экземпляр Vue в элемент с id "app" в HTML
}).$mount("#app");
