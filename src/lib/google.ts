import { google } from "googleapis";

// Utility for Google OAuth and Gmail API
export function getOAuthClient() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "postmessage" // or your redirect URI
  );
}

// Example: Get user's Gmail signature (not complete)
export async function getUserSignature(oauth2Client: any, email: string) {
  const gmail = google.gmail({ version: "v1", auth: oauth2Client });
  const profile = await gmail.users.getProfile({ userId: "me" });
  // TODO: Get/sendAs for actual signature
  return profile.data;
}