export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwL7KHj5PAok6B9dnxUXMR-1_pySGp1b-KfftC9Inv1JjcaqCUHL6O8UWu34y3FxJ94SQ/exec";

type SheetPayload = Record<string, string | number>;

export async function sendToSheet(payload: SheetPayload): Promise<void> {
  try {
    // GET with payload as query param is the most reliable no-cors approach
    // for Apps Script — POST bodies can be dropped by browser CORS handling.
    const url = `${APPS_SCRIPT_URL}?payload=${encodeURIComponent(JSON.stringify(payload))}`;
    await fetch(url, { method: "GET", mode: "no-cors" });
  } catch {
    // Non-blocking — form still submits even if logging fails
  }
}
