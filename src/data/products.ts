
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
    {
        id: 'coll-1',
        name: 'Aurelius Velvet Sofa',
        category: 'Living Room',
        price: 2499,
        badge: 'New',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTRroGXN0qwaDx7pBnVs5Zc6zR8mDT6xd3ZZQ-3Tecu2REmigMJiziOfkcsknukEqKMwuYh4C6pktXfC2pd5osh6SxXVO-siZaGaFRRM1nHekRGzX_zEDWFcllzsLQ72JHjqFl1lYnKCrMigyAZIxDX5LgkqjnYjXkEX8eE8S9tDqVE-wrYL9vWrbiFh1bWEdgW6EYMNTIhBsRZ6CqNt5fZGB5kX1t6qChqqZKmApoHSk65dELMC307-Haur31GkBwE3gflcR8DATh',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDTRroGXN0qwaDx7pBnVs5Zc6zR8mDT6xd3ZZQ-3Tecu2REmigMJiziOfkcsknukEqKMwuYh4C6pktXfC2pd5osh6SxXVO-siZaGaFRRM1nHekRGzX_zEDWFcllzsLQ72JHjqFl1lYnKCrMigyAZIxDX5LgkqjnYjXkEX8eE8S9tDqVE-wrYL9vWrbiFh1bWEdgW6EYMNTIhBsRZ6CqNt5fZGB5kX1t6qChqqZKmApoHSk65dELMC307-Haur31GkBwE3gflcR8DATh',
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
        id: 'coll-2',
        name: 'Nordic Oak Dining Set',
        category: 'Dining',
        price: 1850,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCem2jxYY_R7W_Ok7f68s0cBezcVWLB23VgCs7r9P9MCy0tfiecnjtRTDPvB-M1jXwRmaVYVvZv0UXK6whl4xHs33le0KCKuakYASc66n5Pu0eNC8tOVJaEFCHOWeW3GVzmvnV8C2ohyaBVVFU3iP-hghf401xIvkF3B2QxAfQS-fKzDjFWM3BxllLAG87mIoESyuvae8HfkYC4_01K2yOpk1sNjHMgbpRxf3GCpcIFCBMe4CsZ-buGiwAOyy0A5F3vT-btmR-SOPHY',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCem2jxYY_R7W_Ok7f68s0cBezcVWLB23VgCs7r9P9MCy0tfiecnjtRTDPvB-M1jXwRmaVYVvZv0UXK6whl4xHs33le0KCKuakYASc66n5Pu0eNC8tOVJaEFCHOWeW3GVzmvnV8C2ohyaBVVFU3iP-hghf401xIvkF3B2QxAfQS-fKzDjFWM3BxllLAG87mIoESyuvae8HfkYC4_01K2yOpk1sNjHMgbpRxf3GCpcIFCBMe4CsZ-buGiwAOyy0A5F3vT-btmR-SOPHY'],
        description: 'Crafted from sustainable solid oak, the Nordic Dining Set brings warmth and minimalism to your dining area. Includes a spacious table and four ergonomic chairs.',
        rating: 4.8,
        reviewCount: 85,
        specs: { length: '72"', depth: '36"', height: '30"' },
        inStock: true
    },
    {
        id: 'coll-3',
        name: 'Eames Inspired Executive',
        category: 'Office',
        price: 799,
        oldPrice: '$1,200',
        badge: 'Sale',
        badgeColor: 'bg-primary',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEU_Kl1h0NPlv7BXtzlSD5eeGPehNayZc07j5uTDREWDJGPlBkW85rXoF5TpAGw6d-IW9q_56Xwlqj6DKnH7zO_vZ8cjf4OmQzLMh36oB5aAM9EoKsavK7uQOv8qBYkwxKaGSiNknzrNuxiqEC31DsI8yxDulj-zUcGQtUwhcL3jWUDgkn5-tIrF26APQd8TpalkpEnW7HWxT_4otb6ndPWEAJi1gLerr-ws7X8BCEcLYnWrdk52VRVgCJTIk5iE2kSXZpqbdxfAM1',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDEU_Kl1h0NPlv7BXtzlSD5eeGPehNayZc07j5uTDREWDJGPlBkW85rXoF5TpAGw6d-IW9q_56Xwlqj6DKnH7zO_vZ8cjf4OmQzLMh36oB5aAM9EoKsavK7uQOv8qBYkwxKaGSiNknzrNuxiqEC31DsI8yxDulj-zUcGQtUwhcL3jWUDgkn5-tIrF26APQd8TpalkpEnW7HWxT_4otb6ndPWEAJi1gLerr-ws7X8BCEcLYnWrdk52VRVgCJTIk5iE2kSXZpqbdxfAM1'],
        description: 'A mid-century modern classic, reimagined for contemporary comfort. Features premium leather upholstery and adjustable ergonomics.',
        rating: 4.7,
        reviewCount: 42,
        specs: { length: '26"', depth: '26"', height: '42"' },
        inStock: true
    },
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
        id: 'coll-5',
        name: 'Cloud Upholstered Bed',
        category: 'Bedroom',
        price: 2200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqJ3-8NiMOoaePVsCXIK82G8gM02mqLnYg2Ip3ROYSZ-8gQC4cuyynb-Y7S4gVOrQsQSR5wZ-FFaeO130IhW1nHMlaj6mJfLtDDmRrRNVgOk-LOlF7Kw3x4_S9ohtzndRhtRR6ChETf69wS6ouWNs1Qq7yyw1CQEd7rQAS_aJ7LfNF_pMVOCpTB-UKsbZ42XMthrrtbX9j91tOIPPzhv4_s17dhrEAwmmDUKrOAttRlzNv4PxIcJo1Bqefy174RgPqLCR',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqJ3-8NiMOoaePVsCXIK82G8gM02mqLnYg2Ip3ROYSZ-8gQC4cuyynb-Y7S4gVOrQsQSR5wZ-FFaeO130IhW1nHMlaj6mJfLtDDmRrRNVgOk-LOlF7Kw3x4_S9ohtzndRhtRR6ChETf69wS6ouWNs1Qq7yyw1CQEd7rQAS_aJ7LfNF_pMVOCpTB-UKsbZ42XMthrrtbX9j91tOIPPzhv4_s17dhrEAwmmDUKrOAttRlzNv4PxIcJo1Bqefy174RgPqLCR'],
        description: 'Dream in luxury with the Cloud Bed. Its plush upholstered headboard and sturdy frame provide the perfect foundation for a restful night.',
        rating: 4.8,
        reviewCount: 92,
        specs: { length: '85"', depth: '65"', height: '50"' },
        inStock: true
    },
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
        id: 'coll-7',
        name: 'Elysian Accent Chair',
        category: 'Living Room',
        price: 899,
        image: 'https://images.unsplash.com/photo-1580480055273-228fff39a957?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1580480055273-228fff39a957?auto=format&fit=crop&q=80&w=1000'],
        description: 'A statement piece for any corner. The Elysian Chair combines bold curves with exceptional comfort.',
        rating: 4.7,
        reviewCount: 15,
        specs: { length: '30"', depth: '32"', height: '38"' },
        inStock: true
    },
    {
        id: 'coll-8',
        name: 'Vanguard Coffee Table',
        category: 'Living Room',
        price: 1200,
        badge: 'Trending',
        badgeColor: 'bg-primary',
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=1000'],
        description: 'Modern lines meet industrial durability. The Vanguard Coffee Table features a concrete top and a black steel base.',
        rating: 4.5,
        reviewCount: 55,
        specs: { length: '48"', depth: '24"', height: '18"' },
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
        image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=1000'],
        description: 'Dazzle your guests with the Seraphina Chandelier. Hand-cut crystals refract light to create a mesmerizing centerpiece.',
        rating: 5.0,
        reviewCount: 12,
        specs: { length: '30"', depth: '30"', height: '40"' },
        inStock: true
    },
    {
        id: 'coll-10',
        name: 'Obsidian Console Table',
        category: 'Entryway',
        price: 1450,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000'],
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
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1000'],
        description: 'Hand-knotted from premium wool, the Caspian Rug features deep blue tones reminiscent of the sea.',
        rating: 4.9,
        reviewCount: 40,
        specs: { length: '96"', depth: '60"', height: '0.5"' },
        inStock: true
    },
    {
        id: 'coll-12',
        name: 'Meridian Bookshelf',
        category: 'Office',
        price: 1100,
        image: 'https://images.unsplash.com/photo-1595515106967-1b072c49ee61?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1595515106967-1b072c49ee61?auto=format&fit=crop&q=80&w=1000'],
        description: 'Display your library in style. The Meridian Bookshelf offers ample storage with a chic, asymmetrical design.',
        rating: 4.6,
        reviewCount: 19,
        specs: { length: '36"', depth: '14"', height: '72"' },
        inStock: true
    },
    {
        id: 'coll-13',
        name: 'Solis Outdoor Lounge',
        category: 'Outdoor',
        price: 2800,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000'],
        description: 'Bring the comfort of the living room outdoors. The Solis Lounge is weather-resistant and perfect for sunny days.',
        rating: 4.8,
        reviewCount: 14,
        specs: { length: '80"', depth: '30"', height: '28"' },
        inStock: true
    },
    {
        id: 'coll-14',
        name: 'Aria Marble Dining Table',
        category: 'Dining',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&q=80&w=1000'],
        description: 'A centerpiece of luxury. The Aria Table features a single slab of white Carrara marble atop a sculptural base.',
        rating: 4.9,
        reviewCount: 31,
        specs: { length: '84"', depth: '42"', height: '30"' },
        inStock: true
    },
    {
        id: 'coll-15',
        name: 'Zephyr Art Print',
        category: 'Decor',
        price: 250,
        image: 'https://images.unsplash.com/photo-1582201970267-f58797f10134?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1582201970267-f58797f10134?auto=format&fit=crop&q=80&w=1000'],
        description: 'Abstract and airy, the Zephyr Art Print adds a touch of modern sophistication to any wall.',
        rating: 4.5,
        reviewCount: 67,
        specs: { length: '24"', depth: '1"', height: '36"' },
        inStock: true
    },
    {
        id: 'coll-16',
        name: 'Orion Velvet Ottoman',
        category: 'Living Room',
        price: 450,
        image: 'https://images.unsplash.com/photo-1503602642458-2321114458ed?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1503602642458-2321114458ed?auto=format&fit=crop&q=80&w=1000'],
        description: 'Versatile and plush. The Orion Ottoman works as extra seating, a footrest, or even a coffee table with a tray.',
        rating: 4.7,
        reviewCount: 45,
        specs: { length: '24"', depth: '24"', height: '18"' },
        inStock: true
    },
    {
        id: 'coll-17',
        name: 'Terra Cotta Vase Set',
        category: 'Decor',
        price: 180,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=1000',
        images: ['https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=1000'],
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
        id: 'bs-1',
        name: 'Aurelius Lounge Chair',
        category: 'Living Room',
        price: 1250,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqOSAJPrXt4nRouPYJgaCXupCO0xB5PqU3lrCKBhhXyM_LNVohMuOfthW5C02nPKwOoBOGTo9rEJuM5XPX4AhynPf5amLf4r9-YEHzxvXPF5r4v8aFMttyrMuNjA3Z-pwpMFa4jd7SkKFrcNQ1WULIweh2GTQcE-1zs333-FT4c3oJgFqEfG6sNpXAtSOWynhCYDOMMtPlbkwj9m3OxD7Mgz6OyQPVCgUCNu_Ov4eanK1VZ_FR2j3SEpz2tbG0o7D9aOSduxrfUtGV',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDqOSAJPrXt4nRouPYJgaCXupCO0xB5PqU3lrCKBhhXyM_LNVohMuOfthW5C02nPKwOoBOGTo9rEJuM5XPX4AhynPf5amLf4r9-YEHzxvXPF5r4v8aFMttyrMuNjA3Z-pwpMFa4jd7SkKFrcNQ1WULIweh2GTQcE-1zs333-FT4c3oJgFqEfG6sNpXAtSOWynhCYDOMMtPlbkwj9m3OxD7Mgz6OyQPVCgUCNu_Ov4eanK1VZ_FR2j3SEpz2tbG0o7D9aOSduxrfUtGV'],
        description: 'Relax in style with the Aurelius Lounge Chair. Premium leather meets modern design.',
        rating: 4.9,
        reviewCount: 45,
        specs: { length: '30"', depth: '32"', height: '35"' },
        inStock: true
    },
    {
        id: 'bs-2',
        name: 'Nexus Walnut Table',
        category: 'Dining',
        price: 890,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcuRPHe0KyK6EkhkXip4Wyxh9j9N57h_Hnseo0Nn5otHTeATEGTE6v6C1V5gLGEVs9ew-WV0MsvEo5XwJGU691soAYssNMHpdhePr7mN3ly9am86g4_6NYqwpIYBBAXKt8vVjRBW1R88yKyqb-jkRUdkmvuzaPewsKC4KhWiBWnmkn6Kw6RsFFKP63ubz3z3SlBVzwCNWMuUpH_6l2xKdWT-NWxAdAjWw_YwFvlr9d-ipqGGyyBJBSrQYnLCLbdPMTT24DEvyyLB1I',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAcuRPHe0KyK6EkhkXip4Wyxh9j9N57h_Hnseo0Nn5otHTeATEGTE6v6C1V5gLGEVs9ew-WV0MsvEo5XwJGU691soAYssNMHpdhePr7mN3ly9am86g4_6NYqwpIYBBAXKt8vVjRBW1R88yKyqb-jkRUdkmvuzaPewsKC4KhWiBWnmkn6Kw6RsFFKP63ubz3z3SlBVzwCNWMuUpH_6l2xKdWT-NWxAdAjWw_YwFvlr9d-ipqGGyyBJBSrQYnLCLbdPMTT24DEvyyLB1I'],
        description: 'The Nexus Table features a unique geometric base and smooth walnut finish.',
        rating: 4.7,
        reviewCount: 32,
        specs: { length: '48"', depth: '48"', height: '30"' },
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
        id: 'bs-4',
        name: 'Ethereal Pendant',
        category: 'Lighting',
        price: 520,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBygEp7Rv7dQnNXwoYAXdp_QPuDVq_G9F_-vMYa4B7RR7KcJWnLTPduIA-kyZQ0edt6WmgSV4hNPzRO45GvGVnQfXgPV7yPTaJ5I2JCtSIXMn9EDowculSu_kOzRZeZQZrzg3W2ZK64Pec56FlahoZSHuTeTmHOuMAJXqPad-jytWyEJx40uDt9RbecgIvwnHImb-5RJNBWpZp3r26ZV8gXDxZFv-hWO1ID4QZCZEUmXgW97lbQDiBl4ItcN3DSoOQmj11lDhOMBAJa',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBygEp7Rv7dQnNXwoYAXdp_QPuDVq_G9F_-vMYa4B7RR7KcJWnLTPduIA-kyZQ0edt6WmgSV4hNPzRO45GvGVnQfXgPV7yPTaJ5I2JCtSIXMn9EDowculSu_kOzRZeZQZrzg3W2ZK64Pec56FlahoZSHuTeTmHOuMAJXqPad-jytWyEJx40uDt9RbecgIvwnHImb-5RJNBWpZp3r26ZV8gXDxZFv-hWO1ID4QZCZEUmXgW97lbQDiBl4ItcN3DSoOQmj11lDhOMBAJa'],
        description: 'Soft lighting for a relaxing atmosphere. The Ethereal Pendant floats effortlessly in any room.',
        rating: 4.6,
        reviewCount: 39,
        specs: { length: '14"', depth: '14"', height: '18"' },
        inStock: true
    }
];
