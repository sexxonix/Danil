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
  
  <style lang="scss" scoped>
  $header-bg-color: #227fbd;
  $header-text-color: #fff;
  $header-padding: 25px;
  $header-font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  $header-link-color: #fff;
  $header-link-hover-color: #ffeb3b;
  
  .header {
    background-color: $header-bg-color;
    color: $header-text-color;
    padding: $header-padding;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $header-font-family;
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
    color: $header-link-color;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    transition: all 0.3s;
  
    &:hover {
      color: $header-link-hover-color;
      transform: scale(1.1);
    }
  }
  </style>
  