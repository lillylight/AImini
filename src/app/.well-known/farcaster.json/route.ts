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
  const URL = process.env.NEXT_PUBLIC_URL || 'https://aiancestry.xyz';

  return Response.json({
    accountAssociation: {
      header: process.env.FARCASTER_HEADER || "MISSING_HEADER",
      payload: process.env.FARCASTER_PAYLOAD || "MISSING_PAYLOAD",
      signature: process.env.FARCASTER_SIGNATURE || "MISSING_SIGNATURE",
    },
    frame: withValidProperties({
      version: "1",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "AI Ancestry",
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE || "Discover your ancestry through AI",
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "AI-powered ancestry analysis from your photos",
      screenshotUrls: [],
      iconUrl: process.env.NEXT_PUBLIC_APP_ICON || "/icon.png",
      splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE || "/splash.png",
      splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR || "#1a1a1a",
      homeUrl: URL,
      webhookUrl: `${URL}/api/webhook`,
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY || "Entertainment",
      tags: [],
      heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE || "/hero.png",
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || "Reveal your ancestry through AI",
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE || "AI Ancestry",
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION || "Discover your ancestry through AI",
      ogImageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE || "/og.png",
    }),
  });
}
