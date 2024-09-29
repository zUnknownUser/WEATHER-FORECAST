<template>
    <div class="weather-container">
      <h2>Weather Forecast</h2>
      <form @submit.prevent="fetchWeatherData">
        <div class="input-group">
          <label for="location">Location</label>
          <input type="text" id="location" v-model="location" required />
        </div>
        <button type="submit">Get Weather</button>
      </form>
      <div v-if="weatherData" class="weather-data">
        <h3>Weather Data for {{ weatherData.location.name }}</h3>
        <p><strong>Temperature:</strong> {{ weatherData.current.temperature }}°C</p>
        <p><strong>Weather Descriptions:</strong> {{ weatherData.current.weather_descriptions.join(', ') }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '../axios'; 
  
  export default {
    data() {
      return {
        location: '',
        weatherData: null
      };
    },
    methods: {
      async fetchWeatherData() {
        try {
          const response = await apiClient.get('/current', {
            params: {
              query: this.location
            }
          });
          this.weatherData = response.data;
          console.log('Weather Data:', response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .weather-container {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }
  
  .weather-container:hover {
    transform: scale(1.05);
  }
  
  h2 {
    margin-bottom: 1.5rem;
    color: #333;
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  }
  
  h2:hover {
    color: #4CAF50;
    text-shadow: 2px 2px 4px rgba(76, 175, 80, 0.5);
  }
  
  .input-group {
    margin-bottom: 1rem;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }
  
  label:hover {
    color: #4CAF50;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  input:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background: linear-gradient(135deg, #4CAF50, #388E3C);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
  
  button:hover {
    background: linear-gradient(135deg, #45a049, #2e7d32);
    transform: translateY(-2px);
  }
  
  .weather-data {
    margin-top: 2rem;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .weather-data:hover {
    transform: translateY(-2px);
  }
  
  .weather-data h3 {
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.8rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  }
  
  .weather-data h3:hover {
    color: #4CAF50;
    text-shadow: 2px 2px 4px rgba(76, 175, 80, 0.5);
  }
  
  .weather-data p {
    margin: 0.5rem 0;
    color: #555;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;
  }
  
  .weather-data p:hover {
    color: #4CAF50;
  }
  </style>