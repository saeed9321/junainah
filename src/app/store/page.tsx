import { PageLayout } from "@/components/layout/PageLayout";
import { ProductGrid } from "@/components/store/ProductGrid";
import Image from "next/image";
import Link from "next/link";

export default function StorePage() {
    return (
        <PageLayout>
            <div className="min-h-screen px-4 pt-36 bg-gradient-to-b from-black/90 to-green-100">
                {/* Hero Section */}
                <div className="container mx-auto mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Banner */}
                        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-[#E7F6F3]">
                            <div className="p-4 lg:p-12 relative z-10">
                                <h2 className="text-lg mb-2">Fresh & Healthy</h2>
                                <h1 className="text-4xl lg:text-4xl font-bold text-green-600 mb-4">
                                    FRUITS & VEGETABLES
                                </h1>
                                <p className="text-xl mb-6">starting at $ 29.99</p>
                                <Link
                                    href="/store/category/fruits-vegetables"
                                    className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                                >
                                    Shop Now »
                                </Link>
                            </div>
                            <Image
                                src="/images/products/5.jpg"
                                alt="Fresh fruits and vegetables"
                                width={600}
                                height={400}
                                className="absolute right-0 bottom-0 object-contain w-full"
                            />
                        </div>

                        {/* Side Banners */}
                        <div className="flex flex-col gap-6">
                            {/* Fresh Fruits Banner */}
                            <div className="relative rounded-2xl overflow-hidden bg-[#FFF8E6] p-6">
                                {/* Background Pattern */}
                                <div className="relative z-10">
                                    <h3 className="text-lg text-green-600 mb-1">Fresh</h3>
                                    <h2 className="text-2xl font-bold mb-4">Fruits</h2>
                                    <Link
                                        href="/store/category/fruits"
                                        className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
                                    >
                                        Shop Now »
                                    </Link>
                                </div>
                                <Image
                                    src="/images/products/7.jpg"
                                    alt="Fresh fruits"
                                    width={200}
                                    height={200}
                                    className="absolute right-0 bottom-0 object-contain z-0 w-full"
                                />
                            </div>

                            {/* Organic Vegetables Banner */}
                            <div className="relative rounded-2xl overflow-hidden bg-[#FFE8E8] p-6">
                                {/* Background Pattern */}
                                <div className="relative z-10">
                                    <h3 className="text-lg text-green-600 mb-1">Organic</h3>
                                    <h2 className="text-2xl font-bold mb-4">Vegetables</h2>
                                    <Link
                                        href="/store/category/vegetables"
                                        className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
                                    >
                                        Shop Now »
                                    </Link>
                                </div>
                                <Image
                                    src="/images/products/8.jpg"
                                    alt="Organic vegetables"
                                    width={200}
                                    height={200}
                                    className="absolute right-0 bottom-0 object-contain z-0 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ProductGrid />
            </div>
        </PageLayout>
    );
} 