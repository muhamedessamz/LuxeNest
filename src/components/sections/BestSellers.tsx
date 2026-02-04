import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { Heart, ArrowRight } from 'lucide-react';

import { products } from '../../data/products';

const BestSellers: React.FC = () => {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const bestSellers = products.filter(p => p.id.startsWith('bs-'));

    const handleWishlistToggle = (e: React.MouseEvent, product: any) => {
        e.preventDefault();
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            });
        }
    };

    return (
        <section className="bg-primary/5 py-20">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-black text-[#181511] transition-colors duration-300">Our Best Sellers</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                    <p className="text-[#86775f] max-w-2xl text-lg leading-relaxed">Discover the pieces that define modern luxury. Loved by our clients and designed for a lifetime.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map((product, index) => (
                        <Link
                            key={index}
                            to={`/product/${product.id}`}
                            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#e1ddd5] group flex flex-col items-center"
                        >
                            <div className="w-full rounded-lg overflow-hidden aspect-square mb-4 bg-[#f0eeea] relative">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={product.image}
                                    alt={product.name}
                                />
                                <button
                                    onClick={(e) => handleWishlistToggle(e, product)}
                                    className={`absolute top-4 right-4 p-2.5 rounded-full shadow-md transition-all duration-300 z-10 ${isInWishlist(product.id) ? 'bg-primary text-white scale-110' : 'bg-white/90 text-charcoal opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white'}`}
                                >
                                    <Heart className={`size-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                            <div className="flex flex-col items-center text-center w-full px-2">
                                <h4 className="font-bold text-lg mb-1 text-charcoal group-hover:text-primary transition-colors duration-300">{product.name}</h4>
                                <p className="text-primary font-bold text-base mb-4">${product.price}</p>
                                <button
                                    className="w-full py-2.5 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                                >
                                    View Details
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link
                        to="/collections"
                        className="flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                    >
                        View All Products
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
