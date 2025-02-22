'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function CartDisplay() {
    const { cart, totalItems, removeFromCart, clearCart } = useCart();

    return (
        <div className="border rounded-lg p-4 bg-white my-10">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Shopping Cart ({totalItems})</h3>
                <Button variant="ghost" onClick={clearCart} className="text-red-600">
                    Clear Cart
                </Button>
            </div>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <div className="space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center w-[600px]">
                            <div>
                                <Image width={80} height={80} src={item.image} alt={item.name} />
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-gray-500">
                                    {item.quantity} x ${item.price}
                                </p>
                            </div>
                            <Button
                                variant="ghost"
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500"
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                    <div className="border-t pt-4">
                        <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>
                                ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                            </span>
                        </div>
                        <Button className="w-full mt-4">Checkout</Button>
                    </div>
                </div>
            )}
        </div>
    );
} 