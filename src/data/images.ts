// src/data/images.ts
// Photos of African church life, free under the Unsplash License (no attribution required;
// credited here anyway). Served by Unsplash's image CDN, sized per use. Before launch, consider
// copying them into /public so the site never depends on another service.

const base = 'https://images.unsplash.com';
export const unsplash = (id: string, w: number, h?: number) =>
  `${base}/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

export const PHOTOS = {
  /** A congregation laughing together. barak paul munuo, Dar es Salaam */
  joy: { id: 'photo-1601373734970-a52f841b98b2', alt: 'A congregation laughing together during a service' },
  /** Outdoor worship, hands raised, golden light. */
  worship: { id: 'photo-1444664361762-afba083a4d77', alt: 'A crowd worshipping outdoors with hands raised' },
  /** A worship leader with a microphone. */
  leader: { id: 'photo-1647957902647-0337913440fc', alt: 'A worship leader singing on stage' },
  /** A mother and son in a service. */
  family: { id: 'photo-1604072424771-7300bc5de457', alt: 'A mother and her son sitting together in church' },
  /** A singer on stage. */
  singer: { id: 'photo-1583114448050-908e044efb3e', alt: 'A man singing on stage' },
  /** A young woman smiling at her phone. */
  phone: { id: 'photo-1680878898191-7c8a1e3b8180', alt: 'A young woman in an ankara dress smiling at her phone' },
} as const;
