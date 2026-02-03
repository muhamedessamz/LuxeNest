import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sofa, Sparkles, Award } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-luxury-gold" />,
        title: 'Lifetime Guarantee',
        desc: 'Bespoke quality that lasts generations.',
    },
    {
        icon: <Sofa className="w-10 h-10 text-luxury-gold" />,
        title: 'Custom Finishes',
        desc: 'Tailor every piece to your unique vision.',
    },
    {
        icon: <Sparkles className="w-10 h-10 text-luxury-gold" />,
        title: 'Artisan Craft',
        desc: 'Handmade by master craftsmen across Europe.',
    },
    {
        icon: <Award className="w-10 h-10 text-luxury-gold" />,
        title: 'Sustainable Luxury',
        desc: 'Ethically sourced, eco-conscious materials.',
    },
];

const Experience: React.FC = () => {
    return (
        <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-luxury-gold/10 blur-[120px] rounded-full" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-luxury-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Philosophy</span>
                        <h2 className="heading-2 mb-8 leading-tight">
                            Creating Spaces That Tell <span className="text-luxury-gold italic">Your Story</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            At LuxeNest, we don't just sell furniture. We curate experiences. Every curve, every texture, and every material is selected to create a bridge between functional design and pure artistic expression.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((f, i) => (
                                <div key={i} className="flex flex-col space-y-3">
                                    {f.icon}
                                    <h4 className="text-xl font-bold font-serif">{f.title}</h4>
                                    <p className="text-gray-500">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1594026112284-02bb6f331cbf?auto=format&fit=crop&q=80&w=1000"
                                alt="Craftsmanship"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating Stat */}
                        <div className="absolute -bottom-8 -left-8 bg-luxury-gold p-8 rounded-3xl shadow-2xl">
                            <p className="text-5xl font-serif font-bold text-white mb-1">25+</p>
                            <p className="text-white/80 font-medium uppercase tracking-widest text-xs">Years of Excellence</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
