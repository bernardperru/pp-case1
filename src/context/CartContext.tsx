import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product, useGetOrder } from "../hooks/useGetOrder";
import { useGetFavorites } from "../hooks/useGetFavorites";

export type CartItem = {
  product: Product;
  quantity: number;
};

type UserContext = {
  cartItems: CartItem[];
  favoriteItems: Product[];
  cartQuantity: () => number;
  cartTotal: () => number;
  addFavoriteItem: (product: Product) => void;
  removeFavoriteItem: (id: number) => void;
  getItemQuantity: (id: number) => number;
  isFavorite: (id: number) => boolean;
  addToCart: (product: Product) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as UserContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { data, loading, error } = useGetOrder();
  const {
    data: favorites,
    loading: loading1,
    error: error1,
  } = useGetFavorites();

  useEffect(() => {
    if (data) {
      setCartItems(
        data.map((product) => {
          return { product: product, quantity: 1 } as CartItem;
        })
      );
    }
    if (favorites) {
      setFavoriteItems(favorites);
    }
  }, [loading, loading1]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.product.id === id)?.quantity || 0;
  }

  function removeFavoriteItem(id: number) {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== id));
  }

  function addFavoriteItem(product: Product) {
    setFavoriteItems([...favoriteItems, product]);
  }

  function isFavorite(id: number) {
    return favoriteItems.find((item) => item.id === id) ? true : false;
  }

  function addToCart(product: Product) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product.id === product.id) === null) {
        return [...currItems, { product, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function cartTotal() {
    if (cartItems.length > 0) {
      return cartItems
        .map((item) => item.product.attenuation_level * item.quantity)
        .reduce((sum, current) => sum + current);
    } else {
      return 0;
    }
  }

  function cartQuantity() {
    if (cartItems.length > 0) {
      return cartItems
        .map((item) => item.quantity)
        .reduce((sum, current) => sum + current);
    } else {
      return 0;
    }
  }
  return (
    <CartContext.Provider
      value={{
        cartTotal,
        cartQuantity,
        addToCart,
        isFavorite,
        addFavoriteItem,
        removeFavoriteItem,
        cartItems,
        getItemQuantity,
        favoriteItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
