export type DoggyPicInfo = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type UserData = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export type Comment = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};
