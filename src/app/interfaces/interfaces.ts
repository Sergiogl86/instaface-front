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
