import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Trash2, Truck, ArrowRight, Lock, ShoppingCart, ShieldCheck, Headphones, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const recommended = [
    { id: 'rec-1', name: 'Artisan Floor Lamp', price: 420.00, image: 'https://www.akway.in/cdn/shop/files/LAVANYA.png?v=1762255626&width=416' },
    { id: 'rec-2', name: 'Havana Wool Rug', price: 1150.00, image: 'https://m.media-amazon.com/images/I/61EZiOe6g5L._AC_.jpg' },
    { id: 'rec-3', name: 'Serene Tides Canvas', price: 340.00, image: 'https://irisleegallery.com/cdn/shop/files/idealgalleryart-abstract-textured-tides-in-warm-earth-tones-wp242388-41997531054211.jpg?v=1733339163&width=1008' },
    { id: 'rec-4', name: 'Walnut Side Table', price: 275.00, image: 'https://m.media-amazon.com/images/I/91WqpiDRnKL._AC_UF894,1000_QL80_.jpg' }
];

const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, addToCart } = useCart();
    const { wishlist, wishlistCount, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const [searchParams, setSearchParams] = useSearchParams();
    const initialView = (searchParams.get('view') as 'cart' | 'wishlist') || 'cart';
    const [view, setView] = useState<'cart' | 'wishlist'>(initialView);

    useEffect(() => {
        const currentView = searchParams.get('view') as 'cart' | 'wishlist';
        if (currentView && currentView !== view) {
            setView(currentView);
        }
    }, [searchParams]);

    const handleViewChange = (newView: 'cart' | 'wishlist') => {
        setView(newView);
        setSearchParams({ view: newView });
    };

    const handleWishlistToggle = (item: any) => {
        if (isInWishlist(item.id)) {
            removeFromWishlist(item.id);
        } else {
            addToWishlist(item);
        }
    };

    const subtotal = cartTotal;
    const estimatedTax = subtotal * 0.08;
    const grandTotal = subtotal + estimatedTax;

    return (
        <div className="bg-background-light text-charcoal transition-colors duration-300 min-h-screen">
            <main className="flex flex-col items-center py-8">
                <div className="layout-content-container flex flex-col w-full max-w-[1500px] px-6 text-charcoal">

                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 py-2">
                        <Link className="text-[#86775f] text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Home</Link>
                        <span className="text-[#86775f] text-sm font-medium leading-normal">/</span>
                        <span className="text-charcoal text-sm font-bold leading-normal">Shopping Cart</span>
                    </div>

                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between items-end gap-3 py-6">
                        <div className="flex min-w-72 flex-col gap-2">
                            <h1 className="text-charcoal text-4xl font-black leading-tight tracking-tight">Your Selection</h1>
                            <p className="text-[#86775f] text-base font-normal leading-normal">Review your curated pieces and prepare for checkout.</p>
                        </div>
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex py-3 mb-8">
                        <div className="flex h-14 w-full max-w-md items-center justify-center rounded-2xl bg-[#f0eeea] p-1.5 relative shadow-inner">
                            <button
                                onClick={() => handleViewChange('cart')}
                                className={`flex-1 flex items-center justify-center gap-2 rounded-xl h-full text-sm font-bold transition-all duration-300 ${view === 'cart' ? 'bg-white text-charcoal shadow-sm scale-[1.02]' : 'text-[#86775f] hover:text-primary'}`}
                            >
                                <ShoppingCart className={`size-4 ${view === 'cart' ? 'text-primary' : ''}`} />
                                Shopping Cart ({cart.length})
                            </button>
                            <button
                                onClick={() => handleViewChange('wishlist')}
                                className={`flex-1 flex items-center justify-center gap-2 rounded-xl h-full text-sm font-bold transition-all duration-300 ${view === 'wishlist' ? 'bg-white text-charcoal shadow-sm scale-[1.02]' : 'text-[#86775f] hover:text-primary'}`}
                            >
                                <Heart className={`size-4 ${view === 'wishlist' ? 'text-primary fill-primary' : ''}`} />
                                Wishlist ({wishlistCount})
                            </button>
                        </div>
                    </div>

                    {view === 'cart' ? (
                        cart.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                {/* Table (Product List) */}
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="overflow-hidden rounded-xl border border-[#e1ddd5] bg-white shadow-sm">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-background-light border-b border-[#e1ddd5]">
                                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#86775f]">Product</th>
                                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#86775f] text-center">Quantity</th>
                                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#86775f] text-right">Price</th>
                                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#86775f] text-right">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-[#e1ddd5]">
                                                    {cart.map((item) => (
                                                        <tr key={item.id} className="hover:bg-background-light/50 transition-colors">
                                                            <td className="px-6 py-6 font-display">
                                                                <div className="flex items-center gap-4">
                                                                    <div
                                                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-20 h-20 border border-[#e1ddd5] shadow-sm"
                                                                        style={{ backgroundImage: `url("${item.image}")` }}
                                                                    ></div>
                                                                    <div className="flex flex-col">
                                                                        <span className="font-bold text-charcoal">{item.name}</span>
                                                                        <span className="text-xs text-[#86775f] uppercase tracking-wider mt-1">SKU: {item.sku || 'N/A'}</span>
                                                                        <button
                                                                            onClick={() => removeFromCart(item.id)}
                                                                            className="text-xs text-primary mt-3 flex items-center gap-1 font-bold group"
                                                                        >
                                                                            <Trash2 className="size-4 group-hover:rotate-12 transition-transform" /> Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-6 text-center">
                                                                <div className="inline-flex items-center border border-[#e1ddd5] rounded-lg bg-[#fbfaf9] overflow-hidden">
                                                                    <button
                                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                        className="px-3 py-1 text-[#86775f] hover:text-primary hover:bg-[#f0eeea] transition-all text-lg"
                                                                    >
                                                                        −
                                                                    </button>
                                                                    <span className="px-4 py-1 font-bold border-x border-[#e1ddd5] min-w-[3rem]">{item.quantity}</span>
                                                                    <button
                                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                        className="px-3 py-1 text-[#86775f] hover:text-primary hover:bg-[#f0eeea] transition-all text-lg"
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-6 text-right font-medium text-[#86775f] font-display">${Number(item.price).toLocaleString()}</td>
                                                            <td className="px-6 py-6 text-right font-bold text-charcoal font-display">${(Number(item.price) * item.quantity).toLocaleString()}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Shipping Estimator */}
                                    <div className="p-8 rounded-xl border border-[#e1ddd5] bg-white shadow-sm">
                                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                            <Truck className="text-primary size-5" />
                                            Shipping Estimator
                                        </h3>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex-1">
                                                <select className="w-full rounded-lg border-[#e1ddd5] bg-[#fbfaf9] text-sm focus:ring-primary focus:border-primary p-3 outline-none">
                                                    <option>United States</option>
                                                    <option>United Kingdom</option>
                                                    <option>Canada</option>
                                                    <option>Germany</option>
                                                </select>
                                            </div>
                                            <div className="flex-1">
                                                <input
                                                    className="w-full rounded-lg border-[#e1ddd5] bg-[#fbfaf9] text-sm focus:ring-primary focus:border-primary p-3 outline-none"
                                                    placeholder="Zip Code"
                                                    type="text"
                                                />
                                            </div>
                                            <button className="px-8 py-3 bg-[#f0eeea] rounded-lg text-sm font-bold hover:bg-primary hover:text-[#1d1a15] transition-all">
                                                Calculate
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Summary */}
                                <div className="lg:col-span-1">
                                    <div className="p-8 rounded-2xl border border-[#e1ddd5] bg-white sticky top-24 shadow-xl">
                                        <h3 className="text-xl font-bold mb-8">Order Summary</h3>
                                        <div className="space-y-4 mb-8 border-b border-[#e1ddd5] pb-8">
                                            <div className="flex justify-between text-base">
                                                <span className="text-[#86775f]">Subtotal</span>
                                                <span className="font-bold">${subtotal.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between text-base">
                                                <span className="text-[#86775f]">Shipping</span>
                                                <span className="font-bold text-primary">Free</span>
                                            </div>
                                            <div className="flex justify-between text-base">
                                                <span className="text-[#86775f]">Estimated Tax</span>
                                                <span className="font-bold">${estimatedTax.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mb-8">
                                            <span className="text-lg font-bold uppercase tracking-widest text-[#86775f] text-xs">Grand Total</span>
                                            <span className="text-3xl font-black text-primary font-display">${grandTotal.toLocaleString()}</span>
                                        </div>
                                        <button className="w-full py-5 bg-primary text-[#1d1a15] rounded-xl font-black text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                                            <span>Proceed to Checkout</span>
                                            <ArrowRight className="size-5" />
                                        </button>

                                        <div className="mt-8 flex flex-col gap-4">
                                            <div className="flex items-center gap-3 text-xs text-[#86775f] font-bold uppercase tracking-tighter">
                                                <Lock className="size-4 text-primary" />
                                                <span>Secure SSL encrypted checkout</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-[#86775f] font-bold uppercase tracking-tighter">
                                                <Truck className="size-4 text-primary" />
                                                <span>White-glove delivery available</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-[#e1ddd5]">
                                            <p className="text-[10px] font-black mb-4 uppercase tracking-[0.2em] text-[#86775f]">Accepted Payments</p>
                                            <div className="flex gap-3 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-crosshair">
                                                <div className="w-10 h-6 bg-[#f0eeea] rounded flex items-center justify-center">VISA</div>
                                                <div className="w-10 h-6 bg-[#f0eeea] rounded flex items-center justify-center text-[10px]">AMEX</div>
                                                <div className="w-10 h-6 bg-[#f0eeea] rounded flex items-center justify-center">MC</div>
                                                <div className="w-10 h-6 bg-[#f0eeea] rounded flex items-center justify-center text-[8px]">PAYPAL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="py-20 flex flex-col items-center justify-center text-center gap-6 bg-white rounded-2xl border border-dashed border-[#e1ddd5] animate-in fade-in duration-500">
                                <div className="size-20 bg-[#f0eeea] rounded-full flex items-center justify-center">
                                    <ShoppingCart className="size-10 text-[#86775f]/50" />
                                </div>
                                <div className="max-w-md">
                                    <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                                    <p className="text-[#86775f]">It looks like you haven't added any curated pieces to your collection yet.</p>
                                </div>
                                <Link to="/collections" className="mt-4 px-10 py-4 bg-primary text-[#1d1a15] rounded-xl font-bold hover:brightness-110 transition-all active:scale-95">
                                    Explore Collections
                                </Link>
                            </div>
                        )
                    ) : (
                        wishlist.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {wishlist.map((item) => (
                                    <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-[#e1ddd5] shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="relative aspect-square overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url("${item.image}")` }}
                                            ></div>
                                            <button
                                                onClick={() => removeFromWishlist(item.id)}
                                                className="absolute top-4 right-4 size-10 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <Trash2 className="size-5" />
                                            </button>
                                        </div>
                                        <div className="p-6">
                                            <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.name}</h4>
                                            <p className="text-primary font-bold mb-4">${Number(item.price).toLocaleString()}</p>
                                            <button
                                                onClick={() => addToCart({ ...item, quantity: 1 })}
                                                className="w-full py-3 bg-primary/10 text-primary border border-primary/30 rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
                                            >
                                                <ShoppingCart className="size-4" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 flex flex-col items-center justify-center text-center gap-6 bg-white rounded-2xl border border-dashed border-[#e1ddd5] animate-in fade-in duration-500">
                                <div className="size-20 bg-[#f0eeea] rounded-full flex items-center justify-center">
                                    <Heart className="size-10 text-[#86775f]/50" />
                                </div>
                                <div className="max-w-md">
                                    <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
                                    <p className="text-[#86775f]">Save your favorite pieces here to review them later.</p>
                                </div>
                                <Link to="/collections" className="mt-4 px-10 py-4 bg-primary text-[#1d1a15] rounded-xl font-bold hover:brightness-110 transition-all active:scale-95">
                                    Discover Pieces
                                </Link>
                            </div>
                        )
                    )}

                    {/* Recommended Section */}
                    <section className="mt-24 mb-16">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-3xl font-black leading-tight tracking-tight">Complete Your Room</h3>
                            <Link to="/collections" className="text-sm font-bold text-primary hover:underline underline-offset-4">Explore More Piece →</Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {recommended.map((item) => (
                                <div key={item.id} className="flex flex-col gap-4 group">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e1ddd5] shadow-sm transition-all group-hover:shadow-xl group-hover:border-primary/20">
                                        <div
                                            className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url("${item.image}")` }}
                                        ></div>
                                        <button
                                            onClick={() => addToCart({ ...item, quantity: 1 })}
                                            className="absolute bottom-6 right-6 bg-white/95 p-3 rounded-full shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 active:scale-95"
                                        >
                                            <ShoppingCart className="text-primary size-6" />
                                        </button>
                                        <button
                                            onClick={() => handleWishlistToggle(item)}
                                            className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-all duration-300 ${isInWishlist(item.id) ? 'bg-primary text-white scale-110 opacity-100' : 'bg-white/80 text-charcoal opacity-0 group-hover:opacity-100'}`}
                                        >
                                            <Heart className={`size-4 ${isInWishlist(item.id) ? 'fill-current' : ''}`} />
                                        </button>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary/95 text-[#1d1a15] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">New Selection</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-black text-lg text-charcoal group-hover:text-primary transition-colors">{item.name}</p>
                                        <p className="text-sm text-[#86775f] font-bold">${item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Luxury Reassurance Footer */}
                    <div className="mt-24 mb-24 py-20 px-10 rounded-3xl bg-white border border-[#e1ddd5] flex flex-col md:flex-row justify-between items-center gap-12 text-[#86775f] shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50"></div>
                        <div className="flex flex-col items-center gap-4 text-center group">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <ShieldCheck className="size-8 text-primary group-hover:text-inherit" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">Lifetime Warranty on Artisanship</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center group">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Truck className="size-8 text-primary group-hover:text-inherit" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">Global White-Glove Logistics</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center group">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Headphones className="size-8 text-primary group-hover:text-inherit" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">24/7 Design Concierge Access</span>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Cart;
