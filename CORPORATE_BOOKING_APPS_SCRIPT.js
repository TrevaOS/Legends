// ══════════════════════════════════════════════════════════════════════════════
// LEGENDS MICROBREWERY - CORPORATE BOOKING APPS SCRIPT
// ══════════════════════════════════════════════════════════════════════════════
// Instructions:
// 1. Create a new Google Sheet for corporate bookings
// 2. Copy this entire script to Apps Script (Extensions > Apps Script)
// 3. Replace SHEET_ID with your spreadsheet ID
// 4. Deploy as web app (New Deployment > Web App > Execute as you > Anyone)
// 5. Copy the deployment URL and use it in the corporate-booking form
// ══════════════════════════════════════════════════════════════════════════════

var SHEET_ID = "1yyg-kBBw6pYa6xZ5XNDZb1fbscfebvSIkjCliGLF3YM"; // Replace with your corporate booking sheet ID
var TO_EMAILS = ["tech@treva.in", "info@treva.in", "reservations@legendsbrewery.in"];
var BCC_EMAIL = "ullas@treva.in";

// ── HANDLE POST ───────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    var raw  = e.postData ? e.postData.contents : "{}";
    var data = JSON.parse(raw);
    return handle(data);
  } catch (err) {
    Logger.log("doPost error: " + err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── HANDLE GET ────────────────────────────────────────────────────────────────
function doGet(e) {
  try {
    var params = e.parameter || {};
    var data   = params.payload ? JSON.parse(params.payload) : params;
    return handle(data);
  } catch (err) {
    Logger.log("doGet error: " + err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── MAIN HANDLER ──────────────────────────────────────────────────────────────
function handle(data) {
  var type = (data.form || "contact").toLowerCase();

  if (type === "corporate_booking") {
    writeCorporateBooking(data);
  } else if (type === "reservation") {
    writeReservation(data);
  } else {
    writeContact(data);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ══════════════════════════════════════════════════════════════════════════════
// CORPORATE BOOKING
// ══════════════════════════════════════════════════════════════════════════════
function writeCorporateBooking(d) {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = getOrCreate(ss, "Corporate Bookings", [
    "Timestamp", "Status", "Company Name", "Contact Person", "Email", "Phone",
    "Event Type", "Event Date", "Expected Guests",
    "Dietary Requirements", "Special Requests", "Mail Sent"
  ]);

  sheet.appendRow([
    d.submitted_at || new Date().toISOString(),
    "pending",
    d.company_name      || "",
    d.contact_person    || "",
    d.email             || "",
    d.phone             || "",
    d.event_type        || "",
    d.event_date        || "",
    String(d.expected_guests || ""),
    d.dietary_requirements || "",
    d.special_requests  || "",
    "No"
  ]);

  var row = sheet.getLastRow();

  // ── EMAIL TO TEAM ──────────────────────────────────────────────────────────
  var teamBody =
    "🎉 NEW CORPORATE BOOKING REQUEST\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "COMPANY DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Company Name  : " + (d.company_name      || "N/A") + "\n" +
    "Contact Person: " + (d.contact_person    || "N/A") + "\n" +
    "Email         : " + (d.email             || "N/A") + "\n" +
    "Phone         : " + (d.phone             || "N/A") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "EVENT DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Event Type      : " + (d.event_type        || "N/A") + "\n" +
    "Preferred Date  : " + (d.event_date        || "N/A") + "\n" +
    "Expected Guests : " + (d.expected_guests   || "N/A") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "REQUIREMENTS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Dietary Requirements:\n" + (d.dietary_requirements || "None specified") + "\n\n" +
    "Special Requests:\n" + (d.special_requests  || "None") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Please follow up with the client and provide a customized quote.";

  var clientBody =
    "Dear " + (d.contact_person || "there") + ",\n\n" +
    "Thank you for your interest in hosting your corporate event at LEGENDS Microbrewery!\n\n" +
    "We have received your booking request and our team will be in touch shortly with a customized proposal tailored to your event.\n\n" +
    "BOOKING DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Company Name    : " + (d.company_name      || "") + "\n" +
    "Event Type      : " + (d.event_type        || "") + "\n" +
    "Preferred Date  : " + (d.event_date        || "") + "\n" +
    "Expected Guests : " + (d.expected_guests   || "") + "\n\n" +
    "Our team will contact you at:\n" +
    "Email : " + (d.email || "") + "\n" +
    "Phone : " + (d.phone || "") + "\n\n" +
    "In the meantime, feel free to reach out to us at:\n" +
    "Email: reservations@legendsbrewery.in\n" +
    "Phone: +91 81239 79966\n\n" +
    "Looking forward to hosting your team at the Kingdom of Brews!\n\n" +
    "Warm regards,\n" +
    "LEGENDS Microbrewery Team";

  try {
    // Send to team
    MailApp.sendEmail({
      to: TO_EMAILS.join(","),
      bcc: BCC_EMAIL,
      subject: "🎉 New Corporate Booking Request - " + (d.company_name || "LEGENDS"),
      body: teamBody
    });

    // Send confirmation to client
    if (d.email) {
      MailApp.sendEmail({
        to: d.email,
        subject: "Corporate Event Request Received - LEGENDS Microbrewery",
        body: clientBody
      });
    }

    sheet.getRange(row, 12).setValue("Yes");
  } catch (err) {
    Logger.log("Email error: " + err.message);
    sheet.getRange(row, 12).setValue("Failed: " + err.message);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// RESERVATION (EXISTING)
// ══════════════════════════════════════════════════════════════════════════════
function writeReservation(d) {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = getOrCreate(ss, "Reservations",
    ["Timestamp","Reference","Name","Phone","Email","Date","Time","Guests","Notes","Status","Mail Sent"]);

  var lastRow = sheet.getLastRow();
  var refNumber = "LGM-" + (1000 + lastRow);

  sheet.appendRow([
    d.submitted_at || new Date().toISOString(),
    refNumber,
    d.name         || "",
    d.phone        || "",
    d.email        || "",
    d.date         || "",
    d.time         || "",
    String(d.guests || ""),
    d.notes        || "",
    d.status       || "pending",
    "No"
  ]);

  var row = sheet.getLastRow();

  var teamBody =
    "New Reservation\n\n" +
    "Reference : " + refNumber + "\n" +
    "Name      : " + (d.name      || "") + "\n" +
    "Phone     : " + (d.phone     || "") + "\n" +
    "Email     : " + (d.email     || "") + "\n" +
    "Date      : " + (d.date      || "") + "\n" +
    "Time      : " + (d.time      || "") + "\n" +
    "Guests    : " + (d.guests    || "") + "\n" +
    "Notes     : " + (d.notes     || "");

  var guestBody =
    "Dear " + (d.name || "Guest") + ",\n\n" +
    "Your reservation at LEGENDS Microbrewery is confirmed.\n\n" +
    "Reference : " + refNumber + "\n" +
    "Date      : " + (d.date      || "") + "\n" +
    "Time      : " + (d.time      || "") + "\n" +
    "Guests    : " + (d.guests    || "") + "\n\n" +
    "We look forward to welcoming you to the Kingdom.\n\nLEGENDS Microbrewery";

  try {
    MailApp.sendEmail({
      to: TO_EMAILS.join(","),
      bcc: BCC_EMAIL,
      subject: "New Table Reservation - LEGENDS Microbrewery",
      body: teamBody
    });
    if (d.email) {
      MailApp.sendEmail({
        to: d.email,
        subject: "Reservation Confirmed - LEGENDS Microbrewery",
        body: guestBody
      });
    }
    sheet.getRange(row, 11).setValue("Yes");
  } catch (err) {
    sheet.getRange(row, 11).setValue("Failed: " + err.message);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// CONTACT (EXISTING)
// ══════════════════════════════════════════════════════════════════════════════
function writeContact(d) {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = getOrCreate(ss, "Contact",
    ["Timestamp","Name","Email","Phone","Subject","Message","Mail Sent"]);

  sheet.appendRow([
    d.submitted_at || new Date().toISOString(),
    d.name         || "",
    d.email        || "",
    d.phone        || "",
    d.subject      || "",
    d.message      || "",
    "No"
  ]);

  var row = sheet.getLastRow();

  var teamBody =
    "New Contact Form\n\n" +
    "Name    : " + (d.name    || "") + "\n" +
    "Email   : " + (d.email   || "") + "\n" +
    "Phone   : " + (d.phone   || "") + "\n" +
    "Subject : " + (d.subject || "") + "\n" +
    "Message : " + (d.message || "");

  var guestBody =
    "Dear " + (d.name || "there") + ",\n\n" +
    "We have received your message and will get back to you shortly.\n\n" +
    "LEGENDS Microbrewery\nreservations@legendsbrewery.in";

  try {
    MailApp.sendEmail({
      to: TO_EMAILS.join(","),
      bcc: BCC_EMAIL,
      subject: "New Contact Enquiry - LEGENDS Microbrewery",
      body: teamBody
    });
    if (d.email) {
      MailApp.sendEmail({
        to: d.email,
        subject: "We received your message - LEGENDS Microbrewery",
        body: guestBody
      });
    }
    sheet.getRange(row, 7).setValue("Yes");
  } catch (err) {
    sheet.getRange(row, 7).setValue("Failed: " + err.message);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// RETRY UNSENT EMAILS (RUN PERIODICALLY)
// ══════════════════════════════════════════════════════════════════════════════
function sweepUnsentMails() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  retrySweepCorporate(ss);
  retrySweepResv(ss);
  retrySweepContact(ss);
}

function retrySweepCorporate(ss) {
  var sheet = ss.getSheetByName("Corporate Bookings");
  if (!sheet) return;
  var vals = sheet.getDataRange().getValues();

  for (var i = 1; i < vals.length; i++) {
    var mailStatus = String(vals[i][11]); // Column L = Mail Sent
    if (mailStatus === "Yes") continue;

    var d = {
      company_name: vals[i][2],
      contact_person: vals[i][3],
      email: vals[i][4],
      phone: vals[i][5],
      event_type: vals[i][6],
      event_date: vals[i][7],
      expected_guests: vals[i][8],
      dietary_requirements: vals[i][9],
      special_requests: vals[i][10]
    };

    var teamBody =
      "🎉 NEW CORPORATE BOOKING REQUEST\n\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "COMPANY DETAILS\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "Company Name  : " + d.company_name + "\n" +
      "Contact Person: " + d.contact_person + "\n" +
      "Email         : " + d.email + "\n" +
      "Phone         : " + d.phone + "\n\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "EVENT DETAILS\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "Event Type      : " + d.event_type + "\n" +
      "Preferred Date  : " + d.event_date + "\n" +
      "Expected Guests : " + d.expected_guests + "\n\n" +
      "Please follow up with the client.";

    try {
      MailApp.sendEmail({
        to: TO_EMAILS.join(","),
        bcc: BCC_EMAIL,
        subject: "🎉 New Corporate Booking Request - " + d.company_name,
        body: teamBody
      });

      if (d.email) {
        var clientBody =
          "Dear " + d.contact_person + ",\n\n" +
          "Thank you for your interest in hosting a corporate event at LEGENDS Microbrewery.\n" +
          "Our team will be in touch shortly.\n\n" +
          "LEGENDS Microbrewery Team";
        MailApp.sendEmail({
          to: d.email,
          subject: "Corporate Event Request Received - LEGENDS Microbrewery",
          body: clientBody
        });
      }

      sheet.getRange(i + 1, 12).setValue("Yes");
    } catch (err) {
      sheet.getRange(i + 1, 12).setValue("Failed: " + err.message);
    }
  }
}

function retrySweepResv(ss) {
  var sheet = ss.getSheetByName("Reservations");
  if (!sheet) return;
  var vals = sheet.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    var mailStatus = String(vals[i][10]);
    if (mailStatus === "Yes") continue;

    var refNumber = vals[i][1];
    var d = {
      name: vals[i][2], phone: vals[i][3],
      email: vals[i][4], date: vals[i][5], time: vals[i][6],
      guests: vals[i][7], notes: vals[i][8]
    };

    var teamBody =
      "New Reservation\n\nReference : " + refNumber +
      "\nName      : " + d.name + "\nPhone     : " + d.phone +
      "\nEmail     : " + d.email + "\nDate      : " + d.date +
      "\nTime      : " + d.time + "\nGuests    : " + d.guests +
      "\nNotes     : " + d.notes;

    var guestBody =
      "Dear " + (d.name || "Guest") + ",\n\n" +
      "Your reservation at LEGENDS Microbrewery is confirmed.\n\n" +
      "Reference : " + refNumber + "\nDate      : " + d.date +
      "\nTime      : " + d.time + "\nGuests    : " + d.guests +
      "\n\nWe look forward to welcoming you to the Kingdom.\n\nLEGENDS Microbrewery";

    try {
      MailApp.sendEmail({
        to: TO_EMAILS.join(","),
        bcc: BCC_EMAIL,
        subject: "New Table Reservation - LEGENDS Microbrewery",
        body: teamBody
      });
      if (d.email) MailApp.sendEmail({
        to: d.email,
        subject: "Reservation Confirmed - LEGENDS Microbrewery",
        body: guestBody
      });
      sheet.getRange(i + 1, 11).setValue("Yes");
    } catch (err) {
      sheet.getRange(i + 1, 11).setValue("Failed: " + err.message);
    }
  }
}

function retrySweepContact(ss) {
  var sheet = ss.getSheetByName("Contact");
  if (!sheet) return;
  var vals = sheet.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    var mailStatus = String(vals[i][6]);
    if (mailStatus === "Yes") continue;

    var d = {
      name: vals[i][1], email: vals[i][2], phone: vals[i][3],
      subject: vals[i][4], message: vals[i][5]
    };

    var teamBody =
      "New Contact Form\n\nName    : " + d.name +
      "\nEmail   : " + d.email + "\nPhone   : " + d.phone +
      "\nSubject : " + d.subject + "\nMessage : " + d.message;

    var guestBody =
      "Dear " + (d.name || "there") + ",\n\n" +
      "We have received your message and will get back to you shortly.\n\n" +
      "LEGENDS Microbrewery\nreservations@legendsbrewery.in";

    try {
      MailApp.sendEmail({
        to: TO_EMAILS.join(","),
        bcc: BCC_EMAIL,
        subject: "New Contact Enquiry - LEGENDS Microbrewery",
        body: teamBody
      });
      if (d.email) MailApp.sendEmail({
        to: d.email,
        subject: "We received your message - LEGENDS Microbrewery",
        body: guestBody
      });
      sheet.getRange(i + 1, 7).setValue("Yes");
    } catch (err) {
      sheet.getRange(i + 1, 7).setValue("Failed: " + err.message);
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTION
// ══════════════════════════════════════════════════════════════════════════════
function getOrCreate(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
         .setFontWeight("bold")
         .setBackground("#a98f63")
         .setFontColor("#ffffff");
  }
  return sheet;
}

// ══════════════════════════════════════════════════════════════════════════════
// SETUP TIME-BASED EMAIL RETRY (Optional - Run via trigger)
// ══════════════════════════════════════════════════════════════════════════════
function setupSweepTrigger() {
  // This function creates an automatic trigger to retry failed emails every hour
  // Call this once to set it up, then it will run automatically
  ScriptApp.newTrigger("sweepUnsentMails")
    .timeBased()
    .everyHours(1)
    .create();
  Logger.log("Sweep trigger created. Emails will be retried every hour.");
}
