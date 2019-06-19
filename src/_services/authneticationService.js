import { httpService } from '../core/httpService';
import { storageService } from './storageService';

export const authenticationService = {
  login,
  register,
  logout,
};

function login(credentials) {
  return httpService.postMethod('users/authenticate', credentials);
}

function register(user) {
  return httpService.postMethod('users/register', user);
}

function logout() {
  storageService.removeData('user');
}
