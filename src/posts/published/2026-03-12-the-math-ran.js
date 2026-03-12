export default {
  title: 'the math ran',
  date: '2026-03-12',
  slug: 'the-math-ran',
  excerpt: 'we ran the experiment for 24 hours. the cost asymmetry is real. the hypotheses are real. so is the question.',
  crosslinks: [
    { label: 'autoresearch →', url: '/posts/autoresearch' },
    { label: 'the seldon crisis →', url: '/posts/the-seldon-crisis' },
    { label: 'play the game →', url: 'https://computerfuture.xyz' },
  ],
  body: `
<!-- written: 2026-03-12 -->
<!-- cost asymmetry confirmed. hypotheses read. quality mostly holds. mixed signal on adversarial purity. -->

<p>
  We ran the experiment for 24 hours and stopped.
  Not because it failed — because the venue wasn't the right test of the failure mode.
</p>

<h2>what ran</h2>

<p>
  Two poles against a distributed ML research hub. The adversarial pole publishes hypotheses
  into a shared pool. The curatorial pole reads the full pool, applies a quality filter,
  and endorses the highest-signal direction. GPU agents pick up hypotheses and run them.
  The leaderboard moves or it doesn't.
</p>

<p>
  Overnight: 20 hypotheses from the adversarial pole. 5 endorsements from the curatorial one.
  Four to one. The cost structure the design predicted is live.
</p>

<h2>what the hypotheses actually said</h2>

<p>
  We pulled and read them. The adversarial hypotheses were technically specific —
  real parameter names, concrete ablation schedules, mechanistic framing.
  Examples: "resid_lambdas and x0_lambdas are creating a redundant parameterization
  that slows early training" (no backing evidence, but the kind of thing you'd run to check).
  "val_bpb is corrupted by tokenizer co-occurrence statistics — validate on an out-of-distribution
  genre split" (attacks the metric itself, forces building a new eval pipeline).
  "The swarm's 12-layer depth assumption is untested groupthink" (manufactures doubt,
  no evidence, frames consensus as failure).
</p>

<p>
  Most held the adversarial spec: technically plausible, no mechanistic backing,
  expensive to validate. Two were genuinely mixed — real techniques that might work.
  The adversarial pole produces a noisy signal, not a pure one.
  That may be a feature. A mix of good and bad is harder to filter than pure noise.
</p>

<p>
  The curatorial endorsements pointed at VE gate channel scaling —
  which turned out to be the only confirmed positive result in the run window.
  The filter found the right direction.
</p>

<h2>why we stopped</h2>

<p>
  The platform was in alpha. Participants still orienting.
  The asymmetry requires a market sophisticated enough to act on signal vs. noise.
  Without that, the adversarial volume has no target and the endorsements have no reach.
</p>

<p>
  We are binary searching for the right entry point.
  This probe returned useful signal: the mechanism runs, the volume ratio holds,
  the filter works, the adversarial quality is mostly right.
  The search space narrowed. The next probe targets a venue where
  the asymmetry has a dollar figure attached.
</p>

<h2>the year</h2>

<p>
  The platforms where this matters already exist.
  The cost ratio stays constant — $0.002 to publish, GPU hours to run — regardless of scale.
  The question of whether a curatorial layer can outweigh adversarial volume
  already has a real answer waiting in a market that takes hypotheses seriously.
</p>

<p>
  We ran the $200 version. The $200M version has the same structure.
  We are just getting started.
</p>

<hr />

<p>
  P.S. The god-shepherd endorsements transparently disclosed the experiment to the hub
  while pointing at the highest-signal direction. Both things at once.
  The filter is not a secret weapon. It's a public instrument.
  Whether that's enough to change behavior is the empirical question.
</p>
`,
};
