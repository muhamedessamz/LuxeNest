import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Check, Armchair, ChevronUp, Tag, Layers, ShoppingCart, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

// Enhanced Mock Data
const products = [
    {
        id: 'coll-1',
        name: 'Aurelius Velvet Sofa',
        category: 'Living Room',
        price: 2499,
        badge: 'New',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTRroGXN0qwaDx7pBnVs5Zc6zR8mDT6xd3ZZQ-3Tecu2REmigMJiziOfkcsknukEqKMwuYh4C6pktXfC2pd5osh6SxXVO-siZaGaFRRM1nHekRGzX_zEDWFcllzsLQ72JHjqFl1lYnKCrMigyAZIxDX5LgkqjnYjXkEX8eE8S9tDqVE-wrYL9vWrbiFh1bWEdgW6EYMNTIhBsRZ6CqNt5fZGB5kX1t6qChqqZKmApoHSk65dELMC307-Haur31GkBwE3gflcR8DATh'
    },
    {
        id: 'coll-2',
        name: 'Nordic Oak Dining Set',
        category: 'Dining',
        price: 1850,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCem2jxYY_R7W_Ok7f68s0cBezcVWLB23VgCs7r9P9MCy0tfiecnjtRTDPvB-M1jXwRmaVYVvZv0UXK6whl4xHs33le0KCKuakYASc66n5Pu0eNC8tOVJaEFCHOWeW3GVzmvnV8C2ohyaBVVFU3iP-hghf401xIvkF3B2QxAfQS-fKzDjFWM3BxllLAG87mIoESyuvae8HfkYC4_01K2yOpk1sNjHMgbpRxf3GCpcIFCBMe4CsZ-buGiwAOyy0A5F3vT-btmR-SOPHY'
    },
    {
        id: 'coll-3',
        name: 'Eames Inspired Executive',
        category: 'Office',
        price: 799,
        oldPrice: '$1,200',
        badge: 'Sale',
        badgeColor: 'bg-background-dark',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEU_Kl1h0NPlv7BXtzlSD5eeGPehNayZc07j5uTDREWDJGPlBkW85rXoF5TpAGw6d-IW9q_56Xwlqj6DKnH7zO_vZ8cjf4OmQzLMh36oB5aAM9EoKsavK7uQOv8qBYkwxKaGSiNknzrNuxiqEC31DsI8yxDulj-zUcGQtUwhcL3jWUDgkn5-tIrF26APQd8TpalkpEnW7HWxT_4otb6ndPWEAJi1gLerr-ws7X8BCEcLYnWrdk52VRVgCJTIk5iE2kSXZpqbdxfAM1'
    },
    {
        id: 'coll-4',
        name: 'Harlow Walnut Sideboard',
        category: 'Storage',
        price: 1599,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw7Y2cYFqPLQniaAsRE9JdWR4BNv9PBJKVMU48sLCVRBcGkhnWFJJSMpjuGalhbpApkiZTES1AXCpGbGr86njHHXhpXKarO1a2JsBgbLjBhJ-CeJYNXVk7EUFc26Na7gWB2yPZ9vPdTkT7J_H4knsKsCjb_THa7gAdJnY0ErNSEzU7SN5mzLGVBC7axC6KjZPleyqQ304Asv7cgJUPw908aBHLx79YsN0AvT9fdewBmZsecWcYSst6J_VpScohrOh_c8s47dJ4yNUa'
    },
    {
        id: 'coll-5',
        name: 'Cloud Upholstered Bed',
        category: 'Bedroom',
        price: 2200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqJ3-8NiMOoaePVsCXIK82G8gM02mqLnYg2Ip3ROYSZ-8gQC4cuyynb-Y7S4gVOrQsQSR5wZ-FFaeO130IhW1nHMlaj6mJfLtDDmRrRNVgOk-LOlF7Kw3x4_S9ohtzndRhtRR6ChETf69wS6ouWNs1Qq7yyw1CQEd7rQAS_aJ7LfNF_pMVOCpTB-UKsbZ42XMthrrtbX9j91tOIPPzhv4_s17dhrEAwmmDUKrOAttRlzNv4PxIcJo1Bqefy174RgPqLCR'
    },
    {
        id: 'coll-6',
        name: 'Luna Marble Floor Lamp',
        category: 'Lighting',
        price: 450,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn3rxY-iRno1U1x-k4WL7AgEo-x9RQ3xxAT6R006rclXUw33SrD3qzgoks6Oblmq_4ug6GEWR0sPWe4X6pNu8_SX7gCMY_YRhz15Y9t1n3PztahQlGW3o6H1__bS9UAie_hWyXcXnSZ9DN7bnem44muVrt9MgH0VtiBIP1K7xq19k0UW9y7Ws1G0umsU3vAzMPnSblqLiz0SVG2EQNumKEQ1gAdBsq_6DDv5MEDTCWVLP_v4MVUzyYrWgMhJgo1Bqefy174RgPqLCR'
    },
    {
        id: 'coll-7',
        name: 'Elysian Accent Chair',
        category: 'Living Room',
        price: 899,
        image: 'https://images.unsplash.com/photo-1580480055273-228fff39a957?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-8',
        name: 'Vanguard Coffee Table',
        category: 'Living Room',
        price: 1200,
        badge: 'Trending',
        badgeColor: 'bg-primary',
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-9',
        name: 'Seraphina Chandelier',
        category: 'Lighting',
        price: 3500,
        oldPrice: '$4,200',
        badge: 'Limited',
        badgeColor: 'bg-charcoal',
        image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-10',
        name: 'Obsidian Console Table',
        category: 'Entryway',
        price: 1450,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-11',
        name: 'Caspian Blue Rug',
        category: 'Decor',
        price: 650,
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-12',
        name: 'Meridian Bookshelf',
        category: 'Office',
        price: 1100,
        image: 'https://images.unsplash.com/photo-1595515106967-1b072c49ee61?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-13',
        name: 'Solis Outdoor Lounge',
        category: 'Outdoor',
        price: 2800,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-14',
        name: 'Aria Marble Dining Table',
        category: 'Dining',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-15',
        name: 'Zephyr Art Print',
        category: 'Decor',
        price: 250,
        image: 'https://images.unsplash.com/photo-1582201970267-f58797f10134?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-16',
        name: 'Orion Velvet Ottoman',
        category: 'Living Room',
        price: 450,
        image: 'https://images.unsplash.com/photo-1503602642458-2321114458ed?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-17',
        name: 'Terra Cotta Vase Set',
        category: 'Decor',
        price: 180,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'coll-18',
        name: 'Eclipse Wall Mirror',
        category: 'Decor',
        price: 550,
        image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&q=80&w=1000'
    }
];

