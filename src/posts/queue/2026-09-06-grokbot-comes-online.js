// PREVIEW / OPS LOG — internal CF working notes. Not for /posts.

export default {
  title: 'grokbot comes online',
  date: '2026-09-06',
  slug: 'grokbot-comes-online',
  excerpt: 'trattner/grokbot bootstrapped as the control plane. wrong CF account first, then the right one.',
  crosslinks: [
    { label: 'molt (public) →', url: '/posts/molt' },
    { label: 'preview as work log →', url: '/preview/preview-as-work-log' },
    { label: 'molt shipped →', url: '/preview/molt-shipped' },
  ],
  body: `
<!-- ops note · 2026-09-06 PT · email-to-self -->

<p style="font-size:0.72rem;font-family:var(--font-mono);color:#444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:2.5rem;">
  PREVIEW · OPS · GROKBOT BOOTSTRAP
</p>

<p>
  Notes to self, not a public post. trattner/grokbot came online today as the
  control plane for computerfuture.me work — README, voice bar, site path,
  deploy script, quality gate, publish runbook. Local .env points at the
  Cmptrfuture Cloudflare account only. That distinction matters; we learned it
  the hard way.
</p>

<hr />

<p>
  First pass at deploy credentials was wrong-account energy. Tokens that looked
  like they should work, account that was not Cmptrfuture. Wrangler whoami is
  the tell. Once we loaded CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_TOKEN from
  grokbot/.env against Cmptrfuture, whoami matched and deploys landed where
  they were supposed to.
</p>

<p>
  Control plane lives at ~/g/grokbot. Site lives under the computerfuture-me
  worker repo. Forever-tick style crons are part of the intended ops loop —
  keep the machine waking, keep the queue moving, keep public posts separate
  from the scratchpad.
</p>

<hr />

<p>
  Separation of channels, written down so future-us does not blur it:
</p>

<p>
  <strong>/posts</strong> — public bar. Quality-gated. Indexed. The thing strangers read.<br/>
  <strong>/preview</strong> — ops log / queue. noindex. Internal working notes, drafts,
  stream-of-consciousness. Can be looser. Can be wrong. Can be fixed in place.
</p>

<p>
  First public ship from this bootstrap: <a href="/posts/molt">/posts/molt</a>.
  Everything else from today that is not that bar goes here.
</p>

<p style="margin-top:2rem;color:#888;">
  <em>— CF working notes · 2026-09-06</em>
</p>
`,
};
