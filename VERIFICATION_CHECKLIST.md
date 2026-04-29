# Verification Checklist - Test All 5 Fixes

Use this checklist to verify that all 5 issues have been fixed properly.

---

## ✅ Issue #1: Button Fonts

### Test: Visit Beer Page
1. Go to: `http://localhost:3000/beers` (or your domain)
2. Scroll down to see beer cards
3. Look for the **"View Details"** button on any card

### Verify:
- [ ] Button text is small and clean (not tall/stretched)
- [ ] Font looks like normal text (Nunito), not decorative
- [ ] Button is clearly readable against dark background
- [ ] Button has proper padding and spacing

### Test Clicking Button:
1. Click **"View Details"** on any beer card
2. Modal opens showing beer details
3. Look at the **"Close"** button

### Verify:
- [ ] "Close" button also uses clean font
- [ ] Text is easy to read
- [ ] Modal closes when you click "Close"
- [ ] All formatting is consistent

### Expected Result:
```
BEFORE: 𝗩𝗶𝗲𝘄 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 (tall, stretched, decorative)
AFTER:  View Details    (clean, normal, readable) ✓
```

---

## ✅ Issue #2: Calendar Icon Visibility

### Test: Visit Corporate Booking Form
1. Go to: `http://localhost:3000/corporate-booking`
2. Scroll to find **"Preferred Date & Time"** field
3. Look for the calendar icon

### Verify:
- [ ] Calendar icon is **visible** (bright/white color)
- [ ] Icon appears on the **right side** of the input field
- [ ] Icon looks like a calendar (📅 or 🗓️ style)
- [ ] Icon is **not grayed out** or hidden

### Test Clicking Icon:
1. Click on the calendar icon
2. Date/time picker popup should appear
3. Try selecting a date

### Verify:
- [ ] Date picker opens when you click the icon
- [ ] You can select a date from calendar
- [ ] You can select a time (hours/minutes)
- [ ] Selected date/time appears in the field
- [ ] You **cannot pick past dates** (only future)

### Expected Result:
```
BEFORE: [________] - no icon visible, looks broken
AFTER:  [________🗓️] - bright icon, clearly clickable ✓
```

---

## ✅ Issue #3: Form Submission (Needs Your Action)

### Status:
- ✅ Form UI is ready
- ✅ Google Sheet is created
- ⏳ **Waiting for you to deploy Google Apps Script**

### What You Need to Do:
Follow the guide: **`FORM_DEPLOYMENT_QUICK_FIX.md`**

### Quick Steps:
1. Open your Google Sheet
2. Extensions > Apps Script
3. Copy code from `CORPORATE_BOOKING_APPS_SCRIPT.js`
4. Paste into Apps Script editor
5. Save (Ctrl+S)
6. New Deployment > Web app
7. Copy Deployment URL
8. Update form file with URL
9. Test form submission

### Verify When Deployed:
- [ ] Form shows success message after submit
- [ ] New row appears in Google Sheet
- [ ] Email is sent to team (check inbox)
- [ ] Confirmation email sent to customer

---

## ✅ Issue #4: Mobile Menu with Beer Images

### Test: Visit Menu Page on Mobile
1. Go to: `http://localhost:3000/menu`
2. **On mobile device** (or use mobile view: F12 → responsive design mode)
3. Set screen width to **< 768px** (mobile size)

### Verify Strategic Order:
- [ ] **Beers section** is at the top (most prominent)
- [ ] Each beer shows a **photo/image**
- [ ] Beer name appears below image
- [ ] Stats (ABV, IBU, rating) are visible
- [ ] **Starters section** below beers
- [ ] **Cocktails section** below starters
- [ ] **Main Course section** last (small section)

### Test Expandable Sections:
1. Click on **"🥘 Starters"** heading
   - [ ] Section expands to show items
   - [ ] List of starters appears

2. Click **"🥘 Starters"** again
   - [ ] Section collapses
   - [ ] Items disappear

3. Repeat for **Cocktails** and **Main Course**
   - [ ] All sections expand/collapse properly
   - [ ] Beers section cannot collapse (always open)

### Test Desktop View:
1. Go to menu page on **desktop** (or > 1024px width)
2. You should see:
   - [ ] **Original flipbook menu** (not strategic view)
   - [ ] Page turning animation
   - [ ] Category sidebar
   - [ ] Same menu items, different layout

### Expected Result:
```
MOBILE (< 768px):
🍺 Signature Brews ✓
[Beer Image 1]
Midnight Emperor
ABV 6.5%, IBU 45, ⭐ 4.8

[Beer Image 2]
Sky Sovereign
...

🥘 Starters +
🍹 Cocktails +
🍽️ Main Course +

DESKTOP (> 768px):
Original Flipbook Menu (unchanged)
```

---

