// LOCKDOWN — temporary offline mode
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nDisallow: /\n', { headers: { 'content-type': 'text/plain' } });
    }
    return new Response(
      `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>computer future</title><meta name="robots" content="noindex,nofollow"><style>*{box-sizing:border-box;margin:0;padding:0}html,body{height:100%;background:#080808;color:#e8e8e8;font-family:'Courier New',monospace}body{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:2rem}.wrap{max-width:480px;width:100%}.kicker{font-size:0.7rem;color:#444;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:2.5rem}h1{font-size:1.5rem;font-weight:400;letter-spacing:0.03em;color:#fff;margin-bottom:1.25rem;line-height:1.4}.sub{font-size:0.85rem;color:#666;line-height:1.7}</style></head><body><div class="wrap"><div class="kicker">computer future</div><h1>offline.</h1><p class="sub">we'll be back.</p></div></body></html>`,
      {
        status: 503,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
          'cache-control': 'no-store',
          'x-robots-tag': 'noindex, nofollow',
        },
      }
    );
  },
};
