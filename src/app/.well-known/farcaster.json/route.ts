function withValidProperties(
  properties: Record<string, undefined | string | string[]>,
) {
  return Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return !!value;
    }),
  );
}

export async function GET() {
  const URL = 'https://aianceestry-5h7h.vercel.app';

  // Create a hybrid format with both new structure and accountAssociation
  return Response.json({
    // Account association data (required for validation)
    accountAssociation: {
      header: process.env.FARCASTER_HEADER || "eyJmaWQiOjk4MjA5MSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDEyMmYyOTM1YjhBMTI1Rjg3NTM4MkZDMDVGRjE5MTZmMmE0OTYyNmMifQ",
      payload: process.env.FARCASTER_PAYLOAD || "eyJkb21haW4iOiJhaWFuY2VzdHJ5Lnh5eiJ9",
      signature: process.env.FARCASTER_SIGNATURE || "MHgyYTUyYzAxOTc5YjUyNjJhOThiMTI5ZDAzMWVmOGZiNzE2YTNhOWYyN2Y4MTJmNTE1OWFkZmZiNzdmYjkyODZmMDhkNGVmMzUzOGIwYzkzNTRkNjVhZjFlYWUzNjI2OGI1NTVkOGQ2Y2Q2M2I3ZmQwNDk3MGRiNjc3MjQ0OTRiNjFi",
    },
    
    // Frame data (required for display)
    frame: {
      id: "aianceestry-5h7h.vercel.app",
      version: "1",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "AI Ancestry",
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE || "Discover your ancestry through AI",
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "AI-powered ancestry analysis from your photos",
      iconUrl: `${URL}/icon.png`,
      splashImageUrl: `${URL}/splash.png`,
      splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR || "#1a1a1a",
      homeUrl: URL,
      webhookUrl: `${URL}/api/webhook`,
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY || "Entertainment",
      categories: ["entertainment"],
      platforms: ["web"],
      heroImageUrl: `${URL}/hero.png`,
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || "Reveal your ancestry through AI",
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE || "AI Ancestry",
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION || "Discover your ancestry through AI",
      ogImageUrl: `${URL}/og.png`,
    }
  });
}
