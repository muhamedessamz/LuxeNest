import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-primary/20 pt-20 pb-10 text-charcoal dark:text-white transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold">LuxeNest</h2>
                    </div>
                    <p className="text-charcoal/60 dark:text-white/60 text-sm leading-relaxed mb-6">
                        Transforming houses into curated homes with timeless furniture and expert design advice.
                    </p>
                    <div className="flex gap-4 font-display">
                        <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
                            <Globe className="size-4" />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
                            <Share2 className="size-4" />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
                            <Mail className="size-4" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4 uppercase text-xs tracking-widest transition-colors duration-300">Services</h4>
                    <ul className="text-[#86775f] dark:text-[#a39785] text-sm space-y-2 font-display">
                        <li><Link className="hover:text-primary transition-colors" to="/services">Residential Design</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">Commercial Space</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">Furniture Sourcing</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">Art Curation</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 uppercase text-xs tracking-widest transition-colors duration-300">Company</h4>
                    <ul className="text-[#86775f] dark:text-[#a39785] text-sm space-y-2 font-display">
                        <li><Link className="hover:text-primary transition-colors" to="/about">Our Story</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/projects">Projects</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/about">Sustainability</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 uppercase text-xs tracking-widest transition-colors duration-300">Newsletter</h4>
                    <div className="flex gap-2">
                        <input
                            className="bg-[#f0eeea] dark:bg-[#2d2a25] border-none rounded-lg text-sm px-4 py-2 flex-1 focus:ring-1 focus:ring-primary text-charcoal dark:text-white"
                            placeholder="Your email"
                            type="email"
                        />
                        <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
                            Join
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-6 border-t border-primary/10 pt-10 text-center md:text-left">
                <p className="text-xs text-charcoal/40 dark:text-white/40">© 2024 LuxeNest Interior Group. All rights reserved. Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
};

export default Footer;
