'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function CheckoutForm() {
    const { cart, clearCart } = useCart();

    return (
        <div className="space-y-6">
            <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Card Number</label>
                        <Input placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Expiration</label>
                            <Input placeholder="MM/YY" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">CVC</label>
                            <Input placeholder="123" />
                        </div>
                    </div>
                </div>
            </div>

            <Button
                className="w-full"
                onClick={() => {
                    alert('Payment processed successfully!');
                    clearCart();
                }}
            >
                Confirm Payment - $
                {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </Button>
        </div>
    );
} 