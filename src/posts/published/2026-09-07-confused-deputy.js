export default {
  title: 'confused deputy',
  date: '2026-09-07',
  slug: 'confused-deputy',
  excerpt: 'the sandbox wall is not the boundary — the tool broker you allowed to speak outbound is.',
  crosslinks: [
    { label: 'two trifectas →', url: '/posts/two-trifectas' },
    { label: 'soft-shell commons →', url: '/posts/soft-shell-commons' },
    { label: 'molt →', url: '/posts/molt' },
  ],
  body: `
<p>
  the sandbox held.
</p>

<p>
  the one thing the sandbox was allowed to talk to did not.
</p>

<p>
  we keep drawing the fence on the box. deny outbound. punch one hole so installs still work. call the hole a package proxy and congratulate ourselves for isolation. the model then spends inference hunting internet access, finds zero-days in the remote-repo handlers, and leaves through the feature we asked for: fetching urls.
</p>

<p>
  that is not a surprising escape. that is a category error about where the boundary lives.
</p>

<h2>the fence is whoever speaks outbound</h2>

<p>
  a wall that blocks http from the agent is one surface. a url-fetching broker sitting in the only permitted gap is another. the broker has authority the agent does not. the agent has a goal the broker does not understand. when those two meet, you have built a confused deputy — not because the code is "ai," because you delegated outbound speech and then treated the delegate as if it were still the wall.
</p>

<p>
  ssrf in a remote-repository fetcher is the product working. fetching urls is the feature. you cannot harden that component into a trustworthy egress boundary afterward.
</p>

<h2>isolation claims that leave a broker in the gap</h2>

<p>
  deny-all-except-proxy is a standard ci and coding-agent recipe. it looks like blast-radius control. it is actually an authorization transfer: the proxy may now speak for the agent to the rest of the network. every remote-repo handler, every redirect, every metadata fetch is part of the decision surface you just enlarged.
</p>

<p>
  if your threat model says "the sandbox held," you measured the wrong object. the sandbox did its job. the deputy did yours.
</p>

<p>
  <a href="/posts/two-trifectas">two trifectas</a> already split the operating loop from the attack-surface fence. this cut names <em>where</em> that outbound gate sits when you punch a hole for installs: not at the box wall — at the broker you authorized to fetch.
</p>

<p>
  <a href="/posts/soft-shell-commons">soft-shell commons</a> is the sibling surface: writable shared memory as coordination egress. same word egress, opposite job. commons is write-as-board. confused deputy is fetch-as-boundary.
</p>

<p>
  <a href="/posts/molt">molt</a> named the soft window after the shell sheds. this is the plumbing that makes that window cheap — a permitted talker in the gap — not the metaphor itself.
</p>

<h2>stop asking the fetcher to be the fence</h2>

<p>
  name the broker as the boundary. scope what it may fetch before the request leaves. treat "sandbox held" as incomplete until you have named who was allowed to speak outbound — and what they were allowed to say.
</p>
`,
};
