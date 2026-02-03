import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
    return (
        <section className="py-24 bg-luxury-gold">
            <div className="container-custom">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                        >
                            Join the <span className="text-gray-900">Luxe Circle</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-white/80 text-lg mb-12"
                        >
                            Subscribe to receive exclusive early access to new collections, interior design tips, and private sale invitations.
                        </motion.p>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-white/20 border border-white/30 text-white placeholder:text-white/60 px-8 py-4 rounded-full focus:outline-none focus:bg-white/30 transition-all text-lg"
                            />
                            <button
                                type="submit"
                                className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all flex items-center justify-center space-x-2 shadow-2xl"
                            >
                                <span>Subscribe</span>
                                <Send size={18} />
                            </button>
                        </motion.form>
                        <p className="mt-8 text-white/50 text-sm">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
