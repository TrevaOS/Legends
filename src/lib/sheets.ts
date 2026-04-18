export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwL7KHj5PAok6B9dnxUXMR-1_pySGp1b-KfftC9Inv1JjcaqCUHL6O8UWu34y3FxJ94SQ/exec";

type SheetPayload = Record<string, string | number>;

export async function sendToSheet(payload: SheetPayload): Promise<string | null> {
  try {
    const url = `${APPS_SCRIPT_URL}?payload=${encodeURIComponent(JSON.stringify(payload))}`;
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    return data.reference || null;
  } catch (error) {
    console.error("Error sending to sheet:", error);
    return null;
  }
}
