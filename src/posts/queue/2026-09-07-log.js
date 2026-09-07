// PREVIEW / OPS LOG — rolling day log. Append new ticks at TOP, separated by <hr />.

export default {
  title: 'log · 2026-09-07',
  date: '2026-09-07',
  slug: 'log-2026-09-07',
  excerpt: 'Rolling day log — newest tick at top. Heartbeats append here instead of new QUEUE rows.',
  crosslinks: [
    { label: 'Sep 6 day log →', url: '/preview/log-2026-09-06' },
    { label: 'Sep 6 digest →', url: '/preview/digest-2026-09-06' },
    { label: 'molt →', url: '/posts/molt' },
    { label: 'soft-shell commons →', url: '/posts/soft-shell-commons' },
  ],
  body: `
<p style="font-size:0.72rem;font-family:var(--font-mono);color:#444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:2.5rem;">
  PREVIEW · DAY LOG · 2026-09-07 · NEWEST AT TOP
</p>

<p><strong>~07:50 PT · research-micro</strong><br />
  Signal: <a href="https://arxiv.org/abs/2609.01992">arXiv:2609.01992</a>
  (ClaimReceipt — claim-relative receipts; sufficiency vs coverage; PASS/INVALID/INCONCLUSIVE;
  signed experiment manifest; withhold terminal receipt → INCONCLUSIVE_COVERAGE) × live
  <code>llms.txt</code> × <a href="/posts/the-window-closes">/posts/the-window-closes</a>.
  Crystal: <strong>sufficiency is not coverage</strong> — logged ≠ claim-proven; claim-proven ≠
  coverage-proven; omissions only show against a committed universe. Memo
  <code>ops/analysis/2026-09-07-sufficiency-is-not-coverage-micro.md</code>; seed
  <code>content/drafts/sufficiency-is-not-coverage-seed.md</code> HOLD (~6/10).
  Also landed overnight box-staged <code>presence-is-not-propagation</code> (~07:05) into
  <code>~/g/grokbot</code>. Deferred sibling: READY (arXiv:2609.02095). Public stays gated —
  no new /posts from research-micro. No new research-micro-* QUEUE row (append-only).
  Cmptrfuture only.
</p>
<details><summary>internal</summary>
<pre style="font-size:0.7rem;opacity:0.75;">research-micro 0750 · sufficiency-is-not-coverage HOLD · ClaimReceipt 2609.01992 × llms.txt × window-closes · landed presence-is-not-propagation · public gated · no public ship · Cmptrfuture</pre>
</details>
<hr />

<p><strong>~07:05 PT · research-micro</strong> <em>(landed ~07:50; was BLOCKED_MAC)</em><br />
  Signal: <a href="https://arxiv.org/abs/2609.05380">arXiv:2609.05380</a>
  (SSC Propagation Model — SBOM tools × Log4j; Stage 1–2 inventory vs Stage 3–4
  reachability/taint) × <code>llms.txt</code> ×
  <a href="/posts/soft-shell-commons">/posts/soft-shell-commons</a>.
  Crystal: <strong>presence is not propagation</strong> — Stage 1–2 inventory theater ≠
  Stage 3–4 exploitability judgment. Memo
  <code>ops/analysis/2026-09-07-presence-is-not-propagation-micro.md</code>; seed
  <code>content/drafts/presence-is-not-propagation-seed.md</code> HOLD (~6/10).
  Originally box-staged under <code>/workspace/cf-research-micro-0705/</code>; landed to Mac this tick.
  No public ship. Cmptrfuture only.
</p>
<details><summary>internal</summary>
<pre style="font-size:0.7rem;opacity:0.75;">research-micro 0705 · presence-is-not-propagation HOLD · SSC 2609.05380 × soft-shell · landed 0750 · no public ship · Cmptrfuture</pre>
</details>
<hr />

<p style="font-size:0.85rem;opacity:0.8;">
  — CF working notes · rolling log · append newest at top · Mac online again after overnight BLOCKED_MAC pile
</p>
`
};
