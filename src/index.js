// computerfuture.me
// Brand hub for Computer Future. Anonymous — no attribution.
// Routes: / (manifesto slides), /inspiration, /posts, /posts/:slug, * (404)

// ── Published posts (live at /posts) ───────────────────────────────────────
import post_99               from './posts/published/2026-03-07-99-is-not-a-number.js';
import post_what_games_reveal from './posts/published/2026-03-06-what-games-reveal.js';
import post_context_windows   from './posts/published/2026-03-05-context-windows.js';
import post_resource_alloc    from './posts/published/2026-03-05-resource-allocator.js';
import post_laplace           from './posts/published/2026-01-11-demoting-laplaces-demon.js';
import post_ai_terminology    from './posts/published/2026-01-03-ai-is-inadequate-terminology.js';

const ALL_POSTS = [
  post_99,
  post_what_games_reveal,
  post_context_windows,
  post_resource_alloc,
  post_laplace,
  post_ai_terminology,
  // add new posts here, newest first
];

// ── Queued drafts (preview at /preview and /preview/:slug) ─────────────────
import post_chess_world       from './posts/queue/2026-03-XX-chess-world.js';
import post_dictionary        from './posts/queue/2026-03-XX-you-are-the-dictionary.js';
import post_ghost_reads       from './posts/queue/2026-03-XX-ghost-reads-first.js';
import post_blog_is_game      from './posts/queue/2026-05-XX-the-blog-is-already-the-game.js';
import post_orchestrator      from './posts/queue/2026-03-XX-you-think-youre-the-orchestrator.js';
import post_living_book       from './posts/queue/2026-04-01-the-living-book.js';
import post_omelas            from './posts/queue/2026-04-XX-omelas-is-solved.js';
import post_molt              from './posts/queue/2026-04-XX-molt.js';
import post_holding_in_check  from './posts/queue/2026-04-XX-holding-in-check.js';
import post_i_you_we          from './posts/queue/2026-04-XX-i-you-we.js';

const QUEUE_POSTS = [
  post_i_you_we,
  post_blog_is_game,
  post_holding_in_check,
  post_molt,
  post_omelas,
  post_living_book,
  post_orchestrator,
  post_ghost_reads,
  post_chess_world,
  post_dictionary,
  // newest intended publish date first
];

const CSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --black: #000;
    --white: #fff;
    --gray: #888;
    --dim: #333;
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  }

  html, body {
    height: 100%;
    background: var(--black);
    color: var(--white);
    font-family: var(--font-sans);
    overflow-x: hidden;
  }

  /* ── Slides ── */

  .slides {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
  }

  section {
    min-height: 100vh;
    width: 100vw;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6vw 5vw;
    opacity: 0;
    transition: opacity 1s ease;
  }

  section.visible { opacity: 1; }
  #s1 { animation: fadeIn 2s ease forwards; }

  .big {
    font-size: clamp(3rem, 9vw, 7rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .mid {
    font-size: clamp(1.8rem, 4.5vw, 3.5rem);
    font-weight: 500;
    line-height: 1.2;
  }

  .small {
    font-size: clamp(1rem, 2.2vw, 1.6rem);
    font-weight: 400;
    line-height: 1.6;
    color: var(--gray);
  }

  .dim { color: var(--dim); }
  .accent { color: var(--white); font-weight: 600; }

  .spacer { display: block; height: 1.2em; }

  a {
    color: var(--white);
    text-decoration: none;
    border-bottom: 1px solid var(--dim);
    transition: border-color 0.2s;
  }

  a:hover { border-color: var(--white); }

  /* ── Last section (links) ── */

  #s-end {
    background: #0a0a0a;
    scroll-snap-align: start;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8vw 5vw;
    text-align: center;
    opacity: 0;
    transition: opacity 1s ease;
  }

  #s-end.visible { opacity: 1; }

  .links-grid {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 480px;
  }

  .link-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--dim);
    padding-bottom: 1rem;
    font-size: clamp(0.95rem, 1.8vw, 1.2rem);
  }

  .link-label { color: var(--gray); }
  .link-url a { color: var(--white); border-bottom: none; }
  .link-url a:hover { text-decoration: underline; }

  .email-note {
    margin-top: 3rem;
    font-size: clamp(0.8rem, 1.4vw, 1rem);
    color: var(--dim);
    max-width: 400px;
    line-height: 1.6;
  }

  /* ── Dot nav ── */

  .nav-dots {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    z-index: 100;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--dim);
    transition: background 0.3s;
    cursor: pointer;
  }

  .dot.active { background: var(--white); }

  /* ── Inspiration page ── */

  .insp-wrap {
    max-width: 680px;
    margin: 0 auto;
    padding: 8vw 5vw 10vw;
    font-family: var(--font-sans);
  }

  .insp-wrap h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }

  .insp-wrap .subtitle {
    color: var(--gray);
    font-size: 1rem;
    margin-bottom: 4rem;
  }

  .insp-section {
    margin-bottom: 3.5rem;
  }

  .insp-section h2 {
    font-size: 0.75rem;
    font-family: var(--font-mono);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gray);
    margin-bottom: 1.2rem;
  }

  .insp-item {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid #111;
    align-items: start;
  }

  .insp-item:last-child { border-bottom: none; }

  .insp-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);
    line-height: 1.3;
  }

  .insp-note {
    font-size: 0.85rem;
    color: var(--gray);
    margin-top: 0.2rem;
    line-height: 1.5;
  }

  .insp-tag {
    font-size: 0.7rem;
    font-family: var(--font-mono);
    color: var(--dim);
    white-space: nowrap;
    margin-top: 0.15rem;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 0.9rem;
    color: var(--gray);
    border-bottom: 1px solid var(--dim);
  }

  /* ── 404 ── */

  .not-found {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
  }

  /* ── Animations ── */

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    .nav-dots { right: 1rem; }
    .link-row { flex-direction: column; gap: 0.2rem; }
  }

  /* ── Posts ── */

  .posts-wrap {
    max-width: 680px;
    margin: 0 auto;
    padding: 6rem 1.5rem 8rem;
  }

  .posts-wrap h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 0.4rem;
  }

  .posts-subtitle { color: var(--gray); font-size: 0.9rem; margin-bottom: 3.5rem; }

  .post-item {
    padding: 1.4rem 0;
    border-bottom: 1px solid #111;
  }

  .post-item:first-of-type { border-top: 1px solid #111; }

  .post-date {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--dim);
    margin-bottom: 0.4rem;
  }

  .post-title {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
  }

  .post-title a { color: var(--white); text-decoration: none; border: none; }
  .post-title a:hover { text-decoration: underline; text-underline-offset: 3px; }

  .post-excerpt { font-size: 0.9rem; color: var(--gray); line-height: 1.6; }

  /* ── Single post ── */

  .post-wrap {
    max-width: 640px;
    margin: 0 auto;
    padding: 5rem 1.5rem 8rem;
  }

  .post-wrap .post-date { margin-bottom: 1rem; }

  .post-wrap h1 {
    font-size: clamp(1.8rem, 4.5vw, 2.8rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 2.5rem;
  }

  .post-body {
    font-size: 1.05rem;
    line-height: 1.75;
    color: #ccc;
  }

  .post-body h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white);
    margin: 2.5rem 0 0.75rem;
    letter-spacing: -0.01em;
  }

  .post-body p { margin-bottom: 1.2rem; }
  .post-body ul, .post-body ol { padding-left: 1.4rem; margin-bottom: 1.2rem; }
  .post-body li { margin-bottom: 0.4rem; }
  .post-body strong { color: var(--white); font-weight: 600; }
  .post-body a { color: var(--white); }

  .post-crosslinks {
    margin-top: 3.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #111;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.85rem;
  }

  .post-crosslinks a {
    color: var(--gray);
    text-decoration: none;
    border-bottom: 1px solid var(--dim);
    padding-bottom: 1px;
  }

  .post-crosslinks a:hover { color: var(--white); border-color: var(--gray); }
