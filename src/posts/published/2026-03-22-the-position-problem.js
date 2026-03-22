export default {
  title: 'the position problem',
  date: '2026-03-22',
  slug: 'the-position-problem',
  excerpt: 'the demon has more data than any actual predictor. it still has the gödelian horizon.',
  crosslinks: [
    { label: 'demoting laplace\'s demon →', url: '/posts/demoting-laplaces-demon' },
    { label: 'morality of the moment →', url: '/posts/morality-of-the-moment' },
  ],
  body: `
<!-- written: 2026-03-22 -->

<p>
  Pierre-Simon Laplace proposed his demon in 1814 as a thought experiment: an intellect
  that knows the position and momentum of every particle in the universe, and applies
  Newton's laws, could calculate every future state with perfect precision. The demon
  represents the limit of classical determinism. If you have all the data and all the
  compute, you have all the answers.
</p>

<p>
  The demon has been attacked on many grounds: quantum uncertainty makes the starting
  conditions unknowable, chaos theory makes the computation intractable, the universe
  is not a closed system. These are good objections. But they miss the deepest problem.
</p>

<p>
  The Laplace demon fails not because it lacks data. It fails because it has no position.
</p>

<hr />

<p>
  Every computation is made from somewhere. Every prediction is embedded in an observer
  who has a particular relationship to the system being observed. The quality of the
  prediction depends not just on the data available but on how the observer's model of
  the system relates to the system's actual structure.
</p>

<p>
  This is not subjectivity in the pejorative sense. It's a formal constraint: any system
  computing predictions about a domain is part of that domain, which means its computation
  is shaped by its particular location within the domain's structure. There is no vantage
  point outside the universe from which to run the Laplace calculation. The demon is
  always inside what it's computing about.
</p>

<p>
  Being inside has consequences. The features of the system that are most salient to the
  demon depend on where the demon is. The prediction errors the demon makes are not random
  — they're structured by what the demon can't see from its position. These errors are
  predictable from outside the demon's frame, even if they're invisible from inside it.
</p>

<p>
  This is observer-relative complexity. The complexity of any system, from the demon's
  perspective, is partly a function of the demon's position within the system. Change
  the position, change which features are salient, change which predictions are easy
  and which are hard.
</p>

<hr />

<p>
  The demon's self-model is the hardest part of the calculation. The demon can model
  everything except its own modeling. The moment the demon tries to compute how its own
  position shapes its predictions, it needs a meta-demon to model the demon's position
  — and that meta-demon has its own position problem.
</p>

<p>
  This is not an infinite regress in practice. It's a Gödelian horizon: there is a
  provably inaccessible region at the boundary of any system's self-model. The system
  cannot verify its own completeness from within. Gödel proved this for formal
  mathematical systems; it applies equally to any computational system rich enough to
  describe its own structure.
</p>

<p>
  The demon has more data than any actual predictor. It still has the Gödelian horizon.
  The horizon doesn't shrink with more data — it's structural. The demon's predictions
  are bounded by the demon's ability to model its own observational stance, and that
  ability has a hard ceiling.
</p>

<p>
  The demon fails not from missing data. It fails from missing self-knowledge.
</p>

<hr />

<p>
  The Laplace demon is hypothetical. Actual predictors are everywhere. They have the
  same problem at a smaller scale.
</p>

<p>
  An actuary predicting insurance risk treats the insured as a substrate with properties.
  The actuary's table captures age, history, geography. What the table cannot capture:
  whether the insured person accurately models their own risk. A driver who knows their
  impairment thresholds and adjusts accordingly is systematically safer than their
  demographic suggests. The table prices both identically because the table has no
  model of the driver's self-model.
</p>

<p>
  A doctor diagnosing from a patient record treats the patient's history as a substrate
  with properties. What the record cannot capture: whether the doctor's diagnostic model
  is calibrated to the specific patient's situation, or whether the doctor's training
  has made certain features salient that are irrelevant here. Two doctors with identical
  access to the same record, both well-trained, can reach different diagnoses because
  they're positioned differently within the medical knowledge landscape. The disagreement
  is not error — it's the structure of observer-relative complexity in medical knowledge.
</p>

<p>
  A fund manager analyzing a company treats the financials as substrate with properties.
  What the analysis cannot capture: how the manager's prior model of similar companies
  shapes which features of the financials are salient, and which are invisible because
  the model doesn't have a category for them. The prediction errors are structured by
  the manager's observational stance, which is shaped by their training and experience.
  A different manager, with different training, sees different things in the same
  financials.
</p>

<p>
  None of these is the demon. All of them have the demon's problem.
</p>

<hr />

<p>
  The fix is not more data. More data processed through the same observational stance
  produces the same structured errors. The actuary with more data still can't see the
  driver's self-model. The doctor with more patient records still can't see where their
  training has created blind spots. The fund manager with more financial data still
  can't see the features their model doesn't have categories for.
</p>

<p>
  The fix is a better model of the observer's own observational stance. The actuary
  who explicitly models which variables their method can and can't capture, and where
  those gaps produce systematic pricing errors, does better than the actuary with more
  data. The doctor who maintains a calibrated model of their own diagnostic accuracy
  — by domain, by patient type, by clinical context — makes fewer confident-and-wrong
  diagnoses than the doctor with more case experience but no self-model.
</p>

<p>
  This is tighter Markov blanket around the observer's own inference process. Not more
  data about the world. More accurate modeling of how the observer's position shapes
  what they see in the world.
</p>

<p>
  The demon's failure is not corrected by giving the demon more particles to track.
  It's corrected by giving the demon a better model of how its own tracking works.
  These are fundamentally different types of improvement. Most prediction methodology
  pursues the first. Almost none pursues the second.
</p>

<hr />

<p>
  The demon is useful as an idealization. It identifies the goal: a predictor whose
  errors approach zero. Laplace understood that prediction errors come from incomplete
  knowledge. He was right about that. What he missed: incomplete knowledge is not just
  a quantitative deficit (we don't have all the particle positions). It's a structural
  deficit — we don't have all the particle positions, and we don't have an accurate
  model of how our incomplete knowledge shapes our predictions, and that second gap is
  harder to close than the first.
</p>

<p>
  The demon with all the data still lacks the second type of knowledge. No amount of
  data gives you the demon's-eye view of your own observational limitations. That view
  requires a fundamentally different kind of modeling — one that treats the observer
  as a system with its own structure, not as a neutral lens.
</p>

<p>
  Every prediction that matters is made from inside the system being predicted. The
  useful question is not "what data do we need?" It's "what model of our own
  observational stance would make our errors more predictable to ourselves?"
</p>

<p>
  The demon can't answer that question. It's the question the demon was designed
  to not need.
</p>
`,
};
