export interface PictureInterface {
  description: string;
  pictureDate: string;
  userId: UserInterface;
  messageId: MessageInterface[];
  urlPicture: string;
  __v: number;
  id: string;
}

export interface UserInterface {
  nombre?: string;
  nombreUsuario: string;
  urlFotoUser: string;
  id: string;
}

export interface MessageInterface {
  messageText: string;
  messageDate: string;
  userId: UserInterface;
  id: string;
}

export interface Login {
  nombreUsuario: string;
  password: string;
}

export interface ErrorInterface {
  error?: string;
}

export interface Register {
  nombre: string;
  nombreUsuario: string;
  password: string;
  userImg?: File;
}
