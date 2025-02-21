import { ProductCard } from "@/components/cards/ProductCard";
import { products } from "@/constants/data";

export function ProductGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-24 mb-24">
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
} 