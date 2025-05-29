export async function GET() {
  const URL = 'https://aianceestry-5h7h.vercel.app';
  
  // Required account association - ensure these environment variables are set in your deployment
  const accountAssociation = {
    header: process.env.FARCASTER_HEADER,
    payload: process.env.FARCASTER_PAYLOAD,
    signature: process.env.FARCASTER_SIGNATURE
  };

  // Frame configuration
  const frame = {
    version: "1",
    name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "AI Ancestry",
    iconUrl: `${URL}/icon.png`,
    splashImageUrl: `${URL}/splash.png`,
    splashBackgroundColor: "#1a1a1a",
    homeUrl: URL,
    webhookUrl: `${URL}/api/webhook`,
    subtitle: "Discover your ancestry through AI",
    description: "AI-powered ancestry analysis from your photos",
    primaryCategory: "entertainment",
    categories: ["entertainment"],
    platforms: ["web"],
    heroImageUrl: `${URL}/hero.png`,
    tagline: "Reveal your ancestry through AI",
    ogTitle: "AI Ancestry",
    ogDescription: "Discover your ancestry through AI",
    ogImageUrl: `${URL}/og.png`,
    screenshotUrls: [`${URL}/hero.png`], // Using hero.png as a screenshot since it exists
    tags: ["ancestry", "ai", "photos"]
  };

  // Return the complete manifest
  return Response.json({
    accountAssociation,
    frame
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
