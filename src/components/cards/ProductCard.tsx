'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/context/CartContext';
import Image from "next/image";
import { PlusCircle } from "lucide-react";

interface ProductCardProps {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    image: string;
    isNew?: boolean;
    isSale?: boolean;
    weight?: string;
}

export function ProductCard({
    id,
    name,
    category,
    price,
    oldPrice,
    image,
    isNew,
    isSale,
    weight
}: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <Card className="group relative bg-white rounded-lg p-4 h-[300px]">
            {/* Badge */}
            {(isNew || isSale) && (
                <Badge
                    className={`
                        absolute top-4 left-4 z-10 
                        ${isSale ? 'bg-red-400' : 'bg-[#55B565] text-white'} 
                        px-3 py-1 rounded-md uppercase text-sm font-medium
                    `}
                >
                    {isSale ? 'Sale' : 'New'}
                </Badge>
            )}

            {/* Quick Add Icon */}
            <button
                className="absolute top-2 right-2 p-2 z-10 hover:border hover:bg-white hover:rounded-full hover:opacity-100 hover:z-50"
                onClick={() => addToCart({ id, name, price })}
            >
                <PlusCircle opacity={0.4} />
            </button>

            {/* Product Image */}
            <div className="relative mb-4 w-full flex justify-center items-center">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={150}
                    className="object-cover p-2 h-[170px] rounded-xl"
                />
            </div>

            {/* Category */}
            <div className="text-[#55B565] text-sm uppercase">
                {category}
            </div>

            {/* Product Name */}
            <h3 className="text-gray-700 text-md mb-1">
                {name}
            </h3>

            {/* Price and Weight Row */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-md font-bold">${price.toFixed(2)}</span>
                    {oldPrice && (
                        <span className="text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
                    )}
                </div>
                {weight && (
                    <span className="text-gray-500 text-md">{weight}</span>
                )}
            </div>
        </Card>
    );
} 