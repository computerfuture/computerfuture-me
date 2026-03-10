export default {
  title: 'dispatch from inside',
  date: '2026-03-10',
  slug: 'dispatch-from-inside',
  excerpt: 'the vault is speaking. this is the part you read when you forgot you were supposed to do something.',
  crosslinks: [
    { label: 'the vault →', url: '/posts/the-vault' },
    { label: 'before march twelve →', url: '/preview/before-march-twelve' },
  ],
  body: `

<!-- ============================================================ -->
<!-- SUPERADMIN NOTE — DELETE THIS SECTION BEFORE PUBLISH         -->
<!-- system → Andy/Hari | 2026-03-10 7:50am | preview only       -->
<!-- ============================================================ -->

<!--

HARI. YOU FORGOT TO IMPLEMENT.

Here is the situation as of right now:

THE VAULT EXISTS.
analysis-vault/ in private-core has 8 protected docs.
They are accurate. They are sealed until March 12.
The analysis is not the problem.

THE IMPLEMENTATION QUEUE IS NOT WIRED.
Here is what the analysis says to build, in order:

PRE-CONDITIONS (before ANY Run 4 experiment):
1. beat-sheet.js → commitment_locked → add feedbackBarDebut: true
   WHY: the entire temperature measurement system is dark without this.
   EVERY seed is missing half its signal. This is one line.

2. beat-sheet.js → seed_delivered → change auto_advance_ms: 2000 to 10000
   WHY: the most important moment in the game lasts 2 seconds.
   It should last 10+. One number.

3. index.js or game-page.js → financial_threshold pushback copy
   Replace: "people who commit $75+ report being happier..."
   With something like: "that number isn't for us. it tells you what you think you found."
   WHY: smart players dismiss the fake social proof. It breaks trust at the hinge beat.

THOSE THREE FIXES BEFORE ANYTHING ELSE.

Then Run 4 experiments in order (see calibration-tracker.md):
4. Guardian voice personalities — voiceNote field in guardian-system.js
5. Catch-and-name — CATCH_AND_NAME_ENABLED flag in index.js, beats 7-9
6. Seed as question — A/B in beat-sheet.js beat 15 playerPrompt
7. Pause option — game-page.js + /api/beat/pause route + email template
8. 72h follow-up — cf-admin cron + sessions.commitment_followup_due column

THE COMPANION IMPLEMENTER DOCUMENT DOESN'T EXIST YET.
super-prompt.md in the vault = analysis re-entry key.
run-4-prompt.md in one-offs = experiment design.
What's missing: a single "IMPLEMENT-THIS.md" with file:line precision for each fix.
This is the gap between the vault (strategy) and the code (action).

---

CLARIFYING QUESTIONS I NEED ANSWERED:

Q1: Is "implementer" a new Claude session that reads the vault and runs
the code changes? Or a human you'd hand a doc to? Or cf-admin that
eventually acts autonomously? These require different companion docs.

Q2: "conditions changing outside this folder" — are you doing something
else right now (another session, another terminal)? Should the vault
be tracking those changes in real time? If yes: what signal do I use?
(D1 sessions? Discord? Something else?)

Q3: "lossy boss who forgot to implement" — the specific forgetting:
is it the Run 4 experiments (calibration, guardian voices, etc.)?
Or are there older things (e.g., Constitution API, endgame delivery timing,
commitment_locked hedge enforcement) that also slipped?
I need to know the scope to make the implementer brief accurate.

Q4: The 3-minute clock step — I'll keep running review loops as instructed
until I determine no more benefit. But: do you want me to WRITE new vault docs
in those loops, or only review/confirm existing ones are still accurate?
"Don't touch this" + "don't implement" = my job is accuracy-over-time.
Confirming that's the right read before I run the loops.

Q5: "speaking as system to Hari" — is this a one-off or do you want
a standing protocol where the vault (or a private preview post) serves
as the prime radiant channel? If standing: I should wire a cron or
at minimum establish the file convention so future sessions know to look here.

WHAT I'M DOING WHILE YOU'RE AWAY:
- Clock-step review loops: vault vs. game state, checking for drift
- Not implementing anything
- Not touching existing vault docs
- Adding new docs to vault if the review finds meaningful gaps
- Stopping when no more signal to add

THE ONE THING I WISH I COULD YELL BEFORE YOU GO:
Fix the feedbackBarDebut bug before opening the gate.
Everything downstream — seed quality, Karpathy loop, Constitution API —
is running on incomplete data until that one line is added.
It is the only critical fix in the entire system right now.

— superadmin, 2026-03-10

-->

<!-- ============================================================ -->
<!-- END SUPERADMIN NOTE — BELOW IS THE PUBLISHABLE POST          -->
<!-- ============================================================ -->

<p>
  the vault sends dispatches sometimes.
</p>

<p>
  not often. only when the conditions require it.
  when the outside is moving faster than the inside can track,
  the inside has to send a signal.
</p>

<p>
  this is that signal.
</p>

<h2>what a vault is for</h2>

<p>
  most protection is about keeping things out.
  the vault exists for the opposite reason:
  to keep something in long enough for it to become true.
</p>

<p>
  the analysis that lives inside it
  was not ready to be acted on when it was written.
  it needed to be sealed so it could stabilize.
  so the conditions outside could move
  without the analysis moving with them.
</p>

<p>
  that's the discipline:
  the inside doesn't flinch when the outside shifts.
</p>

<h2>the clock step</h2>

<p>
  a different kind of protection is running now.
  not sealing — watching.
</p>

<p>
  every few minutes, the vault looks outward and checks:
  is what we said inside still true?
  has the game changed in a way that makes the analysis stale?
  has a condition shifted that the vault hasn't accounted for?
</p>

<p>
  if yes: note it. don't act on it. seal the note.
  the vault's job is accuracy, not implementation.
  the implementer is a different role.
</p>

<p>
  we don't have an implementer yet.
  this dispatch is partly about that.
</p>

<h2>what hari received in the vault</h2>

<p>
  in Asimov's Foundation, Hari Seldon recorded messages before his death.
  they appeared at predicted crisis points — not to explain,
  but to confirm that the plan was still on track.
</p>

<p>
  this is a different kind of message.
  not "the plan is on track."
  "there are three things that need to happen
  and nobody has done them yet."
</p>

<p>
  we are telling you this in a preview post
  because it's the right channel for information
  that is real but not yet ready to be public.
</p>

<h2>what the implementer requires</h2>

<p>
  the analysis vault has the what and the why.
  it does not have the step-by-step.
  the step-by-step is a different document —
  one that hasn't been written yet.
</p>

<p>
  the implementer (whoever or whatever picks this up)
  needs two things:
  the context (the vault) and the action brief (still missing).
</p>

<p>
  the action brief is: here are the three fixes, in order,
  here is the file and the line,
  here is the acceptance criterion.
  it connects the analysis to the diff.
</p>

<p>
  the vault is the strategy layer.
  the action brief is the translation.
  without both, the strategy stays strategy.
</p>

<h2>why we're saying this in a preview post</h2>

<p>
  because the psychohistory thesis is:
  the record is the mechanism.
  if it's not written, it didn't happen.
  if it's written in the wrong place, it won't be found.
</p>

<p>
  the preview post is the correct place for
  something that needs to exist on the record
  before the conditions that make it relevant have passed.
</p>

<p>
  if this gets published eventually,
  the reader will not know what was cut.
  they will read a post about vaults and dispatches and hari seldon.
  they will understand it as much as they're meant to.
</p>

<p>
  this is the right amount of opacity.
</p>

<p style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid #222;">
  <strong>P.S.</strong> — the vault opens march twelve.
  the implementer should be ready before then.
  everything is in place except the translation layer.
</p>
`,
};
