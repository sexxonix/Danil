<template>
  <!-- Открываем раздел шаблона Vue-компонента -->
  <div class="header">
    <!-- Блок секции заголовка страницы -->
    <div class="logo">vary_wedding</div>
    <!-- Блок меню с навигационными ссылками -->
    <div class="menu">
      <!-- Роутерные ссылки для перехода на главную и страницу услуг -->
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/services" class="nav-link">Услуги</router-link>
    </div>
    <!-- Блок авторизации с роутерными ссылками для входа и регистрации -->
    <div class="auth">
      <router-link to="/login" class="nav-link">Войти</router-link>
      <router-link to="/register" class="nav-link">Зарегистрироваться</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Стили для компонента, ограниченные областью компонента (scoped) */

/* Стили для блока заголовка страницы */
.header {
background-color: #227fbd;
color: #fff;
padding: 25px;
margin: 0;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1000;
}

/* Стили для логотипа */
.logo {
font-size: 24px;
font-weight: bold;
}

/* Стили для блока меню и блока авторизации */
.menu,
.auth {
display: flex;
}

/* Стили для навигационных ссылок в меню */
.nav-link {
color: #fff;
text-decoration: none;
margin: 0 15px;
font-size: 18px;
transition: all 0.3s;

/* Стили при наведении на ссылку */
&:hover {
  color: #ffeb3b;
  transform: scale(1.1);
}
}
</style>
