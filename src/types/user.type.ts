export interface IUser{
  email: string;
  name: string;
  city: string;
  company: string;
}

export interface IContext{
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}

export interface IResponse{
  name: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  }
}