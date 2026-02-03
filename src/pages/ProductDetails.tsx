import React from 'react';
import { Star, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetails: React.FC = () => {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const product = {
        id: 'sofa-001',
        name: 'Velvet Serenity Sofa',
        price: 2499.00,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAagdY4KhcpLL5-MOJHi3cpdcyiK72rXHieflZsYRMD2azFcJfXoSq9lSsm_W2gdQjibZFwkpkoL3fDjiQUpv-3nuiH_5R3VPbia-JopEwiu6sSIXXhD_BJYLdpLv5XCwh-dUaKlezlJzckca1NBra8eQPM0x8DFcBe3L9Aix0BK-j87V_8wzPIaURn3LyLTMu-kbN2d0Qj23Tfc-7h9dOdWb3cLIYYYmQPPKVa4nFM7sR0CmASv7oKk8-8dSHKVcbOWLIdJHF2SZb'
    };

    const isWishlisted = isInWishlist(product.id);

    const handleWishlist = () => {
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };
    return (
        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-8">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap gap-2 mb-8">
                <a className="text-[#86775f] text-sm font-medium hover:text-primary transition-colors" href="/">Home</a>
                <span className="text-[#86775f] text-sm">/</span>
                <a className="text-[#86775f] text-sm font-medium hover:text-primary transition-colors" href="#">Living Room</a>
                <span className="text-[#86775f] text-sm">/</span>
                <span className="text-[#181511] text-sm font-semibold">Velvet Serenity Sofa</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: High-Res Image Gallery */}
                <div className="lg:col-span-7 space-y-4">
                    <div
                        className="aspect-[4/5] rounded-xl bg-center bg-cover bg-no-repeat overflow-hidden shadow-sm"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAagdY4KhcpLL5-MOJHi3cpdcyiK72rXHieflZsYRMD2azFcJfXoSq9lSsm_W2gdQjibZFwkpkoL3fDjiQUpv-3nuiH_5R3VPbia-JopEwiu6sSIXXhD_BJYLdpLv5XCwh-dUaKlezlJzckca1NBra8eQPM0x8DFcBe3L9Aix0BK-j87V_8wzPIaURn3LyLTMu-kbN2d0Qj23Tfc-7h9dOdWb3cLIYYYmQPPKVa4nFM7sR0CmASv7oKk8-8dSHKVcbOWLIdJHF2SZb")' }}
                    ></div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="aspect-square rounded-lg bg-center bg-cover bg-no-repeat cursor-pointer ring-2 ring-primary" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSPcbsv8N1FLsq9XDMnnAyNnz3okSNh1hXWJbjiM4FiDSjMTR9sJ8UaOw65Wsc99q2vTRbZ96y21Dc5GflI2AtomOu2fTAt46cCsZvy6vKQripT0I8xnX1UWU9vOf433HfX9LWBXrX1YB7uxyubzWJIJgTJE4pul8zS1-NK4h4x3JqQlJO07eGxYsAb6ziTrIHTGhZxLixXO0DaRJnJ8SRVKqCGTJTX3VBMXF2ZQxaB_4DCAjlV4m1GSMS9BiMF2bcEhp_V_CVHBCP")' }}></div>
                        <div className="aspect-square rounded-lg bg-center bg-cover bg-no-repeat cursor-pointer opacity-70 hover:opacity-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIPh97Tp8nxIlGIsnirpV8gwr3ztYtCFLyx7JAVzkuz9F46CSbrT5i9i9Wj5iWQRC5JHxu7bMaedZ3uDCCgMemR6Rs8K5dASr8gFz3MvkYhdEwzWKnBPdguXt2Fz-_lTJsVZOUpL8jMNNg_C286XzTeUd42P8pVKVHlryJ8N7NBxRM8zHgQBhVuJwrvfK8n25tqpKXJ2P75SRzsx3SuNMNQMOI1c9WHeC1EMHtP8ofEAMnuuEqnqnf_FOzqYXW-xwF9xLuMOmY9Axt")' }}></div>
                        <div className="aspect-square rounded-lg bg-center bg-cover bg-no-repeat cursor-pointer opacity-70 hover:opacity-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzLzr7EX0JR2bb7T0SGQ90sjovSY7Evts570nMJc6LPeyqc8mQX12-xV0Pi2RUYH9G-QMt-0RslRKbWAWoItBGUe8cSpXeJ62RUdhm2Ed0hSO1p-u9qLC__L2DAZVCHJJd_HBy3MZc_x9YQ_c67kPWutLiryC3GSbr2HWBy0uBdXqdnLfGGqwcnsV3zepXIUwpul-sRnWBagtsEAIivdteYeiNXP6EsnCTh7pT1rQ6z2W7gDGiVCwKeINsiOUO4P3XUqsUpCsOHq-z")' }}></div>
                        <div className="aspect-square rounded-lg bg-center bg-cover bg-no-repeat cursor-pointer opacity-70 hover:opacity-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2bHzAFaqIz8HKeWiW-ey5PwSg2MRuD56NX_TU1hbYgQLjZTo8gBN183pPOXprZDawTyqZXUk-m6FnLDKuydw_Tfn2UmILTWj8mkTWvBjdTwyO4sioJJmwtsmRjQy0mezevoTKDo2PRkPavzNC3itAqGhZLk65Kr3MTBlKsZGPfMdl-0kZA1Ps_0Cczrvn3-l45zUEEbnevU7UZg60ZE7vH8IFYr_I6uYYmte_xoA3PHMBSO8Xg9x6zKw2ZMNWAt_5i6u4wRyzDRyT")' }}></div>
                    </div>
                </div>

                {/* Right: Product Information */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#181511] mb-2">Velvet Serenity Sofa</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <p className="text-2xl font-bold text-primary">$2,499.00</p>
                            <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">In Stock</span>
                        </div>
                        {/* Rating Summary Integration */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-0.5 text-primary">
                                <Star className="size-4 fill-current" />
                                <Star className="size-4 fill-current" />
                                <Star className="size-4 fill-current" />
                                <Star className="size-4 fill-current" />
                                <Star className="size-4" />
                            </div>
                            <p className="text-sm font-medium text-[#86775f] underline cursor-pointer">4.9 (128 reviews)</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-base leading-relaxed text-[#181511]">
                            Experience unparalleled comfort with our signature Velvet Serenity Sofa. Handcrafted with a solid oak frame and upholstered in premium Italian performance velvet, this piece brings timeless elegance and modern durability to your living space.
                        </p>
                    </div>

                    {/* Material Selection */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#181511]">Select Fabric</h3>
                        <div className="flex gap-3">
                            <button className="w-10 h-10 rounded-full bg-[#1e293b] ring-2 ring-offset-2 ring-primary border-2 border-white" title="Midnight Blue"></button>
                            <button className="w-10 h-10 rounded-full bg-[#3d4433] ring-0 hover:ring-2 hover:ring-offset-2 hover:ring-primary border-2 border-white" title="Forest Green"></button>
                            <button className="w-10 h-10 rounded-full bg-[#7c2d12] ring-0 hover:ring-2 hover:ring-offset-2 hover:ring-primary border-2 border-white" title="Burnt Sienna"></button>
                            <button className="w-10 h-10 rounded-full bg-[#f8fafc] ring-0 hover:ring-2 hover:ring-offset-2 hover:ring-primary border-2 border-white" title="Pearl White"></button>
                        </div>
                    </div>

                    {/* Dimension Specs */}
                    <div className="grid grid-cols-3 gap-4 border-y border-[#e1ddd5] py-6">
                        <div>
                            <p className="text-xs text-[#86775f] font-semibold uppercase">Length</p>
                            <p className="text-lg font-bold">96"</p>
                        </div>
                        <div>
                            <p className="text-xs text-[#86775f] font-semibold uppercase">Depth</p>
                            <p className="text-lg font-bold">40"</p>
                        </div>
                        <div>
                            <p className="text-xs text-[#86775f] font-semibold uppercase">Height</p>
                            <p className="text-lg font-bold">32"</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => addToCart({ ...product, quantity: 1 })}
                            className="flex-1 flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all uppercase tracking-widest text-sm"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={handleWishlist}
                            className={`flex items-center justify-center border-2 ${isWishlisted ? 'border-primary bg-primary/5' : 'border-[#e1ddd5]'} hover:bg-[#f0eeea] text-[#181511] font-bold py-4 px-6 rounded-lg transition-all`}
                        >
                            <Heart className={`size-5 mr-2 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
                            {isWishlisted ? 'In Wishlist' : 'Wishlist'}
                        </button>
                    </div>

                    {/* Additional Details Accordion */}
                    <div className="space-y-2 pt-4">
                        <div className="flex items-center justify-between py-3 border-b border-[#e1ddd5] cursor-pointer">
                            <span className="font-bold text-sm">Shipping & Returns</span>
                            <ChevronDown className="size-5" />
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-[#e1ddd5] cursor-pointer">
                            <span className="font-bold text-sm">Care Instructions</span>
                            <ChevronDown className="size-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Summary Section */}
            <section className="mt-24">
                <h2 className="text-2xl font-bold mb-8">Customer Satisfaction</h2>
                <div className="bg-white rounded-xl p-8 border border-[#e1ddd5]">
                    <div className="flex flex-wrap gap-x-12 gap-y-10">
                        <div className="flex flex-col gap-3 min-w-[150px]">
                            <p className="text-[#181511] text-6xl font-black leading-tight tracking-[-0.033em]">4.9</p>
                            <div className="flex gap-1 text-primary">
                                <Star className="size-5 fill-current" />
                                <Star className="size-5 fill-current" />
                                <Star className="size-5 fill-current" />
                                <Star className="size-5 fill-current" />
                                <Star className="size-5 fill-current" />
                            </div>
                            <p className="text-[#86775f] text-base font-medium">Based on 128 reviews</p>
                        </div>
                        <div className="grid min-w-[300px] flex-1 grid-cols-[30px_1fr_50px] items-center gap-y-4">
                            <p className="text-sm font-bold">5</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '90%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">90%</p>
                            <p className="text-sm font-bold">4</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '6%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">6%</p>
                            <p className="text-sm font-bold">3</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '2%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">2%</p>
                            <p className="text-sm font-bold">2</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '1%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">1%</p>
                            <p className="text-sm font-bold">1</p>
                            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#e1ddd5]"><div className="rounded-full bg-primary" style={{ width: '1%' }}></div></div>
                            <p className="text-[#86775f] text-sm font-bold text-right">1%</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="mt-24 mb-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Complete the Look</h2>
                    <a className="text-primary font-bold text-sm hover:underline" href="#">View All Collection</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-center bg-cover mb-4 overflow-hidden relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr2IlvbnU5T42UiATQp9UJXHKd9QGHzd8q3fOllGTafcQp4aMIAVGh4sWYJeyhP-Tmj4u2DV-56GUTZt59igIawRup-WuROtBXLCgtrqmSWvrK5aDo2mBku2PPXKYmCJ6yZdNc50eTT369ZOzjP6zlFf0UQyTnqBqWFF2OXhl0yx_R3ltUhze5771tWTKlkgHVSUbQll6xtIPnw5hNb-1F6yQ3GRcje4oWiJBK5raEjPueHrN1JB7smiSz9KYzdafAPEz50I9eJ-Iu")' }}>
                            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <Heart className="size-5 text-primary" />
                            </button>
                        </div>
                        <h3 className="font-bold text-base mb-1">Aurelius Coffee Table</h3>
                        <p className="text-[#86775f] font-medium">$890.00</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-center bg-cover mb-4 overflow-hidden relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKc42b78k3BvmnrD51lp4KBT5L6LjxL6fXoGSvFY1MNRvZh7xW3-GCWt16WghnIHS5zwwGWwrAXHcRCMoQ30SxOv6m7daKewROx06U7T9ItZH371bELomo-9Sf9_1ac8BobVDsrE3dbrvRzSTm6ItNFuX4wjILBSOxsci5SxUGp5Jtn-HkWzCZepFBMQfTebJxzD9B4_u3PyFAOuTTYT981665HdSDCXUosep3r1cDfLySRjRNAwX6x6LjA-ybalCI9fWlKIgQQz92")' }}>
                            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <Heart className="size-5 text-primary" />
                            </button>
                        </div>
                        <h3 className="font-bold text-base mb-1">Luna Wool Rug</h3>
                        <p className="text-[#86775f] font-medium">$1,200.00</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-center bg-cover mb-4 overflow-hidden relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCayyzpU7Dclv5q2buvdBHrGcUwv_NhLMaz6Dsa9BOlen2SWQ3tAEnAq7u2EQPrf5rnvaJVx9_VfIrqFky3Kg74pXvSh1YATX9QMuBTuxYhjK-v3R6tf8B5Pb_RTBFTNG2n-9qs1ytvLoPyl2_r_HhWlMvLQohvheJp7byD9TdUuqHL6KTCg8dpTVq64ZyWb_Wcrv27ME0p2WwQj1tCGYVOCqai-OBYB2KQ9dFm47koFDShB-aejGEzS7eHrS0fnmvGjNwZJXJg3IPb")' }}>
                            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <Heart className="size-5 text-primary" />
                            </button>
                        </div>
                        <h3 className="font-bold text-base mb-1">Helios Floor Lamp</h3>
                        <p className="text-[#86775f] font-medium">$450.00</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-center bg-cover mb-4 overflow-hidden relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnQYohfdFDSs9NbSHzbA-ACwMHXlSrGTPRFYuHFUsHaZz5jLHEPWVDfkBqSvg4n11E3I74d_yKIwpNYCA9WfIllU7XCH-G4C-35lM7fGZMVsbz54tlwa-iyCO8mc5TQM2eezoRuKvEaD4KF4zEkKkb5GylOjqU4aO2uIL2j5GaDYn4zzgayIrOuveTffaZpAHkXBxUZ6bYvlOlZAwqhYj9Jj71m_qJsZeHhTHIEU3O6Sy1x5Ddm9sjz7ODRi6SY_YcIENlw5bC_Vwm")' }}>
                            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <Heart className="size-5 text-primary" />
                            </button>
                        </div>
                        <h3 className="font-bold text-base mb-1">Soft Touch Throw Pillow</h3>
                        <p className="text-[#86775f] font-medium">$95.00</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