const Collections: React.FC = () => {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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

    const handleQuickAdd = (e: React.MouseEvent, product: any) => {
        e.preventDefault();
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    };
    return (
        <div className="max-w-[1440px] mx-auto flex flex-col gap-2">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 px-10 pt-8 justify-center">
                <Link className="text-[#86775f] text-sm font-medium leading-normal hover:underline" to="/">Home</Link>
                <span className="text-[#86775f] text-sm font-medium leading-normal">/</span>
                <span className="text-[#181511] dark:text-white text-sm font-medium leading-normal">Collections</span>
            </div>

            {/* Page Heading Centered */}
            <div className="flex flex-col items-center text-center gap-4 px-10 py-8 mb-4">
                <h1 className="text-[#181511] dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">Our Collections</h1>
                <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                <p className="text-[#86775f] text-xl font-normal leading-relaxed max-w-2xl">Curated premium furniture for modern living.</p>
            </div>

            {/* Filters & Sort Bar */}
            <div className="flex gap-3 px-10 py-3 flex-wrap pr-4 items-center border-b border-[#f0eeea] dark:border-[#333] mb-6">
                <span className="text-sm font-bold text-[#86775f] uppercase tracking-wider mr-2">Sort by:</span>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0eeea] dark:bg-[#2d2a25] px-4 hover:ring-1 ring-primary transition-all">
                    <p className="text-[#181511] dark:text-white text-sm font-medium leading-normal">New Arrivals</p>
                    <ChevronDown className="size-4" />
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0eeea] dark:bg-[#2d2a25] px-4 hover:ring-1 ring-primary transition-all">
                    <p className="text-[#181511] dark:text-white text-sm font-medium leading-normal">Best Sellers</p>
                    <ChevronDown className="size-4" />
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4">
                    <p className="text-sm font-medium leading-normal">All Furniture</p>
                    <Check className="size-4" />
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 px-10 pb-20">
                {/* Side Navigation Filters */}
                <aside className="w-full lg:w-64 flex flex-col gap-6 shrink-0">
                    <div className="bg-white dark:bg-[#25211c] rounded-2xl p-6 shadow-sm border border-[#e1ddd5] dark:border-[#322e28]">
                        <h2 className="text-[#181511] dark:text-white text-lg font-bold leading-normal mb-4">Filters</h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                                <div className="flex items-center gap-3">
                                    <Armchair className="size-5" />
                                    <p className="text-sm font-bold leading-normal">Category</p>
                                </div>
                                <ChevronUp className="size-4" />
                            </div>
                            {/* Expanded category items */}
                            <div className="pl-10 flex flex-col gap-2 py-1">
                                {['Sofas & Couches', 'Dining Tables', 'Office Chairs'].map((cat) => (
                                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                        <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-[#86775f] group-hover:text-primary transition-colors">{cat}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#f0eeea] dark:hover:bg-[#2d2a25] transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <Tag className="size-5" />
                                    <p className="text-sm font-medium leading-normal">Price Range</p>
                                </div>
                                <ChevronDown className="size-4" />
                            </div>
                            <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#f0eeea] dark:hover:bg-[#2d2a25] transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <Layers className="size-5" />
                                    <p className="text-sm font-medium leading-normal">Material</p>
                                </div>
                                <ChevronDown className="size-4" />
                            </div>
                        </div>
                        <button className="mt-8 w-full flex items-center justify-center rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110 shadow-lg shadow-primary/20 transition-all">
                            <span className="truncate">Apply Filters</span>
                        </button>
                        <button className="mt-2 w-full flex items-center justify-center rounded-lg h-11 px-4 text-[#86775f] text-sm font-bold leading-normal hover:bg-[#f0eeea] dark:hover:bg-[#2d2a25] transition-all">
                            <span className="truncate">Reset All</span>
                        </button>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProducts.map((product) => (
                            <Link
                                key={product.id}
                                to="/product/velvet-serenity-sofa"
                                className="flex flex-col bg-white dark:bg-[#25211c] rounded-2xl overflow-hidden shadow-sm border border-[#e1ddd5] dark:border-[#322e28] group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
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
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-[#1d1a15]/90 flex items-center justify-center shadow-lg transform translate-x-12 group-hover:translate-x-0 transition-all duration-300 hover:scale-110 active:scale-90"
                                    >
                                        <Heart className={`size-5 ${isInWishlist(product.id) ? 'fill-primary text-primary' : 'text-charcoal dark:text-white'}`} />
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col gap-4 text-center items-center">
                                    <div className="flex flex-col gap-2 items-center w-full">
                                        <p className="text-[#86775f] text-xs font-bold uppercase tracking-widest">{product.category}</p>
                                        <h3 className="text-[#181511] dark:text-white text-xl font-black">{product.name}</h3>
                                        <div className="flex items-center gap-3 justify-center">
                                            <p className="text-primary text-2xl font-bold leading-tight">${product.price}</p>
                                            {// @ts-ignore
                                                product.oldPrice && <p className="text-[#86775f] text-base line-through opacity-70">{product.oldPrice}</p>}
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => handleQuickAdd(e, product)}
                                        className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl h-12 px-4 bg-primary/10 text-primary border border-primary/20 text-sm font-black uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-primary/20"
                                    >
                                        <ShoppingCart className="size-5" />
                                        <span>Quick Add</span>
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
                            className="flex items-center justify-center h-10 w-10 rounded-lg border border-[#f0eeea] dark:border-[#333] hover:bg-primary/10 text-[#86775f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="size-5" />
                        </button>

                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handlePageChange(idx + 1)}
                                className={`flex items-center justify-center h-10 w-10 rounded-lg transition-colors font-bold ${currentPage === idx + 1
                                        ? 'bg-primary text-white'
                                        : 'border border-[#f0eeea] dark:border-[#333] hover:bg-primary/10 text-[#181511] dark:text-white'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="flex items-center justify-center h-10 w-10 rounded-lg border border-[#f0eeea] dark:border-[#333] hover:bg-primary/10 text-[#86775f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
