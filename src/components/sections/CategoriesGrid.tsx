import React from 'react';

const categories = [
    {
        title: 'Living Room',
        items: '420+ Items',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdgb53VczFkXg_VUkNLHD-AznVSOGwRoVxaXbLESCKHtJg4cknD6GrM3pv_22ndL508bMDUzcouflSw4-jrn-DsxzzcxkyrHOCI_lpncWuJthcpBc8zmIkzhDKzu9WL-c1pR8K5lHubBVEkcLGNgRkJeyWEBzWxC5T6x-Pv3QIL8kqeujysoldoY8cvGV0AGLBymuAuMqHYUvE4VmQ9vOVWxS6oMNsnnEE-dE4XVAOJimjKIAnRjTVeN7TWjPDavN9v6a6UtoVbt5a',
    },
    {
        title: 'Bedroom',
        items: '150+ Items',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAetdIdjcbyKzS6tLLcFaz2qk4lgSA1KJ3WlurYvssK-J5cx3H--Zu7EgUz82oN4M99YjHiIXvnWUFEoa8WQ0jyqz_Xwmh43NhlatzL31RSmfeX-cfaTuJ4Lydvcu4d3I0kEGXW0xRQ9XK5fJU3MaaEf8FQy59Z8wCtu1t6qwJunaPf7oCntHSjKHfraM1SSgVY9YRDkYNe7HsYEbBXVj-YWXTK3Ml86D4XG1GckQ875XyxDEWvzYGoXdSH5---IpQwaUBO3j3_a2bZ',
    },
    {
        title: 'Dining',
        items: '280+ Items',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArNEMsIYoP_QkyTsMOVf2aW9demELCZKlls8xvgR0Wvmk2qf_D31ey0dVoE7r_9aYeajChsosJnaGjifgfj_MFVAfdMUdDnKJUC4V6dhU4Dv0f-2SL8EaFGE40zqGOWSM8IUlBnaiXOTLUQT95_O1ZMaret9iKsi6e7uMwUNd6lfgznPGrzXKyXMMUds4Cax9UHeFY-7w7uAfQ63z-FfGsBYtW1KeztUaGBTFu8ZoRdnGs0yOgvGBbRl2bIzD9oVdvHo1RF_0xMt9E',
    },
];

const CategoriesGrid: React.FC = () => {
    return (
        <section className="max-w-[1200px] mx-auto py-20 px-6">
            <div className="flex flex-col items-center text-center mb-16 gap-3">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Curated</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2 text-charcoal transition-colors duration-300">Featured Categories</h2>
                <div className="h-1 w-20 bg-primary rounded-full mt-2"></div>
                <a className="text-primary font-bold text-sm border-b-2 border-primary pb-1 mt-6 hover:brightness-110 transition-all" href="#">Browse All Collections</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url("${cat.image}")` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                            <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
                            <p className="text-white/70 text-sm mt-1">{cat.items}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriesGrid;
