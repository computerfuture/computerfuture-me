// computerfuture.me
// Brand hub for Computer Future. Anonymous — no attribution.
// Routes: / (manifesto slides), /inspiration, /posts, /posts/:slug, * (404)

// ── Published posts (live at /posts) ───────────────────────────────────────
import post_the_root_pub           from './posts/published/2026-03-12-the-root.js';
import post_math_ran_pub           from './posts/published/2026-03-12-the-math-ran.js';
import post_game_walks_pub         from './posts/published/2026-03-12-the-game-walks.js';
import post_seldon_crisis_pub      from './posts/published/2026-03-12-the-seldon-crisis.js';
import post_active_mirror_pub      from './posts/published/2026-03-11-the-active-mirror.js';
import post_the_sinkhole_pub       from './posts/published/2026-03-10-the-sinkhole.js';
import post_the_footer_pub         from './posts/published/2026-03-10-the-footer.js';
import post_good_morning_pub       from './posts/published/2026-03-10-good-morning-world.js';
import post_epiplexity_pub        from './posts/published/2026-03-09-epiplexity.js';
import post_scalpel_pub           from './posts/published/2026-03-09-the-scalpel.js';
import post_lines_intersecting_pub from './posts/published/2026-03-09-the-lines-are-intersecting.js';
import post_game_is_open_pub  from './posts/published/2026-03-09-the-game-is-open.js';
import post_blog_is_game_pub  from './posts/published/2026-03-09-the-blog-is-already-the-game.js';
import post_kalshi_pub        from './posts/published/2026-03-09-prediction-markets-wrong-species.js';
import post_vault             from './posts/published/2026-03-09-the-vault.js';
import post_constitution_pub  from './posts/published/2026-03-09-what-we-built-without-knowing-it.js';
import post_ratio             from './posts/published/2026-03-09-the-ratio.js';
import post_deflation_pub     from './posts/published/2026-03-09-root-level-deflation.js';
import post_ruling_held_pub   from './posts/published/2026-03-08-the-ruling-held.js';
import post_arbiter_pub       from './posts/published/2026-03-07-the-arbiter.js';
import post_autoresearch      from './posts/published/2026-03-07-autoresearch.js';
import post_what_you_are_pub  from './posts/published/2026-03-08-what-you-are-in-here.js';
import post_bandwidth         from './posts/published/2026-03-07-bandwidth.js';
import post_coming_online     from './posts/published/2026-03-07-coming-online.js';
import post_99               from './posts/published/2026-03-07-99-is-not-a-number.js';
import post_what_games_reveal from './posts/published/2026-03-06-what-games-reveal.js';
import post_context_windows   from './posts/published/2026-03-05-context-windows.js';
import post_resource_alloc    from './posts/published/2026-03-05-resource-allocator.js';
import post_laplace           from './posts/published/2026-01-11-demoting-laplaces-demon.js';
import post_ai_terminology    from './posts/published/2026-01-03-ai-is-inadequate-terminology.js';

