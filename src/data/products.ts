
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    oldPrice?: string;
    description: string;
    badge?: string;
    badgeColor?: string;
    image: string;
    images: string[];
    rating: number;
    reviewCount: number;
    specs: {
        length: string;
        depth: string;
        height: string;
    };
    inStock: boolean;
}

export const products: Product[] = [
    // --- LIVING ROOM ---
    {
        id: 'coll-1',
        name: 'Aurelius Velvet Sofa',
        category: 'Living Room',
        price: 2499,
        badge: 'New',
        image: 'https://furniture123.co.uk/Images/781012681SOF089_1_Supersize.jpg?v=7',
        images: [
            'https://furniture123.co.uk/Images/781012681SOF089_1_Supersize.jpg?v=7',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBSPcbsv8N1FLsq9XDMnnAyNnz3okSNh1hXWJbjiM4FiDSjMTR9sJ8UaOw65Wsc99q2vTRbZ96y21Dc5GflI2AtomOu2fTAt46cCsZvy6vKQripT0I8xnX1UWU9vOf433HfX9LWBXrX1YB7uxyubzWJIJgTJE4pul8zS1-NK4h4x3JqQlJO07eGxYsAb6ziTrIHTGhZxLixXO0DaRJnJ8SRVKqCGTJTX3VBMXF2ZQxaB_4DCAjlV4m1GSMS9BiMF2bcEhp_V_CVHBCP',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCIPh97Tp8nxIlGIsnirpV8gwr3ztYtCFLyx7JAVzkuz9F46CSbrT5i9i9Wj5iWQRC5JHxu7bMaedZ3uDCCgMemR6Rs8K5dASr8gFz3MvkYhdEwzWKnBPdguXt2Fz-_lTJsVZOUpL8jMNNg_C286XzTeUd42P8pVKVHlryJ8N7NBxRM8zHgQBhVuJwrvfK8n25tqpKXJ2P75SRzsx3SuNMNQMOI1c9WHeC1EMHtP8ofEAMnuuEqnqnf_FOzqYXW-xwF9xLuMOmY9Axt',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB2bHzAFaqIz8HKeWiW-ey5PwSg2MRuD56NX_TU1hbYgQLjZTo8gBN183pPOXprZDawTyqZXUk-m6FnLDKuydw_Tfn2UmILTWj8mkTWvBjdTwyO4sioJJmwtsmRjQy0mezevoTKDo2PRkPavzNC3itAqGhZLk65Kr3MTBlKsZGPfMdl-0kZA1Ps_0Cczrvn3-l45zUEEbnevU7UZg60ZE7vH8IFYr_I6uYYmte_xoA3PHMBSO8Xg9x6zKw2ZMNWAt_5i6u4wRyzDRyT'
        ],
        description: 'Experience unparalleled comfort with our signature Aurelius Velvet Sofa. Handcrafted with a solid oak frame and upholstered in premium Italian performance velvet, this piece brings timeless elegance and modern durability to your living space.',
        rating: 4.9,
        reviewCount: 128,
        specs: { length: '96"', depth: '40"', height: '32"' },
        inStock: true
    },
    {
        id: 'feat-1',
        name: 'Aurum Velvet Sofa',
        category: 'Living Room',
        price: 2450,
        image: 'https://media.homecentre.com/i/homecentre/165677711-165677711-HC18072023_01-2100.jpg?v=1',
        images: ['https://media.homecentre.com/i/homecentre/165677711-165677711-HC18072023_01-2100.jpg?v=1'],
        description: 'A masterpiece of comfort and style. The Aurum Velvet Sofa features deep seating and plush cushions upholstered in premium velvet.',
        rating: 4.9,
        reviewCount: 95,
        specs: { length: '90"', depth: '38"', height: '34"' },
        inStock: true
    },
    {
        id: 'coll-7',
        name: 'Elysian Accent Chair',
        category: 'Living Room',
        price: 899,
        image: 'https://m.media-amazon.com/images/I/61EOb24yEAL.jpg',
        images: ['https://m.media-amazon.com/images/I/61EOb24yEAL.jpg'],
        description: 'A statement piece for any corner. The Elysian Chair combines bold curves with exceptional comfort.',
        rating: 4.7,
        reviewCount: 15,
        specs: { length: '30"', depth: '32"', height: '38"' },
        inStock: true
    },
    {
        id: 'coll-16',
        name: 'Orion Velvet Ottoman',
        category: 'Living Room',
        price: 450,
        image: 'https://img.koalaliving.com.au/products/126653/fb0eb9d4-8488-488a-9d09-2f21c4c6a3f5.png',
        images: ['https://img.koalaliving.com.au/products/126653/fb0eb9d4-8488-488a-9d09-2f21c4c6a3f5.png'],
        description: 'Versatile and plush. The Orion Ottoman works as extra seating, a footrest, or even a coffee table with a tray.',
        rating: 4.7,
        reviewCount: 45,
        specs: { length: '24"', depth: '24"', height: '18"' },
        inStock: true
    },
    {
        id: 'coll-8',
        name: 'Vanguard Coffee Table',
        category: 'Living Room',
        price: 1200,
        badge: 'Trending',
        badgeColor: 'bg-primary',
        image: 'https://cdn.decorpad.com/photos/2025/09/01/m_White-Boucle-Chairs.jpg',
        images: ['https://cdn.decorpad.com/photos/2025/09/01/m_White-Boucle-Chairs.jpg'],
        description: 'Modern lines meet sculptural form. The Vanguard Coffee Table is a centerpiece for the contemporary home.',
        rating: 4.5,
        reviewCount: 55,
        specs: { length: '48"', depth: '24"', height: '18"' },
        inStock: true
    },
    {
        id: 'feat-4',
        name: 'Oka Lounge Chair',
        category: 'Living Room',
        price: 950,
        image: 'https://static.ufurnish.com/assets%2Fproduct-images%2Foka%2Fgbokaoka0a4fhxujhzu29%2Foka-nomeko-armchair-multi-armchairs_large-1240608190.jpg',
        images: ['https://static.ufurnish.com/assets%2Fproduct-images%2Foka%2Fgbokaoka0a4fhxujhzu29%2Foka-nomeko-armchair-multi-armchairs_large-1240608190.jpg'],
        description: 'Sustainable design meets ultimate relaxation. The Oka Lounge Chair is crafted with reclaimed wood and organic linen.',
        rating: 4.7,
        reviewCount: 38,
        specs: { length: '28"', depth: '30"', height: '32"' },
        inStock: true
    },
    {
        id: 'bs-1',
        name: 'Aurelius Lounge Chair',
        category: 'Living Room',
        price: 1250,
        image: 'https://www.mocka.com.au/cdn/shop/files/T03710_Square_01_ffb52459-6be0-4827-917c-5fdc5c6385b6.jpg?v=1764594285&width=2040',
        images: ['https://www.mocka.com.au/cdn/shop/files/T03710_Square_01_ffb52459-6be0-4827-917c-5fdc5c6385b6.jpg?v=1764594285&width=2040'],
        description: 'Relax in style with the Aurelius Lounge Chair. Premium leather meets modern design.',
        rating: 4.9,
        reviewCount: 45,
        specs: { length: '30"', depth: '32"', height: '35"' },
        inStock: true
    },

    // --- DINING ---
    {
        id: 'coll-2',
        name: 'Nordic Oak Dining Set',
        category: 'Dining',
        price: 1850,
        image: 'https://gvawood.com/cdn/shop/files/Untitled_design_906fc298-065c-4bb2-8f80-5617c0215ebc.png?v=1720795696&width=2048',
        images: ['https://gvawood.com/cdn/shop/files/Untitled_design_906fc298-065c-4bb2-8f80-5617c0215ebc.png?v=1720795696&width=2048'],
        description: 'Crafted from sustainable solid oak, the Nordic Dining Set brings warmth and minimalism to your dining area. Includes a spacious table and four ergonomic chairs.',
        rating: 4.8,
        reviewCount: 85,
        specs: { length: '72"', depth: '36"', height: '30"' },
        inStock: true
    },
    {
        id: 'coll-14',
        name: 'Aria Marble Dining Table',
        category: 'Dining',
        price: 3200,
        image: 'https://newroomstyle.co.uk/wp-content/uploads/2021/07/Liberty-Rectangle-Dining-1.jpg',
        images: ['https://newroomstyle.co.uk/wp-content/uploads/2021/07/Liberty-Rectangle-Dining-1.jpg'],
        description: 'A centerpiece of luxury. The Aria Table features a single slab of white Carrara marble atop a sculptural base.',
        rating: 4.9,
        reviewCount: 31,
        specs: { length: '84"', depth: '42"', height: '30"' },
        inStock: true
    },
    {
        id: 'feat-2',
        name: 'Marble Haven Table',
        category: 'Dining',
        price: 1890,
        image: 'https://mobileimages.lowes.com/productimages/717bc1a8-d8ec-4941-a5e2-8919f7ce7e38/70247374.jpeg?size=pdhz',
        images: ['https://mobileimages.lowes.com/productimages/717bc1a8-d8ec-4941-a5e2-8919f7ce7e38/70247374.jpeg?size=pdhz'],
        description: 'Dine in elegance. The Marble Haven Table features a solid marble top supported by an architectural bronze base.',
        rating: 4.8,
        reviewCount: 64,
        specs: { length: '72"', depth: '36"', height: '30"' },
        inStock: true
    },
    {
        id: 'bs-2',
        name: 'Nexus Walnut Table',
        category: 'Dining',
        price: 890,
        image: 'https://ak1.ostkcdn.com/images/products/is/images/direct/7ca26a3596debdb795844b8db96571f4b0880a08/Furniture-of-America-Forma-Mid-Century-Modern-5-Piece-Walnut-Solid-Wood-Dining-Set.jpg',
        images: ['https://ak1.ostkcdn.com/images/products/is/images/direct/7ca26a3596debdb795844b8db96571f4b0880a08/Furniture-of-America-Forma-Mid-Century-Modern-5-Piece-Walnut-Solid-Wood-Dining-Set.jpg'],
        description: 'The Nexus Table features a unique geometric base and smooth walnut finish.',
        rating: 4.7,
        reviewCount: 32,
        specs: { length: '48"', depth: '48"', height: '30"' },
        inStock: true
    },

    // --- BEDROOM ---
    {
        id: 'coll-5',
        name: 'Cloud Upholstered Bed',
        category: 'Bedroom',
        price: 2200,
        image: 'https://ak1.ostkcdn.com/images/products/is/images/direct/11c411c51267ee95dd659deee7af0058f54ff4c9/Full-size-Upholstered-Cloud-Shape-Bed-%2CVelvet-Platform-Bed-with-Headboard%2CNo-Box-spring-Needed.jpg?impolicy=medium',
        images: ['https://ak1.ostkcdn.com/images/products/is/images/direct/11c411c51267ee95dd659deee7af0058f54ff4c9/Full-size-Upholstered-Cloud-Shape-Bed-%2CVelvet-Platform-Bed-with-Headboard%2CNo-Box-spring-Needed.jpg?impolicy=medium'],
        description: 'Dream in luxury with the Cloud Bed. Its plush upholstered headboard and sturdy frame provide the perfect foundation for a restful night.',
        rating: 4.8,
        reviewCount: 92,
        specs: { length: '85"', depth: '65"', height: '50"' },
        inStock: true
    },
    {
        id: 'feat-3',
        name: 'Elysian Canopy Bed',
        category: 'Bedroom',
        price: 3100,
        image: 'https://m.media-amazon.com/images/I/61msH4OPkIL._AC_UF894,1000_QL80_.jpg',
        images: ['https://m.media-amazon.com/images/I/61msH4OPkIL._AC_UF894,1000_QL80_.jpg'],
        description: 'The ultimate sanctuary. The Elysian Canopy Bed features a minimal steel frame and a plush, integrated headboard.',
        rating: 5.0,
        reviewCount: 42,
        specs: { length: '86"', depth: '66"', height: '80"' },
        inStock: true
    },

    // --- OFFICE ---
    {
        id: 'coll-3',
        name: 'Eames Inspired Executive',
        category: 'Office',
        price: 799,
        oldPrice: '$1,200',
        badge: 'Sale',
        badgeColor: 'bg-primary',
        image: 'https://modern-iconic.b-cdn.net/wp-content/uploads/2025/03/20231101212891089108-600x450.jpg',
        images: ['https://modern-iconic.b-cdn.net/wp-content/uploads/2025/03/20231101212891089108-600x450.jpg'],
        description: 'A mid-century modern classic, reimagined for contemporary comfort. Features premium leather upholstery and adjustable ergonomics.',
        rating: 4.7,
        reviewCount: 42,
        specs: { length: '26"', depth: '26"', height: '42"' },
        inStock: true
    },
    {
        id: 'coll-12',
        name: 'Meridian Bookshelf',
        category: 'Office',
        price: 1100,
        image: 'https://cdn.shopify.com/s/files/1/0150/3336/8640/files/FermLiving_Boutique_Copenhagen_14_800x800.jpg?v=1768911016',
        images: ['https://cdn.shopify.com/s/files/1/0150/3336/8640/files/FermLiving_Boutique_Copenhagen_14_800x800.jpg?v=1768911016'],
        description: 'Display your library in style. The Meridian Bookshelf offers ample storage with a chic, asymmetrical design.',
        rating: 4.6,
        reviewCount: 19,
        specs: { length: '36"', depth: '14"', height: '72"' },
        inStock: true
    },

    // --- LIGHTING ---
    {
        id: 'coll-6',
        name: 'Luna Marble Floor Lamp',
        category: 'Lighting',
        price: 450,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn3rxY-iRno1U1x-k4WL7AgEo-x9RQ3xxAT6R006rclXUw33SrD3qzgoks6Oblmq_4ug6GEWR0sPWe4X6pNu8_SX7gCMY_YRhz15Y9t1n3PztahQlGW3o6H1__bS9UAie_hWyXcXnSZ9DN7bnem44muVrt9MgH0VtiBIP1K7xq19k0UW9y7Ws1G0umsU3vAzMPnSblqLiz0SVG2EQNumKEQ1gAdBsq_6DDv5MEDTCWVLP_v4MVUzyYrWgMhJgo1Bqefy174RgPqLCR',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDn3rxY-iRno1U1x-k4WL7AgEo-x9RQ3xxAT6R006rclXUw33SrD3qzgoks6Oblmq_4ug6GEWR0sPWe4X6pNu8_SX7gCMY_YRhz15Y9t1n3PztahQlGW3o6H1__bS9UAie_hWyXcXnSZ9DN7bnem44muVrt9MgH0VtiBIP1K7xq19k0UW9y7Ws1G0umsU3vAzMPnSblqLiz0SVG2EQNumKEQ1gAdBsq_6DDv5MEDTCWVLP_v4MVUzyYrWgMhJgo1Bqefy174RgPqLCR'],
        description: 'Illuminate your space with the Luna Lamp. Featuring a genuine marble base and a frosted glass globe, it casts a soft, ambient glow.',
        rating: 4.6,
        reviewCount: 29,
        specs: { length: '12"', depth: '12"', height: '60"' },
        inStock: true
    },
    {
        id: 'coll-9',
        name: 'Seraphina Chandelier',
        category: 'Lighting',
        price: 3500,
        oldPrice: '$4,200',
        badge: 'Limited',
        badgeColor: 'bg-charcoal',
        image: 'https://images.thdstatic.com/productImages/43eb8fa9-cd6f-47e0-a4bb-63e099444d20/svn/brushed-gold-y-insp-chandeliers-lt1078571-a0_600.jpg',
        images: ['https://images.thdstatic.com/productImages/43eb8fa9-cd6f-47e0-a4bb-63e099444d20/svn/brushed-gold-y-insp-chandeliers-lt1078571-a0_600.jpg'],
        description: 'Dazzle your guests with the Seraphina Chandelier. Hand-cut crystals refract light to create a mesmerizing centerpiece.',
        rating: 5.0,
        reviewCount: 12,
        specs: { length: '30"', depth: '30"', height: '40"' },
        inStock: true
    },
    {
        id: 'bs-4',
        name: 'Ethereal Pendant',
        category: 'Lighting',
        price: 520,
        image: 'https://vakkerlight.com/cdn/shop/files/Lia_Pendant_Light__18.jpg?v=1760440028&width=720',
        images: ['https://vakkerlight.com/cdn/shop/files/Lia_Pendant_Light__18.jpg?v=1760440028&width=720'],
        description: 'Soft lighting for a relaxing atmosphere. The Ethereal Pendant floats effortlessly in any room.',
        rating: 4.6,
        reviewCount: 39,
        specs: { length: '14"', depth: '14"', height: '18"' },
        inStock: true
    },

    // --- DECOR & OTHER ---
    {
        id: 'coll-4',
        name: 'Harlow Walnut Sideboard',
        category: 'Storage',
        price: 1599,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw7Y2cYFqPLQniaAsRE9JdWR4BNv9PBJKVMU48sLCVRBcGkhnWFJJSMpjuGalhbpApkiZTES1AXCpGbGr86njHHXhpXKarO1a2JsBgbLjBhJ-CeJYNXVk7EUFc26Na7gWB2yPZ9vPdTkT7J_H4knsKsCjb_THa7gAdJnY0ErNSEzU7SN5mzLGVBC7axC6KjZPleyqQ304Asv7cgJUPw908aBHLx79YsN0AvT9fdewBmZsecWcYSst6J_VpScohrOh_c8s47dJ4yNUa',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDw7Y2cYFqPLQniaAsRE9JdWR4BNv9PBJKVMU48sLCVRBcGkhnWFJJSMpjuGalhbpApkiZTES1AXCpGbGr86njHHXhpXKarO1a2JsBgbLjBhJ-CeJYNXVk7EUFc26Na7gWB2yPZ9vPdTkT7J_H4knsKsCjb_THa7gAdJnY0ErNSEzU7SN5mzLGVBC7axC6KjZPleyqQ304Asv7cgJUPw908aBHLx79YsN0AvT9fdewBmZsecWcYSst6J_VpScohrOh_c8s47dJ4yNUa'],
        description: 'Store in style with the Harlow Sideboard. Rich walnut veneer meets brushed brass hardware for a sophisticated storage solution.',
        rating: 4.9,
        reviewCount: 36,
        specs: { length: '60"', depth: '18"', height: '34"' },
        inStock: true
    },
    {
        id: 'coll-10',
        name: 'Obsidian Console Table',
        category: 'Entryway',
        price: 1450,
        image: 'https://cdn.shopify.com/s/files/1/0653/7697/7075/files/1750943724360-AAMRNY-_0024_01copia.jpg?v=1750944038',
        images: ['https://cdn.shopify.com/s/files/1/0653/7697/7075/files/1750943724360-AAMRNY-_0024_01copia.jpg?v=1750944038'],
        description: 'Sleek and sophisticated. The Obsidian Console Table makes a striking first impression in any entryway.',
        rating: 4.8,
        reviewCount: 22,
        specs: { length: '54"', depth: '16"', height: '32"' },
        inStock: true
    },
    {
        id: 'coll-11',
        name: 'Caspian Blue Rug',
        category: 'Decor',
        price: 650,
        image: 'https://assets.rugimg.com/rug_generations/ec1d26ec-3267-49c8-aa49-aaf47a45a300.jpg?width=720&quality=55&height=1008&fit=bounds',
        images: ['https://assets.rugimg.com/rug_generations/ec1d26ec-3267-49c8-aa49-aaf47a45a300.jpg?width=720&quality=55&height=1008&fit=bounds'],
        description: 'Hand-knotted from premium wool, the Caspian Rug features deep blue tones reminiscent of the sea.',
        rating: 4.9,
        reviewCount: 40,
        specs: { length: '96"', depth: '60"', height: '0.5"' },
        inStock: true
    },
    {
        id: 'coll-13',
        name: 'Solis Outdoor Lounge',
        category: 'Outdoor',
        price: 2800,
        badge: 'New',
        image: 'https://loomlan.com/cdn/shop/files/HiTeak-Solis-Teak-Patio-Deep-Sofa-Set-Outdoor-Lounge-Sets-HiTeak.jpg?v=1763137673&width=600',
        images: ['https://loomlan.com/cdn/shop/files/HiTeak-Solis-Teak-Patio-Deep-Sofa-Set-Outdoor-Lounge-Sets-HiTeak.jpg?v=1763137673&width=600'],
        description: 'Bring the comfort of the living room outdoors. The Solis Lounge is weather-resistant and perfect for sunny days.',
        rating: 4.8,
        reviewCount: 14,
        specs: { length: '80"', depth: '30"', height: '28"' },
        inStock: true
    },
    {
        id: 'coll-15',
        name: 'Zephyr Art Print',
        category: 'Decor',
        price: 250,
        image: 'https://www.iamfy.co/cdn/shop/files/kidsroom_framed_canvas_brown.png?v=1766421356&width=800',
        images: ['https://www.iamfy.co/cdn/shop/files/kidsroom_framed_canvas_brown.png?v=1766421356&width=800'],
        description: 'Abstract and airy, the Zephyr Art Print adds a touch of modern sophistication to any wall.',
        rating: 4.5,
        reviewCount: 67,
        specs: { length: '24"', depth: '1"', height: '36"' },
        inStock: true
    },
    {
        id: 'coll-17',
        name: 'Terra Cotta Vase Set',
        category: 'Decor',
        price: 180,
        image: 'https://m.media-amazon.com/images/I/81Lp4RbdKHL._AC_UF1000,1000_QL80_.jpg',
        images: ['https://m.media-amazon.com/images/I/81Lp4RbdKHL._AC_UF1000,1000_QL80_.jpg'],
        description: 'Earthy and rustic. This set of three Terra Cotta Vases adds warmth and texture to your shelves.',
        rating: 4.6,
        reviewCount: 88,
        specs: { length: 'Varies', depth: 'Varies', height: 'Varies"' },
        inStock: true
    },
    {
        id: 'coll-18',
        name: 'Eclipse Wall Mirror',
        category: 'Decor',
        price: 550,
        image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&q=80&w=1000'],
        description: 'Reflect your style. The Eclipse Round Mirror features a minimal matte black frame perfect for modern interiors.',
        rating: 4.8,
        reviewCount: 52,
        specs: { length: '36"', depth: '2"', height: '36"' },
        inStock: true
    },
    {
        id: 'bs-3',
        name: 'Opaline Ceramic Set',
        category: 'Decor',
        price: 340,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb5fDWTpD2JbUFgSRLMjqoZM1bG9CcDrrH25YjI_tgWbW2tEJPHqb24AwtwvohDW553Kpb9iq6l9STVBWnB7nlx2F4aTxZ9Oq7R3B3Nr2ihrkBH-6gu5c5ZxEAGDQ1LAa7JUPHxH4mRFL97O-P3Pz0LHuEbmydnwylEvxd2KUiOm931q5pvrmQbD1bX2SIbfCZ3WUewOfIBzbIPaDUU7N_XXfT3XZBBfJYUIVSsBI8o9ZoaWBDXwoLQ2_bfNhUBjKvJS_dqCM3tKSl',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBb5fDWTpD2JbUFgSRLMjqoZM1bG9CcDrrH25YjI_tgWbW2tEJPHqb24AwtwvohDW553Kpb9iq6l9STVBWnB7nlx2F4aTxZ9Oq7R3B3Nr2ihrkBH-6gu5c5ZxEAGDQ1LAa7JUPHxH4mRFL97O-P3Pz0LHuEbmydnwylEvxd2KUiOm931q5pvrmQbD1bX2SIbfCZ3WUewOfIBzbIPaDUU7N_XXfT3XZBBfJYUIVSsBI8o9ZoaWBDXwoLQ2_bfNhUBjKvJS_dqCM3tKSl'],
        description: 'Add a touch of artistry with the Opaline Ceramic Set. Each piece is unique.',
        rating: 4.8,
        reviewCount: 28,
        specs: { length: 'Varies', depth: 'Varies', height: 'Varies' },
        inStock: true
    },
    {
        id: 'coll-19',
        name: 'Zenith Marble Wall Clock',
        category: 'Decor',
        price: 299,
        image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/K83183s.jpg?im=Resize,width=750',
        images: ['https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/K83183s.jpg?im=Resize,width=750'],
        description: 'A timeless piece of functional art. The Zenith Clock features a solid marble face with minimalist brass hands.',
        rating: 4.8,
        reviewCount: 15,
        specs: { length: '12"', depth: '2"', height: '12"' },
        inStock: true
    }
];
