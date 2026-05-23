export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby296AC4FEn41tHypwCD4kkZqpNUIEvrdzpADiLH0K7yoM6UG08VtcOdyfemqjntl9DLQ/exec";

type SheetPayload = Record<string, string | number>;

export async function sendToSheet(payload: SheetPayload): Promise<string | null> {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return null;
  } catch (error) {
    console.error("Error sending to sheet:", error);
    return null;
  }
}
