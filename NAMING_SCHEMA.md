# LEGENDS Microbrewery - Complete Naming Schema

## 🎯 Brand Identity

### Core Brand Names
| Element | Value | Usage |
|---------|-------|-------|
| **Brand Name** | LEGENDS Microbrewery | Official legal name & primary brand |
| **Brand Short Form** | LEGENDS | Used in compact UI, navigation, badges |
| **Tagline** | Kingdom of Brews | Brand subtitle/slogan |
| **Location** | Bengaluru | City designation |
| **Region** | Karnataka, India | State/Country |

### Complete Naming Variations
| Format | Full Name | Context |
|--------|-----------|---------|
| **Full Brand Name** | LEGENDS Microbrewery | Marketing, documents, official use |
| **Brand + Tagline** | LEGENDS Microbrewery - Kingdom of Brews | Branding materials, taglines |
| **Web/SEO Title** | LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru | Browser tabs, search results, meta tags |
| **Short Form** | LEGENDS | Compact UI, navigation, badges |
| **Location-Based** | LEGENDS Microbrewery, Bengaluru | Maps, directories, address |
| **Full With Location** | LEGENDS Microbrewery, Varthur, Bengaluru | Complete business name |

---

## 🌐 Website Metadata

### HTML Meta Tags
**File:** `src/app/layout.tsx` (Lines 19-57)

```tsx
// Main Page Title
title: "LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"

// Author
authors: [{ name: "LEGENDS Microbrewery" }]

// Open Graph (Social Media Sharing)
openGraph: {
  title: "LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
  siteName: "LEGENDS Microbrewery"
}

// Twitter Card
twitter: {
  title: "LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
}

// Structured Data (Schema.org)
{
  "@type": "LocalBusiness",
  "name": "LEGENDS Microbrewery",
  "description": "LEGENDS Microbrewery - Bengaluru's premier craft brewery..."
}
```

### Page Titles by Route

| Page | File | Title |
|------|------|-------|
| **Home** | `src/app/page.tsx` | LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **About** | `src/app/about/page.tsx` | About LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Events** | `src/app/events/page.tsx` | Events \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Beers** | `src/app/beers/page.tsx` | Our Beers \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Menu** | `src/app/menu/page.tsx` | Menu \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Gallery** | `src/app/gallery/page.tsx` | Gallery \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Contact** | `src/app/contact/page.tsx` | Contact Us \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Reservations** | `src/app/reservations/page.tsx` | Book a Table \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Corporate** | `src/app/corporate-booking/page.tsx` | Corporate Booking \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |
| **Offers** | `src/app/offers/page.tsx` | Offers \| LEGENDS Microbrewery \| Kingdom of Brews - Bengaluru |

---

## 📱 PWA & App Manifest

### Web App Manifest
**File:** `public/site.webmanifest`

```json
{
  "name": "LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  "short_name": "LEGENDS",
  "description": "Welcome to LEGENDS Microbrewery, Bengaluru. Premium craft beers, gourmet food, and royal ambiance.",
  "categories": ["food", "restaurant"]
}
```

### Mobile Home Screen Naming
- **Full Name:** LEGENDS Microbrewery | Kingdom of Brews - Bengaluru
- **Short Name:** LEGENDS (displayed when space is limited)

---

## 🖼️ Favicon Naming Schema

### Favicon Files Location
**Directory:** `public/`

| Filename | Size | Purpose | Type |
|----------|------|---------|------|
| `favicon.ico` | - | Legacy favicon | `.ico` |
| `favicon-16.png` | 16×16 | Browser tabs (small) | `.png` |
| `favicon-32.png` | 32×32 | Browser tabs (standard) | `.png` |
| `favicon-64.png` | 64×64 | Medium displays | `.png` |
| `favicon-180.png` | 180×180 | iPad (non-retina) | `.png` |
| `favicon-192.png` | 192×192 | Android & PWA | `.png` |
| `apple-touch-icon.png` | 180×180 | iPhone/iPad home | `.png` |

### Favicon Naming Pattern
```
favicon-{SIZE}.png
favicon.ico
apple-touch-icon.png
```

**Status:** ✅ All duplicate files removed
- ✅ Removed `favicon-16x16.png` (using `favicon-16.png`)
- ✅ Removed `favicon-32x32.png` (using `favicon-32.png`)

