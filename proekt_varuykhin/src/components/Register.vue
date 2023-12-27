<template>
  <!-- Открываем раздел шаблона Vue-компонента -->
  <div class="register-container">
    <!-- Контейнер для формы регистрации -->
    <div class="register-form">
      <!-- Заголовок формы -->
      <h1>Регистрация</h1>
      
      <!-- Форма для ввода данных пользователя -->
      <form>
        <!-- Поле для ввода имени -->
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="name" />

        <!-- Поле для ввода логина -->
        <label for="username">Логин:</label>
        <input type="text" id="username" v-model="username" />

        <!-- Поле для ввода пароля с возможностью отображения/скрытия -->
        <label for="password">Пароль:</label>
        <div class="password-input">
          <input type="password" id="password" v-model="password" :type="showPassword ? 'text' : 'password'" />
          <!-- Иконка для переключения видимости пароля -->
          <span class="toggle-password" @click="togglePasswordVisibility">{{ showPassword ? '👁️' : '🔒' }}</span>
        </div>

        <!-- Поле для подтверждения пароля с возможностью отображения/скрытия -->
        <label for="confirmPassword">Подтвердить пароль:</label>
        <div class="password-input">
          <input type="password" id="confirmPassword" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" />
          <!-- Иконка для переключения видимости подтверждения пароля -->
          <span class="toggle-password" @click="toggleConfirmPasswordVisibility">{{ showConfirmPassword ? '👁️' : '🔒' }}</span>
        </div>

        <!-- Кнопка для запуска процесса регистрации -->
        <button @click.prevent="register">Зарегистрироваться</button>
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
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      showPassword: false, // Флаг для отображения/скрытия пароля
      showConfirmPassword: false, // Флаг для отображения/скрытия подтверждения пароля
    };
  },
  // Используем блок methods для определения методов компонента
  methods: {
    // Метод для переключения видимости пароля
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    // Метод для переключения видимости подтверждения пароля
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    // Метод для обработки процесса регистрации
    register() {
      // Вывод данных пользователя в консоль (замените на свою логику регистрации)
      console.log('Имя:', this.name);
      console.log('Логин:', this.username);
      console.log('Пароль:', this.password);
      console.log('Подтверждение пароля:', this.confirmPassword);
      // Переход на главную страницу после успешной регистрации
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
/* Стили для компонента, ограниченные областью компонента (scoped) */

/* Стили для контейнера регистрации */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Стили для блока с формой регистрации */
.register-form {
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
  .toggle-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}

/* Стили для кнопки регистрации */
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
</style>
