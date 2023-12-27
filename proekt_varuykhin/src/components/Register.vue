<template>
  <div class="register-container">
    <div class="register-form">
      <h1>Регистрация</h1>
      <form>
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="name" />

        <label for="username">Логин:</label>
        <input type="text" id="username" v-model="username" />

        <label for="password">Пароль:</label>
        <div class="password-input">
          <input type="password" id="password" v-model="password" :type="showPassword ? 'text' : 'password'" />
          <span class="toggle-password" @click="togglePasswordVisibility">{{ showPassword ? '👁️' : '🔒' }}</span>
        </div>

        <label for="confirmPassword">Подтвердить пароль:</label>
        <div class="password-input">
          <input type="password" id="confirmPassword" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" />
          <span class="toggle-password" @click="toggleConfirmPasswordVisibility">{{ showConfirmPassword ? '👁️' : '🔒' }}</span>
        </div>

        <button @click.prevent="register">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    register() {
      // Добавьте вашу логику регистрации здесь
      console.log('Имя:', this.name);
      console.log('Логин:', this.username);
      console.log('Пароль:', this.password);
      console.log('Подтверждение пароля:', this.confirmPassword);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  background-color: #aedff7;
  color: #000000;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: -40px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 12px;
  margin-bottom: 5px;
}

.password-input {
  position: relative;

  .toggle-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}

button {
  padding: 12px;
  background-color: #fff;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #227fbd;
  }
}
</style>

