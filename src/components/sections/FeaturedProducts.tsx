import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { products } from '../../data/products';

const FeaturedProducts: React.FC = () => {
    const featuredItems = products.filter(p => p.id.startsWith('feat-'));

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="heading-2 mb-4">Masterpiece <span className="text-luxury-gold italic">Selection</span></h2>
                    <p className="text-gray-600">Our best-selling pieces, chosen by our internal design team for their exceptional quality and timeless craftsmanship.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredItems.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-6 group cursor-pointer">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay actions */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex space-x-2">
                                        <button className="flex-1 bg-white text-gray-900 py-3 rounded-xl font-semibold text-sm shadow-xl flex items-center justify-center space-x-2 hover:bg-luxury-gold hover:text-white transition-colors">
                                            <ShoppingCart size={16} />
                                            <span>Add to Cart</span>
                                        </button>
                                        <button className="p-3 bg-white text-gray-900 rounded-xl shadow-xl hover:bg-luxury-gold hover:text-white transition-colors">
                                            <Eye size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Badge */}
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-luxury-gold transition-colors">{product.name}</h3>
                                    <div className="flex items-center text-luxury-gold">
                                        <Star size={14} fill="currentColor" />
                                        <span className="text-xs font-bold ml-1">{product.rating}</span>
                                    </div>
                                </div>
                                <p className="text-xl font-serif font-bold text-gray-900">${product.price.toLocaleString()}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
