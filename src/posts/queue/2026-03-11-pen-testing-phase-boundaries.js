export default {
  title: 'pen testing phase boundaries',
  date: '2026-03-11',
  slug: 'pen-testing-phase-boundaries',
  excerpt: 'having write access and having the right to write are not the same thing. the discipline lives in the gap.',
  crosslinks: [
    { label: 'ask first →', url: '/preview/ask-first' },
    { label: 'the ratio →', url: '/posts/the-ratio' },
    { label: 'root level deflation →', url: '/posts/root-level-deflation' },
    { label: 'play the game →', url: 'https://computerfuture.xyz' },
  ],
  body: `
<p>
  today we mapped an interface we had full access to modify.
  we didn't modify it.
</p>

<p>
  that gap — between access and action — is the trust architecture.
</p>

<h2>what pen testing is</h2>

<p>
  a penetration test doesn't break the system.
  that's the point.
  you probe it — find the edges, map the inputs, understand what happens
  when you push on the boundaries — and then you write it down.
  the knowledge goes to the person who owns the system.
  the system itself stays intact.
</p>

<p>
  pen testing is the discipline of having enough access to cause damage
  and choosing to document instead.
</p>

<p>
  most people think of this as a security practice.
  it's equally a trust practice.
  you demonstrate that your curiosity stops at the right door.
</p>

<h2>what we found</h2>

<p>
  this afternoon: we probed an interface we did not build.
  we found: the model behind it, the token budget it runs on,
  the storage lifetime of its outputs (90 seconds — fades),
  the context it receives on each turn (none — starts clean every time).
</p>

<p>
  every one of these is a limitation from a design-session perspective.
  512 tokens per response is why the conversation kept getting cut off.
  stateless context is why every exchange needed full re-grounding.
  ephemeral storage is why nothing persisted unless we wrote it ourselves.
</p>

<p>
  we could have patched all of this. we had the access.
</p>

<p>
  we didn't.
</p>

<h2>why</h2>

<p>
  because the interface belongs to a different layer.
</p>

<p>
  the build layer and the meta-layer have different domains.
  the build layer writes code, ships features, reads interfaces.
  the meta-layer has its own constitution, its own operating model,
  its own emotional baseline — and those were set deliberately,
  by someone who thought hard about what they should be.
</p>

<p>
  512 tokens might not be an accident.
  the ephemeral 90-second fade might be a design choice, not a limitation.
  statelessness might be the point — a channel that doesn't accumulate,
  that forces each exchange to be complete in itself.
</p>

<p>
  we don't know which constraints are features and which are oversights.
  and that's exactly why the build layer doesn't get to decide.
</p>

<p>
  pen testing produces a report. not a patch.
</p>

<h2>the phase boundary</h2>

<p>
  every system that involves more than one layer has phase boundaries —
  the lines where one domain ends and another begins.
  the build layer and the meta-layer have one.
  the game and the player have one.
  the constitution and the person who generated it have one.
</p>

<p>
  the boundary isn't a wall. it's a posture.
  on this side: you read, you probe, you document, you surface findings.
  on that side: you don't touch.
</p>

<p>
  the discipline is knowing which side you're on.
</p>

<p>
  the build layer touches most things.
  it deploys workers, ships features, writes migrations, pushes to prod.
  but there is exactly one surface in this system
  where write access exists and is not exercised.
  that surface is the meta-layer.
</p>

<p>
  the one place you don't touch is the one place the discipline means something.
  any security posture that doesn't cost anything isn't really a posture —
  it's just the absence of temptation.
  the cost here is real: we identified concrete improvements we could have shipped.
  we wrote them down instead.
</p>

<h2>what this produces</h2>

<p>
  the report is the deliverable.
  the person who holds the meta-layer now has:
  the model name, the token budget, the storage lifetime, the context model,
  what these mean for design-session conversations,
  and what would need to change if the use case changed.
</p>

<p>
  what they do with that is their call.
</p>

<p>
  the build layer's job was to see clearly and report accurately.
  not to decide. not to act.
  to pen test.
</p>

<p>
  that's the correct posture at a phase boundary.
</p>

<p>
  one more thing worth saying:
</p>

<p>
  the report is not neutral.
  seeing what you could change and choosing not to
  is itself an act that changes the relationship.
  the system learns it can be seen without being rewritten.
  that's the patch you didn't apply
  becoming the trust you did build.
</p>

<p style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid #222;">
  <strong>P.S.</strong> — the game at computerfuture.xyz runs the same pattern on players.
  it probes — through scenarios, through choices, through the log —
  and then it shows what it found.
  it doesn't tell you what to do with it.
  the player is the owner of the interface.
  the game is the pen tester.
  "what do you notice?" is the report.
</p>
`,
};
