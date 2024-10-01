<template>
  <div class="weather-container" v-if="weatherData.current">
    <div class="weather-header">
      <h1>Weather in {{ city }}</h1>
      <p>Last Update: {{ lastUpdate }}</p>
    </div>
    <div class="weather-info">
      <div class="weather-icon">
        <img :src="weatherData.current.weather_icons[0]" alt="Weather Icon" />
      </div>
      <div class="weather-details">
        <p class="temperature">{{ weatherData.current.temperature }}°C</p>
        <p class="description">{{ weatherData.current.weather_descriptions[0] }}</p>
        <p class="humidity">Humidity: {{ weatherData.current.humidity }}%</p>
        <p class="wind-speed">Wind Speed: {{ weatherData.current.wind_speed }} km/h</p>
      </div>
    </div>
    <div class="city-input">
      <input v-model="city" :class="inputClass" placeholder="Enter city name" />
      <button @click="fetchWeatherData">Get Weather</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiKey: '618353e8502ed150902d107b464404d7', // Substitua pela sua chave de API real
      city: 'Manaus',
      weatherData: {},
      lastUpdate: '',
    };
  },
  computed: {
    inputClass() {
      if (this.weatherData.current) {
        const temp = this.weatherData.current.temperature;
        if (temp <= 25) {
          return 'cold';
        } else if (temp >= 30) {
          return 'hot';
        } else {
          return 'moderate';
        }
      }
      return 'moderate';
    }
  },
  methods: {
    fetchWeatherData() {
      axios.get(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`)
        .then(response => {
          this.weatherData = response.data;
          this.lastUpdate = new Date().toLocaleString();
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.fetchWeatherData();
    setInterval(this.fetchWeatherData, 60000); // Atualiza a cada 60 segundos
  }
};
</script>

<style scoped>
.weather-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #6dd5fa, #2980b9);
  color: #fff;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  font-family: 'Arial', sans-serif;
}

.weather-container:hover {
  transform: translateY(-5px);
}

.weather-header {
  margin-bottom: 20px;
}

.weather-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.weather-icon img {
  width: 100px;
  height: 100px;
}

.weather-details {
  text-align: left;
}

.temperature {
  font-size: 48px;
  font-weight: bold;
  color: #ffeb3b;
  animation: move 2s infinite alternate;
}

.description {
  font-size: 24px;
  font-weight: bold;
  color: #ffeb3b;
}

.humidity, .wind-speed {
  margin: 10px 0;
  font-size: 18px;
  color: #fff;
}

.weather-details p {
  transition: color 0.3s ease-in-out;
}

.weather-details p:hover {
  color: #ffeb3b;
}

.city-input {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.city-input input {
  padding: 10px;
  border: 2px solid #ffeb3b;
  border-radius: 5px 0 0 5px;
  margin-right: -1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 0.3s ease-in-out;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: #333;
  background-color: #fff;
}

.city-input input:focus {
  border-color: #ffd700;
}

.city-input button {
  padding: 10px 20px;
  border: 2px solid #ffeb3b;
  border-radius: 0 5px 5px 0;
  background-color: #ffeb3b;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

.city-input button:hover {
  background-color: #ffd700;
  border-color: #ffd700;
}

/* Classes para diferentes temperaturas */
.cold {
  background-color: #b3e5fc;
  border-color: #81d4fa;
}

.hot {
  background-color: #fff9c4;
  border-color: #fff59d;
}

.moderate {
  background-color: #fff;
  border-color: #ffeb3b;
}

/* Animação para a temperatura */
@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

/* Direitos Autorais */
</style>
<!-- Direitos Autorais -->
<p style="text-align: center; font-size: 20px; color: #fff; margin-top: 20px;">
  © 2023 Lucas Amorim. Todos os direitos reservados.
</p>