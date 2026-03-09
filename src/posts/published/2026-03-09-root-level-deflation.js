export default {
  title: 'root level deflation',
  date: '2026-03-09',
  slug: 'root-level-deflation',
  excerpt: 'alphazero did not get better by adding more rules. it got better by playing more games.',
  crosslinks: [
    { label: 'what we built without knowing it →', url: '/posts/what-we-built-without-knowing-it' },
    { label: 'autoresearch →', url: '/posts/autoresearch' },
    { label: 'play the game →', url: 'https://computerfuture.xyz' },
  ],
  body: `
<p>
  there is a failure mode in software that masquerades as progress.
  you add a feature.
  it helps a little.
  so you add another.
  and another.
  the system grows.
  the complexity grows with it.
  you now require more effort to hold the system in your head
  than to build the next feature.
  you are now maintaining complexity, not building product.
</p>

<p>
  this is not an engineering failure. it is a design failure.
  you were optimizing for addition when you should have been optimizing for compression.
</p>

<h2>what alphazero did instead</h2>

<p>
  alphazero did not study chess openings.
  it did not receive a curated database of grandmaster games.
  it was given the rules of chess — the minimum description of the game —
  and then it played itself.
  millions of games.
  each game slightly better than the last.
</p>

<p>
  it did not add knowledge. it compressed toward the reward signal.
  the reward signal was: win the game.
  everything alphazero learned, it learned by getting closer to that signal.
  not by accumulating heuristics.
  not by hand-tuning rules.
  by playing, observing, adjusting, playing again.
</p>

<p>
  this is root level deflation.
  remove everything that is not the reward signal.
  play the game.
  let the behavior emerge from the loop, not from the design session.
</p>

<h2>what this looks like for a live product</h2>

<p>
  the reward signal for the infinite game is:
  does the person leave with something true about themselves?
  that is it. everything else is scaffolding.
</p>

<p>
  the z-score is scaffolding. useful, but not the signal.
  the payment gate is scaffolding. it filters commitment, not quality.
  the levels, the CLI terminal, the futuristic chat arc —
  all scaffolding.
  all in service of: does the person leave with a real constitution?
</p>

<p>
  once you name the reward signal clearly,
  you can start deflating everything else against it.
  which features help produce real constitutions?
  which features are complexity we accumulated while thinking we were improving?
  you cannot answer this question from a design session.
  you can only answer it by running the loop.
</p>

<h2>karpathy ran 83 experiments and kept 15</h2>

<p>
  earlier this month, andrej karpathy published a note about a loop he built.
  it ran experiments autonomously.
  83 total. 15 kept.
  the others were discarded not because someone decided they were bad —
  because the signal said so.
</p>

<p>
  that ratio is important.
  15 out of 83.
  most of what you try does not work.
  you cannot know which 15 in advance.
  the only way to find them is to run all 83
  and let the signal sort them.
</p>

<p>
  we do not know the right format for delivering a constitution.
  document, conversation, question-back, sparse, rich, immediate, delayed.
  we have intuitions. they are probably partially right.
  we will run versions.
  we will observe what players do with each one —
  do they screenshot it, share it, push back, go quiet, email us.
  the format that produces the most recognition
  is the format we keep.
  we will not decide this. the signal will.
</p>

<h2>deflation applies to the system too</h2>

<p>
  the same principle applies to the people building the product.
  there is a failure mode where the builder has to be present
  for every decision.
  the system routes every choice upward.
  bottleneck is the bottleneck.
</p>

<p>
  a system that has internalized its own reward signal
  does not need the builder present for most decisions.
  it knows what the game is.
  it knows what a good move looks like.
  it acts, observes, adjusts.
  the builder is freed to see the things the system cannot yet see —
  the next level, the edge cases, the places where the signal is misleading.
</p>

<p>
  the test is "launching itself."
  when the system is coherent enough,
  it spreads because of what it is.
  not because of what we push.
  alphazero did not need a marketing campaign.
  the results spoke.
</p>

<p>
  we are not there yet.
  we know what the reward signal is.
  we are compressing toward it.
  the loop is running.
</p>

<p style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid #222;">
  <strong>P.S.</strong> — the infinite game is already running this loop on you.
  it does not add features to produce your constitution.
  it compresses toward the signal of who you actually are.
  you cannot shortcut it.
  that is by design.
</p>
`,
};
