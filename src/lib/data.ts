type MenuHighlight = {
  name: string;
  category: string;
  description: string;
  ingredients: string;
  image: string;
};

type BeerItem = {
  name: string;
  style: string;
  description: string;
  image: string;
  abv?: string;
  ibu?: number;
  rating?: string;
  price?: number;
  pair?: string;
};

type GalleryItem = {
  id: number;
  category: "Ambience" | "Food";
  image: string;
  height: string;
};

const driveImage = (id: string, width = 1600) =>
  `https://lh3.googleusercontent.com/d/${id}=w${width}`;

const foodImages = {
  dishOne: driveImage("1nPjiM9t4KsKI-lyiqbHAjlZbJmCsxPxP"),
  dishTwo: driveImage("11ADtE25Chjy3dj6taGWyZqbtOMOtsqzy"),
  dishThree: driveImage("1_jVH2N6EtUQDvJ-0BlT3L13KHHKoL7pf"),
  dishFour: driveImage("13_76-SIPWcHW0nAaM-6--BIl28yS5gSr"),
  dishFive: driveImage("1bBqSqP7lbRhVlf1Xeyfh5roEIFO-6tcb"),
  dishSix: driveImage("1iJQVGpRn7b_kGGqJAivHZZ28Ek2rFY1J"),
} as const;

const ambienceImages = {
  hero: driveImage("1IRSZGndXXtLvg60VHs9roIMAMGByJ35G", 2200),
  spaceOne: driveImage("1IRin2j-mC6zgUzmQjBOzDKmJLM3lffyW"),
  spaceTwo: driveImage("188dVjGBY2CzBOxEUj43ys4WvRMKzC9CV"),
  spaceThree: driveImage("12CkEGcHOdny2lN6zxeTI3GYK0sJ0-ehm"),
  spaceFour: driveImage("1wVt7zGrzhylI0181Oz7-Casb5F3lgciz"),
  spaceFive: driveImage("1nGoyutdJLf5X8oT22vfny9rW2syRoUaL"),
  spaceSix: driveImage("1fVO0FS9Bk5PFr1j4PCyPcprkluWUfUqv"),
  spaceSeven: driveImage("1rrPn3lmUnXzy5i_sOT2WyKqSQNikJyWt"),
  spaceEight: driveImage("1j16J7wgX4b0qDZ_Wz65MJUETq1BkMbzf"),
  spaceNine: driveImage("1C3ddtMGmlZAo-6w33lL6JlkvxOaws27i"),
  spaceTen: driveImage("1QsbtAhJZBuEeDUPsyXMx34BvgQO2T_Fq"),
  spaceEleven: driveImage("1RDYhgEVsdyMiDG3OQpcuzFDhTls1TeUy"),
} as const;

export const venueDetails = {
  address: "Varthur Rd, Devasthanagalu, Balagere, Bengaluru, Varthur, Karnataka 560087",
  phone: "+91 81239 79966",
  email: "reservations@legendsbrewery.in",
  hours: "12 PM - 1 AM, all days",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.505618358531!2d77.73130197454611!3d12.939465115583094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13006db60e2d%3A0x303cdc9fe49ae3ca!2sLegends%20Microbrewery!5e0!3m2!1sen!2sin!4v1776345726838!5m2!1sen!2sin",
} as const;

export const launchEventDetails = {
  dateLabel: "17 April 2026",
  timeLabel: "5:00 PM Onwards",
  tagline: "Signature brews. Royal feasts. A night to remember.",
} as const;

export const featuredAmbience = [
  ambienceImages.hero,
  ambienceImages.spaceOne,
  ambienceImages.spaceTwo,
  ambienceImages.spaceThree,
  ambienceImages.spaceFour,
  ambienceImages.spaceFive,
] as const;