## ✅ Issue #5: Age Restriction Notice

### Test: Visit Home Page
1. Go to: `http://localhost:3000/` (home page)
2. Look at the top of the page
3. Find the **gold notification bar** that scrolls

### Verify:
- [ ] You see scrolling text at the top
- [ ] One message says: **"Entry not allowed with slippers"**
- [ ] Another message says: **"No outside food allowed"**
- [ ] Third message says: **"Below the age of 21 alcohol will not be served"** 🔞
- [ ] Messages scroll continuously (loop forever)
- [ ] Message with age restriction is visible
- [ ] Text is readable on gold background

### Expected Messages (in order):
```
⚠️ Entry not allowed with slippers
⚠️ No outside food allowed
🔞 Below the age of 21 alcohol will not be served
[repeats]
```

### Verify:
- [ ] All three messages scroll
- [ ] No gaps between messages
- [ ] Messages repeat infinitely
- [ ] Age notice is prominently displayed
- [ ] Gold bar color is consistent with design

---

## 📋 Master Checklist

### All 5 Issues:
- [ ] **#1 - Button Fonts:** "View Details" and "Close" use Nunito
- [ ] **#2 - Calendar Icon:** Visible and clickable in date field
- [ ] **#3 - Form Deployment:** (Will test after you deploy)
- [ ] **#4 - Mobile Menu:** Shows beers with images, strategic order
- [ ] **#5 - Age Notice:** Scrolls in marquee on home page

### Design Consistency:
- [ ] All colors match existing design
- [ ] Spacing and padding are consistent
- [ ] Dark theme is maintained
- [ ] Gold accents are consistent
- [ ] Fonts are correct (Brewski for beer names, Nunito elsewhere)
- [ ] Borders and rounded corners match

### Mobile Responsiveness:
- [ ] Mobile menu shows strategic layout (< 768px)
- [ ] Desktop menu shows flipbook (≥ 768px)
- [ ] Calendar icon visible on mobile
- [ ] All buttons clickable on touch devices
- [ ] No layout breaks on small screens

---

## 🚀 Testing Order (Recommended)

1. **Test Button Fonts First**
   - Quickest test
   - Visible immediately
   - Just click buttons on `/beers`

2. **Test Calendar Icon**
   - Quick test
   - Go to `/corporate-booking`
   - Click calendar icon

3. **Test Age Notice**
   - Visit home page
   - Watch marquee scroll
   - Look for 🔞 message

4. **Test Mobile Menu**
   - Use mobile device or F12 responsive mode
   - Visit `/menu`
   - Check beer images and sections

5. **Test Form Deployment**
   - After you deploy Apps Script
   - Fill out form on `/corporate-booking`
   - Check Google Sheet for data

---

## 📞 Troubleshooting

### Button Text Still Looks Decorative?
- [ ] Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Clear cache (F12 > Storage > Clear All)
- [ ] Try different browser

### Calendar Icon Still Not Visible?
- [ ] Make sure you're on `/corporate-booking` page
- [ ] Check browser console (F12) for errors
- [ ] Try in different browser

### Menu Still Shows Flipbook on Mobile?
- [ ] Check screen width (should be < 768px)
- [ ] Hard refresh browser
- [ ] Check that `StrategicMenuView` component is being used
- [ ] Verify responsive design mode is working

### Age Notice Not Scrolling?
- [ ] Refresh home page (F5)
- [ ] Check if NotificationMarquee is visible
- [ ] Scroll down - marquee might be below fold
- [ ] Check browser console for JS errors

### Form Not Submitting After Deployment?
- [ ] Check deployment URL is correct (no typos)
- [ ] Verify Apps Script is deployed as "Web app"
- [ ] Check "Anyone" access is enabled
- [ ] Check browser console (F12) for errors
- [ ] See `FORM_DEPLOYMENT_QUICK_FIX.md`

---

## ✅ Final Verification

All 5 issues should now be fixed:

| # | Issue | Status | Location |
|---|-------|--------|----------|
| 1 | Button Fonts | ✅ Fixed | `/beers` |
| 2 | Calendar Icon | ✅ Fixed | `/corporate-booking` |
| 3 | Form Submission | ✅ Ready (needs deployment) | `/corporate-booking` |
| 4 | Mobile Menu | ✅ Fixed | `/menu` |
| 5 | Age Notice | ✅ Fixed | Home page |

---

## 📚 Reference Documents

- **`ISSUES_FIXED_SUMMARY.md`** - Technical summary of changes
- **`VISUAL_CHANGES_GUIDE.md`** - Before/after visual comparison
- **`FORM_DEPLOYMENT_QUICK_FIX.md`** - Step-by-step form setup
- **`VERIFICATION_CHECKLIST.md`** - This file

---

**All fixes are deployed and ready to test! Good luck! 🎉**
