import React from 'react';
import { MapPin, Lightbulb, Paintbrush, ShieldCheck, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'The Azure Penthouse',
        category: 'Residential',
        location: 'Dubai, UAE',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtCMuZkGyQ2y9xFdtzw8NaF7jfhg6GFYEPTqACqb6pzwdktuwbaOXNzp4PifbbcgfRLK2kleJvMJu5d7SfbbLPt7fgscx0bUR2GJ-tP72KiFzdk9sOerWugZ6eWU-ueE7m56okWBZiJ6rLbKwnsAX4S7KtbO89_A9dYRLOd8NeoIrRsKNziYYrjiupAav3QA2oqLfug87vIBQLc7j8TA-CJ9eU3lPb2u7tmOtruTXOg67W0RXULuxMUdbyOzsLvwmuEbXWzbGIrJwn',
        size: 'small'
    },
    {
        title: 'Modernist Retreat',
        category: 'Villa',
        location: 'Oslo, Norway',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYvsROZzbVdohx7WYjY-Vo4ZEX_XcSyduAR8DlyxO671XGPbeZaa3JrSzXip3v3BqRDTWvQXB3-y9m53-F1kJbGlWAkt8s6gKL2hqm8lzj7WP46mBhuHR09bLiaDl47KNTlG1lpRiMyZMpJXmQ04DyOjkgT4XHl1mvNF8Y6LfRjGMsv1soABFcWdC4G1I8SAbNnt1Jm59Lr7V-y-HPmpN1xTLSXec9qGa277hxKT-JQZB_YM1oLhoBUQ67uETMNpSHsSJeGa6n6sPL',
        size: 'small'
    },
    {
        title: 'Grand Regency Suite',
        category: 'Hospitality',
        location: 'Paris, France',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEcq6ykXZTPq3H0VTe9p1Qf4Xl1pyIKCu7LxIB-ueYTLzZUCi7Yqqxs7PX_u8kbfJ0z1sd0awLFHpvyrtGkk5Cl2du8SGUdFLW72McEsI8_a8fSB6xaSdSTwKxqSuEdZimyLONt9gGzn_yh5f5gbtgaE3WjC7elBsrUsw3oXQOhouTz9bc4fJz6Ur5RVDY_WJkZ9utLn0iNHFLVIQVz_nsM0dvcD24RxMXRhaNxU2A6FClO2fr23-qINERLegie1Pns2POTHTYQ9Ep',
        size: 'small'
    },
    {
        title: 'The Velvet Lounge',
        category: 'Commercial',
        location: 'New York City, USA',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxBFzG2V5FgK4Zf71xXwyKzMX0cjgkDNbsfwrAWW0cz-D9vKz-R9-FvOLi6L77iw_-Coh6Zx2YC12Vr4ltAkO3tJoabEKldD-q6kBZ3YIxg4IaUKtBc2HoWk1bBALN4rMa2cktFBtnLGRSpbYJwg55P3ZrBtecq-8hDOADGlgV2k_crXVc-6e6DnqxlnG1vfC7EmoJD0Thw8cUM98ZY54feTfS7RtBpkAfMFDcTDfhB0mfRml49CPaMIDZYtqX9En7zgb_92tWj_KL',
        size: 'large'
    },
    {
        title: 'Urban Sanctuary',
        category: 'Residential',
        location: 'Tokyo, Japan',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA93zYX08VtjdP8rJjrdda2bXBSWJJHdmWu3ucfENfyxvFEhjUvU0tefTBh2OHy5zM7QVIY34KSASjgWr5BWkqt88YWUbJRUm_ZA1FOfCWaHsUKhmoUhhhHWmQmzRx79PNcau2CKArwFD5VNMAmI35VYQHb4mneWIv_7ux0eZvyHWkX6SwqQiwvPXwF0hMGgTNxjkyQwGVT878EMpbpWyZZI1-RgjatlTlhBmwaUhrivOx0DVcEqpo0Trhg7tS2PnaRevocugxGucL3',
        size: 'small'
    },
    {
        title: 'Minimalist Atelier',
        category: 'Artistic',
        location: 'Kyoto, Japan',
        image: '/minimalist-atelier.png',
        size: 'small'
    }
];

const Projects: React.FC = () => {
    return (
        <div className="bg-background-light text-charcoal transition-colors duration-300">
            <main className="flex flex-col flex-1">
                <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">

                        {/* Page Heading */}
                        {/* Page Heading Centered */}
                        <div className="flex flex-col items-center text-center gap-6 p-4 mb-12">
                            <div className="flex flex-col gap-4 items-center">
                                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-[#181511]">Portfolio</h1>
                                <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                                <p className="text-[#86775f] text-xl font-normal max-w-3xl leading-relaxed mt-4">
                                    A curated gallery of luxury living spaces and bespoke interior design projects across the globe.
                                </p>
                            </div>
                        </div>


                        {/* Portfolio Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-8 overflow-hidden cursor-pointer aspect-[4/5]
                    ${project.size === 'large' ? 'lg:col-span-2 lg:row-span-2 lg:aspect-auto' : ''}
                  `}
                                    style={{
                                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("${project.image}")`
                                    }}
                                >
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                                        <h3 className={`text-white font-bold leading-tight mb-1 ${project.size === 'large' ? 'text-3xl' : 'text-2xl'}`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-white/70 text-sm flex items-center gap-1">
                                            <MapPin className="size-4" /> {project.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Design Process & Philosophy Centered */}
                        <div className="mt-20 border-t border-[#e1ddd5] pt-16 flex flex-col items-center">
                            <h2 className="text-4xl font-black leading-tight tracking-tight pb-12 text-center">Design Process & Philosophy</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 text-center">
                                <div className="flex flex-col gap-4 items-center">
                                    <Lightbulb className="text-primary size-10" />
                                    <h4 className="text-xl font-black">Concept Development</h4>
                                    <p className="text-[#86775f] text-sm leading-relaxed">
                                        We begin every project by understanding your unique vision and lifestyle, translating it into a cohesive design narrative.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4 items-center">
                                    <Paintbrush className="text-primary size-10" />
                                    <h4 className="text-xl font-black">Bespoke Curation</h4>
                                    <p className="text-[#86775f] text-sm leading-relaxed">
                                        Our designers source exclusive materials and handcrafted furniture from global artisans to create one-of-a-kind spaces.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4 items-center">
                                    <ShieldCheck className="text-primary size-10" />
                                    <h4 className="text-xl font-black">Meticulous Execution</h4>
                                    <p className="text-[#86775f] text-sm leading-relaxed">
                                        From the first sketch to the final installation, we maintain the highest standards of luxury and precision.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action - Themed to match image request */}
                        <div className="mt-20 mb-20 px-4">
                            <div className="bg-[#f5f1ea] rounded-[2rem] p-12 md:p-20 text-center border border-[#e1ddd5] shadow-2xl shadow-charcoal/5">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#181511]">Start Your Journey</h2>
                                <p className="text-[#86775f] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Ready to transform your living space into a masterpiece? Consult with our award-winning design team.
                                </p>
                                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full md:w-auto">
                                    <button className="bg-primary text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 w-full md:w-auto text-sm md:text-base">
                                        Book a Consultation <ArrowRight className="size-5" />
                                    </button>
                                    <button className="border border-[#e1ddd5] bg-white text-[#86775f] px-6 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-widest hover:bg-[#fbfaf9] transition-all w-full md:w-auto text-sm md:text-base">
                                        View Price Guide
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Projects;
