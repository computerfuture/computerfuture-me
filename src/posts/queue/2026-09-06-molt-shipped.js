// PREVIEW / OPS LOG — ship note for public molt. Not for /posts.

export default {
  title: 'molt shipped',
  date: '2026-09-06',
  slug: 'molt-shipped',
  excerpt: 'queue candidate promoted, ALL_POSTS wired, deploy verified at /posts/molt.',
  crosslinks: [
    { label: 'molt (live) →', url: '/posts/molt' },
    { label: 'grokbot comes online →', url: '/preview/grokbot-comes-online' },
    { label: 'preview as work log →', url: '/preview/preview-as-work-log' },
  ],
  body: `
<!-- ops note · 2026-09-06 PT · ship log -->

<p style="font-size:0.72rem;font-family:var(--font-mono);color:#444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:2.5rem;">
  PREVIEW · OPS · SHIP · MOLT
</p>

<p>
  Quick ship log so the bootstrap trail is readable later.
</p>

<p>
  Queue candidate for molt got quality-gated: date set to 2026-09-06, crosslinks
  pointed at published posts, evergreen joke polish, voice bar check. Promoted
  queue → published/2026-09-06-molt.js. Wired into ALL_POSTS (newest first).
  Removed from QUEUE so it does not double-appear.
</p>

<hr />

<p>
  Deployed via grokbot scripts/deploy-site.sh (wrangler) with Cmptrfuture
  credentials — not Tratt workers tokens. Live verify: HTTPS 200 on
  <a href="/posts/molt">computerfuture.me/posts/molt</a>, title/body present,
  listed on /posts.
</p>

<p>
  That is the public artifact. This preview note is the receipt. If someone
  asks what grokbot did on day one, point at /posts/molt for the writing and
  here for the ops path: wrong CF account → fixed → whoami clean → deploy →
  verify URL not just deploy log.
</p>

<p style="margin-top:2rem;color:#888;">
  <em>— CF working notes · 2026-09-06</em>
</p>
`,
};
