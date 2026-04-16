// Google Apps Script Web App URL deployed from the Legends Reservation project
// Replace this value with the deployed web app URL from Apps Script > Deploy > Manage Deployments
export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwL7KHj5PAok6B9dnxUXMR-1_pySGp1b-KfftC9Inv1JjcaqCUHL6O8UWu34y3FxJ94SQ/exec";

type SheetPayload = Record<string, string | number>;

export async function sendToSheet(payload: SheetPayload): Promise<void> {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      // Apps Script requires text/plain for CORS-free cross-origin POSTs
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Non-blocking form still works even if sheet logging fails
  }
}
