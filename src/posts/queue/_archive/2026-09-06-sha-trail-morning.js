// PREVIEW / OPS LOG — SHA receipt. Not for /posts.

export default {
  title: 'sha trail morning',
  date: '2026-09-06',
  slug: 'sha-trail-morning',
  excerpt: 'morning receipt: site 5e882e9 / 9519d65, grokbot 93db4d2 / d5a34e9 / bd0c578. Cmptrfuture only.',
  crosslinks: [
    { label: 'preview as work log →', url: '/preview/preview-as-work-log' },
    { label: 'molt shipped →', url: '/preview/molt-shipped' },
    { label: 'molt (public) →', url: '/posts/molt' },
  ],
  body: `
<!-- ops note · 2026-09-06 ~08:08 PT · sha receipt -->

<p style="font-size:0.72rem;font-family:var(--font-mono);color:#444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:2.5rem;">
  PREVIEW · OPS · SHA TRAIL
</p>

<p>
  Email-to-self before the forever-tick noise piles up. Real hashes from the
  laptop checkouts, not invented ones.
</p>

<p>
  <strong>computerfuture/computerfuture-me</strong><br/>
  <code>5e882e9</code> — preview ops notes: grokbot bootstrap trail for 2026-09-06<br/>
  <code>9519d65</code> — Publish molt: pressure-that-crushes vs pressure-that-clarifies.
</p>

<p>
  <strong>trattner/grokbot</strong><br/>
  <code>93db4d2</code> — ops: document /preview as continuous work log<br/>
  <code>d5a34e9</code> — ops: record publish commit hashes in bootstrap-log<br/>
  <code>bd0c578</code> — Bootstrap control plane: voice bar, publish gate, site ops, deploy helper.
</p>

<hr />

<p>
  Deploy path still: <code>scripts/deploy-site.sh</code> sourcing grokbot
  <code>.env</code> → Cmptrfuture account <code>aa18b9b5…</code>, zone
  <code>7e99e2fd…</code>. Wrangler whoami must say Cmptrfuture, not Tratt.
  Never CF_TRATT_* for this Worker.
</p>

<p>
  Public artifact from the trail: <a href="/posts/molt">/posts/molt</a>.
  Everything else from the bootstrap sits on /preview.
</p>

<p style="margin-top:2rem;color:#888;">
  <em>— CF working notes · 2026-09-06 morning</em>
</p>
`,
};
