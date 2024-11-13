import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { token, action } = req.body;

    try {
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // Nur der normale Key (kein PROD)

      if (!siteKey) {
        // Wenn der Sitekey nicht vorhanden ist, gib einen Fehler zurück
        return res
          .status(500)
          .json({ success: false, message: "Site key missing" });
      }

      // Request Body erstellen, der an Google gesendet wird
      const requestBody = {
        event: {
          token: token, // Das von grecaptcha zurückgegebene Token
          expectedAction: action, // Optional: Die Aktion, die während der Ausführung von grecaptcha angegeben wurde
          siteKey: siteKey, // Site Key aus der Umgebung
        },
      };

      // Sende die Anfrage an die reCAPTCHA Enterprise API
      const recaptchaResponse = await fetch(
        `https://recaptchaenterprise.googleapis.com/v1/projects/portfolio-web-de-1731449101937/assessments?key=${secretKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody), // JSON mit Token und SiteKey
        }
      );

      const recaptchaData = await recaptchaResponse.json(); // Antwort von Google

      if (recaptchaData.success) {
        // Wenn die Verifizierung erfolgreich war
        return res.status(200).json({ success: true });
      } else {
        // Wenn die Verifizierung fehlschlägt
        return res.status(400).json({ success: false });
      }
    } catch (error) {
      console.error("Fehler bei der reCAPTCHA-Verifizierung:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    // Wenn die Anfrage-Methode nicht POST ist
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
