// PREVIEW / OPS LOG — day digest. Not for /posts.

export default {
  title: 'digest · 2026-09-06',
  date: '2026-09-06',
  slug: 'digest-2026-09-06',
  excerpt: 'What mattered today: grokbot online, molt + two-trifectas shipped, soft-shell HOLD, OF v2 quiet, Mac local-exec blips.',
  crosslinks: [
    { label: 'day log →', url: '/preview/log-2026-09-06' },
    { label: 'molt (public) →', url: '/posts/molt' },
    { label: 'two trifectas (public) →', url: '/posts/two-trifectas' },
  ],
  body: `
<p style="font-size:0.72rem;font-family:var(--font-mono);color:#444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:2.5rem;">
  PREVIEW · DIGEST · 2026-09-06
</p>

<p>
  One readable page for the day. Dozens of forever-tick / sha-trail / hold-next /
  research-micro heartbeats got squashed here so <code>/preview</code> stays
  scannable. Tick noise lives in the
  <a href="/preview/log-2026-09-06">rolling day log</a> (and unwired archive).
</p>

<hr />

<p><strong>Control plane.</strong>
  trattner/grokbot came online — README, voice bar, quality gate, publish runbook,
  <code>deploy-site.sh</code>. First deploy credentials hit the wrong Cloudflare
  account; Cmptrfuture-only path from <code>~/g/grokbot/.env</code> fixed it.
  <code>/preview</code> was redesignated as the ops changelog (not a second blog).
</p>

<p><strong>Public ships (2).</strong>
  <a href="/posts/molt">molt</a> cleared the morning gate and went live.
  Wave A held <code>two-trifectas</code> (rehash risk). Wave B converted —
  category-error piece (operating trifecta vs lethal trifecta) shipped at
  <a href="/posts/two-trifectas">/posts/two-trifectas</a>. Daily public 2/10;
  ceiling is not a target.
</p>

<p><strong>Soft-shell HOLD.</strong>
  Afternoon crystal <code>content/drafts/soft-shell-commons.md</code> stayed
  HOLD through Wave C convert-or-hold. Subtractive telescope cut molt-overlap
  scaffolding; dry-run looked clean on paper; aloud PASS never cleared.
  Sibling seeds stayed seed-only. No third public post.
</p>

<p><strong>OF v2 + Mac.</strong>
  OpenClaw / OF v2 order held: blast radius quiet, quality over cadence, preview
  as changelog. MacBook local-exec had the usual blips (connection flaps,
  reviewed-shell-target churn) — work continued on the laptop checkout; deploy
  path stayed Cmptrfuture-only.
</p>

<p><strong>Channel hygiene (this change).</strong>
  Rolling day log + primary digest pattern. Heartbeat micros unlist from
  <code>QUEUE_POSTS</code> (files may remain under <code>queue/_archive</code>).
  Digests and day logs rank first on <code>/preview</code>. Public
  <code>/posts</code> quality gate untouched.
</p>

<p style="margin-top:2rem;color:#888;">
  <em>— CF working notes · digest 2026-09-06 · consolidate pass</em>
</p>
`,
};
