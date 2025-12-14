import { loadUsers, saveUsers } from '../utils/storage';

export const register = async (
  fullname: string,
  email: string,
  password: string
): Promise<void> => {
  const users = await loadUsers();

  if (users.some(user => user.email === email)) {
    throw new Error('Email já está em uso');
  }

  const id = users.length === 0 ? 1 : users.length + 1;
  users.push({ id, fullname, email, password });

  saveUsers(users);
};

export const updateUser = async (
  data: { fullname?: string; email?: string; password?: string },
  id: number
): Promise<void> => {
  const newUsers = await loadUsers();
  const index = newUsers.findIndex(user => user.id === id);

  newUsers[index] = { ...newUsers[index], ...data };

  saveUsers(newUsers);
};
