<template>
    <div class="header">
      <div class="logo">vary_wedding</div>
      <div class="menu">
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/services" class="nav-link">Услуги</router-link>
      </div>
      <div class="auth">
        <router-link to="/login" class="nav-link">Войти</router-link>
        <router-link to="/register" class="nav-link">Зарегистрироваться</router-link>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
.header {
  background-color: #227fbd;
  color: #fff;
  padding: 30px;
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

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu,
.auth {
  display: flex;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  transition: all 0.3s;

  &:hover {
    color: #ffeb3b;
    transform: scale(1.1);
  }
}
</style>
  