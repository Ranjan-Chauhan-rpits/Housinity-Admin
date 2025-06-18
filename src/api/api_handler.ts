import axiosClient from './axios';

// login admin
export function adminLogin(email: string, password: string) {
  return axiosClient.post('/admin/login', { email, password });
}

// get all property
export function getAllProperty() {
  return axiosClient.get('/property/all');
}

// get Property by id

export function getPropertyById() {
  return axiosClient.post('/property/id/:id');
}

// add property

// search property

// export function createAdmin(
//   name: string,
//   email: string,
//   phone: string,
//   password: string
// ) {
//   return axiosClient.post('/admin', { name, email, phone, password });
// }