---

## 🎨 Brand Assets

### Logo Files
**Directory:** `assets/logos/`

```
Legends Logo.png
```

### Menu Documents
**Directory:** `assets/documents/menu/`

| File | Status |
|------|--------|
| `menu 9.pdf` | Reference menu |
| `LEGENDS FINAL FOOD MENU 3.pdf` | Current menu |

---

## 📍 Venue Details

### Business Information
**File:** `src/lib/data.ts`

```javascript
export const venueDetails = {
  address: "Balagere Road, Varthur, Bengaluru - 560087",
  phone: "+91 81239 79966",
  email: "reservations@legendsbrewery.in",
  hours: "12 PM – 1 AM daily"
}
```

### Contact Information
| Type | Value |
|------|-------|
| **Name** | LEGENDS Microbrewery |
| **Address** | Balagere Road, Varthur |
| **City** | Bengaluru |
| **Postal Code** | 560087 |
| **State** | Karnataka |
| **Country** | India |
| **Phone** | +91 81239 79966 |
| **Email** | reservations@legendsbrewery.in |
| **Hours** | 12 PM – 1 AM daily |
| **Domain** | legendsbrewery.in |

---

## 🔗 URL & Domain Schema

### Domain
```
legendsbrewery.in
```

### URL Structure
```
https://legendsbrewery.in
https://legendsbrewery.in/about
https://legendsbrewery.in/beers
https://legendsbrewery.in/menu
https://legendsbrewery.in/events
https://legendsbrewery.in/gallery
https://legendsbrewery.in/contact
https://legendsbrewery.in/reservations
https://legendsbrewery.in/corporate-booking
```

### Social Media URLs
```
https://www.instagram.com/legends.microbrewery
https://www.facebook.com/legends.microbrewery
https://www.instagram.com/legendsbreweryblr
```

---

## 📊 Branding Color & Theme

### Color Scheme
| Element | Hex Code | RGB | Usage |
|---------|----------|-----|-------|
| **Primary Dark** | `#1a0010` | (26, 0, 16) | Background, theme color |
| **Gold Accent** | `#c28a57` | (194, 138, 87) | Highlights, text |
| **Gold Secondary** | `#a98f63` | (169, 143, 99) | Borders, decorative |
| **Light Text** | `#f5f0e8` | (245, 240, 232) | Main text |
| **Muted Gold** | `#cbbca1` | (203, 188, 161) | Secondary text |

---

## 📝 Component Text References

### Navigation & Headers
**File:** `src/components/layout/Navbar.tsx`
```
Brand Name: LEGENDS Microbrewery (on desktop and mobile)
Tagline: Kingdom of Brews
Alt Text: "LEGENDS Microbrewery logo"
```

### Footer
**File:** `src/components/layout/Footer.tsx`
```
Brand Name: LEGENDS Microbrewery
Tagline: Kingdom of Brews
Alt Text: "LEGENDS Microbrewery"
Copyright: © 2026 LEGENDS Microbrewery. Kingdom of Brews. All rights reserved.
```

### Menu Components
**Files:** `src/components/menu/`
```
FlipbookMenu.tsx:
  - Cover Logo Alt: "LEGENDS Microbrewery"
  - Cover Title: "LEGENDS Microbrewery" (with line break)
  - Tagline: "Kingdom of Brews"
StrategicMenuView.tsx: "Kingdom of Brews" | "Experience the Kingdom of Brews"
```

### Hero Section
**File:** `src/components/home/HeroSection.tsx`
```
Logo Alt: "LEGENDS Microbrewery"
Brand Name: LEGENDS Microbrewery
Location: Bengaluru
Tagline: Kingdom of Brews
```

---

## 🔍 SEO Keywords & Descriptions

### Primary Keywords
```
- microbrewery bangalore
- craft beer bengaluru
- brewery near me
- legends microbrewery
- varthur brewery
- craft beer restaurant bangalore
```

### Meta Descriptions

**Home Page:**
```
Welcome to LEGENDS Microbrewery, Bengaluru. Premium craft beers, gourmet food, 
and royal ambiance. Open 12 PM - 1 AM daily at Balagere Road, Varthur.
```

