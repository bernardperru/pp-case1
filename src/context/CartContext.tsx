import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../types';
import { useGetFavorites, useGetOrder } from '../hooks';

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
	const { data: favorites, loading: loading1, error: error1 } = useGetFavorites();

	useEffect(() => {
		if (data) {
			setCartItems(
				data.map(product => {
					return { product: product, quantity: 1 } as CartItem;
				})
			);
		}
	}, [data]);

	useEffect(() => {
		if (favorites) {
			setFavoriteItems(favorites);
		}
	}, [favorites]);

	function addToCart(product: Product) {
		setCartItems(currItems => {
			const itemIndex = currItems.findIndex(item => item.product.id === product.id);

			if (itemIndex === -1) {
				return [...currItems, { product, quantity: 1 }];
			}

			currItems[itemIndex].quantity++;
			return currItems;
		});
	}

	return (
		<CartContext.Provider
			value={{
				cartTotal: () =>
					cartItems
						.map(item => item.product.attenuation_level * item.quantity)
						.reduce((sum, current) => sum + current, 0),
				cartQuantity: () => cartItems.map(item => item.quantity).reduce((sum, current) => sum + current, 0),
				addToCart,
				isFavorite: id => favoriteItems.some(item => item.id === id),
				addFavoriteItem: product => setFavoriteItems([...favoriteItems, product]),
				removeFavoriteItem: id => setFavoriteItems(favoriteItems.filter(item => item.id !== id)),
				cartItems,
				getItemQuantity: id => cartItems.find(item => item.product.id === id)?.quantity || 0,
				favoriteItems,
			}}>
			{children}
		</CartContext.Provider>
	);
}
