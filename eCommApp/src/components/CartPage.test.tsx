import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import CartPage from './CartPage';
import { CartContext, CartItem } from '../context/CartContext';

// Mock components
vi.mock('./Header', () => ({
    default: () => <div data-testid="header">Header</div>
}));

vi.mock('./Footer', () => ({
    default: () => <div data-testid="footer">Footer</div>
}));

vi.mock('./CheckoutModal', () => ({
    default: ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => (
        <div data-testid="checkout-modal">
            <button onClick={onConfirm} data-testid="confirm-checkout">Continue Checkout</button>
            <button onClick={onCancel} data-testid="cancel-checkout">Return to cart</button>
        </div>
    )
}));

const mockCartItems: CartItem[] = [
    {
        id: '1',
        name: 'Test Product 1',
        price: 29.99,
        quantity: 2,
        image: 'test1.jpg',
        reviews: [],
        inStock: true
    },
    {
        id: '2',
        name: 'Test Product 2',
        price: 49.99,
        quantity: 1,
        image: 'test2.jpg',
        reviews: [],
        inStock: true
    }
];

const createMockCartContext = (cartItems: CartItem[] = mockCartItems) => ({
    cartItems,
    addToCart: vi.fn(),
    clearCart: vi.fn()
});

const renderWithCartContext = (cartItems: CartItem[] = mockCartItems) => {
    const cartContext = createMockCartContext(cartItems);

    return {
        cartContext,
        ...render(
            <CartContext.Provider value={cartContext}>
                <CartPage />
            </CartContext.Provider>
        )
    };
};

describe('CartPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('displays cart items when cart has items', () => {
        renderWithCartContext();

        expect(screen.getByText('Your Cart')).toBeInTheDocument();
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.getByText('Test Product 2')).toBeInTheDocument();
        expect(screen.getByText('Price: $29.99')).toBeInTheDocument();
        expect(screen.getByText('Price: $49.99')).toBeInTheDocument();
        expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
        expect(screen.getByText('Quantity: 1')).toBeInTheDocument();
    });

    it('displays an empty cart message when there are no items', () => {
        renderWithCartContext([]);

        expect(screen.getByText('Your Cart')).toBeInTheDocument();
        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });

    it('shows the checkout modal when the checkout button is clicked', async () => {
        const user = userEvent.setup();
        renderWithCartContext();

        await user.click(screen.getByRole('button', { name: /checkout/i }));

        expect(screen.getByTestId('checkout-modal')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /continue checkout/i })).toBeInTheDocument();
    });

    it('closes the checkout modal when checkout is canceled', async () => {
        const user = userEvent.setup();
        renderWithCartContext();

        await user.click(screen.getByRole('button', { name: /checkout/i }));
        await user.click(screen.getByRole('button', { name: /return to cart/i }));

        expect(screen.queryByTestId('checkout-modal')).not.toBeInTheDocument();
        expect(screen.getByText('Your Cart')).toBeInTheDocument();
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    });

    it('confirms checkout and shows the order processed state', async () => {
        const user = userEvent.setup();
        const { cartContext } = renderWithCartContext();

        await user.click(screen.getByRole('button', { name: /checkout/i }));
        await user.click(screen.getByRole('button', { name: /continue checkout/i }));

        expect(screen.getByText('Your order has been processed!')).toBeInTheDocument();
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(cartContext.clearCart).toHaveBeenCalledTimes(1);
    });
});
