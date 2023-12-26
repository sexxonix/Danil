<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Вход</h1>
      <form>
        <label for="username">Логин:</label>
        <input type="text" id="username" v-model="username" />

        <label for="password">Пароль:</label>
        <div class="password-input">
          <input type="password" id="password" v-model="password" :type="showPassword ? 'text' : 'password'" />
          <span @click="togglePasswordVisibility">{{ showPassword ? '👁️' : '🔒' }}</span>
        </div>
        <button @click.prevent="login">Войти</button>
        <div class="forgot-password">
          <router-link to="/forgot-password">Забыли пароль?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    login() {
      // Добавьте вашу логику входа здесь
      console.log('Логин:', this.username);
      console.log('Пароль:', this.password);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.login-form {
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
  gap: 15px; /* Добавлен отступ между элементами внутри формы */
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
}

.password-input span {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

button {
  padding: 12px;
  background-color: #fff;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #227fbd;
}

.forgot-password {
  margin-top: 10px;
  text-align: center;
}

.forgot-password a {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
}

.forgot-password a:hover {
  text-decoration: underline;
}
</style>
