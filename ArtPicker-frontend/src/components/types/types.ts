export interface SignupFormType {
  userName: string,
  email: string,
  password: string,
  password2: string,
  image: string
}

export interface SignupFormTypetoSend {
  userName: string,
  email: string,
  password: string,
  image: string
}

export interface SigninFormType {
  email: string,
  password: string
}

export interface PostFormType {
  title: string,
  subtitle: string,
  image: string
}

export interface hiddenMenuProps {
  menuHidden: boolean;
}

export interface profilePicture {
  createdAt?: string,
  id?: string,
  pictureLink: string,
  userId?: number
}

export interface comments {
  createdAt: string,
  id: number,
  text: string,
  users: {
    createdAt: string,
    id: number,
    profilePictures: profilePicture[],
    userName: string
  }
}

export interface profile {
  createdAt: string,
  email: string,
  id: number,
  profilePictures: profilePicture[],
  userName: string
}

export interface postFromApi {
  id: number,
  title: string,
  subtitle: string,
  pictureLink: string,
  pictureSerial: string
}

export interface PostFormTypeWithToken {
  title: string,
  subtitle: string,
  image: string,
  token: string | undefined
}

export interface LoginResponse {
  refreshToken: string,
  accessToken: string
}

export interface initialPagePosts {
  createdAt: string,
  id: number,
  pictureLink: string,
  pictureSerial: string,
  subtitle: string,
  title: string,
  userId: number
}

export interface postResponseType {
  createdAt: string,
  id: number,
  pictureLink: string,
  pictureSerial: string,
  subtitle: string,
  title: string,
  users: {
    createdAt: string,
    email: string,
    id: number,
    profilePictures: profilePicture[],
    userName: string
  }
}

export interface commentToSend {
  comment:string,
  token:string | undefined,
  id:string | undefined
}