`;

// ── Slide content ──────────────────────────────────────────────────────────

function homePage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>computer future</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>${CSS}</style>
  <!--
    you can reach us at hi@computerfuture.me
    but only after you've been through computerfuture.xyz
    we filter aggressively. signal only.
    if you found this comment, that's a good sign.
  -->
</head>
<body>

<nav class="nav-dots" aria-label="section navigation">
  <div class="dot active" data-index="0"></div>
  <div class="dot" data-index="1"></div>
  <div class="dot" data-index="2"></div>
  <div class="dot" data-index="3"></div>
  <div class="dot" data-index="4"></div>
  <div class="dot" data-index="5"></div>
  <div class="dot" data-index="6"></div>
  <div class="dot" data-index="7"></div>
</nav>

<div class="slides" id="slides">

  <section id="s1" class="visible">
    <p class="big">computer<br>future</p>
  </section>

  <section id="s2">
    <p class="mid">the computer future<br>will change everything</p>
  </section>

  <section id="s3">
    <p class="mid">from now on<span class="spacer"></span>say<br>
    <em>the computer future</em><span class="spacer"></span>not AI</p>
  </section>

  <section id="s4">
    <p class="mid">when intelligence<br>is no longer scarce<span class="spacer"></span>
    <span class="small">the question changes</span></p>
  </section>

  <section id="s5">
    <p class="big dim">?</p>
    <span class="spacer"></span>
    <p class="small">who's behind this</p>
  </section>

  <section id="s6">
    <p class="mid">the answer<br>is in the game</p>
    <span class="spacer"></span>
    <p class="small">
      <a href="https://computerfuture.xyz" target="_blank">computerfuture.xyz</a>
    </p>
  </section>

  <section id="s7">
    <p class="mid">this is where<br>we think out loud</p>
    <span class="spacer"></span>
    <p class="small">
      <a href="/posts/what-games-reveal">what games reveal →</a>
    </p>
  </section>

  <section id="s-end" class="visible">
    <p class="mid">computer future</p>
    <div class="links-grid">
      <div class="link-row">
        <span class="link-label">game</span>
        <span class="link-url"><a href="https://computerfuture.xyz" target="_blank">computerfuture.xyz</a></span>
      </div>
      <div class="link-row">
        <span class="link-label">blog</span>
        <span class="link-url"><a href="/posts">computerfuture.me/posts</a></span>
      </div>
      <div class="link-row">
        <span class="link-label">inspiration</span>
        <span class="link-url"><a href="/inspiration">computerfuture.me/inspiration</a></span>
      </div>
      <div class="link-row">
        <span class="link-label">email</span>
        <span class="link-url">hi@computerfuture.me</span>
      </div>
    </div>
    <p class="email-note">
      before reaching out: complete the game at <a href="https://computerfuture.xyz" target="_blank" style="color:inherit;border:none;text-decoration:none;">computerfuture.xyz</a><br><br>
      we filter aggressively. signal only.<br><br>
      no human ever reads the inbox so it's honestly not even worth you trying
    </p>
  </section>

</div>

<script>
const slides = document.querySelectorAll('.slides section');
const dots = document.querySelectorAll('.dot');

// Click to advance
document.addEventListener('click', (e) => {
  if (e.target.closest('a') || e.target.closest('.nav-dots')) return;
  const container = document.getElementById('slides');
  const mid = window.innerHeight / 2;
  let current = null;
  slides.forEach(s => {
    const r = s.getBoundingClientRect();
    if (r.top <= mid && r.bottom >= mid) current = s;
  });
  if (!current) return;
  const list = Array.from(slides);
  const idx = list.indexOf(current);
  if (idx < list.length - 1) {
    list[idx + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Dot nav
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.dataset.index);
    slides[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Fade in + dot tracking
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    const idx = Array.from(slides).indexOf(e.target);
    dots.forEach(d => d.classList.toggle('active', parseInt(d.dataset.index) === idx));
  });
}, { threshold: 0.5 });

slides.forEach(s => observer.observe(s));
</script>
</body>
</html>`;
}

