---
title: "Language study tracker"
date: "2024-01-28"
updated: "2024-01-28"
categories: 
  - "language learning"
  - "languages"
coverImage: "/images/filler.jpg"
coverWidth: 16
coverHeight: 9
excerpt: A frequently updated record of what languages I'm currently "focusing" on, dabbling in, struggling to maintain, etc.
---
<script>
  import Masonry from '$lib/components/Masonry.svelte';
  import CardMasonryItem from '$lib/components/CardMasonryItem.svelte';

  let gridItems1 = [
  { header: 'Levantine Arabic', body: `I started getting back into Arabic last summer, after the **Polyglot Conference in Poland** where I got to practice a ton of Arabic both with other learners and with native speakers. I realized that Arabic was the Middle Eastern language that I was the most fluent in, and decided it would make sense to focus on it even more instead of spreading myself too thin.
  
  test`},
  { header: 'Modern Standard Arabic', body: `I seem to have more or less reached the end of the line in terms of Levantine Arabic textbooks, so the other thing I'm doing is working on my fusha as well, both as another way to expand my vocabulary and just because it'd be nice to actually solidify my knowledge of the language again.`, links: ['www.google.com', 'www.github.com'] },

  { header: 'Czech', body: 
  `Have you heard? This year's Polyglot Gathering is going to be in Prague! As a bit of a Slavic language connoisseur myself, of course I have to work on my Czech a bit. 
  
  I've been studying a lot of it through Russian, since it helps highlight the differences between the languages. I just recently finished the Russian version of :a[Chcete mluvit česky? (Do you want to speak Czech?)]{href=https://ucebnice.heureka.cz/chcete-mluvit-cesky-ruska-verze-cechova-elga-remediosova-helena/#prehled/ target=_blank} as well as :a[Contemporary Czech]{href=https://www.amazon.com/Contemporary-Czech-Michael-Heim/dp/0893570982 target="_blank"}, which while written in English also includes side notes for learners who already know Russian.
  
  I've now moved on to :a[Chcete ještě lépe mluvit česky? (Do you want to speak Czech even better?)]{href=https://ucebnice.heureka.cz/chcete-jeste-lepe-mluvit-cesky-chotite-esce-lucse-remediosova-h-cechova-e-putz-h/#prehled/ target=_blank}, although I'm starting to think I might want to pace myself a bit so that I don't get tired of it prematurely - maybe getting more input from other sources and taking it easy on the textbooks until we get closer to the conference.`},
  { header: 'Amharic', body: `This is one I've been chipping away at on and off for a while now. I finally got a solid grasp on the Ge'ez/Amharic script and the overall contours of the grammatical system last year, so the main challenge is building vocabulary.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Hebrew', body: `The Middle Eastern language that I enjoyed speaking the second most last year was Hebrew, so I'd been meaning to brush up on this one for a while too. I promise I was already working on both my Arabic and Hebrew before the recent events in the region.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Maltese', body: `The other big Polyglot event of 2024 will be the Polyglot Conference in Malta this fall. Maltese is, at it's core, an Arabic dialect with heavy Sicilian/Italian influence, so it should be to difficult to get a hang of the basics, especially since I'm already studying a lot of Arabic these days. (In fact, I already read through a Maltese textbook last for no particular reason.)`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Thai', body: `Okay, this one is kind of random. On my latest trip back to Asia, I dropped by Penang, Malaysia for the Language Event being held there. But instead of brushing up on my Malay, I accidentally got sidetracked by a random urge to finally learn the Thai script.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Italian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'French', body: `After getting my C1 certificate in German, it's time for me to get back to the other European languages I'd been neglecting in recent years.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Korean', body: `This was my main project during the height of the pandemic, and the last language I got from zero to B2-ish in. I'm not doing much study or reading in Korean these days, but I attend a Korean conversation group here in LA on a semi-regular basis, so I'm keeping it up.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'German', body: `I hit a significant milestone in German with my C1 test last year, but I'm certainly not about to drop the language entirely right now. For now, I'm just keeping it up by reading a few books.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Armenian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Kazakh', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Uyghur', body: 'testing', links: ['www.google.com', 'www.github.com'] }
  ]
</script>

## Overview

A website about my language learning experiences would obviously not be complete without a section about what specific language I actually am learning right now. So here you go.

My language learning priorities have finally settled down a bit after a couple of shakeups in recent months - first, my completion of the German C1 exam, which popped German off the top of the stack (IT term), and secondly my short trip back to Asia (Penang, Bangkok, Shanghai) in December, prior to which I was working on Malay and Hokkien for a bit. Those have also fallen off the list.

It goes without saying that I'll be updating this page on a regular basis as I get distracted by shiny objects, which happens all the time.

Things get a bit blurry towards the bottom of the list, since there is a variety of languages that I'm still listening to, reading or speaking semi-regularly that these days that I wouldn't really consider myself to be "studying" or "dabbling in" - mostly languages that I am conversational in already but have neglected for a long time, like... Japanese, Serbo-Croatian, Hindi and so on.

<Masonry items={gridItems1} columns={3} component={CardMasonryItem} />