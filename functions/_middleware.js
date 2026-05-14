export async function onRequest(context) {
  const ua = (context.request.headers.get("user-agent") || "").toLowerCase();

  const blockedBots = [
    // ── Meta / Instagram (vollständig, verifiziert) ──
    "facebookexternalhit",   // Haupt-Link-Preview-Bot (seit 2010)
    "facebot",               // Legacy Facebook Bot
    "facebookbot",           // Meta AI Training Crawler
    "facebookcatalog",       // Facebook Product Catalog
    "meta-externalagent",    // Meta AI Training / LLaMA (seit Juli 2024)
    "meta-externalfetcher",  // Meta interner Fetcher
    "meta-webindexer",       // Meta AI Search Indexer (2024/2025)
    "instagram",             // Instagram Crawler

    // ── Andere Social / Messenger ──
    "linkedinbot",
    "twitterbot",
    "telegrambot",
    "whatsapp",
    "slackbot",
    "discordbot",

    // ── Suchmaschinen ──
    "googlebot",
    "bingbot",
    "yandexbot",
    "duckduckbot",
    "baiduspider",

    // ── KI-Crawler ──
    "gptbot",
    "chatgpt-user",
    "oai-searchbot",
    "claudebot",
    "claude-user",
    "anthropic-ai",
    "ccbot",
    "amazonbot",
    "bytespider",
    "perplexitybot",
    "google-extended",

    // ── SEO-Tools ──
    "semrushbot",
    "ahrefsbot",
    "mj12bot",
    "dotbot",
    "petalbot",
  ];

  if (blockedBots.some(bot => ua.includes(bot))) {
    return new Response("Not found", { status: 404 });
  }

  return context.next();
}
