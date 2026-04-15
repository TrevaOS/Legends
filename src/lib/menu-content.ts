export type MenuBookPage =
  | {
      type: "cover";
      eyebrow: string;
      title: string;
      subtitle: string;
      note: string;
    }
  | {
      type: "content";
      title: string;
      caption?: string;
      items: Array<{
        name: string;
        details?: string[];
        price: string;
      }>;
    }
  | {
      type: "backcover";
      title: string;
      lines: Array<{
        label: string;
        value: string;
      }>;
    };

export const assetFolders = [
  {
    label: "Logos",
    path: "/public/assets/logos",
    note: "Add your main logo, icon logo, and brand marks here.",
  },
  {
    label: "Ambiance Images",
    path: "/public/assets/images/ambience",
    note: "Add venue photos, interior shots, and food atmosphere images here.",
  },
  {
    label: "Menu Artwork",
    path: "/public/assets/images/menu",
    note: "Add the main card design, menu cover art, and menu page backgrounds here.",
  },
  {
    label: "Videos",
    path: "/public/assets/videos",
    note: "Add reels, hero clips, and background videos here.",
  },
  {
    label: "Menu PDFs",
    path: "/public/assets/documents/menu",
    note: "Keep food menu reference PDFs in one place.",
  },
  {
    label: "Beer PDFs",
    path: "/public/assets/documents/beer",
    note: "Keep beer lineup reference PDFs in one place.",
  },
] as const;

export const sourceDocuments = [
  {
    label: "Food Menu Reference 01",
    href: "/assets/documents/menu/LEGENDS FINAL FOOD MENU 3.pdf",
  },
  {
    label: "Food Menu Reference 02",
    href: "/assets/documents/menu/menu 9.pdf",
  },
  {
    label: "Beer Lineup Reference",
    href: "/assets/documents/beer/Beer lineup .pdf",
  },
] as const;

export const menuBookPages: MenuBookPage[] = [
  {
    type: "cover",
    eyebrow: "Legends",
    title: "Kingdom of Brews",
    subtitle: "Signature Menu",
    note: "Add your final menu cover artwork inside /public/assets/images/menu.",
  },
  {
    type: "content",
    title: "Sharing Plates",
    caption: "Replace these placeholders with the exact items from your approved menu card.",
    items: [
      { name: "Add starter item", details: ["Add short description or variant"], price: "₹000" },
      { name: "Add starter item", details: ["Add short description or variant"], price: "₹000" },
      { name: "Add starter item", details: ["Add short description or variant"], price: "₹000" },
      { name: "Add starter item", details: ["Add short description or variant"], price: "₹000" },
    ],
  },
  {
    type: "content",
    title: "Mains & Pub Specials",
    caption: "Use one page per category so the printed card structure stays clean and easy to scan.",
    items: [
      { name: "Add main course item", details: ["Add description or size"], price: "₹000" },
      { name: "Add main course item", details: ["Add description or size"], price: "₹000" },
      { name: "Add main course item", details: ["Add description or size"], price: "₹000" },
      { name: "Add main course item", details: ["Add description or size"], price: "₹000" },
    ],
  },
  {
    type: "content",
    title: "Pizzas, Flatbreads & Burgers",
    items: [
      { name: "Add item", details: ["Add description or toppings"], price: "₹000" },
      { name: "Add item", details: ["Add description or toppings"], price: "₹000" },
      { name: "Add item", details: ["Add description or toppings"], price: "₹000" },
      { name: "Add item", details: ["Add description or toppings"], price: "₹000" },
    ],
  },
  {
    type: "content",
    title: "Desserts & Add-ons",
    items: [
      { name: "Add dessert item", details: ["Add serving note"], price: "₹000" },
      { name: "Add dessert item", details: ["Add serving note"], price: "₹000" },
      { name: "Add side or add-on", details: ["Add serving note"], price: "₹000" },
      { name: "Add side or add-on", details: ["Add serving note"], price: "₹000" },
    ],
  },
  {
    type: "content",
    title: "Beer Lineup",
    caption: "This page is formatted for beer name plus aligned style, ABV, IBU, and price details.",
    items: [
      { name: "Add beer name", details: ["Style", "ABV 0.0%", "IBU 00"], price: "₹000" },
      { name: "Add beer name", details: ["Style", "ABV 0.0%", "IBU 00"], price: "₹000" },
      { name: "Add beer name", details: ["Style", "ABV 0.0%", "IBU 00"], price: "₹000" },
      { name: "Add beer name", details: ["Style", "ABV 0.0%", "IBU 00"], price: "₹000" },
    ],
  },
  {
    type: "backcover",
    title: "Visit Legends",
    lines: [
      { label: "Hours", value: "12 PM - 1 AM" },
      { label: "Phone", value: "Add booking number" },
      { label: "Location", value: "Panathur Main Road, Bengaluru" },
      { label: "Logo file", value: "/public/assets/logos" },
    ],
  },
];
