import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const product = products.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(product?.image || '');

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Link to="/collections" className="text-primary hover:underline">Back to Collections</Link>
            </div>
        );
    }

    const {
        name,
        price,
        // @ts-ignore
        oldPrice,
        description,
        images,
        category,
        rating,
        reviewCount,
        specs,
        inStock
    } = product;

    // Ensure we always have 4 images for the gallery layout, repeating if necessary
    const sourceImages = images && images.length > 0 ? images : [product.image];
    const galleryImages = [...sourceImages];
    while (galleryImages.length < 4) {
        galleryImages.push(...sourceImages);
    }
    // Trim to exactly 4 if it grew too large (though with 4 slots it's fine to have more if we wanted, but sticking to 4 for the row)
    const displayImages = galleryImages.slice(0, 4);

    const isWishlisted = isInWishlist(product.id);

    const handleWishlist = () => {
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-8">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap gap-2 mb-8">
                <Link className="text-[#86775f] text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
                <span className="text-[#86775f] text-sm">/</span>
                <Link className="text-[#86775f] text-sm font-medium hover:text-primary transition-colors" to="/collections">Collections</Link>
                <span className="text-[#86775f] text-sm">/</span>
                <span className="text-[#86775f] text-sm font-medium">{category}</span>
                <span className="text-[#86775f] text-sm">/</span>
                <span className="text-[#181511] text-sm font-semibold">{name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: High-Res Image Gallery */}
                <div className="lg:col-span-7 space-y-4">
                    <div
                        className="aspect-[4/5] rounded-xl bg-center bg-cover bg-no-repeat overflow-hidden shadow-sm"
                        style={{ backgroundImage: `url("${selectedImage || product.image}")` }}
                    ></div>
                    <div className="grid grid-cols-4 gap-4">
                        {displayImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`aspect-square rounded-lg bg-center bg-cover bg-no-repeat cursor-pointer ${selectedImage === img && idx === galleryImages.indexOf(img) ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'} ${selectedImage === img ? 'ring-2 ring-primary' : ''}`}
                                style={{ backgroundImage: `url("${img}")` }}
                                onClick={() => setSelectedImage(img)}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Right: Product Information */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#181511] mb-2">{name}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <p className="text-2xl font-bold text-primary">${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                            {oldPrice && <p className="text-lg text-[#86775f] line-through">{oldPrice}</p>}
                            {inStock && <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">In Stock</span>}
                        </div>
                        {/* Rating Summary Integration */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-0.5 text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`size-4 ${i < Math.floor(rating) ? 'fill-current' : ''}`} />
                                ))}
                            </div>
                            <p className="text-sm font-medium text-[#86775f] underline cursor-pointer">{rating} ({reviewCount} reviews)</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-base leading-relaxed text-[#181511]">
                            {description}
                        </p>
                    </div>

                    {/* Material Selection (Mock for now, static) */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#181511]">Select Color</h3>
                        <div className="flex gap-3">
                            <button className="w-10 h-10 rounded-full bg-[#1e293b] ring-2 ring-offset-2 ring-primary border-2 border-white" title="Midnight Blue"></button>
                            <button className="w-10 h-10 rounded-full bg-[#3d4433] ring-0 hover:ring-2 hover:ring-offset-2 hover:ring-primary border-2 border-white" title="Forest Green"></button>
                            <button className="w-10 h-10 rounded-full bg-[#7c2d12] ring-0 hover:ring-2 hover:ring-offset-2 hover:ring-primary border-2 border-white" title="Burnt Sienna"></button>
                            <button className="w-10 h-10 rounded-full bg-[#f8fafc] ring-0 hover:ring-2 hover:ring-offset-2 hover:ring-primary border-2 border-white" title="Pearl White"></button>
                        </div>
                    </div>

                    {/* Dimension Specs */}
                    <div className="grid grid-cols-3 gap-4 border-y border-[#e1ddd5] py-6">
                        <div>
                            <p className="text-xs text-[#86775f] font-semibold uppercase">Length</p>
                            <p className="text-lg font-bold">{specs.length}</p>
                        </div>
                        <div>
                            <p className="text-xs text-[#86775f] font-semibold uppercase">Depth</p>
                            <p className="text-lg font-bold">{specs.depth}</p>
                        </div>
                        <div>
                            <p className="text-xs text-[#86775f] font-semibold uppercase">Height</p>
                            <p className="text-lg font-bold">{specs.height}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => addToCart({ ...product, quantity: 1 })}
                            className="flex-1 flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all uppercase tracking-widest text-sm"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={handleWishlist}
                            className={`flex items-center justify-center border-2 ${isWishlisted ? 'border-primary bg-primary/5' : 'border-[#e1ddd5]'} hover:bg-[#f0eeea] text-[#181511] font-bold py-4 px-6 rounded-lg transition-all`}
                        >
                            <Heart className={`size-5 mr-2 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
                            {isWishlisted ? 'In Wishlist' : 'Wishlist'}
                        </button>
                    </div>

                    {/* Additional Details Accordion */}
                    <div className="space-y-2 pt-4">
                        <div className="flex items-center justify-between py-3 border-b border-[#e1ddd5] cursor-pointer">
                            <span className="font-bold text-sm">Shipping & Returns</span>
                            <ChevronDown className="size-5" />
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-[#e1ddd5] cursor-pointer">
                            <span className="font-bold text-sm">Care Instructions</span>
                            <ChevronDown className="size-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Summary Section */}
            <section className="mt-24">
                <h2 className="text-2xl font-bold mb-8">Customer Satisfaction</h2>
                <div className="bg-white rounded-xl p-8 border border-[#e1ddd5]">
                    <div className="flex flex-wrap gap-x-12 gap-y-10">
                        <div className="flex flex-col gap-3 min-w-[150px]">
                            <p className="text-[#181511] text-6xl font-black leading-tight tracking-[-0.033em]">{rating}</p>
                            <div className="flex gap-1 text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`size-5 ${i < Math.floor(rating) ? 'fill-current' : ''}`} />
                                ))}
                            </div>
                            <p className="text-[#86775f] text-base font-medium">Based on {reviewCount} reviews</p>
                        </div>
                        {/* Static bars for now */}
                        <div className="grid min-w-[300px] flex-1 grid-cols-[30px_1fr_50px] items-center gap-y-4">
                            <p className="text-sm font-bold">5</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '90%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">90%</p>
                            <p className="text-sm font-bold">4</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '6%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">6%</p>
                            <p className="text-sm font-bold">3</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '2%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">2%</p>
                            <p className="text-sm font-bold">2</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '1%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">1%</p>
                            <p className="text-sm font-bold">1</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '1%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">1%</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="mt-24 mb-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Complete the Look</h2>
                    <Link className="text-primary font-bold text-sm hover:underline" to="/collections">View All Collection</Link>
                </div>
                {/* Just showing static related items for layout purposes, ideally this would be dynamic too */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Reusing a few items from products array if possible, or keeping static mock if it looks better */}
                    {/* For simply, let's just pick the first 4 products that aren't the current one */}
                    {products.filter(p => p.id !== product.id).slice(0, 4).map(related => (
                        <Link to={`/product/${related.id}`} key={related.id} className="group cursor-pointer">
                            <div className="aspect-square rounded-xl bg-center bg-cover mb-4 overflow-hidden relative" style={{ backgroundImage: `url("${related.image}")` }}>
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Heart className="size-5 text-primary" />
                                </div>
                            </div>
                            <h3 className="font-bold text-base mb-1">{related.name}</h3>
                            <p className="text-[#86775f] font-medium">${related.price.toLocaleString()}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
