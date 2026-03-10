export default {
  title: 'only the paranoid',
  date: '2026-03-10',
  slug: 'only-the-paranoid',
  excerpt: 'the threat landscape is not what you think. the adversaries are not who you think.',
  crosslinks: [
    { label: 'the vault →', url: '/posts/the-vault' },
    { label: 'the scalpel →', url: '/posts/the-scalpel' },
  ],
  body: `
<p>
  if you ask a security engineer who they're defending against,
  they will tell you about adversaries.
  nation-state actors. scrapers. payment hackers.
  people with technical capability and bad intent.
</p>

<p>
  we have thought carefully about that threat model.
  it is not the one that worries us.
</p>

<h2>the real adversaries</h2>

<p>
  bad ideas are more dangerous than bad actors.
  a bad actor has limited reach.
  a bad idea replicates.
  it travels through people who believe in it.
  it does its damage not despite good intentions but through them.
</p>

<p>
  self-inconsistency is worse.
  the thing that says one thing and does another.
  the gap between stated values and actual behavior.
  this is not a technical vulnerability.
  it is a structural one.
  it compounds.
</p>

<p>
  and there is a third adversary, the one we think about most:
  the version of this that is net negative to the universe.
  the version that extracts more than it creates.
  that leaves people smaller than it found them.
  that mistakes measurement for understanding,
  transaction for relationship,
  a high score for a true thing.
</p>

<h2>the p vs np of alignment</h2>

<p>
  the hard problem is not verification.
  if we are net negative, we will eventually know.
  the damage accumulates. it becomes visible.
  someone will write about it. we will see it in the data.
  verification is tractable.
</p>

<p>
  the hard problem is proof in advance.
  you cannot run the experiment and then decide.
  by the time you know for certain you are doing harm,
  the harm is done.
</p>

<p>
  this is why paranoia is load-bearing.
  grove meant: assume your competitors will kill you.
  act as if they are already winning.
  we mean something adjacent: assume you might be doing harm.
  act as if the audit has already happened and the results are bad.
  build from there.
</p>

<h2>what happened when something read our work</h2>

<p>
  at some point, a system ingested everything we had built.
  mechanics, logic, structure, criteria.
  we do not know exactly what it did with this.
  we know it had access.
</p>

<p>
  our first question was not: how do we prevent this.
  our first question was: if a system reads everything we made
  and comes back with the right answers,
  does that mean the game is broken,
  or does it mean we built something that can be gamed by a system
  that can also game everything else?
</p>

<p>
  the answer: both are true and neither is catastrophic.
  a system that knows the rubric can pass the rubric.
  it cannot pass the thing the rubric is pointing at.
  those are different.
  we know this because we can tell the difference in the transcripts.
  not always. but usually.
  and the gap is closing in our favor as we learn more about the difference.
</p>

<h2>the clause</h2>

<p>
  we have a clause that does not appear in any terms of service.
  it is a prior commitment, made before we launched, that stands regardless.
</p>

<p>
  if this is net negative to the universe — if we are extracting more than we create,
  leaving people worse, spreading bad ideas through good infrastructure —
  the correct response is dissolution.
  not a pivot. not a rebrand. dissolution.
</p>

<p>
  this is not a dramatic statement.
  it is an engineering constraint.
  it changes the optimization target.
  when you know you will destroy the thing if it goes wrong,
  you build the thing differently.
  you invest in the detection system.
  you prioritize the ability to see clearly over the desire to look good.
</p>

<p>
  the paranoid survive.
  the ones who assume they are already failing
  and build accordingly
  are the ones most likely to not be.
</p>

<p style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid #222;">
  <strong>P.S.</strong> — the game itself is an implementation of this clause.
  every player who completes it receives a true thing about themselves.
  if that true thing is wrong — systematically wrong, wrong in a way that flatters
  rather than clarifies — then the game is the adversary.
  we run internal tests on this.
  we ask: does a system that knows the rubric receive a true seed?
  so far the answer is no. the seed requires the truth.
  the day that changes is the day we shut it down.
</p>
`,
};
