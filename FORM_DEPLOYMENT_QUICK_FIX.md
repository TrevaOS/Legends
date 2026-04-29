# Corporate Booking Form - Final Setup Steps

## ❌ Why Your Form Submission Didn't Work

The form currently has a **placeholder URL**: 
```
https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent
```

This is a dummy URL and won't actually send data anywhere. You need to deploy the Google Apps Script and get the REAL deployment URL.

---

## ✅ Step-by-Step Setup (Take 5 minutes)

### Step 1: Open Your Google Sheet
- Open the sheet: [Google Sheets - LEGENDS Corporate Bookings](https://docs.google.com/spreadsheets/d/1yyg-kBBw6pYa6xZ5XNDZb1fbscfebvSIkjCliGLF3YM/edit)
- Or search for "LEGENDS Corporate Bookings" in your Google Drive

### Step 2: Deploy the Apps Script
1. Click **Extensions > Apps Script** (menu bar of Google Sheet)
2. A new tab opens - delete any old code
3. Copy ALL code from: **`CORPORATE_BOOKING_APPS_SCRIPT.js`** in the repo
4. Paste it into Apps Script editor
5. Click **Save** (Ctrl+S)
6. Click **New Deployment** (top right, dropdown next to pencil icon)
7. Select **"Web app"** from dropdown menu
8. Set:
   - **Execute as:** Your Google account
   - **Who has access:** Anyone
9. Click **"Deploy"**
10. ✅ A new tab shows your **Deployment URL** - **COPY THIS** (looks like):
    ```
    https://script.google.com/macros/d/XXXXXXXXXX/usercontent
    ```

### Step 3: Update the Form File
1. Open: `/workspaces/Legends/src/app/corporate-booking/page.tsx`
2. Find line 44
3. Replace:
   ```javascript
   "https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent"
   ```
   With your Deployment URL from Step 2

4. **Save the file** (Ctrl+S)
5. Refresh the website - it will reload

### Step 4: Test It
1. Go to: `http://localhost:3000/corporate-booking` (or your production URL)
2. Fill out the form with test data
3. Click **"Request a Quote"**
4. You should see: ✅ **"Your request has been submitted successfully"**
5. Check your Google Sheet - you should see a new row with the data!

---

## 📊 What Happens After Deployment

### Your Google Sheet Gets:
- New tab: **"Corporate Bookings"**
- Timestamp of submission
- All form data (company, contact, email, phone, event type, date, guests, dietary, requests)

### You Get Emails:
- **Team emails** sent to: tech@treva.in, info@treva.in, reservations@legendsbrewery.in
- **Client email** sent to customer's email with confirmation

---

## ⚠️ Common Issues & Fixes

### Issue: "My form is still not working after I did all this"
**Check:**
1. Did you actually click "Deploy" in Apps Script? (Don't just save)
2. Did you copy the FULL deployment URL (including `/usercontent` at the end)?
3. Did you replace the placeholder URL in the form file?
4. Did you save the form file (Ctrl+S)?

### Issue: "I don't see the Deployment URL after I clicked Deploy"
**Solution:**
1. Click **"Deployments"** in left sidebar of Apps Script
2. You should see your Web App deployment
3. Click on it - the URL is displayed

### Issue: "The form says success but no data in sheet"
**Check:**
1. Open your Google Sheet - look for new tab called "Corporate Bookings"
2. If tab doesn't exist, check if Deployment URL is correct
3. Check browser console (F12) for any errors

---

## 🔄 Once It's Working

The form will **automatically:**
- Create a "Corporate Bookings" tab in your sheet (first submission)
- Add new rows for each submission
- Send email notifications to the team
- Send confirmation emails to customers
- Include timestamp of submission

No more setup needed after deployment!

---

## 📋 Checklist

- [ ] Opened Google Sheet
- [ ] Went to Extensions > Apps Script
- [ ] Copied code from CORPORATE_BOOKING_APPS_SCRIPT.js
- [ ] Pasted into Apps Script
- [ ] Clicked Save
- [ ] Clicked "New Deployment"
- [ ] Selected "Web app"
- [ ] Deployed with "Anyone" access
- [ ] Copied Deployment URL
- [ ] Updated `/src/app/corporate-booking/page.tsx` line 44
- [ ] Saved the form file
- [ ] Tested the form
- [ ] ✅ Data appeared in Google Sheet

---

**Still stuck?** Check the browser console (F12) when you submit - it will show any errors. Share the error message and I can help debug!
