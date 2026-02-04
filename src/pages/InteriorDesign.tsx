import React from 'react';
import { MessageCircle, DraftingCompass, Home, CheckCircle } from 'lucide-react';

const services = [
    {
        title: 'Design Consultation',
        description: 'One-on-one expert advice to refine your vision and explore possibilities for your space.',
        icon: MessageCircle,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2Y-jjTjYiUzFXjutaor_MU8Zjy4D84ZSTZC6ZQTY7Kaqbn50vA5De9h7QzbufWRS9YAZpDIIAHvk-O2QhEhWShSLCfop_MzYIZiKwkzvaW13U1C6Nqq4DCB3Hw7fG5BRjcm4AKf5Izf5MNF-aH56a05lYvQDuNP_216JTygEkj61Q5Tn_jY8t3IMREYfq3cwDj0tyNjSMv9UmP34M0cxGNOjL9Jzhw3ijQUx873EEKCkUhKsA44T2d-1UL4DWRX4nDDzo91Y3S6B0'
    },
    {
        title: 'Space Planning',
        description: 'Optimizing your layout for flow and functionality, ensuring every inch of your home serves a purpose.',
        icon: DraftingCompass,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQbAx6LuvZvwoPW1GpoZ-C5TbyqG4GTmcEYQSjIRDSAke3zcsWoqgpr7GF-y3J1Mymd5HOyKoxsvMKlKIcdgtvYZ_tYcsyd_pddvHe1pE2ilx522_yqZQNYwZlMzPfVbO965pJ76j_0xRzqQTCYOHBtp4JIg471AKEjQcpjYWDnEBqZP0eKrQskE2ZXL41ZjSU7d7IaulwPy9OrY4lPOEHKcoqyxL7tgiBkZHKUabEgqGHqwR_Mi3XvDwV0lIqLE-jN5ZC8SJEKaNt'
    },
    {
        title: 'Full Styling',
        description: 'Complete end-to-end transformation of your home with curated furniture and artisanal decor.',
        icon: Home,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD223cwz3GEe5-7mQN39IsObMaj-Mvh8NkhHAJdduft_vPX_PiNDFD2D0wsG_zLTk47v9aCrJnRkKwMzT4IxrUPN5h3xjtIVfh0XsGn3ix1qxxbf8xeWKOQkFklPqplwOnZRJO2cXdxURfzHvOEHLt71dKn-xE3mCmv8NXSQmC17yeJ_HLlGsKgNMp0yrddMR3Xgiuu68fECXidh5v98TOXss9lCddS_KfWC3DBWPk3JtomvKJOIy8tZX_fA40SQahGPCTVlbEELsvV'
    }
];

const steps = [
    {
        number: 1,
        title: 'Discovery',
        description: 'We meet to discuss your lifestyle, needs, and aesthetic preferences.'
    },
    {
        number: 2,
        title: 'Concept Design',
        description: 'Our team creates mood boards and initial space planning concepts.'
    },
    {
        number: 3,
        title: 'Selection',
        description: 'Reviewing materials, furniture, and finishes tailored for your project.'
    },
    {
        number: 4,
        title: 'Installation',
        description: 'White-glove delivery and meticulous staging of your new space.'
    }
];

