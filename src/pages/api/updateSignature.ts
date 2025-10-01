import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { getSession } from "next-auth/react";

// This API endpoint updates the user's Gmail signature
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "Not authenticated" });

  const { signature } = req.body;
  // TODO: Use OAuth2 credentials from session/user DB
  const oauth2Client = new google.auth.OAuth2();
  // TODO: Set credentials appropriately

  const gmail = google.gmail({ version: "v1", auth: oauth2Client });
  try {
    await gmail.users.settings.sendAs.patch({
      userId: "me",
      sendAsEmail: session.user.email,
      requestBody: { signature },
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to update signature", details: err });
  }
}