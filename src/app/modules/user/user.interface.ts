export interface IUser {
  name: string;
  email: string;
  password: string;
  profile: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserMethods {
  matchPassword(enteredPassword: string): string;
}
