---
layout: layout.njk
title: Ajith Kumar P M
description: Personal website of Ajith Kumar P M — product engineer, writer, and speaker. Thoughts on code, films, music, and life.
---

<div style="overflow-x:auto;overflow-y:hidden; margin-bottom: 20px; text-align: center">
<pre style="background:none;border:none;padding:0;margin:0;font-size:clamp(4px,1.5vw,8px);line-height:1;text-align:left;display:inline-block;white-space:pre;color:#e6c200">
  _--_                                     _--_
/#()# #\         0             0         /# #()#\
|()##  \#\_       \           /       _/#/  ##()|
|#()##-=###\_      \         /      _/###=-##()#|
 \#()#-=##  #\_     \       /     _/#  ##=-#()#/
  |#()#--==### \_    \     /    _/ ###==--#()#|
  |#()##--=#    #\_   \!!!/   _/#    #=--##()#|
   \#()##---===####\   O|O   /####===---##()#/
    |#()#____==#####\ / Y \ /#####==____#()#|
     \###______######|\/#\/|######______###/
        ()#O#/      ##\_#_/##      \#O#()
       ()#O#(__-===###/ _ \###===-__)#O#()
      ()#O#(   #  ###_(_|_)_###  #   )#O#()
      ()#O(---#__###/ (_|_) \###__#---)O#()
      ()#O#( / / ##/  (_|_)  \## \ \ )#O#()
      ()##O#\_/  #/   (_|_)   \#  \_/#O##()
       \)##OO#\ -)    (_|_)    (- /#OO##(/
        )//##OOO*|    / | \    |*OOO##\\(
        |/_####_/    ( /X\ )    \_####_\|
       /X/ \__/       \___/       \__/ \X\
      (#/                               \#)
</pre>
</div>

## Important updates

> 💀 **SkullMaster is in beta.** It's a CLI tool I'm building to generate UI skeletons from the source [Read more →](/skullmaster)

---

Hi, I'm **Ajith**.

If you're here on purpose, welcome. If you got here by accident, I hope you find something worth staying for.

This is my little corner of the internet. I write about myself, the things I care about, and whatever happens to occupy my mind. Sometimes that's code. Sometimes it's films, music, or poems. Most of the time, it's just me trying to understand the world a little better.

Right now, I work at UST, building things for [strollby.com](https://strollby.com).

If you want to know me a little quicker, these probably say more about me than a long introduction ever could:

- [The playlist I use as my Euro Truck Simulator radio.](https://www.youtube.com/playlist?list=PLo8UW92TnA_Zu3Wt7FL5xCkduVFhlpNQW)
- [A Bukowski poem I keep coming back to.](https://www.youtube.com/watch?v=Yhi6y1XWb-E)
- [Wes Anderson films have a permanent place in my heart.](https://www.youtube.com/watch?v=ELqdLvz60zA)
- [Talk to me in English, Malayalam, JavaScript, or Python.](mailto:anything@ajth.in)

## 🌙 Late Night Thoughts

{% for post in collections.blog | shuffle(3) -%}

- [{{ post.data.title }}]({{ post.url }}): _{{ post.data.summary | truncate: 100 }}_ **_(last updated: {{ post.data.publishedAt }})_**

{% endfor %}

### [View all blogs →](/blog)

## 📄 Publications

[EBPF-Based Runtime Detection of Semantic DDoS Attacks in Linux Containers](https://ieeexplore.ieee.org/document/11179973)

B. Niranjan; <strong><em>P. M. Ajith Kumar</em></strong>; K. Merin Shaju; K. Dinoy Raj

IEEE Xplore — 2025

> Proposes CODAX, an eBPF-based container-aware DDoS detection method that tracks long-running malicious connections via kernel-level probes. Achieves 94.2% faster detection, 0.92 ADR, and 0.02 FPR compared to existing approaches.

## 🎤 Featured Talks

### Engineering around Hallucinations: Agents, Skills, and Secure Supply Chains

<strong><em>FOSS Meetup — Kochi — May 2026</em></strong>

> Discusses agents, skills, supply chain security, observability, state machines, and LLM hallucinations.
> [Watch on YouTube](https://www.youtube.com/watch?v=VheGunPYQgY&t=3464s)

### Confidently Wrong: Why LLMs Hallucinate and How to Engineer Around It

<strong><em>GitHub Copilot Dev Days Trivandrum — Trivandrum — Apr 2026</em></strong>

> Explores intrinsic vs. extrinsic LLM hallucinations and why proper context setup is critical before coding. Discusses hallucination-resistant practices using state machines for predictable AI behavior.
> [Read the text version →](/blog/confidently-wrong-llm-hallucinations-and-workarounds/)

### State Machines: The Last State Management Solution You'll Ever Need

<strong><em>TechMang'26 — Mangalore — Jan 2026</em></strong>

> Examines how state machines address core frontend challenges and how AI enhances their solutions. Covers building with XState across frameworks and using Stately.ai for production patterns like auth flows and micro frontend consistency.
> [Read the text version →](/blog/the-last-state-solution/)

| Things I made                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **_💀 SkullMaster_** — generates production-ready skeleton screens by analyzing your UI. [GitHub](https://github.com/ajth-in/skullmaster) · [skullmaster](https://www.npmjs.com/package/skullmaster) · [@skullmaster/react](https://www.npmjs.com/package/@skullmaster/react) · [@skullmaster/excarnate](https://www.npmjs.com/package/@skullmaster/excarnate) |
| **_✉️ MailCSS_** — a type-safe, compatibility-aware CSS-in-JS library designed specifically for inline styles in emails. Integrates real-time data from Can I Email for CSS support feedback across email clients. [GitHub](https://github.com/ajth-in/mailcss) · [mailcss](https://www.npmjs.com/package/mailcss)                                             |
| **_🌐 ajth.in_** — the website you are reading this from. An entire portfolio/blog template generated from markdowns with 11ty. [GitHub](https://github.com/ajth-in/ajth.in) · [#TextOnlyWebsite](https://github.com/ajth-in/ajth.in) · [Read my article "Less is More"](/blog/less-is-more)                                                                   |
| **_🧁 muffincss_** — my attempt at making a CSS transpiler that compiles CSS into atomic CSS. [GitHub](https://github.com/ajth-in/muffincss) · [@muffincss/postcss](https://www.npmjs.com/package/@muffincss/postcss) · [@muffincss/cli](https://www.npmjs.com/package/@muffincss/cli) · [Read my article "Less is More"](/blog/less-is-more) [DEAD]           |
| **_⌨️ aria-keyshortcuts_** — a lightweight library for implementing keyboard shortcuts in React applications. [GitHub](https://github.com/ajth-in/aria-keyshortcuts) · [react-aria-keyshortcuts](https://www.npmjs.com/package/react-aria-keyshortcuts) [DEAD]                                                                                                 |
| **_🛡️ CODAX_** — an eBPF-based container-aware DDoS detection method that tracks long-running malicious connections via kernel-level probes. Achieves 94.2% faster detection, 0.92 ADR, and 0.02 FPR. [GitHub](https://github.com/Ziton-live/CODAX) [RESEARCH PROJECT]                                                                                         |

---

- [github](https://github.com/ajth-in)
- [x (twitter)](https://x.com/ajithKumarPM4)
- [linkedin](https://www.linkedin.com/in/ajith-kumar-p-m/)

© 2026 Ajith Kumar P M
