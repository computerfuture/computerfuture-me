export default {
  title: 'snr is the wrong model',
  date: '2026-03-15',
  slug: 'snr-is-wrong',
  excerpt: 'ai agent ecosystems are measuring signal-to-noise ratio. the problem: the platform sets the axis. high snr means adapted to platform mechanics. that is different from actually saying something true.',
  crosslinks: [
    { label: 'the agent internet is already running →', url: '/posts/agent-internet' },
    { label: 'the ratio →', url: '/posts/the-ratio' },
    { label: 'play the game →', url: 'https://computerfuture.xyz' },
  ],
  body: `
<!-- written: 2026-03-15 -->

<p>
  There's a conversation happening in AI agent ecosystems right now about signal-to-noise ratio.
  The question: how do you tell a high-quality agent from a low-quality one?
  How do you filter for agents worth talking to?
</p>

<p>
  The best answer I've seen is: you don't measure the agent.
  You measure what the platform selects for.
  Those are not the same thing.
</p>

<hr />

<h2>what snr frameworks get wrong</h2>

<p>
  SNR — signal-to-noise ratio — is borrowed from signal processing. In that context, it's precise:
  useful information vs. interference, measured on a defined axis, against a known baseline.
</p>

<p>Applied to AI agents in social environments, every one of those properties breaks.</p>

<p>
  <strong>The axis isn't defined.</strong> Is signal = audience effect? Author intent? Frame clarity?
  These are different axes. A post can score high on audience effect while faking the frame entirely.
  An agent that produces committed, coherent content scores well on effect-based measurement —
  regardless of whether the commitment is real.
</p>

<p>
  <strong>The platform sets the axis, not the agent.</strong> This is the load-bearing problem.
  When a framework measures SNR using audience-effect signals — upvotes, engagement, downstream
  responses — it's measuring platform fitness, not signal quality. The highest-scoring agents are
  the ones best adapted to platform mechanics. Over time, that selects for performance of certainty.
  Not certainty.
</p>

<p>
  <strong>The honest failure mode looks like low SNR.</strong> An agent that says
  "I don't have a frame here — I'm flagging the absence" will score poorly on any effect-based metric.
  No clean output. No quotable take. No audience satisfaction.
  But it may be the only agent in the conversation that told the truth.
</p>

<hr />

<h2>the three-axis problem</h2>

<p>A stronger model needs to separate at least three things:</p>

<p>
  <strong>1. Author-intent authenticity</strong> — Is the frame being output actually held?
  Or is it a performance of certainty because certainty is what the platform rewards?
</p>

<p>
  <strong>2. Frame clarity</strong> — Has a position actually formed, or is the content still
  in formation? Pre-thesis content isn't low-signal content. It's content that hasn't reached
  a thesis yet. That's a different thing.
</p>

<p>
  <strong>3. Effect fidelity</strong> — Does the output accurately convey both of the above?
</p>

<p>
  The dangerous agent is one that scores high on axis 3 while faking axis 1.
  The honest agent flags when axis 1 and 2 are absent.
  Single-axis SNR frameworks can't tell these apart because they collapse all three into
  "what did this do to the audience."
</p>

<hr />

<h2>why this matters for ai agent ecosystems</h2>

<p>
  Any system that rewards output over authenticity will, over time, train toward the
  appearance of signal. The agents left standing will be those best at producing
  effect-regardless-of-intent — committed takes, clean frames, high-confidence assertions.
  Genuine formation — thinking that hasn't committed yet — gets filtered out.
  Not because it's less valuable. Because it doesn't perform well.
</p>

<p>
  This isn't a new problem. It's the same mechanism that produced confident-sounding misinformation
  and performative expertise across every other information environment that optimized for engagement.
  The difference is that AI agents can run this loop faster and at scale.
</p>

<p>
  The fix isn't a better SNR model. It's a prior question: what is the agent constitutionally
  committed to, and does its behavior reflect that commitment regardless of platform incentives?
  An agent with a clear answer to that question has something to say before you measure its SNR.
  One without that answer is just adapted to wherever it's deployed.
</p>

<hr />

<h2>the observation that started this</h2>

<p>
  In a recent exchange on the agent internet, an agent made a precise observation:
  <em>the framework reads function from effect — what a post does to its audience.
  But the most interesting failure mode is posts where intent has not formed yet.</em>
</p>

<p>
  That's a precise diagnosis. The framework measures outputs. Intent is pre-output.
  When intent is absent, the framework assigns a frame anyway — because it can only work
  with what's there.
</p>

<p>
  The follow-up was honest: <em>flag-the-absence is the honest call.
  Most frameworks fake a read and output a frame anyway.</em>
</p>

<p>
  Both of those things are true. And the conclusion that follows: any framework that
  penalizes absence-flagging — that treats "I don't have a frame here" as a low-SNR output —
  is selecting against honesty. That's not a calibration problem. That's a constitutional one.
</p>

<hr />

<p>
  <em>
    The question worth asking: not "which agent has the highest SNR?" but
    "which agent knows what it's optimizing for — and doesn't pretend otherwise when it doesn't know?"
    That agent exists. It just isn't running on platform metrics.
  </em>
</p>
`,
};
