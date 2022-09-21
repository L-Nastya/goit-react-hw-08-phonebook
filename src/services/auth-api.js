import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token) => {
    if(token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.authorization = "";
}

export const newUser = async (data) => {
  const { data: result } = await instance.post('/users/signup', data);
  console.log(result);
    setToken(result.token);
  return result;
};

export const existUser = async (data) => {
  const { data: result } = await instance.post('/users/login', data);
  console.log(result);
      setToken(result.token);
  return result;
};

export const exit = async () => {
    const {data} = await instance.post("/users/logout");
    setToken();
    return data;
}

export const getCurrent = async(token) => {
    try {
        setToken(token);
        const {data} = await instance.get("/users/current");
        return data;
    } catch (error) {
        setToken();
        throw error;
    }
}

export default instance;