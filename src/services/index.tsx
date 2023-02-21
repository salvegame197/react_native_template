import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    console.log('interceptors', error);
    console.log('interceptors status', error.response.status);
    if (error.response.status === 401) {
      console.log('interceptors status 401', 'multiRemove');
      await AsyncStorage.multiRemove(['@Ticketeira:token', '@Ticketeira:user']);
    }
    return Promise.reject(error);
  },
);

export default api;
