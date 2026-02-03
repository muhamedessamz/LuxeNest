import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Navbar: React.FC = () => {
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="flex flex-col border-b border-solid border-primary/20 bg-background-light dark:bg-background-dark sticky top-0 z-50 transition-all">
            <div className="flex items-center justify-between px-6 md:px-10 py-4 w-full">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-3 text-charcoal dark:text-white">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight">LuxeNest</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-9 text-charcoal dark:text-white">
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/collections">Collections</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/projects">Projects</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/services">Interior Design</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/about">About Us</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/contact">Contact</Link>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4 items-center">
                    <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                            <div className="text-[#86775f] flex border-none bg-[#f0eeea] dark:bg-[#2d2a25] items-center justify-center pl-4">
                                <Search className="size-5" />
                            </div>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-charcoal dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0eeea] dark:bg-[#2d2a25] h-full placeholder:text-[#86775f] px-4 pl-2 text-base font-normal leading-normal"
                                placeholder="Search furniture..."
                                type="text"
                            />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <Link to="/cart?view=wishlist" className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f0eeea] dark:bg-[#2d2a25] text-charcoal dark:text-white hover:bg-primary/20 transition-colors relative">
                            <Heart className={`size-5 ${wishlistCount > 0 ? 'fill-primary text-primary' : ''}`} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-[#1d1a15] text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-md animate-in fade-in zoom-in duration-300">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>
                        <Link to="/cart?view=cart" className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f0eeea] dark:bg-[#2d2a25] text-charcoal dark:text-white hover:bg-primary/20 transition-colors relative">
                            <ShoppingCart className="size-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-[#1d1a15] text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-md animate-in fade-in zoom-in duration-300">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Link to="/login" className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f0eeea] dark:bg-[#2d2a25] text-charcoal dark:text-white hover:bg-primary/20 transition-colors">
                            <User className="size-5" />
                        </Link>
                        <button
                            className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 text-charcoal dark:text-white hover:bg-primary/20 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/20 shadow-2xl flex flex-col p-6 md:hidden z-50 animate-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col gap-4">
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold p-2 text-charcoal dark:text-white hover:text-primary transition-colors border-b border-dashed border-primary/10" to="/collections">Collections</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold p-2 text-charcoal dark:text-white hover:text-primary transition-colors border-b border-dashed border-primary/10" to="/projects">Projects</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold p-2 text-charcoal dark:text-white hover:text-primary transition-colors border-b border-dashed border-primary/10" to="/services">Interior Design</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold p-2 text-charcoal dark:text-white hover:text-primary transition-colors border-b border-dashed border-primary/10" to="/about">About Us</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold p-2 text-charcoal dark:text-white hover:text-primary transition-colors" to="/contact">Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
