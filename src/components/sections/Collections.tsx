import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const collections = [
    {
        title: 'Living Room',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
        count: '42 Items',
        span: 'col-span-1 md:col-span-2 row-span-1',
    },
    {
        title: 'Bedroom',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1000',
        count: '28 Items',
        span: 'col-span-1',
    },
    {
        title: 'Dining Area',
        image: 'https://images.unsplash.com/photo-1617806118233-18e167400epx?auto=format&fit=crop&q=80&w=1000',
        count: '15 Items',
        span: 'col-span-1',
    },
    {
        title: 'Office Space',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000',
        count: '34 Items',
        span: 'col-span-1 md:col-span-2',
    },
];

const Collections: React.FC = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
                    <div className="max-w-xl">
                        <h2 className="heading-2 mb-4">Curated <span className="text-luxury-gold italic">Collections</span></h2>
                        <p className="text-gray-600">Explore our expertly designed furniture categories, each crafted to bring balance and luxury to every corner of your home.</p>
                    </div>
                    <button className="text-luxury-gold font-semibold flex items-center space-x-2 border-b-2 border-luxury-gold hover:text-luxury-gold/80 hover:border-luxury-gold/80 transition-all pb-1">
                        <span>Explore All</span>
                        <ArrowUpRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${item.span} relative group overflow-hidden rounded-2xl cursor-pointer`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 w-full group">
                                <p className="text-luxury-gold text-sm font-medium mb-1 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    {item.count}
                                </p>
                                <h3 className="text-2xl font-serif font-bold text-white transition-all duration-300 group-hover:translate-y-[-4px]">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
