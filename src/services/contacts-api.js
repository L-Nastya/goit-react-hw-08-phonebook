
import instance from './auth-api';


export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const add = async (data) => {
  const { data: result } = await instance.post('/contacts', data);
  console.log(data);
  return result;
};

export const remove = async (id) => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};




