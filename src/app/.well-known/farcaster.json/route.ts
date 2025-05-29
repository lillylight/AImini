export async function GET() {
  const URL = 'https://aianceestry-5h7h.vercel.app';

  // Return exact format matching the example
  return Response.json({
    "accountAssociation": {
      "header": process.env.FARCASTER_HEADER || "eyJmaWQiOjk4MjA5MSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDEyMmYyOTM1YjhBMTI1Rjg3NTM4MkZDMDVGRjE5MTZmMmE0OTYyNmMifQ",
      "payload": process.env.FARCASTER_PAYLOAD || "eyJkb21haW4iOiJhaWFuY2VzdHJ5Lnh5eiJ9",
      "signature": process.env.FARCASTER_SIGNATURE || "MHgyYTUyYzAxOTc5YjUyNjJhOThiMTI5ZDAzMWVmOGZiNzE2YTNhOWYyN2Y4MTJmNTE1OWFkZmZiNzdmYjkyODZmMDhkNGVmMzUzOGIwYzkzNTRkNjVhZjFlYWUzNjI2OGI1NTVkOGQ2Y2Q2M2I3ZmQwNDk3MGRiNjc3MjQ0OTRiNjFi"
    },
    "frame": {
      "version": "1",
      "name": process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "AI Ancestry",
      "iconUrl": `${URL}/icon.png`,
      "splashImageUrl": `${URL}/splash.png`,
      "splashBackgroundColor": "#1a1a1a",
      "homeUrl": URL,
      "webhookUrl": `${URL}/api/webhook`,
      "subtitle": "Discover your ancestry through AI",
      "description": "AI-powered ancestry analysis from your photos",
      "screenshotUrls": [
        `${URL}/screenshot1.png`
      ],
      "primaryCategory": "Entertainment",
      "tags": [
        "ancestry",
        "ai",
        "photos"
      ],
      "heroImageUrl": `${URL}/hero.png`,
      "tagline": "Reveal your ancestry through AI",
      "ogTitle": "AI Ancestry",
      "ogDescription": "Discover your ancestry through AI",
      "ogImageUrl": `${URL}/og.png`
    }
  });
}
