import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fasteasy-jvqis72guq-lm.a.run.app/tz-front',
  headers: {
    Authorization: 'Basic cmVuZXNhbmRybzpxd2VydHkxMjM0',
  },
});
