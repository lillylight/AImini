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
  return new Response(
    JSON.stringify({
      id: 'aianceestry-5h7h.vercel.app',
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || 'AI Ancestry',
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE || 'Discover your ancestry through AI',
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'AI-powered ancestry analysis from your photos',
      iconUrl: `${URL}/icon.png`,
      splashImageUrl: `${URL}/splash.png`,
      splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR || '#1a1a1a',
      homeUrl: URL,
      webhookUrl: `${URL}/api/webhook`,
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY || 'Entertainment',
      categories: ['entertainment'],
      platforms: ['web'],
      heroImageUrl: `${URL}/hero.png`,
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || 'Reveal your ancestry through AI',
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE || 'AI Ancestry',
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION || 'Discover your ancestry through AI',
      ogImageUrl: `${URL}/og.png`,
      // Optionally add screenshotUrls and tags if you have them (must be non-empty arrays)
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=0',
      },
    }
  );
}
