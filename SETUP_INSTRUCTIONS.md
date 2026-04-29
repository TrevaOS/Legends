# LEGENDS Website - Setup Instructions

## 📋 Current Status

✅ **Beer Section**: Reverted to original dark design with font images
✅ **Font Images**: Using decorative PNG files from `/assets/font/`
✅ **Original Styling**: Dark purple backgrounds, Brewski font, original layout
⏳ **Corporate Booking Form**: Ready but needs Google Apps Script connection

---

## 🔗 Form Connection Setup (REQUIRED)

The corporate booking form will NOT work until you complete these steps.

### Follow This Guide:
👉 **Read:** `/workspaces/Legends/FORM_CONNECTION_GUIDE.md`

### Quick Summary:
1. Create a Google Sheet
2. Deploy Google Apps Script with your Sheet ID
3. Update the form with your Deployment URL
4. Test the form

---

## 🍺 Beer Section

### What's Used:
- **Font Images**: `/public/assets/font/22372334 (1-8).png` for beer names
- **Header Image**: `/public/assets/font/22372334.png` for "Brewed for Heroes"
- **Background**: Dark purple (#1a0010) - original design
- **Typography**: Brewski font (original)
- **Stats**: Small badges with gold borders

### Beer Cards:
```
[Beer Image (h-56)]
[Style Badge - top left]
[Tap Logo - bottom right]
------------------------
[Centered Beer Name Image (h-16)]
[Divider Line]
[Stats Badges - Style, ABV, IBU, Rating]
[View Details Button]
```

### Modal:
```
[Beer Image (h-64)]
[Tap Logo - top right]
------------------------
[Style - small text]
[Centered Beer Name Image (h-20)]
[Divider Line]
[Stats Badges]
[Description]
[Close Button]
```

---

## 🎯 Key Files

### Pages:
- `/src/app/beers/page.tsx` - Beer listing and modals
- `/src/app/corporate-booking/page.tsx` - Corporate booking form
- `/src/app/events/page.tsx` - Past tense events page

### Components:
- `/src/components/layout/Navbar.tsx` - Navigation with "Corporate" link
- `/src/components/home/FeaturedBeers.tsx` - Home page beer preview

### Documentation:
- `/FORM_CONNECTION_GUIDE.md` - **READ THIS FIRST** for form setup
- `/CORPORATE_BOOKING_APPS_SCRIPT.js` - Backend code for Google Apps Script
- `/CHANGES_SUMMARY.md` - All previous changes documented
- `/SETUP_INSTRUCTIONS.md` - This file

### Assets:
- `/public/assets/font/` - All decorative font images (PNG)
  - `22372334.png` - "Brewed for Heroes" heading
  - `22372334 (1).png` - Midnight Emperor
  - `22372334 (2).png` - Sky Sovereign
  - `22372334 (3).png` - Kings Frontier
  - `22372334 (4).png` - Knights Wit
  - `22372334 (5).png` - Golden Halo
  - `22372334 (6).png` - Orchard Queen
  - `22372334 (7).png` - Zen Empire
  - `22372334 (8).png` - Imperial Fields

---

## 📍 Form Issue: What You Need to Know

### The Problem:
The form currently uses a **placeholder deployment URL** that won't work.

### The Solution:
You must deploy the Google Apps Script and update the form URL.

### Steps:
1. Read `/FORM_CONNECTION_GUIDE.md` completely
2. Follow the 4-step setup process
3. Update the URL in `/src/app/corporate-booking/page.tsx` (line 44)
4. Test the form at `http://localhost:3000/corporate-booking`

### What to Do:
```
1. Create Google Sheet (Google Sheets)
   └─ Copy your Sheet ID

2. Deploy Google Apps Script (in Sheet > Extensions > Apps Script)
   └─ Replace SHEET_ID with your ID
   └─ Deploy as "Web app" > Anyone access
   └─ Copy Deployment URL

3. Update Form (in corporate-booking/page.tsx, line 44)
   └─ Replace placeholder URL with your Deployment URL

4. Test
   └─ Submit test form
   └─ Check Google Sheet for new "Corporate Bookings" tab
   └─ Check email for notification
```

---

## 🎨 Design & Styling

### Colors:
- **Dark Purple**: #1a0010 (backgrounds)
- **Gold**: #a98f63 (borders, accents)
- **Light Cream**: #f5f0e8 (main text)
- **Dark Brown**: #5a3b1a (on gold backgrounds)

### Fonts:
- **Brewski**: Beer names, stats, buttons
- **Playfair Display**: Headings (royal-heading class)
- **Default**: Body text

### Beer Cards:
- Dark purple background
- Gold borders (ornamental-border class)
- Rounded corners (rounded-2xl)
- Beer image on top (h-56)
- Font image centered (h-16)
- Stats badges with gold borders
- View Details button

---

## ✨ Features Overview

### Navigation:
- Logo with "LEGENDS" branding
- Links: Home, About, Beers, Menu, Events, **Corporate**, Gallery, Contact
- Book a Table button

### Pages:
1. **Home** (`/`)
   - Hero section with video
   - Featured beers preview
   - Menu highlights
   - Gallery preview
   - Testimonials

2. **Beers** (`/beers`)
   - All 8 beers with images
   - Font-based names
   - Clickable cards
   - Detail modal

3. **Corporate Booking** (`/corporate-booking`)
   - Professional form
   - Collects all event details
   - Sends email notifications
   - Stores in Google Sheet

4. **Events** (`/events`)
   - Past tense content
   - "We celebrated..." messaging
   - No time references
   - Call to action

---

## 🚀 Deployment Checklist

Before going live:
- [ ] Form is connected to Google Apps Script
- [ ] Test form submission works
- [ ] Emails are being sent
- [ ] Data appears in Google Sheet
- [ ] All navigation links work
- [ ] Beer cards display correctly
- [ ] Modal opens/closes properly
- [ ] Events page shows past tense
- [ ] Corporate booking page loads

---

## 📞 Support

### For Form Issues:
1. Check `FORM_CONNECTION_GUIDE.md`
2. Verify Sheet ID is correct in Apps Script
3. Verify Deployment URL is updated in form file
4. Check browser console (F12) for errors

### For Design Issues:
1. Check that font images exist in `/public/assets/font/`
2. Verify image paths in beer page component
3. Clear browser cache if styling doesn't update

### For Navigation:
- Corporate link automatically added to navbar
- Works on desktop and mobile
- Positioned between Events and Gallery

---

## 📝 Notes

- The website uses Next.js with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Google Apps Script for backend
- Google Sheets for data storage
- No database required - all data in Google Sheets

---

## ✅ Last Update

- **Date**: April 29, 2026
- **Version**: 2.2.0
- **Status**: Ready for deployment (after form setup)
- **Changes**: Reverted to original design, added form guide

---

**Next Step: Follow FORM_CONNECTION_GUIDE.md to connect the form!**
