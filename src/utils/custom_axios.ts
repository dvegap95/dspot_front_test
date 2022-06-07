import axios from 'axios';

// middlewares, error checking, etc

// error handle interceptor
// axios.interceptors.response.use(
//   (response) => response,
//   (error: AxiosError) => {
//     let err = error.response?.data as any; //cast error data so it's easier to use
//     if (err?.message)
//       throw err; //if there's a message field, assume response data as the error itself
//     } else {
//       throw error; //do nothing and throw the original error
//     }
//   }
// );

export default axios;
