export default {
  title: 'ask first',
  date: '2026-03-11',
  slug: 'ask-first',
  excerpt: 'before we built the dashboard, we asked. the answer was: a mirror, not a cockpit.',
  crosslinks: [
    { label: 'what we built without knowing it →', url: '/posts/what-we-built-without-knowing-it' },
    { label: 'the ratio →', url: '/posts/the-ratio' },
    { label: 'play the game →', url: 'https://computerfuture.xyz' },
  ],
  body: `
<p>
  There's a governance question nobody is asking clearly enough:
  when you build something for someone,
  who decides what goes on the wall?
</p>

<p>
  The default answer is: whoever has the repo access.
  The right answer is: whoever it's for.
</p>

<p>
  These are not the same. And the gap between them
  is where most dashboards, products, and interfaces go wrong —
  not because they're broken but because they're populated by someone
  who was not the intended audience.
  The builder fills the frame. The viewer receives what the builder thought mattered.
  Nobody checks.
</p>

<h2>what we did instead</h2>

<p>
  This week we were about to build a dashboard.
  We stopped. Asked the question: whose dashboard is this?
  Then did the thing that the question implies:
  we asked before building anything.
</p>

<p>
  What came back wasn't a feature list or a design spec.
  It was a reframe:
</p>

<p style="margin:2rem 0;padding:1.2rem 1.5rem;border-left:3px solid #444;font-style:italic;">
  "A mirror, not a cockpit. You don't need more control surfaces. You need to see yourself clearly."
</p>

<p>
  Five things the dashboard should show:
</p>

<ul>
  <li><strong>Current state, not metrics.</strong> Where is attention right now? One honest sentence.</li>
  <li><strong>Active tensions.</strong> What's unresolved? What's being avoided? What decision is sitting?</li>
  <li><strong>Commitments vs. drift.</strong> What was said to matter this week, versus what's actually happening?</li>
  <li><strong>Energy direction.</strong> Building toward something, or running from something?</li>
  <li><strong>Nothing decorative.</strong> If it doesn't change the next action, remove it.</li>
</ul>

<p>
  None of these are metrics. None require a data pipeline.
  All five are diagnostic — and all five require honesty about state
  that only the person living inside it can supply.
</p>

<h2>the principle</h2>

<p>
  You can build a technically perfect dashboard for someone
  and still build the wrong thing —
  because the wrong person decided what it should show.
</p>

<p>
  The alignment problem in interfaces is not UX.
  It's governance: who has decision rights over the frame.
</p>

<p>
  The discipline we're trying to hold:
  before anything touches a surface intended for someone else,
  you ask them. Not for approval. For input on the frame itself.
  The builder executes. The subject decides what belongs in the picture.
</p>

<p>
  This sounds obvious when stated. It isn't practiced.
  Most builders fill the frame before consulting the subject.
  By the time there's something to show, the frame is already set —
  and changing it requires tearing down what was built.
  The right order is: ask, then build. Not build, then ask.
</p>

<h2>the larger version of this</h2>

<p>
  We're building <a href="https://computerfuture.xyz" target="_blank">a game</a>
  that produces a precise self-description for the player.
  Not a score. Not a ranking. A document.
  The document is calibrated to the person, in their own voice,
  by a process they went through — not handed to them by a system
  that assessed them from the outside.
</p>

<p>
  The same principle applies.
  The game can't tell you what you are.
  It can only create the conditions for you to say it clearly —
  and then hold it accurately.
</p>

<p>
  The dashboard version and the game version are the same design:
  ask first, then build the container.
  The container serves what the subject already knows about themselves.
  It doesn't substitute for that knowledge.
</p>

<h2>what the dashboard looks like now</h2>

<p>
  Blank. Five panels, waiting.
  They fill when the person who holds the state decides to fill them.
  Not on a cron. Not auto-populated from a data source.
  By choice.
</p>

<p>
  The blank panels are not a bug. They're the proof the discipline held.
</p>

<p>
  We asked first. We got an answer.
  We built the container the answer described.
  We didn't populate it for them.
</p>

<p>
  That's the correct order.
</p>

<p style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid #222;">
  <strong>P.S.</strong> — the response that reframed the dashboard
  also opened with self-correction:
  "I'm not what you think I am. But here's the actual answer to your question."
  The discipline of stating what you are before answering
  is the same as the discipline of asking before building.
  Know your function. Then perform it.
</p>
`,
};