const InteriorDesign: React.FC = () => {
    return (
        <div className="bg-background-light font-display text-charcoal transition-colors duration-300">
            <main className="max-w-[1440px] mx-auto px-4 py-8">
                {/* Hero Section */}
                {/* Hero Section */}
                <section className="mb-20">
                    <div className="relative w-full min-h-[80vh] flex items-center justify-center rounded-[3rem] overflow-hidden shadow-2xl border border-[#e1ddd5]">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtQRyxAbGYtyQV985jeb679owpcf4hoG9LUZu2YYZ4H7-ungryrJ6PqehqQ8f9ce9VhCLgggQ9cYG5ULKA670ykNuAyyjUXS-lbDQYsW9Ro62sq7jvJC8RRDfxPkMWpaNdQlaDTUsNSqAZ3KLrk9VR0eLSL1dyfOCV8ILJTZR3NoJv7mBxsNiEq45nbJoGvQxEKn1tvH4A8azDB7UxmozxYKKPs-FgZXq52gAlT-RCEJrESjEe9IVzwYoVmp6vFdbRiq_IwrbB0mZS')" }}
                        ></div>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* Content Overlay */}
                        <div className="relative z-10 w-full md:w-2/3 flex flex-col gap-6 text-center items-center px-4">
                            <div className="inline-block w-fit px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/20">Exclusive Services</div>
                            <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-lg">
                                Bespoke Interior Design for Modern Living
                            </h1>
                            <p className="text-white/90 text-xl leading-relaxed max-w-3xl text-center drop-shadow-md font-light">
                                Experience the pinnacle of luxury with LuxeNest. Our expert designers craft sophisticated spaces tailored to your unique lifestyle, blending timeless elegance with contemporary functionality.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-4 md:px-0">
                                <button className="bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold md:font-black uppercase tracking-widest hover:brightness-110 hover:scale-[1.02] transition-all shadow-xl shadow-primary/30 text-sm md:text-base w-full sm:w-auto">
                                    Book a Consultation
                                </button>
                                <button className="border border-white/30 bg-white/5 text-white backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold md:font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm md:text-base w-full sm:w-auto">
                                    Our Portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-[#e1ddd5] hover:border-primary/50 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-2xl mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                                    <service.icon className="size-10" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-[#181511]">{service.title}</h3>
                                <p className="text-[#86775f] mb-8 leading-relaxed text-lg">{service.description}</p>
                                <div
                                    className="w-full h-64 rounded-2xl bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                                    style={{ backgroundImage: `url('${service.image}')` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="mb-24 px-4 md:px-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="relative">
                        {/* Timeline connector line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#f0eeea] -z-10"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {steps.map((step) => (
                                <div key={step.number} className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-primary/30 transform -rotate-3 group-hover:rotate-0 transition-transform">
                                        {step.number}
                                    </div>
                                    <h4 className="text-xl font-black mb-3 text-[#181511]">{step.title}</h4>
                                    <p className="text-[#86775f] text-base leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Booking Form Section - Light Luxe Theme */}
                <section className="relative mb-24 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 md:p-16 bg-[#f5f1ea] border border-[#e1ddd5]">
                    <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-4xl md:text-5xl font-black text-[#181511] leading-tight">Ready to transform your home?</h2>
                                <p className="text-[#86775f] text-lg leading-relaxed">
                                    Book a complimentary 30-minute discovery call with our principal designer to start your journey towards a more beautiful life.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <div className="flex items-center gap-4 group">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white">
                                        <CheckCircle className="size-5" />
                                    </div>
                                    <span className="font-bold text-[#181511]">A personalized aesthetic vision</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white">
                                        <CheckCircle className="size-5" />
                                    </div>
                                    <span className="font-bold text-[#181511]">Expert space optimization plans</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white">
                                        <CheckCircle className="size-5" />
                                    </div>
                                    <span className="font-bold text-[#181511]">Direct access to artisanal collections</span>
                                </div>
                            </div>
                        </div>

                        {/* Clean Form Card */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#e1ddd5] shadow-2xl shadow-charcoal/5">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-[#181511] text-xs font-black uppercase tracking-widest">Full Name</label>
                                    <input className="w-full bg-[#fbfaf9] border border-[#e1ddd5] rounded-xl py-4 px-5 text-[#181511] placeholder-[#86775f]/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm font-medium" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[#181511] text-xs font-black uppercase tracking-widest">Email Address</label>
                                    <input className="w-full bg-[#fbfaf9] border border-[#e1ddd5] rounded-xl py-4 px-5 text-[#181511] placeholder-[#86775f]/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm font-medium" placeholder="john@example.com" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[#181511] text-xs font-black uppercase tracking-widest">Service Type</label>
                                    <select className="w-full bg-[#fbfaf9] border border-[#e1ddd5] rounded-xl py-4 px-5 text-[#181511] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none text-sm font-medium">
                                        <option>Consultation</option>
                                        <option>Space Planning</option>
                                        <option>Full Styling</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[#181511] text-xs font-black uppercase tracking-widest">Message (Optional)</label>
                                    <textarea className="w-full bg-[#fbfaf9] border border-[#e1ddd5] rounded-xl py-4 px-5 text-[#181511] placeholder-[#86775f]/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm font-medium resize-none" placeholder="Tell us about your project..." rows={3}></textarea>
                                </div>
                                <button className="w-full bg-primary hover:brightness-110 text-white font-black uppercase tracking-widest py-5 rounded-xl transition-all shadow-xl shadow-primary/20 active:scale-[0.98]" type="submit">
                                    Send Request
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default InteriorDesign;