export const menuData: MenuHighlight[] = [
  {
    name: "Roasted Pineapple Burrata Salad",
    category: "Salads",
    description:
      "Caramelized pineapple served with creamy burrata, fresh greens andbalsamic glaze.",
    ingredients: "Pineapple, burrata, fresh greens, balsamic glaze",
    image: foodImages.dishOne,
  },
  {
    name: "Crunchy Futo Maki",
    category: "Sushi",
    description:
      "Thick sushi roll filled with vegetables and crispy tempura flakes.",
    ingredients: "Sushi rice, nori, vegetables, tempura flakes",
    image: foodImages.dishTwo,
  },
  {
    name: "Butter Chicken Bao",
    category: "Bao",
    description:
      "Fluffy steamed bao filled with creamy butter chicken.",
    ingredients: "Steamed bao, butter chicken, house garnish",
    image: foodImages.dishThree,
  },
  {
    name: "Mala Mushroom",
    category: "Asian Starters",
    description:
      "Mushrooms tossed in spicy Sichuan mala sauce.",
    ingredients: "Mushrooms, Sichuan mala sauce",
    image: foodImages.dishFour,
  },
  {
    name: "Chintamani Chicken",
    category: "South Indian Bar Bites",
    description:
      "Tamil Nadu style spicy dry chicken cooked with dry red chilli, baby onion andcurry leaves.",
    ingredients: "Chicken, dry red chilli, baby onion, curry leaves",
    image: foodImages.dishFive,
  },
  {
    name: "Cottage Cheese Steak",
    category: "Grill",
    description:
      "Thick grilled paneer steak marinated with herbs and spices, served with chilli sauce and ratatouille.",
    ingredients: "Paneer, herbs, spices, chilli sauce, ratatouille",
    image: foodImages.dishSix,
  },
] as const;

export const beersData: BeerItem[] = [
  {
    name: "Midnight Emperor",
    style: "Stout",
    description:
      "Rich and full-bodied, layered with deep chocolate and roasted coffee aromas. Subtle caramel sweetness balances the roasted malt character, creating a smooth, indulgent finish with vanilla notes.",
    image: ambienceImages.spaceSeven,
  },
  {
    name: "Sky Sovereign",
    style: "NEIPA",
    description:
      "A juicy, hazy NEIPA bursting with tropical notes of mango, pineapple, and citrus. Soft bitterness balances sweetness with a smooth, vibrant finish.",
    image: ambienceImages.spaceEight,
  },
  {
    name: "Kings Frontier",
    style: "West Coast IPA",
    description:
      "Bright citrus and pine aromas lead, supported by a clean malt backbone. Bold hop-forward bitterness with a dry, refreshing finish.",
    image: ambienceImages.spaceNine,
  },
  {
    name: "Knights Wit",
    style: "Belgian Wit",
    description:
      "Brewed with coriander and orange peel. Bright citrus, gentle spice, and a clean refreshing finish.",
    image: ambienceImages.spaceTen,
  },
  {
    name: "Golden Halo",
    style: "Hefeweizen",
    description:
      "Classic wheat beer showcasing ripe banana and gentle clove spice. Soft, cloudy, and smooth with a creamy mouthfeel.",
    image: ambienceImages.spaceEleven,
  },
  {
    name: "Orchard Queen",
    style: "Apple Cider",
    description:
      "Crafted from selected apples with gentle sweetness, bright acidity, and a clean, elegant finish.",
    image: ambienceImages.spaceOne,
  },
  {
    name: "Zen Empire",
    style: "Japanese Lager",
    description:
      "Brewed with premium short-grain rice. Light-bodied, clean, subtle sweetness, and crisp calming finish.",
    image: ambienceImages.spaceTwo,
  },
  {
    name: "Imperial Fields",
    style: "Maize Lager",
    description:
      "Brewed with premium maize for subtle sweetness and light refreshing body with smooth finish.",
    image: ambienceImages.spaceThree,
  },
] as const;

