import React from 'react';
import { Store, Award, Globe, Trophy, Sparkles, Eye } from 'lucide-react';

const teamMembers = [
    {
        name: 'Elena Moretti',
        role: 'Chief Designer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQL_Doc8J6-rmNL0nAB5x4MpVb80m7r98dty8tvzsSvW1DUJq9bvGTslzjrGJF9tNC944f0-TY_-yEsEEw3jo32Z92QpyI8sVvEGJUgfUTttGYFV27Ldh_g0EikrD1rdSaJ5-M4Cp1XUmAcZKZUzmug99ucib8nfhtg1slbIVYLIV6guamTBRAOFXNkuqYkqyskNLsuStiqUGb1lmAW4yXg8AtOOggWwMoEQiiWXDi3NT4Shez-4371A6_ofR9iBeII-FfIj9Zqve'
    },
    {
        name: 'Julian Vane',
        role: 'Master Carpenter',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtUohsdNKWngwDMg6IKhVQtoS1tlf5iYuQba_OlKLWvOxUoaUKXhpIIliTPBzotH4mtQw80gqYH8rGrwrmZKxwb8rgmc_4dJXLiJkRh1ESP0AUwRFF42sttPf-arSLXQSHQnijT_UYC-1xlqbovBzvGxmk2jQzZC3YSOEzYKXk2M53sTyl67aF97slDRWpOYiRvmhgc0F8E12I2F98ymZjLJ7rlN5zEl3bHW_I9iItfCY1EM91HEu8-R_JskWjt2yWJbbBUHbF6zPK'
    },
    {
        name: 'Sofia Chen',
        role: 'Textile Curator',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj4sMtbjbf84q-1a64WG1rA5pfqv3DsMAfHp4LHshCLG-v2CONofOAh1tLP3VTotytAyrleV4-R6aeyqOGepO68YP1Em-9IfSZ3HUJXwVBOcvUlhoK0-XXtObkNXi_FvMJkpysINf5J72R_MkdCzZ0CdI1L9QbdLjJYHVdJ_tUdq1IqnNbxqlQ616jwlAetFn0OgvCoSni1Al0GWNLXflxysoqW_l5W866A5Lzq_o_BNcswBTsMwEzgJCZNhD42fekhF8PGkxpkP8X'
    },
    {
        name: 'Marcus Thorne',
        role: 'Sustainability Lead',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCXBdM2nde5RvIZFcRZAZpRU_nfj9G0-YXt8gtO_xfmrIP7gQa6CfGqJ0AZHQEEQ5x3JSm4wpu_50VlVsOdQOTUKNyWkWFlnVUXHDdAlknXFYfVByFSPdsx1a6ksf1wkycA8ilvoMlS6LqpZfwtgBa9FlEK0R-KItZS3r5dDJjr28PC3_Ni-z8SbwJKhA1z3Kx3nvw0I057UTclz0BqahojI449edAllDlkLDLfLwcDIeTUpwIhePFQvOY5forYevcHZyT3ffO8X86'
    }
];

const timelineSteps = [
    {
        year: '1978',
        title: 'Foundation in Florence',
        description: 'Matteo Rossi opens a small workshop specialized in hand-carved walnut frames, blending traditional Tuscan techniques with modern silhouettes.',
        icon: Store
    },
    {
        year: '1995',
        title: 'Master Artisan Certification',
        description: "LuxeNest receives the prestigious 'Eredità Artigiana' award, recognizing our contribution to preserving Italian manufacturing heritage.",
        icon: Award
    },
    {
        year: '2012',
        title: 'Sustainability Milestone',
        description: 'Transition to 100% FSC-certified timber and solar-powered manufacturing hubs across Europe.',
        icon: Globe
    },
    {
        year: '2022',
        title: 'Global Design Awards',
        description: "Winning the International Furniture Fair's 'Best in Craft' award for our modular 'Aura' collection.",
        icon: Trophy
    }
];

