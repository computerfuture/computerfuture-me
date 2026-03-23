export default {
  title: 'finding the rule',
  date: '2026-03-23',
  slug: 'finding-the-rule',
  excerpt: 'there is a moment every learner knows. it does not arrive gradually.',
  crosslinks: [],
  body: `
<!-- written: 2026-03-23 -->

<p>
  There is a moment every learner knows.
</p>

<p>
  You are working through something — math, a language, a new job — and for a long time
  you are grinding. You practice the examples. You memorize the steps. You get some right
  and some wrong. Then something shifts. Not gradually. It flips. Suddenly you
  <em>get it</em> — not just the examples you studied, but the whole thing. You could handle
  problems you have never seen before.
</p>

<p>
  That moment has a name in AI research: <em>grokking</em>. Scientists at DeepMind noticed
  it in machine learning models a few years ago: train long enough on the right kind of problem
  and the model suddenly goes from fifty percent accuracy to near-perfect. Overnight.
  After weeks of flat progress.
</p>

<p>
  The question nobody had answered: <em>why does that happen? What flips?</em>
</p>

<hr>

<p>
  When a system learns something — a neural network, a team, a person — it starts by
  memorizing examples. It does not understand; it pattern-matches. Enough training examples
  of cats and it learns "cats have pointy ears" and "cats are small and fluffy."
  Those are surface features. They work most of the time.
  But they fail on edge cases. You call this knowledge brittle.
</p>

<p>
  At some point, if the system keeps learning the right way, something deeper happens.
  Instead of remembering examples, it finds the <em>rule</em> — the underlying structure that
  generates all the examples. Not "cats have pointy ears" but the actual biology. Once you
  have the rule, you can handle any cat, including ones you have never seen. Your knowledge
  becomes generative.
</p>

<p>
  We call finding the rule entering the <em>Ghost Basin</em>. It is the basin of attraction
  around the minimum — the place where the system has found the shortest, most accurate
  description of what it is actually learning. The geometry of the solution crystallizes
  there before the performance numbers catch up. You can measure the crystallization
  happening before the accuracy spike arrives.
</p>

<p>
  We built a measurement for how close any learning system is to that minimum.
  It tracks cumulative prediction error over the full learning trajectory.
  When it drops to its minimum: the system has found the rule.
</p>

<hr>

<p>
  The surprising part: this applies to organizations too.
</p>

<p>
  A team that is "memorizing examples" handles each decision by looking up what it did
  last time. It struggles with new situations. It is slow. It generates internal debate
  because nobody agrees on the principle behind the decision — because there is no principle,
  only precedent.
</p>

<p>
  A team that has found the rule operates differently. Decisions are fast because everyone
  has internalized the same underlying principle. New situations are handled confidently
  because the team can derive the answer rather than look it up. When you observe this
  from outside, the organization seems to move as one.
</p>

<p>
  We call the underlying principle the team has found its <em>rotation rule</em> —
  the minimum description of what the team actually does and how it actually decides.
  Every high-functioning team has one. Most struggling teams are still memorizing cases.
</p>

<hr>

<p>
  The deepest finding is the scope of the claim.
</p>

<p>
  Eight completely different fields — machine learning theory, statistics, causal inference,
  information theory, topology, quantum physics — all turn out to be describing the same event.
  The Ghost Basin. The moment when a learning system finds the minimum description of its task.
  Each field arrived at the same object from a different angle and gave it a different name.
  They are all the same thing.
</p>

<p>
  The rotation rule, in its simplest form:
</p>

<blockquote>
  <em>Any learning system under optimization will find the minimum description
  of the task's invariance structure.</em>
</blockquote>

<p>
  That is not just true of AI. It is true of a child learning language. A musician learning
  to improvise. A scientist building a theory. A culture developing myth.
</p>

<p>
  Intelligence at every scale is one thing. Finding the rule.
</p>

<hr>

<h3>Appendix: on the terms</h3>

<h4>Is it really called grokking?</h4>

<p>
  Yes. The term comes from Robert Heinlein's 1961 novel
  <em>Stranger in a Strange Land</em>, where "grok" means to understand something so fully
  that it becomes part of you — absorbed, not just known. The AI researchers who named it
  chose well. The paper was published in 2022 by Power, Shah, Bhargava, and Goldowsky-Dill
  at DeepMind and MIT: <em>Grokking: Generalization Beyond Overfitting on Small Algorithmic
  Datasets.</em> It documented exactly this phase transition — flat loss for thousands of
  training steps, then sudden near-perfect generalization. The name stuck because the
  phenomenology is right. It does feel like grokking.
</p>

<h4>The Ghost Basin — did someone make this up?</h4>

<p>
  The term was coined by Richard Aragon, an independent AI researcher whose work we have
  been following closely. His observation: when a neural network is about to grok, the
  geometry of its internal representations changes before the accuracy changes. The
  representations become sparser, more organized, more structured — the system enters a
  basin of attraction that precedes the performance breakthrough. He called this the Ghost
  Basin because the signal is there, visibly, before the performance numbers show it.
  A ghost of what is coming.
</p>

<p>
  We took his observation and added three things: a formal mechanism for why the geometry
  changes first (the encoder reaches the minimum before the decoder can read it), a
  measurement for how close any system is to that minimum (what we call K_auc, building
  on work by Finzi, Qiu, and colleagues), and an extension to non-AI systems — organizations,
  teams, scientific fields. The core concept is Aragon's. The measurement and extension are ours.
</p>

<h4>What is ours, what is prior art</h4>

<p>
  The grokking phenomenon: Power et al., 2022.<br>
  The Ghost Basin concept: Richard Aragon, 2024–2026 (Substack: richardaragon.substack.com).<br>
  The measurement framework (K_auc as distance from minimum): Finzi, Qiu et al., 2026
  (<em>Epiplexity</em>, arXiv:2601.03220).<br>
  The formal bound connecting all of this to a universal learning limit: published January 2026.<br>
  The rotation rule (the statement that all eight theoretical traditions describe the same event): ours.<br>
  The organizational extension (Ghost Basin for teams and companies): ours.<br>
  The 40-step lead mechanism (encoder gets there first, decoder follows): ours, building on Aragon.<br>
  The 8-way equivalence (MDL = information bottleneck = causal mechanism = quantum Gibbs state = ...): ours.
</p>

<p>
  Science is always built this way: a pile of independent discoveries that turn out to be
  one thing, once someone assembles the view.
</p>
`,
};
