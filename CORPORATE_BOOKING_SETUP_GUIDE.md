# LEGENDS Corporate Booking Setup Guide

## Overview
This guide walks you through setting up the corporate booking form and Google Apps Script integration for LEGENDS Microbrewery.

---

## Step 1: Create a New Google Sheet for Corporate Bookings

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ New"** and select **"Spreadsheet"**
3. Name it: **"LEGENDS Corporate Bookings"** (or your preferred name)
4. Copy the **Spreadsheet ID** from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
   - Copy just the ID part

---

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy the entire code from `CORPORATE_BOOKING_APPS_SCRIPT.js` file
4. Paste it into the Apps Script editor
5. Replace `SHEET_ID` on line 8 with your spreadsheet ID:
   ```javascript
   var SHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
   ```
6. Update email addresses if needed:
   ```javascript
   var TO_EMAILS = ["tech@treva.in", "info@treva.in", "reservations@legendsbrewery.in"];
   var CORPORATE_EMAIL = "rohini@legendsbrewery.in";
   var BCC_EMAIL = "ullas@treva.in";
   ```

---

## Step 3: Deploy as Web App

1. In Apps Script, click **"New Deployment"** (top right)
2. Select **"Web app"** from the dropdown
3. Configure as follows:
   - **Execute as:** Your Google account (e.g., tech@treva.in)
   - **Who has access:** Anyone
4. Click **"Deploy"**
5. Google will prompt for permissions - **"Authorize"**
6. Copy the **Deployment URL** (looks like: `https://script.google.com/macros/d/ABC123.../usercontent`)

---

## Step 4: Update the Corporate Booking Form

1. Open `/workspaces/Legends/src/app/corporate-booking/page.tsx`
2. Find this line (around line 50):
   ```typescript
   "https://script.google.com/macros/d/1UjNbfPqMlG6qJ6k3Z7Y8X9W2V3U4T5S6R7Q8P9O/usercontent"
   ```
3. Replace it with your Deployment URL from Step 3
4. Save the file

---

## Step 5: Test the Integration

1. Start the dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/corporate-booking`
3. Fill out the form and click **"Request a Quote"**
4. You should see a success message
5. Check your Google Sheet - a new row should appear in the **"Corporate Bookings"** sheet
6. Check your email inbox for the notification email

---

## Form Fields Collected

| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| Company Name | Text | Yes | Identify the client company |
| Contact Person | Text | Yes | Primary contact name |
| Email | Email | Yes | Client email for follow-up |
| Phone | Phone | Yes | Client phone number |
| Event Type | Dropdown | Yes | Type of corporate event |
| Preferred Date | Date | Yes | When they want to host the event |
| Expected Guests | Number | Yes | Estimated headcount |
| Budget Range | Dropdown | No | Budget for catering/venue |
| Dietary Requirements | Textarea | No | Food allergies/preferences |
| Special Requests | Textarea | No | Any additional requirements |

---

## Email Notifications

### Team Receives:
- **To:** All team members + Rohini
- **Subject:** 🎉 New Corporate Booking Request - [Company Name]
- **Content:** Full booking details for follow-up

### Client Receives:
- **To:** Client email
- **Subject:** Corporate Event Request Received - LEGENDS Microbrewery
- **Content:** Confirmation and next steps

---

## Automatic Email Retry (Optional)

If an email fails to send, the system will retry periodically:

1. In Apps Script, run the `setupSweepTrigger()` function once
2. This sets up a trigger to retry unsent emails every hour
3. Emails with "Failed" status will be retried automatically

---

## Sheet Structure

The Google Sheet will have these tabs:

### Corporate Bookings Sheet
Columns:
1. Timestamp
2. Status
3. Company Name
4. Contact Person
5. Email
6. Phone
7. Event Type
8. Event Date
9. Expected Guests
10. Budget
11. Dietary Requirements
12. Special Requests
13. Mail Sent

---

## Troubleshooting

### Form submissions not going through?
1. Check browser console (F12) for errors
2. Verify the Deployment URL is correct and updated in the form
3. Ensure Apps Script is deployed as "Web app" with "Anyone" access

### Emails not sending?
1. Check that TO_EMAILS are correct
2. Verify the Google account has email access
3. Check the "Mail Sent" column in the sheet for error messages
4. Run `sweepUnsentMails()` manually to retry

### New sheets not appearing?
1. The sheets are created automatically on first submission
2. Refresh the Google Sheet to see them
3. Make sure the SHEET_ID is correct

---

## Manual Trigger Setup (Optional)

To set up automatic email retry:

1. In Apps Script, click **"Triggers"** (left sidebar)
2. Click **"Create new trigger"** (bottom right)
3. Configure:
   - **Function to execute:** `sweepUnsentMails`
   - **Which runs at deployment:** Head
   - **Event source:** Time-based
   - **Type of time-based trigger:** Hour timer
   - **Interval:** Every hour
4. Click **"Save"**

---

## Website Integration

### Navigation Link
The corporate booking page is automatically linked in the main navigation:
- **Desktop:** "Corporate" link in navbar
- **Mobile:** Available in mobile menu

### Form URL
- Production: `https://legendsbrewery.in/corporate-booking`
- Local Dev: `http://localhost:3000/corporate-booking`

---

## Contact Info

**For Corporate Bookings:**
- Primary Contact: Rohini (rohini@legendsbrewery.in)
- Phone: +91 81239 79966
- Email: reservations@legendsbrewery.in

---

## Notes

- All timestamps are in ISO format
- Budget values: "under_10k", "10k_25k", "25k_50k", "50k_100k", "above_100k"
- Event types: team_lunch, team_dinner, client_entertainment, conference, product_launch, award_ceremony, private_event, other
- The system automatically tracks email delivery status
