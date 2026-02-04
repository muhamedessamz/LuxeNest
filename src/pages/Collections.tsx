import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';

const Collections: React.FC = () => {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1', 10);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setSearchParams({ page: page.toString() });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleWishlistToggle = (e: React.MouseEvent, product: any) => {
        e.preventDefault();
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="max-w-[1440px] mx-auto flex flex-col gap-2">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 px-10 pt-8 justify-center">
                <Link className="text-[#86775f] text-sm font-medium leading-normal hover:underline" to="/">Home</Link>
                <span className="text-[#86775f] text-sm font-medium leading-normal">/</span>
                <span className="text-[#181511] text-sm font-medium leading-normal">Collections</span>
            </div>

            {/* Page Heading Centered */}
            <div className="flex flex-col items-center text-center gap-4 px-10 py-8 mb-4">
                <h1 className="text-[#181511] text-5xl md:text-6xl font-black leading-tight tracking-tight">Our Collections</h1>
                <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                <p className="text-[#86775f] text-xl font-normal leading-relaxed max-w-2xl">Curated premium furniture for modern living.</p>
            </div>

            {/* Filters & Sort Bar Removed */}

            <div className="flex flex-col gap-8 px-10 pb-20">
                {/* Product Grid */}
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProducts.map((product) => (
                            <Link
                                key={product.id}
                                to={`/product/${product.id}`}
                                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e1ddd5] group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={product.image}
                                    />
                                    {product.badge && (
                                        <div className={`absolute top-4 left-4 ${product.badgeColor || 'bg-primary'} text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded`}>
                                            {product.badge}
                                        </div>
                                    )}
                                    <button
                                        onClick={(e) => handleWishlistToggle(e, product)}
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-all active:scale-90 hover:scale-105"
                                    >
                                        <Heart className={`size-5 ${isInWishlist(product.id) ? 'fill-primary text-primary' : 'text-charcoal'}`} />
                                    </button>
                                </div>
                                <div className="p-4 flex flex-col gap-3 text-center items-center">
                                    <div className="flex flex-col gap-2 items-center w-full">
                                        <p className="text-[#86775f] text-xs font-bold uppercase tracking-widest">{product.category}</p>
                                        <h3 className="text-[#181511] text-xl font-black">{product.name}</h3>
                                        <div className="flex items-center gap-3 justify-center">
                                            <p className="text-primary text-xl font-bold leading-tight">${product.price}</p>
                                            {// @ts-ignore
                                                product.oldPrice && <p className="text-[#86775f] text-base line-through opacity-70">{product.oldPrice}</p>}
                                        </div>
                                    </div>
                                    <button
                                        className="mt-1 w-full flex items-center justify-center gap-2 rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-sm hover:shadow-primary/20"
                                    >
                                        <span>View Details</span>
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center items-center gap-2">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center h-10 w-10 rounded-lg border border-[#f0eeea] hover:bg-primary/10 text-[#86775f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="size-5" />
                        </button>

                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handlePageChange(idx + 1)}
                                className={`flex items-center justify-center h-10 w-10 rounded-lg transition-colors font-bold ${currentPage === idx + 1
                                    ? 'bg-primary text-white'
                                    : 'border border-[#f0eeea] hover:bg-primary/10 text-[#181511]'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="flex items-center justify-center h-10 w-10 rounded-lg border border-[#f0eeea] hover:bg-primary/10 text-[#86775f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
