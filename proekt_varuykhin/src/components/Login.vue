<template>
  <!-- Открываем раздел шаблона Vue-компонента -->
  <div class="login-container">
    <!-- Контейнер для формы входа -->
    <div class="login-form">
      <!-- Заголовок формы -->
      <h1>Вход</h1>
      
      <!-- Форма для ввода данных пользователя -->
      <form>
        <!-- Поле для ввода логина -->
        <label for="username">Логин:</label>
        <input type="text" id="username" v-model="username" />

        <!-- Поле для ввода пароля с возможностью отображения/скрытия -->
        <label for="password">Пароль:</label>
        <div class="password-input">
          <input type="password" id="password" v-model="password" :type="showPassword ? 'text' : 'password'" />
          <!-- Иконка для переключения видимости пароля -->
          <span @click="togglePasswordVisibility">{{ showPassword ? '👁️' : '🔒' }}</span>
        </div>
        
        <!-- Кнопка для запуска процесса входа -->
        <button @click.prevent="login">Войти</button>

        <!-- Ссылка на страницу восстановления пароля -->
        <div class="forgot-password">
          <router-link to="/forgot-password">Забыли пароль?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Экспортируем Vue-компонент
export default {
  // Используем функцию data для определения данных компонента
  data() {
    return {
      // Свойства, связанные с данными пользователя
      username: '',
      password: '',
      showPassword: false, // Флаг для отображения/скрытия пароля
    };
  },
  // Используем блок methods для определения методов компонента
  methods: {
    // Метод для переключения видимости пароля
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    // Метод для обработки процесса входа
    login() {
      // Вывод данных пользователя в консоль (замените на свою логику входа)
      console.log('Логин:', this.username);
      console.log('Пароль:', this.password);
      // Переход на главную страницу после успешного входа
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
/* Стили для компонента, ограниченные областью компонента (scoped) */

/* Стили для контейнера входа */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Стили для блока с формой входа */
.login-form {
  background-color: #aedff7;
  color: #000000;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: -40px;
}

/* Стили для формы ввода данных */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Стили для меток полей ввода */
label {
  margin-bottom: 5px;
}

/* Стили для полей ввода */
input {
  padding: 12px;
  margin-bottom: 5px;
}

/* Стили для блока с вводом пароля и иконкой переключения видимости */
.password-input {
  position: relative;

  /* Стили для иконки переключения видимости */
  span {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}

/* Стили для кнопки входа */
button {
  padding: 12px;
  background-color: #fff;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* Стили при наведении на кнопку */
  &:hover {
    background-color: #227fbd;
  }
}

/* Стили для блока с ссылкой на восстановление пароля */
.forgot-password {
  margin-top: 10px;
  text-align: center;

  /* Стили для ссылки */
  a {
    color: #000000;
    text-decoration: none;
    font-weight: bold;

    /* Стили при наведении на ссылку */
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