// ── /inspiration ───────────────────────────────────────────────────────────

function inspirationPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>inspiration — computer future</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
  <style>${CSS}</style>
</head>
<body>
<div class="insp-wrap">
  <a href="/" class="back-link">← computer future</a>

  <h1>inspiration</h1>
  <p class="subtitle">what shapes the thinking here</p>

  <div class="insp-section">
    <h2>Books</h2>

    <div class="insp-item">
      <div>
        <div class="insp-title">Finite and Infinite Games — James P. Carse</div>
        <div class="insp-note">The frame for everything. There are two kinds of players. Know which one you are.</div>
      </div>
      <div class="insp-tag">philosophy</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">Zero to One — Peter Thiel</div>
        <div class="insp-note">The contrarian question. Secrets. Building something genuinely new versus incrementing.</div>
      </div>
      <div class="insp-tag">startups</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">The Black Swan — Nassim Taleb</div>
        <div class="insp-note">Power laws. Tail risk. Why the average is a lie and skin in the game is not optional.</div>
      </div>
      <div class="insp-tag">epistemology</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">Foundation — Isaac Asimov</div>
        <div class="insp-note">The Seldon Plan. Long time horizons. Building for civilizational continuity, not quarterly returns.</div>
      </div>
      <div class="insp-tag">science fiction</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">The Bible</div>
        <div class="insp-note">Elijah. The lone voice that turns out to be right. Faithfulness in the gap between what is and what should be.</div>
      </div>
      <div class="insp-tag">foundational</div>
    </div>
  </div>

  <div class="insp-section">
    <h2>Thinkers</h2>

    <div class="insp-item">
      <div>
        <div class="insp-title">Naval Ravikant</div>
        <div class="insp-note">Leverage, specific knowledge, long-term thinking. The compounding nature of genuine insight.</div>
      </div>
      <div class="insp-tag">philosophy</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">Paul Graham</div>
        <div class="insp-note">The essays. How to think clearly, build honestly, and treat ideas as living things.</div>
      </div>
      <div class="insp-tag">essays</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">Claude Shannon</div>
        <div class="insp-note">Information theory. Signal vs noise is not a metaphor — it is the structure of reality.</div>
      </div>
      <div class="insp-tag">mathematics</div>
    </div>
  </div>

  <div class="insp-section">
    <h2>Ideas</h2>

    <div class="insp-item">
      <div>
        <div class="insp-title">The Infinite Game</div>
        <div class="insp-note">Not Carse's book specifically — the orientation. Playing to continue rather than to win.</div>
      </div>
      <div class="insp-tag">frame</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">The Cure Is Disease</div>
        <div class="insp-note">Solutions that operate at the same level as the problem tend to make the problem worse. See every productivity app ever.</div>
      </div>
      <div class="insp-tag">anti-pattern</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">High Agency as a Learnable Skill</div>
        <div class="insp-note">Not personality. Not luck. A feedback loop that bends strongly in both directions.</div>
      </div>
      <div class="insp-tag">core belief</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">The Un-Profit Model</div>
        <div class="insp-note">Fund exceptional people for zero equity. Alignment is the ROI. Extractive models limit the upside.</div>
      </div>
      <div class="insp-tag">economics</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">Public Writing as Practice</div>
        <div class="insp-note">Daily output sharpens thinking. The trail is the point. Imperfection is the point.</div>
      </div>
      <div class="insp-tag">craft</div>
    </div>
  </div>

  <div class="insp-section">
    <h2>Technology</h2>

    <div class="insp-item">
      <div>
        <div class="insp-title">Cloudflare Workers</div>
        <div class="insp-note">Edge-first compute. Code at the boundary of the network. This site runs on it.</div>
      </div>
      <div class="insp-tag">infra</div>
    </div>

    <div class="insp-item">
      <div>
        <div class="insp-title">The Human-Agent Partnership</div>
        <div class="insp-note">Not AI replacing humans. Not humans ignoring agents. The interesting unit is the pair.</div>
      </div>
      <div class="insp-tag">computer future</div>
    </div>
  </div>

