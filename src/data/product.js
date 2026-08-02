export const brand = {
  name: 'Brooklinen',
  logoSrc: '/brooklinen-logo.svg',
  freeShippingThreshold: 100,
  tagline: 'Best In Bed',
};

function imgs(list, label) {
  return list.map((src, i) => ({
    src,
    alt: `${label} Luxe Sateen Core Sheet Set`,
    showBadge: i === 0,
  }));
}

const whiteImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-11_Bedding_Luxe_White_CSS_1_x_PDP_WO_9a378fea-9426-49f3-86ef-f15ec88bdae4.jpg?v=1779223625',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-05_Bedding_Luxe_White_Detail_1x_WOgrey_42a92ecf-f7c7-4a0f-b8b0-8c95a6033ed4.jpg?v=1779223625',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-04_Luxe_Shot9_1519x_PDP_WO_73041cde-56e4-4ac6-8a73-c8fdcf88f58b.jpg?v=1779312560',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-03_Bedding_Luxe_2.0_White_1x_PDP_WO_b5ace695-e9d2-4788-956a-ad3c5ecde2c8.jpg?v=1779226735',
  ],
  'White',
);

const creamImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-11_Bedding_Luxe_Cream_CSS_1_x_PDP_WO_46c775d2-f9ee-4190-89ef-64734092a337.jpg?v=1779223625',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-04_Luxe_Shot6_1161xAlt_PDP_WO_bf9ae09d-5790-4c83-8ab5-cd67a9b72f17.jpg?v=1779312561',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-04_Luxe_Shot6_1273x_PDP_WO_3b102bca-8323-4d4d-a775-b5aec79cba88.jpg?v=1779312560',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-04_Luxe_Shot8_1365x_PDP_WO_85db1f74-d35b-427d-bdb0-6bd6aefe62f2.jpg?v=1779312560',
  ],
  'Cream',
);

const pebbleImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_24-05_Bedding_Luxe_Pebble_Detail_1x_WOgrey_c2e8da80-c9a9-4728-a936-4e99aa7daa82.jpg?v=1779223624',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-11_Bedding_Luxe_Pebble_CSS_1_x_PDP_WO_379f8e1b-407a-4baf-b7fc-37e125c7c27a.jpg?v=1779223624',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-03_Bedding_Luxe_2.0_Pebble_1x_PDP_WO_84636671-eec4-4854-842b-e9af680cca92.jpg?v=1779226734',
  ],
  'Pebble',
);

const oakImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-07_Bedding_Luxe_Oak_COR_1x_WOgrey_0443c5f2-46ff-4812-838b-ef52bca6565e.jpg?v=1779223625',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-07_Bedding_Luxe_Oak_Detail_1x_WOgrey_6d564e89-4388-4140-8eb2-7080d24c5eba.jpg?v=1779223625',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-03_Bedding_Luxe_2.0_Oak_1x_PDP_WO_344acb1f-92cb-4e08-bc3e-5d7716072443.jpg?v=1779226734',
  ],
  'Oak',
);

const cloudImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-07_Bedding_Luxe_Cloud_COR_1x_WOgrey_76b053f9-b4ba-4024-88d4-00d50ff1d2c7.jpg?v=1779223624',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_24-07_Bedding_Luxe_Cloud_Texture_1x_WOgrey_19152dbd-884f-40ed-a65c-494398dc7bcc.jpg?v=1779223625',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-03_Bedding_Luxe_2.0_Cloud_1x_PDP_WO_b6d1c732-55ea-4de2-b4e7-001c591abe39.jpg?v=1779226734',
  ],
  'Cloud',
);

const stormImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-07_Bedding_Luxe_Storm_COR_1x_WOgrey_dd0e2063-30af-4148-837e-df01e49618e8.jpg?v=1779223624',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_24-06_Bedding_Luxe_Storm_Detail_1x_WOgrey_fdb7bab1-6670-4152-8ce1-d205a2c4da70.jpg?v=1779223624',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-04_Luxe_Shot2_163x_PDP_WO_a7ac9a6f-f588-48a1-ad09-63a3d3e69829.jpg?v=1779312560',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-04_Luxe_Shot3_234x_PDP_WO_995e8601-d78b-4d1d-bfe1-bead1e47528e.jpg?v=1779312560',
  ],
  'Storm',
);

const abyssImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-07_Bedding_Luxe_Abyss_COR_1x_WOgrey_ca2b9ba0-b5bb-4411-a2be-be8688a82a7c.jpg?v=1779223624',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_23-08_Bedding_Luxe_Abyss_Detail_1x_WOgrey_aa480a9c-b63e-4a51-b5ff-e8fce5118e79.jpg?v=1779223624',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-03_Bedding_Luxe_2.0_Abyss_1x_PDP_WO_4ea546f2-c67f-41c1-911f-8973180b1be5.jpg?v=1779226735',
  ],
  'Abyss',
);

const aegeanImages = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_25-07_Bedding_Luxe_Aegean_Detail_1x_WOgrey_203a8cde-0cf5-41fa-bace-977532263ad9.jpg?v=1779223625',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-03_Bedding_Luxe_2.0_Aegean_1x_PDP_WO_13c1312a-fdae-4d60-adf2-fcf6b3e644e7.jpg?v=1779226735',
    'https://cdn.shopify.com/s/files/1/0951/7126/files/BKL_26-05_Bedding_Luxe_Aegean_COR_1x_PDP_WOgrey.jpg?v=1781541246',
  ],
  'Aegean',
);

export const product = {
  title: 'Luxe Sateen Core Sheet Set',
  subtitle: 'Our #1 best-seller · Soft, smooth, and made to be lived in',
  badge: 'Best Seller',
  rating: 5,
  reviewCount: 175000,
  description:
    'Our best-selling sheet set, softer and smoother than ever. Buttery Luxe Sateen with a subtle sheen — hotel-quality comfort designed in Brooklyn.',
  serving: 'Includes 1 fitted sheet, 1 flat sheet, and 2 pillowcases. OEKO-TEX Standard 100 certified.',
  images: whiteImages,
  colors: [
    { id: 'white', label: 'White', hex: '#F5F5F2', images: whiteImages },
    { id: 'cream', label: 'Cream', hex: '#EDE6D9', images: creamImages },
    { id: 'pebble', label: 'Pebble', hex: '#C9C2B8', images: pebbleImages },
    { id: 'oak', label: 'Oak', hex: '#C4A574', images: oakImages },
    { id: 'cloud', label: 'Cloud', hex: '#D8DEE6', images: cloudImages },
    { id: 'storm', label: 'Storm', hex: '#6B7C8C', images: stormImages },
    { id: 'abyss', label: 'Abyss', hex: '#1C2430', images: abyssImages },
    { id: 'aegean', label: 'Aegean', hex: '#4A7C8F', images: aegeanImages },
  ],
  sizes: [
    { id: 'twin', label: 'Twin', price: 169.0 },
    { id: 'twin-xl', label: 'Twin XL', price: 169.0 },
    { id: 'full', label: 'Full', price: 199.0 },
    { id: 'queen', label: 'Queen', price: 209.0 },
    { id: 'king', label: 'King', price: 239.0 },
    { id: 'cali-king', label: 'Cali King', price: 239.0 },
  ],
  frequencies: [],
  benefits: [
    'Buttery-soft Luxe Sateen weave',
    'Subtle sheen with a smooth hand-feel',
    'OEKO-TEX Standard 100 certified',
    '365-Day Happiness Guarantee',
    'Designed in Brooklyn',
  ],
  ingredients: '100% long-staple cotton sateen. Soft, breathable, and made for everyday luxury.',
  howToUse: 'Machine wash cold with like colors. Tumble dry low. Warm iron if needed. Do not bleach.',
};

export const shippingOptions = [
  { value: 'Ground - $5.99', title: 'Ground', subtitle: '5-7 business days', price: '$5.99' },
  { value: 'Express - $12.99', title: 'Express', subtitle: '2-3 business days', price: '$12.99' },
  { value: 'Overnight - $24.99', title: 'Overnight', subtitle: 'Next business day', price: '$24.99' },
];

export const pickupLocations = [
  { name: 'Brooklyn Flagship', address: '230 Wythe Ave, Brooklyn, NY 11249', dist: '0.2 mi' },
  { name: 'SoHo Store', address: '100 Crosby St, New York, NY 10012', dist: '0.4 mi' },
  { name: 'Williamsburg Hub', address: '90 N 11th St, Brooklyn, NY 11249', dist: '0.6 mi' },
];

export const timeSlots = [
  '9am-10am',
  '10am-11am',
  '11am-12pm',
  '1pm-2pm',
  '2pm-3pm',
];


export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];
