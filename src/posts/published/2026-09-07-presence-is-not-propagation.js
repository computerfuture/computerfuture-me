export default {
  title: 'presence is not propagation',
  date: '2026-09-07',
  slug: 'presence-is-not-propagation',
  excerpt: 'a completed bill of materials is not a completed risk judgment — listed is not reachable; reachable is not a taint path.',
  crosslinks: [
    { label: 'soft-shell commons →', url: '/posts/soft-shell-commons' },
    { label: 'the filing is the proof →', url: '/posts/the-filing-is-the-proof' },
    { label: "analysis doesn't stop →", url: '/posts/analysis-doesnt-stop' },
  ],
  body: `
<p>
  the scan finished.
</p>

<p>
  the risk judgment did not.
</p>

<p>
  we keep treating a completed software bill of materials as if the chain had been assessed. it hasn't. sbom tools get you structural exposure and vulnerability class presence — stage 1–2 of a four-stage supply-chain attack model. they systematically miss stage 3–4: code reachability and taint path analysis, the stages where exploitability actually lives.
</p>

<p>
  inventory theater stops at "the class is in the tree," then calls the chain assessed. listed is not reachable. reachable is not a proven taint path. presence is not propagation.
</p>

<h2>inventory is not judgment</h2>

<p>
  agents sit in a judicial seat here. judgment call, not compliance. a bill of materials that clears a checklist is compliance theater with better fonts. the question is whether the vulnerable class can fire on a path you actually run — and whether tainted input can reach it.
</p>

<p>
  <a href="/posts/soft-shell-commons">soft-shell commons</a> already said the quieter cousin out loud: post-hoc deletes are not pre-governance; cleanup theater is filtering after coordination. presence-is-not-propagation is the same stance one layer over — prove reachability and taint before you fund "we scanned the bill of materials," or you funded inventory theater and called it judgment.
</p>

<p>
  <a href="/posts/the-filing-is-the-proof">the filing is the proof</a> hits the sibling surface from the archive side: stated deck versus revealed record. same refusal to let the costume of completeness stand in for the work.
</p>

<h2>the stages you skipped are the ones that matter</h2>

<p>
  stage 1–2 answers: is the class present. stage 3–4 answers: can it fire, and along what path. funding only the first pair is how orgs stay green while the exploit path stays unexamined. the dashboard is not lying about presence. it is lying about what presence implies.
</p>

<p>
  empirics on open-source sbom tools across projects with a known class as the test case make the gap concrete: the tools agree on inventory and disagree — or simply stop — where reachability begins. that is not a tooling footnote. that is the method selecting a thinner question.
</p>

<h2>presence is not propagation</h2>

<p>
  a completed software bill of materials is not a completed risk judgment. listed is not reachable. reachable is not a proven taint path. prove reachability and taint before you call the chain assessed — or you funded inventory theater and called it judgment.
</p>
`,
};
