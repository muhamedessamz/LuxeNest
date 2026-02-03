import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const showrooms = [
    {
        city: 'New York',
        name: 'The Flagship Studio',
        address: '123 Elegance Blvd, Design District',
        phone: '+1 (212) 555-0192',
        hours: 'Mon-Sat: 10am - 7pm',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976394541571!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1706912345678!5m2!1sen!2s'
    },
    {
        city: 'Paris',
        name: 'LuxeNest Marais',
        address: '42 Rue Charlot, 75003 Paris',
        phone: '+33 1 42 77 12 34',
        hours: 'Tue-Sun: 11am - 8pm',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21000!2d2.3522!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s!4v1706912345679!5m2!1sen!2s'
    },
    {
        city: 'Milan',
        name: 'Milanese Design Hub',
        address: 'Via Brera, 15, 20121 Milano',
        phone: '+39 02 8901 2345',
        hours: 'Mon-Sat: 10am - 7pm',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000!2d9.1900!3d45.4642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c14945c92c47%3A0x7d2836262456e!2sMilan%2C%20Italy!5e0!3m2!1sen!2s!4v1706912345680!5m2!1sen!2s'
    }
];

const Contact: React.FC = () => {
    const [activeShowroom, setActiveShowroom] = useState(showrooms[0]);

    return (
        <div className="bg-background-light text-charcoal transition-colors duration-300">
            <main className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[1200px] px-6 py-10">

                    {/* Page Heading */}
                    <div className="flex flex-col items-center text-center gap-6 mb-12">
                        <div className="flex min-w-72 flex-col gap-3 items-center">
                            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">Get in Touch</h1>
                            <p className="text-[#86775f] text-lg max-w-xl">
                                Whether you're looking for a statement piece or a complete home makeover, our concierge team is here to guide you.
                            </p>
                        </div>
                        <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#f0eeea] text-charcoal text-sm font-bold border border-transparent hover:border-primary transition-all">
                            View Showrooms
                        </button>
                    </div>

                    {/* Split Layout: Form and Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                        {/* Contact Form Section */}
                        <div className="flex flex-col gap-8 bg-white p-8 md:p-10 rounded-3xl border border-[#e1ddd5] shadow-xl shadow-charcoal/5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl font-black">Send a Message</h2>
                                <p className="text-[#86775f] text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
                            </div>
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-[#86775f]">First Name</label>
                                        <div className="relative">
                                            <input
                                                className="w-full rounded-xl border border-[#e1ddd5] bg-[#fbfaf9] focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 outline-none px-5 transition-all text-sm font-medium"
                                                placeholder="Jane"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-[#86775f]">Last Name</label>
                                        <div className="relative">
                                            <input
                                                className="w-full rounded-xl border border-[#e1ddd5] bg-[#fbfaf9] focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 outline-none px-5 transition-all text-sm font-medium"
                                                placeholder="Doe"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-[#86775f]">Email Address</label>
                                    <div className="relative">
                                        <input
                                            className="w-full rounded-xl border border-[#e1ddd5] bg-[#fbfaf9] focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 outline-none px-5 transition-all text-sm font-medium"
                                            placeholder="jane@example.com"
                                            type="email"
                                        />
                                        <Mail className="absolute right-5 top-1/2 -translate-y-1/2 size-4 text-[#86775f] opacity-50" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-[#86775f]">Message</label>
                                    <textarea
                                        className="w-full rounded-xl border border-[#e1ddd5] bg-[#fbfaf9] focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none outline-none p-5 transition-all text-sm font-medium"
                                        placeholder="Tell us about your project or requested pieces..."
                                        rows={5}
                                    ></textarea>
                                </div>
                                <button
                                    className="group relative h-14 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-xl overflow-hidden shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
                                    type="submit"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Send Message
                                        <ExternalLink className="size-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Section */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4 items-center text-center">
                                <h2 className="text-2xl font-bold border-b border-[#f0eeea] pb-4 w-full">Our Concierge</h2>
                                <p className="text-[#86775f]">
                                    Available Monday through Friday, 9am - 6pm EST for personalized design consultation.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {/* Studio Card */}
                                <div className="flex items-start gap-4 rounded-xl border border-[#e1ddd5] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-primary p-3 bg-primary/10 rounded-lg">
                                        <MapPin className="size-6" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold">Main Studio</h3>
                                        <p className="text-[#86775f] text-sm leading-relaxed">
                                            123 Elegance Blvd, Design District<br />New York, NY 10012
                                        </p>
                                    </div>
                                </div>
                                {/* Call Card */}
                                <div className="flex items-start gap-4 rounded-xl border border-[#e1ddd5] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-primary p-3 bg-primary/10 rounded-lg">
                                        <Phone className="size-6" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold">Call Us</h3>
                                        <p className="text-[#86775f] text-sm">+1 (800) LUX-NEST</p>
                                        <p className="text-[#86775f] text-sm">+1 (212) 555-0192</p>
                                    </div>
                                </div>
                                {/* Email Card */}
                                <div className="flex items-start gap-4 rounded-xl border border-[#e1ddd5] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-primary p-3 bg-primary/10 rounded-lg">
                                        <Mail className="size-6" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold">Email Us</h3>
                                        <p className="text-[#86775f] text-sm">concierge@luxenest.com</p>
                                        <p className="text-[#86775f] text-sm">press@luxenest.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <section className="flex flex-col gap-8 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-black">Find a Showroom</h2>
                            <p className="text-[#86775f] text-base">Visit our physical spaces to experience the artisan quality firsthand.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 flex flex-col gap-4">
                                {showrooms.map((showroom, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveShowroom(showroom)}
                                        className={`group p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-xl ${activeShowroom.city === showroom.city ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-[#e1ddd5] bg-white hover:border-primary'}`}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block ${activeShowroom.city === showroom.city ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                                                    {showroom.city}
                                                </span>
                                                <h3 className="font-bold text-lg">{showroom.name}</h3>
                                            </div>
                                            <div className={`size-10 rounded-full flex items-center justify-center transition-all ${activeShowroom.city === showroom.city ? 'bg-primary text-white' : 'bg-[#f0eeea] text-[#86775f] group-hover:bg-primary group-hover:text-white'}`}>
                                                <MapPin className="size-5" />
                                            </div>
                                        </div>
                                        <div className="space-y-2 text-[#86775f] text-sm font-medium">
                                            <p className="flex items-center gap-2">
                                                <MapPin className="size-4 shrink-0" /> {showroom.address}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Phone className="size-4 shrink-0" /> {showroom.phone}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Clock className="size-4 shrink-0" /> {showroom.hours}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#181511] hover:text-primary transition-colors">
                                            View Details <div className="size-1 bg-primary rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Display */}
                            <div className="lg:col-span-2 relative h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-[#e1ddd5] shadow-2xl group min-h-[500px]">
                                <iframe
                                    key={activeShowroom.city}
                                    src={activeShowroom.mapUrl}
                                    className="w-full h-full grayscale opacity-80 contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1d1a15] via-[#1d1a15]/80 to-transparent pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex flex-wrap justify-between items-end gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-white font-black text-2xl leading-none">{activeShowroom.name}</h4>
                                            <p className="text-white/70 text-base">{activeShowroom.address}</p>
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeShowroom.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pointer-events-auto flex items-center gap-2 bg-primary text-[#1d1a15] px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl"
                                        >
                                            Get Directions <ExternalLink className="size-4" />
                                        </a>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
                                            <div className="size-1.5 bg-green-500 rounded-full animate-pulse"></div> Showroom Open
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default Contact;
