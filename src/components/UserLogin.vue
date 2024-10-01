/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Simulação de autenticação
      if (this.username === 'user' && this.password === 'password') {
        this.$router.push('/weather');
      } else {
        alert('Invalid credentials');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #2980b9;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #3498db;
}
</style>