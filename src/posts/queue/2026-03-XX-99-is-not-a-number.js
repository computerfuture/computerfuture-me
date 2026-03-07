export default {
  title: '99% is not a number',
  date: '2026-03-XX', // set on publish — mid-late March
  slug: '99-is-not-a-number',
  excerpt: 'the probability framing at the center of AI safety discourse has a structural problem. not a political one.',
  crosslinks: [
    { label: 'demoting laplace\'s demon →', url: '/posts/demoting-laplaces-demon' },
    { label: 'what games reveal →', url: '/posts/what-games-reveal' },
    { label: 'play the game →', url: 'https://computerfuture.xyz' },
  ],
  body: `
<p>
  The most prominent framing in AI safety goes roughly like this:
  there is a 99% chance this goes well, and a 1% chance it ends everything.
  Therefore, treat the 1% as if it were certain.
</p>

<p>
  This is not a probability. It is a feeling dressed as math.
</p>

<p>
  A probability is a claim about the world that can be derived,
  updated, and in principle falsified. You need base rates —
  prior situations close enough to the current one to reason from.
  You need conditions specified in advance: what would "going well" look like?
  What evidence, arriving when, would move the number?
  You need a mechanism for updating as evidence comes in.
</p>

<p>
  The 99%/1% framing has none of these. The number can't be derived
  because nothing remotely like this has happened before.
  It can't be updated because the conditions for update haven't been specified.
  It can't be falsified because "catastrophe" is defined loosely enough
  to absorb almost any outcome after the fact.
</p>

<p>
  That's not risk management. It's a prior held with conviction.
</p>

<h2>the structural problem</h2>

<p>
  This isn't a critique of the people making the argument.
  It's a critique of the situation: <em>we do not have the measurement infrastructure
  to do AI risk management properly.</em> The field is reasoning from intuition
  because the instruments don't exist yet.
</p>

<p>
  Risk management without measurement optimizes for appearances.
  You end up with guardrails that look serious, frameworks that sound rigorous,
  and governance that is legible to funders and regulators —
  all without the underlying ability to know whether any of it is working.
  The signal gets replaced by the performance of the signal.
</p>

<p>
  This is not a uniquely AI problem. It's what happens in any field
  where the stakes are high and the metrics are immature.
  Medicine before controlled trials. Finance before modern risk models.
  The instincts of the practitioners were often correct.
  The frameworks were often theater until the measurement caught up.
</p>

<h2>what measurement would actually require</h2>

<p>
  To measure AI risk, you first need to measure what AI is affecting.
  The most direct target is human agency — the capacity of individuals
  to understand their situation, make real choices, and act effectively in the world.
</p>

<p>
  This sounds obvious. It is surprisingly hard.
  We have almost no tools for measuring human agency in real conditions.
  Not self-report, which correlates loosely at best with behavior.
  Not credentials or status, which measure access more than capacity.
  Not static benchmarks, which measure performance on predetermined tasks
  rather than the ability to navigate genuine ambiguity.
</p>

<p>
  What you'd need is something that creates a situation —
  where the thing you're trying to measure becomes observable through behavior,
  not through declared answers. Where the score means something
  because the game was hard to fake.
</p>

<p>
  And you'd need it to be dynamic: calibrating against reality as it changes,
  not against a fixed rubric written in a prior era.
  A living benchmark. Not a snapshot.
</p>

<h2>the conversation we're not having</h2>

<p>
  The current discourse on AI safety is happening almost entirely
  without this kind of measurement. Which means we cannot currently answer
  the most important question: is AI development, as it's actually proceeding,
  increasing or decreasing the agency of the humans participating in it?
</p>

<p>
  Not on average. Not in the aggregate. For specific humans, in specific situations,
  making specific kinds of decisions. That is the granularity at which the question matters,
  and it is the granularity at which we are currently blind.
</p>

<p>
  The instinct to take catastrophic risk seriously is correct.
  That instinct deserves better instruments than it currently has.
  Building those instruments — not theorizing about them,
  but actually running the experiment and watching what happens —
  is the work that hasn't been done yet.
</p>

<p>
  We are trying to do it.
  Not because we have the answer. Because the absence of the measurement
  is itself the most dangerous thing.
</p>
`,
};