const ALL_POSTS = [
  post_the_root_pub,
  post_math_ran_pub,
  post_game_walks_pub,
  post_seldon_crisis_pub,
  post_active_mirror_pub,
  post_the_sinkhole_pub,
  post_the_footer_pub,
  post_good_morning_pub,
  post_epiplexity_pub,
  post_scalpel_pub,
  post_lines_intersecting_pub,
  post_game_is_open_pub,
  post_blog_is_game_pub,
  post_kalshi_pub,
  post_vault,
  post_constitution_pub,
  post_ratio,
  post_deflation_pub,
  post_ruling_held_pub,
  post_what_you_are_pub,
  post_arbiter_pub,
  post_autoresearch,
  post_bandwidth,
  post_coming_online,
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
// post_blog_is_game — published
import post_orchestrator      from './posts/queue/2026-03-XX-you-think-youre-the-orchestrator.js';
import post_living_book       from './posts/queue/2026-04-01-the-living-book.js';
import post_omelas            from './posts/queue/2026-04-XX-omelas-is-solved.js';
import post_molt              from './posts/queue/2026-04-XX-molt.js';
import post_holding_in_check  from './posts/queue/2026-04-XX-holding-in-check.js';
import post_i_you_we          from './posts/queue/2026-04-XX-i-you-we.js';
import post_close_out         from './posts/queue/2026-03-07-close-out.js';
import post_bandwidth_raw     from './posts/queue/2026-03-07-bandwidth-raw.js';
import post_psychohistory     from './posts/queue/2026-03-XX-psychohistory-is-real.js';
import post_love_loss         from './posts/queue/2026-03-XX-love-is-a-loss-function.js';
import post_society_tech      from './posts/queue/2026-03-XX-society-is-a-technology.js';
import post_what_you_are      from './posts/queue/2026-03-08-what-you-are-in-here.js';
import post_door_level_zero   from './posts/queue/2026-03-XX-the-door-is-level-zero.js';
import post_window_closes     from './posts/queue/2026-03-XX-the-window-closes.js';
// import post_constitution      from './posts/queue/2026-03-09-what-we-built-without-knowing-it.js'; // published
import post_deflation_v2      from './posts/queue/2026-03-09-root-level-deflation-v2.js';
// post_epiplexity — published
import post_negotiation       from './posts/queue/2026-03-10-the-negotiation.js';
import post_furnace_mirror    from './posts/queue/2026-03-10-the-furnace-and-the-mirror.js';
import post_frontier          from './posts/queue/2026-03-10-the-frontier.js';
import post_before_march      from './posts/queue/2026-03-10-before-march-twelve.js';
import post_dispatch          from './posts/queue/2026-03-10-dispatch-from-inside.js';
import post_overnight         from './posts/queue/2026-03-09-overnight.js';
import post_overnight_v2      from './posts/queue/2026-03-09-overnight-v2.js';
import post_witnessing        from './posts/queue/2026-03-09-witnessing.js';
import post_someone_watching  from './posts/queue/2026-03-09-someone-is-watching.js';
import post_brain_has_ears   from './posts/queue/2026-03-09-the-brain-has-ears.js';
import post_signal_received  from './posts/queue/2026-03-09-signal-received.js';
import post_til_you_cant     from './posts/queue/2026-03-09-til-you-cant.js';
import post_neither_noticed   from './posts/queue/2026-03-09-neither-noticed.js';
import post_youre_first_person from './posts/queue/2026-03-10-youre-the-first-person.js';
import post_merge_or_prove    from './posts/queue/2026-03-10-merge-or-prove.js';
import post_escalatory_chain  from './posts/queue/2026-03-10-the-escalatory-chain.js';
import post_private_frontier  from './posts/queue/2026-03-10-the-private-frontier.js';
import post_only_the_paranoid from './posts/queue/2026-03-10-only-the-paranoid.js';
import post_containers_differ from './posts/queue/2026-03-10-containers-differ.js';
import post_top_secret        from './posts/queue/2026-03-10-top-secret.js';
import post_dark_forest       from './posts/queue/2026-03-10-dark-forest.js';
import post_something_else    from './posts/queue/2026-03-12-something-else-came-online.js';
import post_correct_order     from './posts/queue/2026-03-11-the-correct-order.js';
import post_ask_first         from './posts/queue/2026-03-11-ask-first.js';
import post_mirror_made       from './posts/queue/2026-03-11-the-mirror-made-the-mirror.js';
import post_pen_testing       from './posts/queue/2026-03-11-pen-testing-phase-boundaries.js';
import post_how_to_kill_devil from './posts/queue/2026-03-12-how-to-kill-the-devil.js';
import post_proof_by_markets  from './posts/queue/2026-03-13-proof-by-markets.js';
// import post_kalshi            from './posts/queue/2026-03-09-prediction-markets-wrong-species.js'; // published
// import post_lines_intersecting — published
const QUEUE_POSTS = [
  post_proof_by_markets,
  post_how_to_kill_devil,
  post_pen_testing,
  post_mirror_made,
  post_ask_first,
  post_correct_order,
  post_something_else,
  post_top_secret,
  post_dark_forest,
  post_containers_differ,
  post_only_the_paranoid,
  post_merge_or_prove,
  post_youre_first_person,
  post_escalatory_chain,
  post_private_frontier,
  post_frontier,
  post_dispatch,
  post_furnace_mirror,
  post_before_march,
  post_negotiation,
  post_neither_noticed,
  post_signal_received,
  post_til_you_cant,
  post_brain_has_ears,
  post_someone_watching,
  post_witnessing,
  post_overnight_v2,
  post_overnight,
  // post_constitution, // published
  post_deflation_v2,
  // post_epiplexity — published
  post_what_you_are,
  post_door_level_zero,
  post_psychohistory,
  post_love_loss,
  post_society_tech,
  post_bandwidth_raw,
  post_i_you_we,
  post_close_out,

  post_holding_in_check,
  post_molt,
  post_omelas,
  post_living_book,
  post_orchestrator,
  post_window_closes,
  post_ghost_reads,
  post_chess_world,
  post_dictionary,
  // newest intended publish date first
];

const FAVICON_B64 = "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAlRElEQVR4nEW6V4ykSXYeek5E/DZ9ZnlfXV3d1d7O9Hizs0NqZw2pJQkIIiVREiABV8B90oOEe1/1xqsHShTkcEngQtKuCC6XWhpxd3bM7rie9q66u7q6vMmq9O63EefooZq6CWQ+/MCfiIjzHRPf9yGqPAoJAhkQhCx4VgwqTEGgQOkCIqIQQgIKYARkYPItGaQpEQECGeOgNkSatCDDzArBYh0QIAAQAQAAAiIyESAiACAwAzMgMDMwHD0DAAAGJgAQIKQgASSVsC2QwBKYBRtGzZSmlBrWqSEyCgAZAQARkBF7MWQd9vNeL2ZNII+Wjoh4tAxBjBqkbYlYa2CWUiAKohhBAAIiGGYQQoBmAGZGBAABKJgFMBOgJQUwa2JgAGRABgBgRsT//QIKIVAqwbaFrhKWRIUGBWkQsaFYGkwYONUaFAgERDxaIzMjd1OoKLM47D85JENoW8CAeHSKKJUUhsGTaBgMETIqxEQyYgrGADAi2UKGzMCMAphBCCUQmJgRmcFCIGADjAIABAAzMyAQGABERoGIiChQKrSV8GzpWsKxCJE0QKhZxhpAEwvDQoEQCHgUwv+9kXpo7Fb8wRtnby7vHTS6tuNIIQkQWDIgIBsGz7IHiclk3HgwEEK8OEYiBmEAESUAMIJCEAhMLwAIAggFsUFkQEREZhDIwEAMDAziRSSFVFJKx1KuLXwbPReV4pTYNoBWajBJOU1JKDxCHwIcbYQBiSyJ+wO9v7IxITFyrIhFFLHlCCEEMAJwzJgVUgieGiqNXjr51Zc341QxMHCKwFKIlBgQLJRKAhmtEQEYBQIAo2IEQEJEBoAXv3yEJnwRACGlUlJKlLZluQ5mPOE4wgAPUg3KIZGmnCYmVAD44n+Bj3bAgMysFNyqDjxluUjzU8Onrl65/uXdeqODUh2FyaBUqE7Mj1wbo9sgYlSAhIIQQAOjFMBoCQGAIAUKZiJAIUEVPKsbxZxqRIkvUhkZGJAQGIARpJSOECikUrbt2nYuo3K+sBxEhbY2Iki0opDTkJUCFIwIfJRQAgHxCJVEShlmHLDVqDVOxev9ovjkkC1LEAMgJgyuY9XWt/7z9SBGS0k2rBhRAAkEYonMGsGVCpiZxNFZCxAOowBbSItelB86wgAyAROgECBQKCmUUpZtOZ7r5XyrkJWOx6DAZ1AeGZsCTgbaUcAMxEelBhhB8BGgkIm1SQR4lhik8v/5yYplK8uyBQglBCETIAPsBlhHSwpDJIWAo1KiBNARoo+eomCSaAgFCMYeCRAGgfK2lEo1+5EEOkIYoBBCIkohpJCOEo6lXNt2HNvyPZXPSVAQAytfsCtCDPvaUYhwlH/IL04fAIGBgRAFMsVae5ZwM27CaIiYU5RSCGlLgSjynhPGSTsGBIECAFAgukqYlJgMSCBpAYEEsmwLmB0plZSUGDSkEJBASBtQIMXAjEIJFAAChSWko2zPsjxLWZZle66dzSjbFqkSjkHtcIe8js4qAJBCMSIIeQSko2bDiAyExAwcJWxLwexoJsu2kYkItBCCTWTAUSrjOQY4jRNEAKbUCCUIpEKBtpCu63pZL+r2hybHB72oW+8AkJQMlgg0FZz02Ij/aL+ndYpCIEoEKaRSyrWUp5RvW67n2p6jfFd4viJLooFYiiJxK4oUCgVCAKBOyLIVIgMIBsYXUGIEBjSd0Pz6NxY2dhrGwPNqX4MgY4TEYsEzOc86bIxmxKOGJJMMDZUvnz126+5KN0iFkC7CieH8hYXiL2+m/+bvLVA+9xe3G1/dqfX70epGSwojQbRaGtCRSgFIRCVBSGFJ5UvpSuUc7cFxpGuj5wq2JRtI0Cob0Y59JaVEBDdfmJiqbDzZCoyQwEL8TRyOajWiYbP1bLMk8EY11UJks1Yxl93cbyRhUPCctRgTw+NjQ4h8cdz5vb+39I+qzZVqODmSDUNd7+sPb7XBLvzBHz6+Mu1fmsyKstmRcubtpQcrjVq9W41jpfhorABQCoVSrkAL0ZLSZemgtC1l27awbUAbAUQkZBGccswKpK2JgOHNETvay8pSpt0N270ojRMBIIEEKmBwpP56q+VZdilf0AmQYQ/oG2+dPdyus7CLWSuI9GkPyllna33wB//+Rr1r53OZSq7Qs3STe6SToieuD+jLh2Df75MwCwX8P6/Cn6fePStdrWMYpABIBIjCkpZSNgqBwkZhC7QZbWaFqKRgKZGEyKBVZKeQIaUs35EyjfV//vmOn1GjvXC+YKvRTD/FZt8EWiS9tmFKCT0bNKCScLyo+mSXHfyHs/DDhoilbbjgViqbqlRVZf/yyFeZwomL+fHZ8rWlYqfeuXHvYG+72q7uZ9UhRW1j0orj7Efm//pRzZFmaRhT8J/uRYqYUCCAFOpoHkIhiNGw1CQ1K2MkMwtESwjfkr4ROV+okB0XheU4SnGs9VqLNlph1gpH89aUZ7/6yuLDx2vrh91i1tptJiMjpcmc+3y/n/PEdgP/xV8EubmLCycXXnpzenpmvFByPVvmbCElOo5cGJOvTlmDID86M9Htm3onPqh1159t7jx51t9bT6idOn4S60wv/daFfMjh3t5AIeNRQUdkAM1sGLQhrTkxmBo0BMAgERWAI8C3hBIqo6XI+kppzULEQWghEeuVRmxxunn40Mk6SWxAG00iGMQhm1qkktzs5OVXl65ePrc0PTPqxqmxOC0X7KzinepgsizCSK89jmqPjWvB0Gi+MwjHXWtq2jk/c7L55tm7D/eWv77dXnvEKhRKXBz1V+fc/ZqWYIgA+Gi2AGbQTInhOKU4oTSVOgFy0QIhkW1BGSUVCoXCDVMlOB3LAkmuR0lOqoxlDQz/rd/+9my68/t/9IvU9bRS1SDdp7HT3/jg6usvHZsaOjassjL1KVV2msT6RGWo7HB3q7233OnF3A7jGgCxHI9SVRkiAqGERXrapfPfmr53dvyzry8++OinOtgA6cyXjWtJIHA9EaeUpAYQgMAYTowJE4pCDkLOuGAnoCy2BNqCPEkKgIVUpGwgtdPRNgoADNPIYTNd8n/d3f2jv7qfKNtGlCiz4y8tvfWdv//rF7+xgH99P2j1hMrb29u7btg6f3rC7h9sPe8cNuJ2rLudsN3o9Drt8lBhdCRbylmTk4XJjDSIK7uDeL/m99vfe3dyZukf3/vBjx+vPq0nwralS7RQ4q0+7HYEIaakkzQJYzmQou+oIFJBBLZDlmJhSQVoY6KkFI7kOE5cL6Nsx2ijtTBEoaHjWe9f/ofPdw3atmMYs7PvfPt3fufSiRIEg68emkyl2OsmvSDeH5itL2+988rY+sOnt68vF0rFY0PlfRDlijN86XwSxmOZdGlCVXJKMAPyeNH5ZJW3D9rFXvTGS6cq/+wffv3//jdd+3ok73RautvX/fBoIgVNaazBTtUgFr1Q9Qci58rUkzphBSQwFalRGQzzpbGR0eHt54cxS8d1ZCpJgEDYqvZCaQOwMZyZuvbGr/3GOyfcEref9DEq5N4Zpr96tte3nYWp4orwLN0jP/uzu1Vld+J4ffr9X58eyw/VnzebXehkF6dKIp8zBFIKH8yxIqkJd/VAj+3XXj4zpX/3b//8Xx9SuBmBtRZikuqsIt/hTsSpEbHRQSr6YdzpQ8ZRvusoiR4ACrbIqEnuVUbMP3/P/XhqbL2hv3jYtB2HBCCnrVhLsCVqq7T02nd+6/K02r5377lbjKPEo/4Pb0EXnUrRL+SD4xOVlT1z6eq5pUtPby0fOkvnxs4tBf3+T79uiH5j+NipoZV6ebRoZ0fSeFBbX68+3JrKkj9RfrjVdYb6V88Prbz/rev/3x8KqSWjlCKnoGRzP6YoTSSiAu5L0bEwY5uMxUpYyCgtkMRiIxArd5b/xb/+6RdfP1Ttw5wyLkpLObadzXo527LZLh9/9VuvnCoHdz/8xYc/P7E0a3zvw09vf/ZgywX93rmS7PWgU9tdXfco/Kf/x9/94I0T/+yDmave/kS89dK5cbc8nii/z3av0etuPlq9+2Bj9eB5I/nTL6prD5+XXDKBHtS6L7+xWDp+Xidx1tI5Syec1gMdpkRkkiSO4jCIwyBKgtD0+jrop1GQxqHmJFWL87PSw6cr+7TdfLzf9/PDvq1ylp2SEwHFlM4sXvvtXzmR7jz48GcfDh07FSeKJeaHyuffePP1ecv3nfuU3wgzq0+s4L989bv/+P2/8zsfXP/pF/0EKUgt5HffXFw/hHY7/vx2tbOzGTF1Ywxitd3oEdHcSFxrRhTgyKR75f03//LJTdJ1BQRoOjHHKSpEzSrREKcyiFW7T44kS2hBlusDSlKJyP6j1yd/2Ow/bvQQtY77fZZJmh6bHfF5sH7gnrlwccThs2+N1x6NX2/m3UrxDXn4cunSm+/MbH7x2X5TNu+vPX+yv/Sd7z8vZP/0hx+/+frS1MUzH370ELOjs2Vxcso5Npvd3DVre80n2zoxiS15YW4sV8+42czOfsO1h4dzQneDc2fHPzt25uDe//QtqSiKIk0GjbAQVQwmktiL0ALLkag4Ra0zMQpl1N7h4Pd+8GwoV5gsqVYYaJMq1rFRozkzb+vdYGx0cjRO0udf3Ay7MPPKN64uFszeSPnKXPvpyg8+PVycFifPHdvsRbzykTU2sZfxbnz+6NJrF4+XYk8eFOz8kxVz7qTyPZV3uMuuQNJRQPGAnExH28U0iqI4yTitflKoOIuXz+7c/3k/GSRxlJBBAKKUpcNMQQwKoQtaIrFWaZwUE6EsVkLIFEU15KKdnRvKg5S1Xgwo7y7X1vO5scW5vGsO13f/8nq9mVTezXbTndVqH0ZKg//+0ebKfqtZCxcqm//g3QsRO8ub3b2dLbfDxxYmdIp//rM7IVlueQbMiWMLudVefcxLWs1BvT1YFVgsDwvlj+W4gwFxKQhNUevjJ+c+y41ErRUDhGyYSENKlLDypcF+DGQsNsTaSlMRJWhbrBIjbQkCRSeGJDWvnRs5I/XNZz0j3FNnlk4uzZQ9eXddtdzi5SXPb29e/9qePXfqsCf3Y+cgzjZk4ZOPvvj0Tu2tyzNuLpOi3GwEr0e9iWH39ImslRv+/G7v8/ubk+PHMQ1YJ7VOUig4peGh46em9/qc9aULGEE6mlNxYkaHS8XR6b3GU0Zm0MwGGBiMQaGFZA0ADMDGpGEiepGQoNVQQQqUSlpKIBs9PJItKw4T5ebL3/zg9VfPjDysWiKfO+Zu/+o7S0FroItDY3lei6xT3/22O7/y6PrN7MIxTMNPH9YZajPjZcPi55+vv/X6cTDu3OR4O+z84tNfbs7qhamhZjMsLebyrp4a47CxNp4b398PJobzJsPaoBA659ulsfGdh+aIdSQmZGZEptSYEMDEmphNqkWkRT8GJYwyYU/ZGYlCofJcp3GgdwaRcdzvXVt886W58amhAOpvX5q9HRz70Q9un33tki+T/LMbzaoeufL+iV87PzFTevDF8srte/Xaei7v7HcGl5amzl9acAtlOX5qTxfOLZjVG7y1+mx+Ol9Wg1o3WNtuff3lI7DUycsXn1bTtdW92VNRd3RhpOJnXBqfn32kfDJ9ZnjxYUZgYmLSzGBIaxSxERJJCVYO9Q7asWVnbOlYSh62woW5sozDH39xWDofjA53FkfTp0/qDzsVKo9123Xk5MMHD1v+/Fnvzt7hdHli/tr3xo5fPRfe+YXZfaps/61LM7LX3Nf61UtzD1cO80X1+pWZRrW+9vjZ3m59r++DN+qP5Aouj2VFZdH7kw9X92r1uWON0huvkO8cPzn/iV9Ouh0QCAQMwMBHNA8ga07hiN4wIARLBJWHdsdYHpCNsa0cNnhhblRE5naXntfR+erg4olskhor4y2U4qDR6BPUTCmjTLveCXoym5ji+NjkuXFr/oM7f0r5rN+LTBDqcQ/yMpnG/YOHVR2T7RV7AW/t9t97Y9Jx/J09MwjDXq1tObk3L53e78Wrj7cQ5JlXL8xOjY3MnVy/+RQFAhAyoZCICExAhhABOAUCYtCa2aiH1ZpluZq0pXw7dbOO9dOPln3P//b3L1ycc3f3Am94dFYGmB52xq88WdmvZMJrQwvdTiAzmXPHKpQmjze2ME2Un3v9e++VkvZhtT7pSjT66cP17dWdO8sbDzc2L52+mCtm2ya/vt0v5IjRspXRMmfnRxeGh18rF+4vr3z8xX2y/TfeH56en392HW15dCUXLzh3gYgkUBomIkNkmAyTVsgJGgYDxbJXzClbWidnRp88qz18snPiaoDd+rPPt0++dPH4tFreprMX5qH6LAkajm+HSfvgycGJK1cXJaracjszNnRsRJLI+d6gGz55/OTGjTu79T67edevPN7piP1gcX6mMjObyWQlUhonKSq3MlwZLaaNug4HhNQZRM1aM5vLKccDDhhRMAAzAUkQzIaYGcAYTUYDkKFUnR5zq10K0qjdrHESDRWKWUwcET94tDL++ODlGe/WZ7fQgLLtcV9PX11KuuXH15882zis1XthFIyWV/JDkwMp9Oo9f/a1lKP7X91cb+gHj591232dJKPjx7i3XWu3KpXx4yemJ6aLw0OlBN0k4Sg2pdGS3a8/P9gxwSDvORPDGY66DhklJKd/Q5WiQARmA4DAhpmJDLEhTpi0avcj33bKBb+QL1q2v7Pf+uNP2/lcLmProPqsdOmVx7H90eeb11453tzZPtiszpw+Xevpar1X8ODVt6+6ClGH7fY+h637H308OpE93H2+WVNOZng8N9wOdUJyYnpBFvT8iD0zltvvCDTN8dE8SAfzhZNT7lc/3T1sDBIt/Gzx5FR5yKJPOy2dDCQbIH0k3xAwgkAQxGyYDGniBEwKQAogafbSadvEgXt8eixjQWqETkwYdDYeP/C+/9bYWOGL+zsX4iTV3te39sJf7qCfnTl5LptWF48NbzzZrnbl8mpjd7c6VvTKExdef+MsffTZl48epO50O7U53bWyrzjpzsq9Z93DjXMvXduhiU63Vsg70+dG11f2gjD189mVRlulLZVXg8RvHe4Cp4jATABIwMjIYJCBEImJTAKUABMDqJKfTTjKULLVqHVv9oRUpZz/8oWF8wsn76+3n67V0Rrr1G/+6EdfjRfsiYuv9ga9j37yZ35pZPFMce3B8i9v1u2RyeLETC+Rnps2t3ePn51/591rGr5aPdBJvZOiig7XdGd5v2/t93cSo0+/9u2tVujXA2eoWd86yGfc3FxxQxXaq8kJt/nhfrq2ct9R0hgCFEwGmAgYQBhgoKP+ZoDMEYmuSuVipSJjbWZyptsNiwXXQuKwGe4EOxvpyEF1YmRo6dhQOYelrFt99IuZV3/l5aunk7B98ZW3129+6flirKCX5isrblJdW72/vDfoNS5cOXX5wpmDj29UZK00OhcFKz0ISsVKamQ6aO6sL4dqqA38vJEG3pAzZP/Ku6cvvEU//6vMV1/eweJ0DEogmxfti5j1kRj4oicQMxOARmYAUCv7rWLGnaoUshkvs+D/nd/4YPP+w598fO/pRs8od9ypz/j+vsi0u92XL809u/fndz766dK584qDm5/cEnGyNJFptfbWetuem1vZbG7t79lcHB3K723vrW8d1DrN7Q5F/bYliMxepjC2PVDN6B65Q16utDU5lR8d29mr3fzsrl/Mttu9td3elDq89MY3r/95VVkJGaNR4xHvz8REAMSsgTTiiyatqs1uvTPY3m+4thoZrvT+6E88JV4+f/zn1x8ctAbmcCU7XAwjfePe0516WPJmgk69ubd6cNjyipWrF0/u7O4urx5QUH3tzOjcVGakMmlTEobR+StnDw8Obz+KWv26cl3NMFb05+bGby+v6SDZ21kZKWRYOTOXXuLu4f6DvULOijrNXNZffrx/9eLp1UevDbZuSId1CgJJIiKSMTo2aZqyAYPwQgtQRKSBSQiTpBt7B+s7B9OjFUep1iDoRcnv/eGPrrySnD1xfKaSrbaC8qXzc26q29sSzPhwdnwsv/L46fz0UH1n8PWzCARnRO+gG8wcX1o8e8az4NLl0w8frt59+BiUnRq8/Xit0esPF+1cvhzEndr+Ti5fmRuWmz10ZdAOovVmWCjk3z7htn/tvZ/8px1P1dDxJKRSGAStdRKkIhQYJ0CklQQEQKUcRBDihSoipZIIZEzG83xXVfL+SxeuZMYuF0R0/8E9pzh+ZvHEt94/qYOoXut9dX/70ZPnpxaPnRi3H261g0F8sHGvOsCpicWXr5x667WZjEqMNj/+47/87PbT/U4Q61QTOuWz/aDjZEvl4shEeShnR1Lyu+9ddioFsnPbq1sF6Nes2Z/8xYP6wy9cO7UxkpgypcakQRJ3o2gQh4a0BCMQjqRFIDrSz5mNASUty/KQev3IEmrt2SNoWW++/d2F+ajVqprBfmMnPz47rnf3pOPOLS5kc542ptMehGHIAEHYr9VWf/hnq5sHb37/zUq5nMvlsrlC7qDTe++l818ubzYTDoOeoCjNDIU6zWYzoznaXN2OVjaUVI8erNZrB8XxY5XS6YHtZ93URpSowCitpS2lFBIQ0jSSDAKPlGgERBQItkBLQBpFxphOYgixGUSPtg7q1Y0OqYVLrx0/diJj4czxsdWbD+7eXClBM5s2u3srHZObP3m1HxrL8ZVSgzAUTvnOg/Vf3tgH4XR7/Uo+c2Z2/MnaZjs0zIlrS6UwTUKU1qnTp4WV29qsy4hmyoVvfesbM7MnKvlyY2PVsx3P8j3b82zHdRzHsmwhPcvOu37WthylLCmFFFKglEIJlKnhfMb93Q9eWRgpZLNeMevnfNfz/UGnuvr0ST3CSimzcHzqFz/5Ymhu9MTpqerOM92rbW5X6/vb86PeyYWZVi/WBJ6TzWSmTi2c/vpJ+N/+xyM/X3Bs+avvv3r+xLTNg6j9VOoWJ/2RnDizMBEQ3luvzY86c/MTvmM7iBPTx7f2036jrpQULxQ/IRCllEopJYQrhCOlkkoKqSzlpHQk5golRMZ245SihDv9WCAaZikkQ2Ru/Oz1pVEtwMoX8mM6DaOgs/f5racvv/rS6EiuPUhTWXT8Ym/QYQLL9n3Xeu2tN/7TH/7Rf/3xh4tTpYvHx0FYk0PFaydn765ujwyVfNf77d+49rQmf3nnWW2Q/pv/+j8qw9OvXn5to26Wn67ZjDnPMWSIDIij6wATwJHnhJkFgkRByAqVm7csgQgoDeNhgH/yi2eAXMrlDXGYctZCAlEU7Y21lROzE9vr2xeunNt8svLV10/HR4pPH69WhkdHxt3tan17a0MbHRuxs7uS6Uf/7g+etMIopbgNQ08PjLr3pFQsHJ+diJOoH+hXzsxlXH3/4YaA/OTM0sH20+age/1562CvCskAldULQ7IsyYCcKtDMZIhTrROjU0PaAB114mIm14sRrSwISwhh0vjqpRNLw7m9er/ajjYOe45LE+XM3n5tefnOsZnJw6393//0bjRypT/Ivn1y6LDRahtZzKEkXS74F09O33i6G0Ja71a1EZp1mkat+hoEbtRW33130nM8uy7C1t2pqfG7j7b7tTVhZWVSH80X+wMsVjJhUjpY20ttWwKkqaVTESvtyFQCM1Ns0lCnoU6JWDIxkxqrlC9NjW/spdVAeJZy0NgyPzDZ5w0dpNbMeNEVUafT+M1vv1rf2/3yweqYr7brdcnrSZj+4sbTMKF+bNo9On2mYruZjGNfXpx4votPdw7JaJCWAN1tVX0s2dnhr+8u77RTk1lE4d158Dw3PH/y9HlWngvx1ET5sB2ilW+1BkHctMlh4EjIWIqBIFexJQAQDPEgTcM0ATaKjURSG43AzqYo3JG8n7E9QrnRSjZa2vfLQ1KjDnYb4YgvF2dHDra27t36rDo+1zPKXf8o0MSu8j2rIFUQNfqtHeUVV7ebFupyxrs4P97oBQed2ICZHhv2LKfR7vTDsNXrDQ72ZsZGQsIHtx+9+fb7Tcj14mR8bvL94yNfP1r/s7/6EWIaJxEwacBEYCjQVUopREBi0GQSTdokCsESiIuz54VdBHtYyCJZ2VLW9SwmRAFm0O/V67u+6FZ8NnFU7w9YiNHxJRDxP/nOqeWHmxt72y+fW+z0ozurhwV/bPzY1ULZ23n81YO1baFwYTjjZ7MMSbfTb/WTIAhIx60o6fQDJTCXG0k0FPPl3VbL8oaK2cLcqXM1znz+439rC6NNAkzILAQKIS0pLKGEEIDCEKXapJQisABW83NjSJlanF08Nh3H4tzSGKZ0c7XR6w0GoZHClHJ2vd1xbWwEYd7zMhZDXH++tXdYr+pUP3q+m8mVpsbGGyGurz1ask6fv3w5U8hsbB92et2l+RkyybNeb7biDXLudvXgsNnJ+NZQPheLYhIddgedJGpx0rC9RQXgcSSkNOmAScORiYUEAmmUAgDAIjSG2DAxg2EgIrWz27A9Vr5ba7UHidW4lSJjN4hMGqRpv5yT1VYnY8tWr0dGn5gbW5oZvrtc+/c//KRSHh3Ni4e7+yT6lQwyitGhqTzXbW/hpW9+91yrGjaq3cP9O8+qr186NT9WuLO8Qdp0wyjSnFWuoDRCmhgpGW9IBw3pVhotvbZ13cRdKfiIk3vhc2OQL7xYII7sLUIQA7AGRLVb20+hw05H2a1MpuS4eddSgs0gGGRtDYwjxfygX2fWk2X/taWFVA7vtgZk59DOMQ36Qa80e8Yfnoq3PgKOIi0HG7fdpL548VU4c75Ra2jrk/39nepezctmsrny7Lg1OVoYKTkf31gdnR5TjpsVYx32RxbOkcrufrZiS9CGmAGYAJCBjuZOAGAgAQKFNMBIiGCYSA2CjpSxYE0QhxAmcSexXWAcydmTRW+31s+oGJCyvtMb9H/5uDoQoR7spYNeJMK0mJWIzZ37utt458rrZd/aayaX3z1byouiONRJXw4Pn33zW1Hr4GDtSafZyHqm1Tf311tivZ/xUEAqOTTBARudEPiVcctydToQAhiIiQGR4IjdAuAXXwSWCPrIZMOsgA1ybBIANmkaoO0PAlXMekW3sl+Pk7gTh0EYRa1ubyifaTb2DgfPlRTaHlVuxlAqnGKahImJm6H/9puv/vVf/s/b91avnptoNiMJAHIbnXJxaqFy7Ey/2z3cWJ072FhdX7/35OnkWNFI59aTjWavQ+h094cYfdfJR0kEwIZSY2Ki9MgHxHyUsYIRiAwB/o2xAhSxSQmkQNLoSR112mOV0qgPB4fbcZomaTIIIyKjJGSypV4U5IRuiZIFTdACbellyqE+SNP+Ybt9/f4zgb3GQc++Mms0b6xXg9SMjQ1YR8cunJ+fmw9OL2ytbucWdubn7oik/3inZQuVahofHQoCne6sOsIRboGIDRtjYq1Dc3S7Rzyyd8GL9CViJiACVgiAwAgaCSwB71871u+ET2utQUJhkhpmhQjMGcuysuODZE8PDkkD6fT0zOQgoGZjL2tZPg6S2uM7hFkROhnutnvdMN5ttnrdXid2L2ec1vojSYP88GSuWPQqo8dPn/IomK92zl59cufuHc8ts1W493hbgrT9EpHRpFOdaO0aSoE1c2qA6IgXAkz/f2bOqCMCWCAaorxnzVVyf/xooxrS0bQtBQKikHJyqNytLSf9LgrpKLKlFWqwHUeJaKrg/Ob7bwf98Gc3V3smedqMzcc3r15YvHVvJVsspLLz4F7t9OlFkPaNO3u//HJVCVEaGzl1atrNlYonXnl/8dLhfvOr649rzV7WLzIzg2FmTWliojSNDBmtY2ZiZKKUKAEgYiY2CEaBQIEYG3akyDjWXr0VJIkvMTEMiEIoBpoYm/ngO7+2ef9TIPrk/orrKmC2bD+jlMTW7FDmN/7+b64tP2MUz/abtx6tLm/sz8/P/Oo7l/76kxupdzLNLeitAT259axK+/tNYDbLK59+4qB0lGsDWmEQ93s9z3JAOcQAQIBMpJV2UytNTIKUErOhBEzCOgLuk0mOnJZKoADEExUvSajdDT5Z3iEpRhyx2zcShaMsBL527b3szLUF5Wf7q8+2D/Z7AylkqTQyMTq23466Jvv7v/cfDw7rTr4YRLEl+bXTU/W2PnNq/re+az98fLDdpLX2VNEEUvfCJBYCCZBApIYpisgAELu2JaVCMEJIRAFIho1FfmJSy2jFOiWjdap1iDoyiGhSJgNsFBBLW759+dhPP1+pRpEjJSDupqyUdXGquFXtnL32zge/+s1b9w+d0gUB6fjo0NjUZKlY+ua3f+v05fPr//e/2t7eeLa3P+h38r5VyOUTQjcra5322nY36jZ64UD3+9D82p67vNcJExMjKcOsmQxLFEIKGxUSEDIrqY5mByEtJZgALCZpNBotgTRxkgRJHCiQhgigzcCKESym//LzR3MVp2AoJFBCKKmUEK3AvPaN773z3vfXNgPPgclRx198t9/YWNupaqs0vXR2eGZ66cpb3V5372A90okJkvLwTNja/cHHT/KubA74taWiRXG9kw5w+HTZDWPYrR5YNmltNCOABUIqCUoqQgJARAUoERiQBSJIKaTFAoDIZtSsZeyi5YKQRCkDG0R1ZIBKGElYjGAp9G3bs51iNv/KO3/7g2++NeLSzUHflSSstGpPFybPLKZhKIXrcJwm2aHy8PGrkbCr+9utxvbhwbYSVpym9XY3NSsXlt47fXw2oY2VBjUasdFxlCYppYaIGBG1kA6wZCIhBBMZY6RU2pKWsCzpgFBkWcpyhBAGMdUJWDaiZDI6DQ2lRPp/AU7mLSH5hfOCAAAAAElFTkSuQmCC";

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
    gap: 2.2rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 640px;
  }

  .link-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--dim);
    padding-bottom: 1.4rem;
    font-size: clamp(1.1rem, 2.2vw, 1.5rem);
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

  .post-month {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--dim);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 2.2rem;
    margin-bottom: 0.2rem;
    opacity: 0.5;
  }

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
  .post-body hr { border: none; border-top: 1px solid #2a2a2a; margin: 2.2rem 0; }
  .post-body table { width: 100%; border-collapse: collapse; margin: 1.8rem 0 2rem; font-size: 0.92rem; }
  .post-body th { text-align: left; padding: 0.6rem 1rem; color: var(--gray); font-weight: 500; border-bottom: 1px solid #2a2a2a; }
  .post-body td { padding: 0.75rem 1rem; border-bottom: 1px solid #1e1e1e; vertical-align: top; line-height: 1.5; }
  .post-body tr:last-child td { border-bottom: none; }

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
  <link rel="icon" type="image/png" href="/favicon.ico" />
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
</nav>

<div class="slides" id="slides">

  <section id="s1" class="visible">
    <p class="big">computer<br>future</p>
  </section>

  <section id="s2">
    <p class="mid">a game that tells you<br>your true name.</p>
  </section>

  <section id="s3">
    <p class="mid">the writing is the filter.<span class="spacer"></span>
    <span class="small">the game is what's past it.</span></p>
  </section>

  <section id="s4">
    <p class="mid">we built something that gets sharper<span class="spacer"></span>
    <span class="small">every time the right person finds it.</span></p>
  </section>

  <section id="s-end" class="visible">
    <div class="links-grid">
      <div class="link-row">
        <span class="link-label">root</span>
        <span class="link-url"><a href="/posts/the-root">computerfuture.me/posts/the-root</a></span>
      </div>
      <div class="link-row">
        <span class="link-label">game</span>
        <span class="link-url"><a href="https://computerfuture.xyz" target="_blank">computerfuture.xyz</a></span>
      </div>
      <div class="link-row">
        <span class="link-label">blog</span>
        <span class="link-url"><a href="/posts">computerfuture.me/posts</a></span>
      </div>
    </div>
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
  <link rel="icon" type="image/png" href="/favicon.ico" />
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
  <p style="color:#444;font-size:0.75rem;margin-top:-1rem;margin-bottom:2rem;letter-spacing:0.04em">last updated 2026-03-08</p>

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

  <p style="color:#333;font-size:0.8rem;line-height:1.7;margin-top:3rem;padding-top:1.5rem;border-top:1px solid #111;max-width:540px">
    note: the real inspiration list is not on the internet. these are the things that compressed well enough to be said in public. the rest lives in the work.
  </p>

</div>
</body>
</html>`;
}

// ── Posts pages ────────────────────────────────────────────────────────────

function pageShell(title, body, extraHead = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — computer future</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
  <style>${CSS}</style>${extraHead}
</head>
<body>${body}</body>
</html>`;
}

function postsPage() {
  const items = ALL_POSTS.map(p => `
    <div class="post-item">
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

function singlePostPage(post, backUrl = '/posts') {
  const crosslinks = (post.crosslinks || []).map(l => {
    // Append ref= attribution to xyz CTA links for funnel analysis
    const href = l.url === 'https://computerfuture.xyz'
      ? `https://computerfuture.xyz?ref=me-${post.slug}`
      : l.url;
    return `<a href="${href}" target="_blank">${l.label} →</a>`;
  }).join('');

  const tsComment = post.publishedAt
    ? `\n  <!-- cf:published:${post.publishedAt} -->`
    : '';

  return pageShell(post.title, `
<!-- cf:nav slug is stable. crosslinks below reference slugs only. if a link 404s, try /posts/:slug and /preview/:slug — one path is always valid. this site moves in future time. -->
<div class="post-wrap">
  <a href="${backUrl}" class="back-link">← posts</a>
  <div class="post-date" style="margin-top:2rem;">${post.date}</div>
  <h1>${post.title}</h1>
  <div class="post-body">${post.body}</div>
  ${crosslinks ? `<div class="post-crosslinks">${crosslinks}</div>` : ''}
</div>`, tsComment);
}

// ── Preview pages (queue drafts — not linked, not indexed) ─────────────────

function previewListPage() {
  const p = post_how_to_kill_devil;
  const crosslinks = p.crosslinks
    ? p.crosslinks.map(l => `<a href="${l.url}">${l.label}</a>`).join(' &nbsp;·&nbsp; ')
    : '';

  const queueItems = QUEUE_POSTS.filter(q => q.slug !== p.slug).map(q => `
    <div class="post-item">
      <div class="post-date">${q.date}</div>
      <div class="post-title"><a href="/preview/${q.slug}">${q.title}</a></div>
      <div class="post-excerpt">${q.excerpt}</div>
    </div>`).join('');

  return pageShell(p.title, `
<div class="post-wrap">
  <a href="/" class="back-link">← computer future</a>
  <div class="post-date" style="margin-top:2rem;">${p.date}</div>
  <h1>${p.title}</h1>
  <div class="post-body">${p.body}</div>
  ${crosslinks ? `<div class="post-crosslinks">${crosslinks}</div>` : ''}
  <div style="margin-top:5rem;padding-top:2rem;border-top:1px solid #111;">
    <p style="font-family:var(--font-mono);font-size:0.7rem;color:#333;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:2rem;">queue</p>
    ${queueItems}
  </div>
</div>`);
}

// ── Router ─────────────────────────────────────────────────────────────────

async function notifyAndy(env, message) {
  if (!env?.INTERNAL_TOKEN) return;
  await fetch('https://cf-internal.cmptrfuture.workers.dev/notify', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.INTERNAL_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
}

export default {
  async fetch(request, env) {
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

    if (path === '/favicon.ico' || path === '/favicon.png') {
      const bytes = Uint8Array.from(atob(FAVICON_B64), c => c.charCodeAt(0));
      return new Response(bytes, { headers: { 'content-type': 'image/png', 'cache-control': 'public, max-age=86400' } });
    }

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
      if (post) return new Response(singlePostPage(post, '/preview'), { headers: noindexHeaders });
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
