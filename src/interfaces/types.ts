export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IRestaurant {
  id: number;
  name: string;
  category: string;
  deliveryTime: string; 
  rating: number;
  image: string;
  menu: IMenuItem[]; 
}

export interface ICartItem extends IMenuItem {
    quantity: number; 
  }
