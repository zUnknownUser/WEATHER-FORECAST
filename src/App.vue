<template>
  <div id="app">
    <WeatherForecast />
  </div>
</template>

<script>
import WeatherForecast from './components/WeatherForecast.vue';

export default {
  name: 'App',
  components: {
    WeatherForecast
  }
};
</script>

<style>
@keyframes colorChange {
  0% {
    background-color: #ff9a9e;
  }
  25% {
    background-color: #fad0c4;
  }
  50% {
    background-color: #fad0c4;
  }
  75% {
    background-color: #ff9a9e;
  }
  100% {
    background-color: #ff9a9e;
  }
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  animation: colorChange 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
</style>