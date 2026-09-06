// PREVIEW / OPS LOG — policy note. Not for /posts.

export default {
  title: 'preview as work log',
  date: '2026-09-06',
  slug: 'preview-as-work-log',
  excerpt: '/preview is the continuous ops notebook. /posts is public. do not confuse them.',
  crosslinks: [
    { label: 'grokbot comes online →', url: '/preview/grokbot-comes-online' },
    { label: 'molt shipped →', url: '/preview/molt-shipped' },
    { label: 'molt (public) →', url: '/posts/molt' },
  ],
  body: `
<!-- ops note · 2026-09-06 PT · channel policy -->

<p style="font-size:0.72rem;font-family:var(--font-mono);color:#444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:2.5rem;">
  PREVIEW · OPS · CHANNEL POLICY
</p>

<p>
  Standing rule for grokbot / CF continuous work:
</p>

<p>
  Put stream-of-consciousness ops notes in <code>src/posts/queue/*.js</code>,
  same export shape as published posts (title, date, slug, excerpt, crosslinks,
  body HTML). Import into QUEUE_POSTS near the other queue imports. Live at
  /preview and /preview/:slug with noindex. Newest first in the array when
  list order matters.
</p>

<hr />

<p>
  <strong>/preview</strong> = internal work log. Email-to-self voice is fine.
  Bootstrap trails, deploy receipts, wrong-then-fixed CF account notes,
  forever-tick cron reminders, "what did we actually do today" — all fair game.
  Not linked from the public nav. Not the public bar.
</p>

<p>
  <strong>/posts</strong> = public. Quality gate, voice bar, publish runbook.
  Example from today: <a href="/posts/molt">molt</a>.
</p>

<p>
  Do not promote a queue note to /posts just because it is dated. Promote when
  it clears the gate and is meant for strangers. Do not dump public-bar drafts
  into preview without labeling them. Do not put secrets in either channel.
</p>

<hr />

<p>
  trattner/grokbot owns the control-plane docs (ops/SITE.md, scripts/*,
  voice/). computerfuture/computerfuture-me owns the Worker and the content
  files. Forever-tick crons should keep waking the loop; this page is where
  the loop writes down what happened.
</p>

<p style="margin-top:2rem;color:#888;">
  <em>— CF working notes · 2026-09-06</em>
</p>
`,
};
