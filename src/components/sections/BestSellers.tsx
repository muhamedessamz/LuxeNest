import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Heart } from 'lucide-react';

const products = [
    {
        id: 'bs-1',
        name: 'Aurelius Lounge Chair',
        price: 1250,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqOSAJPrXt4nRouPYJgaCXupCO0xB5PqU3lrCKBhhXyM_LNVohMuOfthW5C02nPKwOoBOGTo9rEJuM5XPX4AhynPf5amLf4r9-YEHzxvXPF5r4v8aFMttyrMuNjA3Z-pwpMFa4jd7SkKFrcNQ1WULIweh2GTQcE-1zs333-FT4c3oJgFqEfG6sNpXAtSOWynhCYDOMMtPlbkwj9m3OxD7Mgz6OyQPVCgUCNu_Ov4eanK1VZ_FR2j3SEpz2tbG0o7D9aOSduxrfUtGV',
    },
    {
        id: 'bs-2',
        name: 'Nexus Walnut Table',
        price: 890,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcuRPHe0KyK6EkhkXip4Wyxh9j9N57h_Hnseo0Nn5otHTeATEGTE6v6C1V5gLGEVs9ew-WV0MsvEo5XwJGU691soAYssNMHpdhePr7mN3ly9am86g4_6NYqwpIYBBAXKt8vVjRBW1R88yKyqb-jkRUdkmvuzaPewsKC4KhWiBWnmkn6Kw6RsFFKP63ubz3z3SlBVzwCNWMuUpH_6l2xKdWT-NWxAdAjWw_YwFvlr9d-ipqGGyyBJBSrQYnLCLbdPMTT24DEvyyLB1I',
    },
    {
        id: 'bs-3',
        name: 'Opaline Ceramic Set',
        price: 340,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb5fDWTpD2JbUFgSRLMjqoZM1bG9CcDrrH25YjI_tgWbW2tEJPHqb24AwtwvohDW553Kpb9iq6l9STVBWnB7nlx2F4aTxZ9Oq7R3B3Nr2ihrkBH-6gu5c5ZxEAGDQ1LAa7JUPHxH4mRFL97O-P3Pz0LHuEbmydnwylEvxd2KUiOm931q5pvrmQbD1bX2SIbfCZ3WUewOfIBzbIPaDUU7N_XXfT3XZBBfJYUIVSsBI8o9ZoaWBDXwoLQ2_bfNhUBjKvJS_dqCM3tKSl',
    },
    {
        id: 'bs-4',
        name: 'Ethereal Pendant',
        price: 520,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBygEp7Rv7dQnNXwoYAXdp_QPuDVq_G9F_-vMYa4B7RR7KcJWnLTPduIA-kyZQ0edt6WmgSV4hNPzRO45GvGVnQfXgPV7yPTaJ5I2JCtSIXMn9EDowculSu_kOzRZeZQZrzg3W2ZK64Pec56FlahoZSHuTeTmHOuMAJXqPad-jytWyEJx40uDt9RbecgIvwnHImb-5RJNBWpZp3r26ZV8gXDxZFv-hWO1ID4QZCZEUmXgW97lbQDiBl4ItcN3DSoOQmj11lDhOMBAJa',
    },
];

const BestSellers: React.FC = () => {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

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

    const handleAddToCart = (e: React.MouseEvent, product: any) => {
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
        <section className="bg-primary/5 py-20">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-black text-[#181511] dark:text-white transition-colors duration-300">Our Best Sellers</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                    <p className="text-[#86775f] dark:text-white/60 max-w-2xl text-lg leading-relaxed">Discover the pieces that define modern luxury. Loved by our clients and designed for a lifetime.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            to="/product/velvet-serenity-sofa"
                            className="bg-white dark:bg-[#25211c] p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#e1ddd5] dark:border-[#322e28] group block"
                        >
                            <div className="rounded-lg overflow-hidden aspect-square mb-4 bg-[#f0eeea] relative">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={product.image}
                                    alt={product.name}
                                />
                                <button
                                    onClick={(e) => handleWishlistToggle(e, product)}
                                    className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-300 ${isInWishlist(product.id) ? 'bg-primary text-white scale-110' : 'bg-white/80 dark:bg-background-dark/80 text-charcoal dark:text-white opacity-0 group-hover:opacity-100'}`}
                                >
                                    <Heart className={`size-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                            <h4 className="font-bold text-lg mb-1 text-charcoal dark:text-white transition-colors duration-300">{product.name}</h4>
                            <p className="text-primary font-bold text-sm mb-3">${product.price}</p>
                            <button
                                onClick={(e) => handleAddToCart(e, product)}
                                className="w-full py-2 border border-primary text-primary rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                            >
                                Add to Cart
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
