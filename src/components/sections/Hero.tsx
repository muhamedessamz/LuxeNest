import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="w-full">
            <div
                className="relative min-h-[95vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAX8YdEkfRe953QmnR9mz6rGWywh3LgD5Kp3rJ4LgkKvfhMc3ojBLdWagagSIPAhvRdWgz03tTvsg-s3zXoDE2jWvvO7xvLGZXHyQTEoPGxU5HmJGIhKcGhPT2ZSieBZWqm166pIc4LK7hNIBnsLwbF6neoMFme4fKk0YpF7gC207Ipa4vJcpcd9B4-aJ7PY8tLF0_fxiOVxkUeE8SMpKQoy-CgBI1RnSxYvfFnoDmotLzSfB5Hb4hdcqjO7ALDNEtgiERESI7xS2Q4")'
                }}
            >
                <div className="text-center max-w-3xl px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                        Crafting Timeless Comfort & Elegance
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
                        Experience the pinnacle of luxury living with our curated collections of handcrafted furniture.
                    </p>
                    <button className="bg-primary text-charcoal font-bold py-4 px-10 rounded-lg text-lg hover:bg-primary/90 transition-all shadow-xl">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
