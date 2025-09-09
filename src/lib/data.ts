import { Cake, Coffee, Grape, Sandwich, Soup } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface ServiceImage {
  src: string;
  alt: string;
}
export const  IMAGE_DOMAIN = "http://127.0.0.1:9002";
// export const IMAGE_DOMAIN = "https://catering-sites.vercel.app/";
export interface Menu {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  Icon: LucideIcon;
  bannerImage: string;
  thumbnail: string;
  categories: MenuCategory[];
  promotion?: {
    title: string;
    description: string;
  };
  serviceList?: string;
  images?: ServiceImage[];
}

export const menuData: Menu[] = [
  {
    slug: 'breakfast',
    title: 'Bistro Breakfast',
    description: 'Start your day deliciously with our breakfast catering—from full hot feasts and savory sandwiches to continental spreads and sweet pastries. Includes coffee, juice, fresh fruit, and eco-friendly supplies. Vegan and classic options available. Perfect for morning meetings.',
    longDescription: 'Our breakfast spreads are perfect for morning meetings, corporate events, or any early gathering. We use the freshest ingredients to create a breakfast experience that is both delicious and revitalizing.',
    Icon: Coffee,
    bannerImage: 'https://picsum.photos/id/292/1200/400',
    thumbnail: `${IMAGE_DOMAIN}/images/breakfast1.png`,
    serviceList: 'Perfect for Buffets,\nSpecial Occasions,\nParties, and\nHouse Warmings',
    images: [
      { src: `${IMAGE_DOMAIN}/images/breakfast1.png`, alt: 'Breakfast buffet' },
      { src: `${IMAGE_DOMAIN}/images/breakfast2.png`, alt: 'Breakfast muffins' },
      { src: `${IMAGE_DOMAIN}/images/breakfast3.png`, alt: 'Fruit platter' },
    ],
    categories: [
      {
        name: 'Platters',
        items: [
          { name: 'Continental Breakfast', description: 'Assortment of muffins, bagels, and pastries with cream cheese, butter, and jam.', price: '$12.95/person' },
          { name: 'Fresh Fruit Platter', description: 'A beautiful arrangement of seasonal sliced fruits and berries.', price: '$8.95/person' },
          { name: 'Smoked Salmon Platter', description: 'Smoked salmon with capers, red onions, tomatoes, and dill cream cheese.', price: '$15.95/person' },
        ],
      },
      {
        name: 'Hot Items',
        items: [
          { name: 'Scrambled Eggs & Bacon', description: 'Fluffy scrambled eggs served with crispy bacon or sausage links.', price: '$14.95/person' },
          { name: 'Breakfast Burritos', description: 'Warm tortillas filled with eggs, cheese, potatoes, and your choice of bacon or sausage.', price: '$13.95/person' },
          { name: 'French Toast Casserole', description: 'Rich and decadent, topped with cinnamon and powdered sugar.', price: '$11.95/person' },
        ],
      },
    ],
    promotion: {
      title: 'Morning Meeting Special',
      description: 'Order breakfast for 20+ people and receive complimentary coffee service for your entire group!'
    }
  },
  {
    slug: 'lunch',
    title: 'Bistro Lunch',
    description: 'Enjoy handcrafted catering that satisfies every taste - from artisan deli sandwiches and gourmet salads to hearty boxed lunches and hoagie platters. Vegetarian, vegan, and classic options available. Always served with fresh sides, cookies, and eco-friendly supplies.',
    longDescription: 'Keep your team fueled and focused with our diverse lunch options. From classic sandwich platters to vibrant salads, we provide satisfying midday meals that are easy to serve and enjoy.',
    Icon: Sandwich,
    bannerImage: 'https://picsum.photos/id/24/1200/400',
    thumbnail: `${IMAGE_DOMAIN}/images/lunch1.png`,
    serviceList: 'Residential or Corporate\nDiverse Menus\nAll You Can Eat!\nSummer Specials',
    images: [
      { src: `${IMAGE_DOMAIN}/images/lunch1.png`, alt: 'Lunch sandwiches' },
      { src: `${IMAGE_DOMAIN}/images/lunch2.png`, alt: 'Gourmet salad' },
      { src: `${IMAGE_DOMAIN}/images/lunch3.png`, alt: 'Boxed lunches' },
    ],
    categories: [
      {
        name: 'Sandwich Boxes',
        items: [
          { name: 'Classic Deli Box', description: 'Your choice of turkey, ham, or roast beef sandwich with chips, a cookie, and a drink.', price: '$16.95/box' },
          { name: 'Gourmet Sandwich Box', description: 'Artisan bread with premium fillings like grilled chicken & pesto or caprese. Includes a side salad.', price: '$18.95/box' },
        ],
      },
      {
        name: 'Salads',
        items: [
          { name: 'Classic Caesar Salad', description: 'Crisp romaine, parmesan, croutons, and Caesar dressing. Add chicken for $4.', price: '$10.95/person' },
          { name: 'Cobb Salad', description: 'Grilled chicken, bacon, avocado, egg, tomatoes, and blue cheese over mixed greens.', price: '$15.95/person' },
        ],
      },
    ],
  },
  {
    slug: 'hot-buffet',
    title: 'Hot Buffets',
    description: 'Elevate your dinner gatherings, housewarmings, and parties with our full-service catering. Enjoy chef-crafted entrees, seasonal sides, and decadent desserts. Perfect for intimate dinners or grand celebrations.',
    longDescription: 'Impress your guests with a full-service hot buffet. Our chefs prepare a wide range of entrees, sides, and accompaniments to create a warm and inviting meal for any event, from casual gatherings to formal dinners.',
    Icon: Soup,
    bannerImage: 'https://picsum.photos/id/431/1200/400',
    thumbnail: `${IMAGE_DOMAIN}/images/dinner1.png`,
    serviceList: 'Buffets\nSpecial Occasions\nParties\nHouse Warmings',
     images: [
      { src: `${IMAGE_DOMAIN}/images/dinner1.png`, alt: 'Hot buffet spread' },
      { src: `${IMAGE_DOMAIN}/images/dinner2.png`, alt: 'Catering dishes' },
      { src: `${IMAGE_DOMAIN}/images/dinner3.png`, alt: 'Party catering' },
    ],
    categories: [
      {
        name: 'Entrees',
        items: [
          { name: 'Chicken Marsala', description: 'Tender chicken cutlets in a rich mushroom and Marsala wine sauce.', price: 'Starts at $22/person' },
          { name: 'Beef Brisket', description: 'Slow-smoked and tender, served with our signature BBQ sauce.', price: 'Starts at $26/person' },
          { name: 'Eggplant Parmesan', description: 'Classic layered dish with marinara and melted mozzarella.', price: 'Starts at $20/person' },
        ],
      },
      {
        name: 'Sides',
        items: [
          { name: 'Garlic Mashed Potatoes', description: 'Creamy and full of flavor.', price: 'Included with buffet' },
          { name: 'Roasted Root Vegetables', description: 'Seasonal vegetables roasted to perfection.', price: 'Included with buffet' },
          { name: 'Penne alla Vodka', description: 'A crowd-pleasing pasta dish in a creamy tomato sauce.', price: 'Included with buffet' },
        ],
      },
    ],
  },
  {
    slug: 'picnics',
    title: 'Picnic Services',
    description: 'Perfect for residential or corporate picnics. A diverse menu, all you can eat, with Summer specials available.',
    longDescription: 'Enjoy the outdoors without the hassle. Our picnic packages are thoughtfully curated with a selection of sandwiches, salads, snacks, and desserts, all packed and ready for your al fresco dining adventure.',
    Icon: Grape,
    bannerImage: 'https://picsum.photos/id/1018/1200/400',
    thumbnail: `${IMAGE_DOMAIN}/images/picnic1.png`,
    images: [
      { src:`${IMAGE_DOMAIN}/images/picnic1.png`, alt: 'Grilled picnic food' },
      { src: `${IMAGE_DOMAIN}/images/picnic2.png`, alt: 'BBQ meats' },
    ],
    categories: [
      {
        name: 'Baskets for Two',
        items: [
          { name: 'The Classic Picnic', description: 'Two gourmet sandwiches, a large salad to share, a bag of chips, two cookies, and two drinks.', price: '$55.00' },
          { name: 'The Charcuterie Picnic', description: 'A selection of cured meats, artisan cheeses, crackers, fruit, and a small bottle of sparkling cider.', price: '$65.00' },
        ],
      },
    ],
    promotion: {
      title: 'Summer Picnic Special',
      description: 'Get a free cozy picnic blanket with any order of four or more picnic baskets!'
    }
  },
  {
    slug: 'sweet-stuff',
    title: 'Sweet Stuff',
    description: 'Delicious Desserts and Assortments of Fine Pasteries to satisfy the sweet tooth in all of your guests.',
    longDescription: 'No meal is complete without a little something sweet. Our pastry chefs create a tempting array of desserts, from bite-sized treats to show-stopping cakes, ensuring a perfect end to your catered event.',
    Icon: Cake,
    bannerImage: 'https://picsum.photos/id/175/1200/400',
    thumbnail: `${IMAGE_DOMAIN}/images/sweet1.png`,
     images: [
      { src: `${IMAGE_DOMAIN}/images/sweet1.png`, alt: 'Chocolate truffles' },
      { src: `${IMAGE_DOMAIN}/images/sweet2.png`, alt: 'Assorted pastries' },
    ],
    categories: [
      {
        name: 'Dessert Platters',
        items: [
          { name: 'Assorted Dessert Bars', description: 'A mix of brownies, blondies, and lemon bars.', price: '$6.95/person' },
          { name: 'Mini Pastry Platter', description: 'An elegant assortment of mini eclairs, fruit tarts, and cannolis.', price: '$8.95/person' },
        ],
      },
      {
        name: 'Cakes',
        items: [
          { name: 'Celebration Cakes', description: 'Custom cakes for birthdays, anniversaries, and other special occasions.', price: 'Starts at $50' },
          { name: 'Cupcake Tower', description: 'A beautiful display of assorted cupcakes.', price: '$4.50/cupcake' },
        ],
      },
    ],
  },
];