const About: React.FC = () => {
    return (
        <div className="bg-background-light text-charcoal transition-colors duration-300">
            <main className="flex flex-col items-center">
                <div className="w-full max-w-[1500px] flex flex-col gap-10">

                    {/* Hero Section */}
                    <section className="w-full mt-8 px-4 md:px-6">
                        <div
                            className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-[2rem] items-center justify-center p-8 relative overflow-hidden shadow-2xl"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXM-ML1zdQESi2KZ4oNV9o7_0HK_CxAIT6J2V7SIYoTnX5RCoqlWlq29YZN8HLgek7Rjlg61k5XI65-5zi3NjRguYO8_iREOB8NyIqZgvaexkg1Q3KwWRuy9HyuApQnoFMBf_gOduM7XRTWhWQBFq64HwM_GibFwc0GDhT7HGP48PDMjABzD69lpyBeK0yCwKVTVaxj52MWLT_cY6NHsc38PLxEqXz4Op5eKnbhfo2libIOu1BBjzQryi7mFt6EWFjqczXZV_6eMQ4")'
                            }}
                        >
                            <div className="flex flex-col gap-6 text-center z-10 max-w-4xl items-center">
                                <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-bold uppercase tracking-widest border border-white/20">Est. 1978</div>
                                <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-xl">
                                    Our Story is Written in Wood
                                </h1>
                                <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-2xl drop-shadow-md">
                                    From a small workshop in Florence to a global beacon of luxury, LuxeNest has defined the art of sophisticated living for over four decades.
                                </p>
                            </div>
                            <button className="z-10 mt-8 bg-primary text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:brightness-110 hover:scale-105 transition-all shadow-xl shadow-primary/30">
                                Discover Our Heritage
                            </button>
                        </div>
                    </section>

                    {/* Purposeful Luxury Section */}
                    <section className="flex flex-col gap-16 px-4 py-16">
                        <div className="flex flex-col gap-6 text-center items-center">
                            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#181511]">
                                Purposeful Luxury
                            </h2>
                            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                            <p className="text-[#86775f] text-xl max-w-3xl leading-relaxed">
                                Rooted in elegance, committed to sustainable craftsmanship and timeless design.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-6 p-8 rounded-xl bg-white border border-primary/20 shadow-sm">
                                <div
                                    className="w-full aspect-video bg-cover bg-center rounded-lg"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEqrQU7NwuM8PmK9Gxr2fZvWlit4cSW60cs5pvUk8K3ofzz2efd6GeaiVPrkP6GsRhC1amn8q71NpFcvX2v06vgOnmtm0XA7i7fOb74bhPsGDIDe7M0cmZBOAJl2VAtU4hMixurTlfeIlTlcxU23Zr4fIYN3adwDV6JsFkBURpjlW7HDe6YsOaTQ3zYJmwDpnmDTqF3S7pVpF78E3r9iwk7pfLN1kPuodENf8nkDrl6jnk2fMTS5JbqSSpFZgDy2o1gM6PZWO0kDze")' }}
                                ></div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-primary">
                                        <Sparkles className="size-6" />
                                        <h3 className="text-2xl font-bold">The Mission</h3>
                                    </div>
                                    <p className="text-[#86775f] leading-relaxed">
                                        To redefine luxury through artisanal precision and sustainable materials. We believe every piece should tell a story of ethical production and unmatched quality.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 p-8 rounded-xl bg-white border border-primary/20 shadow-sm">
                                <div
                                    className="w-full aspect-video bg-cover bg-center rounded-lg"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCC2zwxzgBRnJ0sSsSDvaUsD28rymrAVsmb6iz0ttCaUlVlKfWN53b-ljslp-gfAc3T2-Xfz254bqZVU1WHIU7xMgY8rzEVih5trQAfsFc1Q_Gsdv4adITFmJKepqnKRuXw8KU-XVEPRHOmT8CSiohADQSrSr7M3AdJ1stnlWvHGoTFhApEWZ60Zx1pms9OOP7wU-imjFG87Vt7kPgIFgckNuAoGP4c_0rbQhSiWpO37D6Q5CYaF8XO6ajI0Fokn9FHvzH1gtlh6bO-")' }}
                                ></div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-primary">
                                        <Eye className="size-6" />
                                        <h3 className="text-2xl font-bold">The Vision</h3>
                                    </div>
                                    <p className="text-[#86775f] leading-relaxed">
                                        Creating spaces that inspire generations through timeless design. Our goal is to be the global benchmark for heirloom-quality contemporary furniture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="px-4 py-16">
                        <div className="flex flex-col items-center text-center mb-16 gap-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#181511]">The Craftsmanship Journey</h2>
                            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            {timelineSteps.map((step, index) => (
                                <div key={step.year} className="grid grid-cols-[48px_1fr] gap-x-6">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-primary bg-primary/10 p-2 rounded-full">
                                            <step.icon className="size-6" />
                                        </div>
                                        {index !== timelineSteps.length - 1 && (
                                            <div className="w-[1.5px] bg-primary/30 h-16 grow"></div>
                                        )}
                                    </div>
                                    <div className="flex flex-col pb-8 pt-1">
                                        <h4 className="text-xl font-bold leading-normal">{step.title}</h4>
                                        <p className="text-primary font-bold mb-2">{step.year}</p>
                                        <p className="text-[#86775f] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Meet the Team Section */}
                    <section className="px-4 py-20 bg-[#f5f1ea] rounded-[3rem] my-10 border border-[#e1ddd5]">
                        <div className="flex flex-col gap-6 text-center items-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#181511]">The Visionaries</h2>
                            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                            <p className="text-[#86775f] max-w-2xl text-xl leading-relaxed">
                                Meet the master designers and artisans behind every LuxeNest creation.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.name} className="flex flex-col items-center text-center gap-4 group">
                                    <div
                                        className="w-32 h-32 rounded-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-primary/20 p-1"
                                        style={{ backgroundImage: `url("${member.image}")` }}
                                    ></div>
                                    <div>
                                        <p className="font-bold text-lg">{member.name}</p>
                                        <p className="text-primary text-sm font-medium uppercase tracking-widest">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="px-4 py-20 text-center">
                        <div className="bg-[#f5f1ea] rounded-[2rem] p-12 md:p-20 flex flex-col items-center gap-8 border border-[#e1ddd5] shadow-2xl shadow-charcoal/5">
                            <h2 className="text-4xl md:text-5xl font-black text-[#181511]">Experience the Heritage Firsthand</h2>
                            <p className="text-[#86775f] max-w-2xl text-xl leading-relaxed">
                                Visit our flagship showrooms or book a private consultation with our design experts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
                                <button className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl hover:brightness-110 hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                    Book a Consultation
                                </button>
                                <button className="px-10 py-4 border border-[#e1ddd5] bg-white text-[#86775f] hover:bg-[#fbfaf9] rounded-xl transition-all font-black uppercase tracking-widest">
                                    Locate Showroom
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default About;
