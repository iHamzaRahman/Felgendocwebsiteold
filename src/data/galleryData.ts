export interface GalleryItem {
  id: number;
  beforeImage: string;
  afterImage: string;
  service: string;
  category: 'Felgenreparatur' | 'Pulverbeschichtung' | 'Fahrzeugaufbereitung' | 'Motorrad';
}

export const galleryData: GalleryItem[] = [
  // Felgenreparatur
  {
    id: 1,
    beforeImage: 'https://images.unsplash.com/photo-1763095789122-40845c1e5b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1767800297866-e4f4d4d23194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Felgenreparatur · Bordsteinschaden',
    category: 'Felgenreparatur'
  },
  {
    id: 2,
    beforeImage: 'https://images.unsplash.com/photo-1768341396286-a6322d588111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1767274353823-c6266f765e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Felgenreparatur · CNC-Abdrehen',
    category: 'Felgenreparatur'
  },
  {
    id: 3,
    beforeImage: 'https://images.unsplash.com/photo-1762803942877-77462d9b9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1775511012550-7593846bdd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Felgenreparatur · Kratzerentfernung',
    category: 'Felgenreparatur'
  },
  {
    id: 4,
    beforeImage: 'https://images.unsplash.com/photo-1765597119217-b027f3a14f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1771556907732-38360a440f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Felgenreparatur · Vollrestauration',
    category: 'Felgenreparatur'
  },

  // Pulverbeschichtung
  {
    id: 5,
    beforeImage: 'https://images.unsplash.com/photo-1762803942877-77462d9b9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1775511012550-7593846bdd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Pulverbeschichtung · Schwarz Matt',
    category: 'Pulverbeschichtung'
  },
  {
    id: 6,
    beforeImage: 'https://images.unsplash.com/photo-1768341396286-a6322d588111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1767274353823-c6266f765e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Pulverbeschichtung · Silber Metallic',
    category: 'Pulverbeschichtung'
  },
  {
    id: 7,
    beforeImage: 'https://images.unsplash.com/photo-1763095789122-40845c1e5b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1775510869572-3fbc502db5e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8d2hlZWwlMjByZXBhaXIlMjBwcmVtaXVtJTIwYXV0b21vdGl2ZXxlbnwxfHx8fDE3NzY4MTA3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Pulverbeschichtung · Weiß Glanz',
    category: 'Pulverbeschichtung'
  },
  {
    id: 8,
    beforeImage: 'https://images.unsplash.com/photo-1771556907732-38360a440f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1767800297866-e4f4d4d23194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Pulverbeschichtung · Anthrazit',
    category: 'Pulverbeschichtung'
  },

  // Fahrzeugaufbereitung
  {
    id: 9,
    beforeImage: 'https://images.unsplash.com/photo-1618983527475-3b6559a25dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1759673735031-b6eabfc82261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Fahrzeugaufbereitung · Keramikversiegelung',
    category: 'Fahrzeugaufbereitung'
  },
  {
    id: 10,
    beforeImage: 'https://images.unsplash.com/photo-1629838977778-3661b7bfdb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1759673735031-b6eabfc82261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Fahrzeugaufbereitung · Lackpolitur',
    category: 'Fahrzeugaufbereitung'
  },
  {
    id: 11,
    beforeImage: 'https://images.unsplash.com/photo-1750800460192-e02d441aa032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1759673735031-b6eabfc82261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Fahrzeugaufbereitung · Innenraumreinigung',
    category: 'Fahrzeugaufbereitung'
  },
  {
    id: 12,
    beforeImage: 'https://images.unsplash.com/photo-1608259243654-70c070e0f6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1759673735031-b6eabfc82261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Fahrzeugaufbereitung · Smart Repair',
    category: 'Fahrzeugaufbereitung'
  },

  // Motorrad
  {
    id: 13,
    beforeImage: 'https://images.unsplash.com/photo-1771556907732-38360a440f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1775511012550-7593846bdd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Motorrad · Felgenpulverbeschichtung',
    category: 'Motorrad'
  },
  {
    id: 14,
    beforeImage: 'https://images.unsplash.com/photo-1767274353823-c6266f765e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1768577615397-f9916e9b2152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Motorrad · Rahmen Pulverbeschichtung',
    category: 'Motorrad'
  },
  {
    id: 15,
    beforeImage: 'https://images.unsplash.com/photo-1762803942877-77462d9b9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1775511012550-7593846bdd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    service: 'Motorrad · Teileaufbereitung',
    category: 'Motorrad'
  }
];