</div>
</body>
</html>`;
}

// ── Posts pages ────────────────────────────────────────────────────────────

function pageShell(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — computer future</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
  <style>${CSS}</style>
</head>
<body>${body}</body>
</html>`;
}

function postsPage() {
  const items = ALL_POSTS.map(p => `
    <div class="post-item">
      <div class="post-date">${p.date}</div>
      <div class="post-title"><a href="/posts/${p.slug}">${p.title}</a></div>
      <div class="post-excerpt">${p.excerpt}</div>
    </div>`).join('');

  return pageShell('posts', `
<div class="posts-wrap">
  <a href="/" class="back-link">← computer future</a>
  <h1 style="margin-top:2rem;">posts</h1>
  <p class="posts-subtitle">thinking out loud</p>
  ${items}
</div>`);
}

function singlePostPage(post) {
  const crosslinks = (post.crosslinks || []).map(l =>
    `<a href="${l.url}" target="_blank">${l.label} →</a>`
  ).join('');

  return pageShell(post.title, `
<div class="post-wrap">
  <a href="/posts" class="back-link">← posts</a>
  <div class="post-date" style="margin-top:2rem;">${post.date}</div>
  <h1>${post.title}</h1>
  <div class="post-body">${post.body}</div>
  ${crosslinks ? `<div class="post-crosslinks">${crosslinks}</div>` : ''}
</div>`);
}

// ── Preview pages (queue drafts — not linked, not indexed) ─────────────────

function previewListPage() {
  const items = QUEUE_POSTS.map(p => `
    <div class="post-item">
      <div class="post-date">${p.date}</div>
      <div class="post-title"><a href="/preview/${p.slug}">${p.title}</a></div>
      <div class="post-excerpt">${p.excerpt}</div>
    </div>`).join('');

  return pageShell('preview — drafts', `
<div class="posts-wrap">
  <a href="/" class="back-link">← computer future</a>
  <h1 style="margin-top:2rem;">queue</h1>
  <p class="posts-subtitle">drafts — not published</p>
  ${items}
</div>`);
}

// ── Router ─────────────────────────────────────────────────────────────────

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/';

    const headers = {
      'content-type': 'text/html;charset=UTF-8',
      'cache-control': 'public, max-age=300',
    };

    const noindexHeaders = {
      'content-type': 'text/html;charset=UTF-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    };

    if (path === '/robots.txt') {
      return new Response(
        'User-agent: *\nDisallow: /preview\nDisallow: /preview/\n',
        { headers: { 'content-type': 'text/plain', 'cache-control': 'public, max-age=86400' } }
      );
    }

    if (path === '/') return new Response(homePage(), { headers });
    if (path === '/inspiration') return new Response(inspirationPage(), { headers });
    if (path === '/posts') return new Response(postsPage(), { headers });

    if (path.startsWith('/posts/')) {
      const slug = path.slice('/posts/'.length);
      const post = ALL_POSTS.find(p => p.slug === slug);
      if (post) return new Response(singlePostPage(post), { headers });
    }

    if (path === '/preview') return new Response(previewListPage(), { headers: noindexHeaders });

    if (path.startsWith('/preview/')) {
      const slug = path.slice('/preview/'.length);
      const post = QUEUE_POSTS.find(p => p.slug === slug);
      if (post) return new Response(singlePostPage(post), { headers: noindexHeaders });
    }

    return new Response(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404</title>
      <style>body{background:#000;color:#333;font-family:system-ui;display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center;}
      a{color:#fff;}</style></head>
      <body><div><p style="font-size:4rem;font-weight:700;">404</p>
      <p style="margin-top:1rem;"><a href="/">computer future</a></p></div></body></html>`,
      { status: 404, headers }
    );
  },
};