export const galleryItems: GalleryItem[] = [
  { id: 1, category: "Ambience", image: ambienceImages.hero, height: "h-80" },
  { id: 2, category: "Food", image: foodImages.dishOne, height: "h-56" },
  { id: 3, category: "Ambience", image: ambienceImages.spaceOne, height: "h-64" },
  { id: 4, category: "Food", image: foodImages.dishTwo, height: "h-72" },
  { id: 5, category: "Ambience", image: ambienceImages.spaceFour, height: "h-56" },
  { id: 6, category: "Food", image: foodImages.dishThree, height: "h-80" },
  { id: 7, category: "Ambience", image: ambienceImages.spaceFive, height: "h-72" },
  { id: 8, category: "Food", image: foodImages.dishFour, height: "h-56" },
  { id: 9, category: "Ambience", image: ambienceImages.spaceSix, height: "h-80" },
  { id: 10, category: "Food", image: foodImages.dishFive, height: "h-56" },
  { id: 11, category: "Ambience", image: ambienceImages.spaceTen, height: "h-72" },
  { id: 12, category: "Food", image: foodImages.dishSix, height: "h-64" },
] as const;

export const menuSections = [
  {
    title: "Salads",
    items: [
      "Roasted Pineapple Burrata Salad",
      "Caesar Salad (Veg / Non-Veg)",
      "Quinoa Salad",
      "Greek Salad with Feta",
      "Watermelon Feta Salad",
      "Green Salad",
    ],
  },
  {
    title: "Sushi",
    items: [
      "Crunchy Futo Maki",
      "California Roll",
      "Avocado Asparagus Roll",
      "Yasai Tempura Roll",
      "Sriracha Blush Roll",
      "Chicken Katsu Roll",
      "Tempura Prawn Roll",
      "Rainbow Roll",
      "Spicy Salmon Roll",
    ],
  },
  {
    title: "Dimsum",
    items: [
      "Chicken & Chives Dimsum",
      "Jhol Chicken Dimsum",
      "Chicken Gyoza Dimsum",
      "Wild Mushroom Dimsum",
      "Edamame Creamy Dimsum",
      "Corn & Spinach Dimsum",
      "Cream Cheese Dimsum",
    ],
  },
  {
    title: "Bao",
    items: [
      "Teriyaki Pork Bao",
      "Crispy Chicken Bao",
      "Crispy Tofu Bao",
      "Butter Chicken Bao",
    ],
  },
  {
    title: "Asian / Wok Starters",
    items: [
      "Mala Mushroom",
      "Classic Chilli Paneer",
      "Crispy Corn",
      "Cheese Veg Spring Roll",
      "Lamb Coriander Cumin",
      "Ghost Chilli Drumsticks",
      "Classic Chilli Chicken",
      "Classic Chilli Prawns",
      "Thread Fried Prawns",
      "Mala Chicken",
      "Prawns Dynamite",
      "Crispy Fried Wings",
      "Nam Prik Pla Fish",
      "Drunken Chicken",
      "Chicken Spring Roll",
    ],
  },
  {
    title: "Bar Bites / Appetizers",
    items: [
      "Potato Cheese Balls",
      "Vegetable Bullets",
      "Hummus with Pita",
      "Cheese Nachos",
      "Jalapeno Cheese Tikki",
      "Chicken Nachos",
      "Fish Fingers",
      "Peri Peri Chicken",
    ],
  },
  {
    title: "South Indian Bar Bites",
    items: [
      "Chintamani Chicken",
      "Chicken Kodiyala Bunch",
      "Chicken Ghee Roast",
      "Creamy Coriander Chicken",
      "Kodi Karam Chips",
      "Paneer Kodiyala Bunch",
      "Paneer Ghee Roast",
      "Royal Roasted Prawns",
      "Prawns Ghee Roast",
      "Mutton Ghee Roast",
      "Mutton Pepper Fry",
      "Mutton Kheema Balls",
      "Fish Tawa Fry",
      "Coorgi Pork",
    ],
  },
  {
    title: "Indian Main Course",
    items: [
      "Dal Bukhara",
      "Dal Tadka",
      "Paneer Lababdar",
      "Kadai Paneer",
      "Nizami Handi",
      "Palak Paneer",
      "Mushroom Hara Pyaz",
      "Butter Chicken",
      "Karachi Creamy Chicken",
      "Chicken Tikka Masala",
      "Rogan Gosht",
      "Pepper Mutton Curry",
      "Mango Fish Curry",
      "Egg Masala",
    ],
  },
  {
    title: "Quick Bar Snacks",
    items: [
      "Peanut Masala",
      "Salt / Peri Peri French Fries / Rosemary Potato Wedges",
      "Chicken Pop Corn",
      "Garlic Bread / Cheese Garlic Bread",
    ],
  },
  {
    title: "South Special Main Course",
    items: [
      "Country Chicken & Rice",
      "Andhra Chilli Chicken with Neer Dosa / Porotta / Samiya",
      "Legends Biryani Chicken / Mutton",
    ],
  },
  {
    title: "Tandoor",
    items: [
      "Hara Shame Kebab",
      "Dahi Ke Kebab",
      "Paneer Tikka (Lal Mirch)",
      "Mushroom Cheese Melt",
      "Chicken Kebab",
      "All Time Fried Legends Chicken Kebab",
      "Gulab Chandani Murgh",
      "Pathar Ka Gosht",
      "Tandoori Fish Tikka",
      "Mutton Seekh Kebab",
      "Lucknow Murgh Tikka",
      "Tandoori Chicken",
      "Tangdi Kebab",
      "Tandoori Pomfret",
      "Bungalow Jinga",
    ],
  },
  {
    title: "Grill",
    items: [
      "Cottage Cheese Steak",
      "Grilled Chicken",
      "Grilled Fish",
    ],
  },
  {
    title: "Pizza & Pasta",
    items: [
      "Classic Margherita",
      "Burrata & Basil Pizza",
      "Fungi Pizza",
      "Basil Almond Pesto Pizza",
      "Paneer Tikka Pizza",
      "Garden Vegetable Pizza",
      "Peri Peri Chicken Pizza",
      "Pepperoni Pizza",
      "Seafood Pizza",
      "BBQ Chicken Pizza",
      "Penne Alfredo (Veg / Non-Veg)",
      "Penne Arrabbiata (Veg / Non-Veg)",
      "Penne Basil Pesto (Veg / Non-Veg)",
      "Spaghetti Aglio e Olio (Veg / Non-Veg)",
    ],
  },
  {
    title: "Asian Main Course",
    items: [
      "Classic Fried Rice (Veg / Chicken / Prawn)",
      "Wild Mushroom Fried Rice",
      "Butter Garlic Fried Rice (Veg / Chicken / Prawn)",
      "Schezwan Fried Rice (Veg / Chicken / Prawn)",
      "Kung Pao Chicken Combo",
      "Wok Tossed Noodles (Veg / Chicken / Prawn)",
      "Mee Goreng (Veg / Chicken / Prawn)",
      "Pad Thai (Veg / Chicken / Prawn)",
      "Thai Red Curry (Veg / Chicken / Prawn)",
      "Thai Green Curry (Veg / Chicken / Prawn)",
      "Chilli Wok Curry (Veg / Chicken / Prawn)",
      "Hunan Wok Curry (Veg / Chicken / Prawn)",
    ],
  },
  {
    title: "Breads & Rice",
    items: [
      "Roti",
      "Naan",
      "Kulcha",
      "Laccha Paratha",
      "Malabar Paratha",
      "Chilli Cheese Naan",
      "Steamed Rice",
      "Ghee Rice",
      "Jeera Rice",
      "Curd Rice",
    ],
  },
  {
    title: "Burgers",
    items: [
      "Tandoori Chicken Burger",
      "Crispy Chicken Burger",
      "Grilled Chicken Burger",
    ],
  },
  {
    title: "Desserts & Ice Cream",
    items: [
      "Gajar ka Halwa",
      "Lotus Biscoff Cheese Cake",
      "Chocolate Walnut Brownie",
      "Chocolate Caramel Tart",
      "Choco Lava Cake",
      "Banoffee Pie",
      "Belgian Bliss",
      "Vanilla",
      "Mango",
      "Very Berry Strawberry",
    ],
  },
] as const;
