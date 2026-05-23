export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/d/AKfycby64nKTazKbXp75sRf9r3WG05wSMX1HFmECBvlk4gKLTQS8IjXNicdcZnCfScL5hm9NUQ/usercontent";

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
