export async function onRequest(context) {
  const { env } = context;

  const buttons = [
    { id: '1', label: env.BUTTON_LABEL1, hasUrl: !!env.TARGET_URL1 },
    { id: '2', label: env.BUTTON_LABEL2, hasUrl: !!env.TARGET_URL2 },
    { id: '3', label: env.BUTTON_LABEL3, hasUrl: !!env.TARGET_URL3 },
  ].filter(b => b.hasUrl && b.label);

  return new Response(JSON.stringify({ buttons }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
