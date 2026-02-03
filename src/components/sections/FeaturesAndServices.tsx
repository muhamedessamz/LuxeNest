import React from 'react';
import { Award, Leaf, Truck, CheckCircle } from 'lucide-react';

const features = [
    {
        icon: Award,
        title: 'Master Craftsmanship',
        desc: 'Every piece is hand-finished by master artisans with decades of experience.',
    },
    {
        icon: Leaf,
        title: 'Sustainable Sourcing',
        desc: 'We use only FSC-certified woods and ethically sourced fabrics for our creations.',
    },
    {
        icon: Truck,
        title: 'White Glove Delivery',
        desc: 'Complimentary professional setup for all premium furniture orders.',
    },
];

const FeaturesAndServices: React.FC = () => {
    return (
        <>
            <section className="max-w-[1200px] mx-auto py-24 px-6 text-charcoal transition-colors duration-300">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <f.icon className="text-primary size-10 mb-4" />
                            <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                            <p className="text-charcoal/60 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto bg-[#f5f1ea] rounded-[3rem] p-12 md:p-20 text-center border border-[#e1ddd5] overflow-hidden flex flex-col items-center">
                    <div className="max-w-3xl flex flex-col items-center gap-6">
                        <h2 className="text-4xl md:text-6xl font-black text-[#181511] mb-2 leading-tight">Interior Design Services</h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                        <p className="text-[#86775f] text-xl leading-relaxed mt-4">
                            Let our world-class designers help you transform your space into a masterpiece of comfort and style. From color palettes to custom layouts, we've got you covered.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <CheckCircle className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg text-[#181511]">Complimentary Consultation</h4>
                                    <p className="text-[#86775f] text-sm">30-minute introductory call with an expert.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <CheckCircle className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg text-[#181511]">3D Visualizations</h4>
                                    <p className="text-[#86775f] text-sm">See your dream space before you purchase.</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-12 bg-primary text-white font-black uppercase tracking-widest py-5 px-12 rounded-xl hover:brightness-110 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesAndServices;
