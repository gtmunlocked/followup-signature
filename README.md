# FollowUpSignature

A Google Workspace-ready app for marketers to create a shared signature block, which users can automatically append to their personal Gmail signatures.

## Features

- Marketer creates a global/shared signature block
- Users sign in with Google and update their Gmail signature with the marketer's block appended
- Easy opt-in/opt-out for users
- Ready for Google Workspace Marketplace

## Getting Started

1. Clone repo
2. Install dependencies: `npm install`
3. Set up `.env` from `.env.example`
4. Run `npx prisma migrate dev` to initialize the database
5. Start dev server: `npm run dev`

## Roadmap

- Integrate Gmail API for signature updates
- Admin dashboard for marketers
- User opt-in/out settings
- Google Marketplace publishing