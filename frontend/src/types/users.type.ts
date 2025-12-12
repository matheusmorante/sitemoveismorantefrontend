export type User = {
  id: number;
  fullname: string;
  email: string;
  password: string;
};

export type UserSession = {
  id: number;
  fullname: string;
  email: string;
  expires: number;
};
