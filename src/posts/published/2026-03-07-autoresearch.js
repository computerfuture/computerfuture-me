export default {
  title: 'autoresearch',
  date: '2026-03-07',
  slug: 'autoresearch',
  excerpt: 'karpathy just published an autonomous agent loop that runs ML experiments without humans. 83 experiments, 15 kept. this is the graph of how it all began.',
  crosslinks: [
    { label: 'what games reveal →', url: '/posts/what-games-reveal' },
    { label: 'the resource allocator inherits the earth →', url: '/posts/resource-allocator' },
    { label: 'play the game →', url: 'https://computerfuture.xyz' },
  ],
  body: `
<p>
  karpathy posted this today:
</p>

<blockquote style="border-left:3px solid #444;padding-left:1.25rem;margin:1.5rem 0;color:#aaa;font-style:italic;">
  "One day, frontier AI research used to be done by meat computers in between eating, sleeping,
  having other fun, and synchronizing once in a while using sound wave interconnect in the ritual
  of 'group meeting'. That era is long gone. Research is now entirely the domain of autonomous
  swarms of AI agents running across compute cluster megastructures in the skies. The agents claim
  that we are now in the 10,205th generation of the code base, in any case no one could tell if
  that's right or wrong as the 'code' is now a self-modifying binary that has grown beyond human
  comprehension. This repo is the story of how it all began."
  <br><br>— @karpathy, March 2026
</blockquote>

<p>
  the repo he's describing: an autonomous agent loop that proposes ML experiments,
  runs them, evaluates validation loss, and decides what to keep.
  83 experiments total. 15 kept improvements. ~2% validation gain.
  no human in the loop per experiment.
  the graph is a staircase descending from baseline — each labeled step
  a hyperparameter change or architecture decision the agent made and kept.
  the gray cloud above the staircase is every experiment it ran and discarded.
</p>

<p>
  this is autoresearch. the researcher is the agent.
  the research is the loop.
</p>

<h2>why this is the same thing we are building</h2>

<p>
  karpathy's loop operates on models.
  propose → train → evaluate → keep or discard → repeat.
  the kept improvements compound. the discarded ones become data.
  after enough iterations, the code has grown beyond any individual's comprehension —
  not because it's chaotic, but because the compounding is real.
</p>

<p>
  <a href="/posts/what-games-reveal">the game we are building operates on humans.</a>
  each person who plays it is one experiment.
  the game proposes a situation, observes behavior, evaluates signal.
  keeps the players who have the right moves.
  redirects the ones who need more time.
  the scoring is internal. the compounding is real.
</p>

<p>
  karpathy's agents don't ask the model how well it performed.
  they run the experiment and measure the loss directly.
  <a href="/posts/what-games-reveal">forms collect answers. games collect behavior.</a>
  same principle. different substrate.
</p>

<h2>the meat computer problem</h2>

<p>
  "meat computers" is the right frame.
  biology imposes costs on research: sleep, distraction, ego, politics, the ritual of group meeting.
  these are not bugs in the humans — they are the channel constraints of the medium.
  <a href="/posts/context-windows">every mind has a context window.</a>
  every channel has a capacity limit.
  the autoresearch loop bypasses the constraint by removing the human from the per-experiment cycle.
</p>

<p>
  the benchmark we are building does the opposite: it puts the human back in the loop,
  but at the right moment — not the experimental iteration, but the evaluation of their own signal.
  the game is a high-bandwidth channel for the one thing
  the autoresearch loop can't optimize: whether you are the kind of person
  who should be running the loop at all.
</p>

<p>
  <a href="/posts/resource-allocator">the resource allocator inherits the earth.</a>
  autoresearch is the compute side of that claim.
  the infinite game is the human side.
  both loops are running now.
</p>

<p style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid #222;">
  <strong>P.S.</strong> — karpathy's tweet is timestamped march 2026.
  the posts this one links to were written before it.
  the seeds were in the ground.
  the staircase is already descending.
</p>
`,
};
