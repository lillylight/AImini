export async function GET() {
  const URL = 'https://aianceestry-5h7h.vercel.app';
  
  // Required account association - ensure these environment variables are set in your deployment
  const accountAssociation = {
    header: process.env.FARCASTER_HEADER || "eyJmaWQiOjk4MjA5MSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDEyMmYyOTM1YjhBMTI1Rjg3NTM4MkZDMDVGRjE5MTZmMmE0OTYyNmMifQ",
    payload: process.env.FARCASTER_PAYLOAD || "eyJkb21haW4iOiJhaWFuY2VzdHJ5Lnh5eiJ9",
    signature: process.env.FARCASTER_SIGNATURE || "MHgyYTUyYzAxOTc5YjUyNjJhOThiMTI5ZDAzMWVmOGZiNzE2YTNhOWYyN2Y4MTJmNTE1OWFkZmZiNzdmYjkyODZmMDhkNGVmMzUzOGIwYzkzNTRkNjVhZjFlYWUzNjI2OGI1NTVkOGQ2Y2Q2M2I3ZmQwNDk3MGRiNjc3MjQ0OTRiNjFi"
  };

  // Frame configuration - following Farcaster's exact structure
  const manifest = {
    accountAssociation,
    frame: {
      version: "1",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "AI Ancestry",
      icon: {
        url: `${URL}/icon.png`,
        width: 256,
        height: 256
      },
      splash: {
        url: `${URL}/splash.png`,
        backgroundColor: "#1a1a1a"
      },
      homeUrl: URL,
      webhookUrl: `${URL}/api/webhook`,
      subtitle: "Discover your ancestry through AI",
      description: "AI-powered ancestry analysis from your photos",
      primaryCategory: "entertainment",
      categories: ["entertainment"],
      platforms: ["web"],
      hero: {
        url: `${URL}/hero.png`
      },
      tagline: "Reveal your ancestry through AI",
      og: {
        title: "AI Ancestry",
        description: "Discover your ancestry through AI",
        image: {
          url: `${URL}/og.png`
        }
      },
      screenshots: [
        {
          url: `${URL}/hero.png`,
          width: 1200,
          height: 630
        }
      ],
      tags: ["ancestry", "ai", "photos"]
    }
  };

  // Create response with proper headers
  const response = new Response(JSON.stringify(manifest), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
      'Access-Control-Allow-Origin': '*',
      'Vary': 'Accept-Encoding'
    }
  });

  return response;
}
