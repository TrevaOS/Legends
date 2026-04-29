# Corporate Booking Form - Connection Setup

## ⚠️ Current Issue
The form has a **placeholder URL** that won't work. You need to deploy the Google Apps Script and update the form with your real deployment URL.

---

## Step 1: Open Your Google Sheet

✅ You already have a Google Sheet with ID: `1yyg-kBBw6pYa6xZ5XNDZb1fbscfebvSIkjCliGLF3YM`

Open it from your Google Drive.

---

## Step 2: Deploy Google Apps Script

1. In your Google Sheet, click **Extensions > Apps Script**
2. Delete any existing code (if any)
3. Copy the entire code from `CORPORATE_BOOKING_APPS_SCRIPT.js` in this repository
4. ✅ The Sheet ID is already set to your sheet ID in line 12:
   ```javascript
   var SHEET_ID = "1yyg-kBBw6pYa6xZ5XNDZb1fbscfebvSIkjCliGLF3YM";
   ```
   (No changes needed - it's already configured!)
5. **Save** the script (Ctrl+S)
6. Click **New Deployment** (top right)
7. Select **"Web app"** from dropdown
8. Configure:
   - **Execute as:** Your Google account
   - **Who has access:** Anyone
9. Click **"Deploy"**
10. **Copy the Deployment URL** - Save it somewhere safe. It looks like:
    ```
    https://script.google.com/macros/d/DEPLOYMENT_ID/usercontent
    ```

---

## Step 3: Update the Form with Your Deployment URL

1. Open `/workspaces/Legends/src/app/corporate-booking/page.tsx`
2. Find line 44 (the fetch URL)
3. Replace this:
   ```javascript
   "https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent"
   ```
   With your **Deployment URL** from Step 2 (it will look like the example above but with a real ID)

4. **Save the file**
5. The website will auto-reload (or refresh the page manually)

---

## Step 4: Test the Form

1. Go to `http://localhost:3000/corporate-booking` (or your production URL)
2. Fill out the form with test data
3. Click **"Request a Quote"**
4. You should see: ✓ "Your request has been submitted successfully"
5. Go back to your Google Sheet
6. You should see a new sheet tab called **"Corporate Bookings"**
7. A new row should appear with your test data
8. Check your email - you should receive the notification email

---

## What Happens After Submission

### Team Receives Email:
- **To:** tech@treva.in, info@treva.in, reservations@legendsbrewery.in
- **Subject:** 🎉 New Corporate Booking Request - [Company Name]
- **Contains:** All booking details for follow-up

### Client Receives Email:
- **To:** Client's email (from form)
- **Subject:** Corporate Event Request Received - LEGENDS Microbrewery
- **Contains:** Confirmation and contact info

### Google Sheet:
- New tab: **"Corporate Bookings"**
- Columns: Timestamp, Status, Company, Contact, Email, Phone, Event Type, Date/Time, Guests, Dietary, Requests, Mail Status

---

## Troubleshooting

### Form shows success but no email/data?
1. Check if the Deployment URL is correct
2. Verify you replaced the placeholder URL in the form file
3. Make sure Apps Script is deployed as "Web app" with "Anyone" access

### Error message appears?
1. Check browser console (F12) for detailed error
2. Verify SHEET_ID is correct in Apps Script
3. Make sure the Google Sheet exists and is accessible

### Data appears in Sheet but emails don't send?
1. Check the "Mail Sent" column - should say "Yes"
2. If it says "Failed: ...", see the error message
3. Verify email addresses are correct in Apps Script
4. Check spam folder for emails

### Can't find Deployment URL?
1. In Apps Script, look at the top of the page
2. Click **"Deployments"** (left sidebar)
3. Find your deployment - the URL is there
4. Or create a new deployment if none exists

---

## Quick Reference

**What you need to do:**
1. ✅ Create Google Sheet
2. ✅ Copy Sheet ID
3. ✅ Deploy Google Apps Script with your Sheet ID
4. ✅ Get Deployment URL from Apps Script
5. ✅ Update corporate-booking/page.tsx with Deployment URL
6. ✅ Test the form

**Files involved:**
- `/workspaces/Legends/CORPORATE_BOOKING_APPS_SCRIPT.js` - Backend code (for Apps Script)
- `/workspaces/Legends/src/app/corporate-booking/page.tsx` - Form (needs Deployment URL)
- Google Sheet (stores the data)

---

## Support

If you still have issues:
1. Make sure you copied the **entire** Apps Script code
2. Make sure you updated the **Sheet ID** in Apps Script
3. Make sure you updated the **Deployment URL** in the form
4. Make sure the deployment is set to "Web app" with "Anyone" access
5. Test with a simple submission first

Once the connection is set up, it will work automatically for all future submissions!
