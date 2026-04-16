export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwL7KHj5PAok6B9dnxUXMR-1_pySGp1b-KfftC9Inv1JjcaqCUHL6O8UWu34y3FxJ94SQ/exec";

type SheetPayload = Record<string, string | number>;

export async function sendToSheet(payload: SheetPayload): Promise<void> {
  try {
    // Apps Script cross-origin POST requires no-cors mode.
    // The response will be opaque but the sheet write still executes server-side.
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Non-blocking — form still submits even if logging fails
  }
}
