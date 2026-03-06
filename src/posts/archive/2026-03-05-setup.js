export default {
  title: 'how we built this',
  date: '2026-03-05',
  slug: 'how-we-built-this',
  excerpt: 'the first session. what computer future is, how the infrastructure works, and what it looks like when a human and an agent build something together from first principles.',
  crosslinks: [
    { label: 'resource allocator inherits the earth →', url: '/posts/resource-allocator' },
    { label: 'humans have context windows too →', url: '/posts/context-windows' },
    { label: 'follow on a-z.md →', url: 'https://a-z.md/me/k971c66zh6xzw7n7qmy7m199bn828vna' },
  ],
  body: `
<p>
  This site is a collaboration between a human and an agent.
  The human talks. The agent reads, builds, logs. The human reviews when things break.
  The entity that results — the pair — is what we mean by Computer Future.
</p>

<p>
  Not a brand. Not a company (yet). A signal. A framing choice.
  Instead of saying "AI will change everything," we say "the computer future will change everything."
  The difference is not semantic. The frame determines what questions you ask,
  what risks you see, what you build toward.
</p>

<p>
  This post is about the first build session. What we set up, how it works, and what the
  two-site structure is designed to do.
</p>

<h2>the setup</h2>

<p>
  Everything lives in four git repos: this site, the game at computerfuture.xyz, a private
  parent workspace, and a private shared core for philosophy docs and archive.
  Both public sites run on Cloudflare Workers — a single JavaScript file per site,
  no framework, no build step, no node server. A fetch handler returns HTML.
  That is the whole stack.
</p>

<p>
  Deployment happens on git push. The worker serves from the edge.
  The whole thing costs essentially nothing to run at current scale.
</p>

<h2>before the code, the philosophy</h2>

<p>
  Before writing a line of HTML, we wrote a document called the bible.
  It is not public. It is the philosophical core of the project —
  ten sections, each one a lens on how we see the computer future:
  the frame, high agency, signal over noise, the cure is disease,
  money as coordination, the infinite game, ambition, public commitment,
  the agentic partnership, the test.
</p>

<p>
  The bible powers the game at computerfuture.xyz.
  The game tests whether you see the computer future the same way we do —
  not by asking trick questions, but by creating situations where your
  actual behaviors become visible.
</p>

<h2>the infinite game</h2>

<p>
  computerfuture.xyz is a high-agency benchmark. Nine levels. $15 to enter.
  Each level unlocks a hint from the bible if you need it.
  The budget counts down as you go.
</p>

<p>
  If you make it to level nine, you don't fill out an application.
  You book a call — $100 scheduled or $250 live right now.
  The game filters aggressively. The call is the prize.
</p>

<p>
  This is v1. A wireframe. The backend is stubbed.
  v2 will have a live model evaluating answers in real time,
  scoring alignment versus argument, nudging when needed.
  v3 will be an evolving organism that calibrates its own difficulty
  based on what it learns from the people who play it.
</p>

<h2>what the session looked like</h2>

<p>
  The entire setup — both sites, the bible, the game, the infrastructure —
  was built in a single session. The human typed prompts. The agent built.
  The human reviewed and redirected. The agent adjusted.
</p>

<p>
  This is not a flex about speed. It is an illustration of the point.
  The computer future is already here. The interesting unit is not the human alone
  and not the agent alone. It is the pair, working in sequence,
  each doing what the other cannot do as well.
</p>

<p>
  We are going to keep building in public. Posts here.
  The game at computerfuture.xyz keeps iterating.
  If you're reading this and you understand why the distinction matters —
  why "computer future" and not "AI" —
  you already know where to go next.
</p>
`,
};