**About Page:**
```
Discover the story behind LEGENDS Microbrewery. Crafted with passion, built on 
tradition, and rooted in excellence in Bengaluru.
```

**Events Page:**
```
Join us at LEGENDS Microbrewery for our Grand Opening and special events. 
Experience craft beer, gourmet food, and unforgettable moments.
```

---

## 📋 Naming Checklist

### ✅ Currently Implemented
- [x] Full brand name: LEGENDS Microbrewery
- [x] Tagline: Kingdom of Brews
- [x] Location: Bengaluru
- [x] Domain: legendsbrewery.in
- [x] Favicon: Multiple sizes with correct naming
- [x] Web manifest: PWA configured
- [x] Page titles: SEO-optimized
- [x] Meta descriptions: All pages
- [x] Social profiles: Instagram, Facebook

### ✅ All Items Completed (May 13, 2026)
- [x] Favicon duplicates removed (favicon-16x16.png, favicon-32x32.png)
- [x] Add metadata to remaining pages (beers, menu, gallery, contact, reservations, corporate, offers)
- [x] Verify menu document branding (LEGENDS FINAL FOOD MENU 3.pdf - already correct)

### ✅ Latest Updates (May 13, 2026)
- [x] Navbar: Updated to show "LEGENDS Microbrewery"
- [x] Footer: Updated to show "LEGENDS Microbrewery"
- [x] Footer Copyright: Updated to "© 2026 LEGENDS Microbrewery..."
- [x] FlipbookMenu: Cover title now shows "LEGENDS Microbrewery"
- [x] HeroSection: Brand display shows "LEGENDS Microbrewery"
- [x] All Alt Text: Updated to "LEGENDS Microbrewery"
- [x] NAMING_SCHEMA.md: Updated with latest component info

### ✅ Latest Improvements (May 13, 2026 - Second Update)
- [x] Removed duplicate favicon files
- [x] Added metadata to 7 additional pages:
  - Beers: "Our Beers | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
  - Menu: "Menu | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
  - Gallery: "Gallery | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
  - Contact: "Contact Us | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
  - Reservations: "Book a Table | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
  - Corporate Booking: "Corporate Booking | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
  - Offers: "Offers | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru"
- [x] All pages now have SEO metadata with keywords and descriptions
- [x] Menu document branding verified as correct

---

## 🎯 Summary

### Primary Brand Name
**LEGENDS Microbrewery** (Official legal brand name - use this everywhere)

### Web/Marketing Full Format
**LEGENDS Microbrewery | Kingdom of Brews - Bengaluru**

### Naming Pattern
```
[PRIMARY BRAND] | [TAGLINE] - [LOCATION]
LEGENDS Microbrewery | Kingdom of Brews - Bengaluru
```

### Key Brand Elements
- **Brand Name:** LEGENDS Microbrewery (everywhere on the website)
- **Tagline:** Kingdom of Brews
- **Location:** Bengaluru
- **Domain:** legendsbrewery.in
- **Favicon Pattern:** favicon-{SIZE}.png

### Where Names Are Used
1. **HTML Meta Tags** (`src/app/layout.tsx`) - Full web format
2. **Page Titles** (individual page.tsx files) - Full web format
3. **Web Manifest** (`public/site.webmanifest`) - Full name
4. **Favicons** (`public/favicon-*.png`) - Image assets
5. **Navbar** (`src/components/layout/Navbar.tsx`) - LEGENDS Microbrewery + Kingdom of Brews
6. **Footer** (`src/components/layout/Footer.tsx`) - LEGENDS Microbrewery + Kingdom of Brews
7. **Menu** (`src/components/menu/FlipbookMenu.tsx`) - LEGENDS Microbrewery on cover
8. **Hero Section** (`src/components/home/HeroSection.tsx`) - LEGENDS Microbrewery
9. **Alt Text** (All images) - LEGENDS Microbrewery logo/name
10. **Business Info** (`src/lib/data.ts`) - Brand name
11. **Brand Assets** (`src/lib/branding.ts`) - Logo files
12. **Legal/Official Documents** - LEGENDS Microbrewery
13. **Copyright** - © 2026 LEGENDS Microbrewery. Kingdom of Brews.
