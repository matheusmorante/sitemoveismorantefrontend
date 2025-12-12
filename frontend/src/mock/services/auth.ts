import { UserSession } from '../../types/users.type';
import { loadUsers } from '../utils/storage';

export const login = async (email: string, password: string) => {
  const users = await loadUsers();

  const userExists = users.find(user => user.email === email && user.password === password);
  if (!userExists) {
    throw new Error('Email ou senha inválidos');
  }

  const sessionUser = {
    id: userExists.id,
    fullname: userExists.fullname,
    email,
    expires: Date.now() + 1000 * 60 * 60 * 12,
  };

  sessionStorage.setItem('sessionUser', JSON.stringify(sessionUser));
};

export const logout = async () => {
  localStorage.removeItem('users');
};

export const checkSession = (): UserSession | null => {
  const item = sessionStorage.getItem('sessionUser');
  if (!item) return null;

  const userSession = JSON.parse(item);

  if (Date.now() > userSession.expires) {
    sessionStorage.removeItem('sessionUser');
    return null;
  }

  return userSession;
};
