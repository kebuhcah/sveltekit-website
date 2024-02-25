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
  { header: 'Modern Standard Arabic', body: `I seem to have more or less reached the end of the line in terms of Levantine Arabic textbooks, so the other thing I'm doing I working on my fusha as well, both as another way to expand my vocabulary and just because it'd be nice to actually solidify my knowledge of the language again.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Czech', body: `Have you heard? This year's Polyglot Gathing is going to be in Prague! As a bit of a Slavic language connoisseur myself, of course I have to work on my Czech a bit.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Amharic', body: `This is one I've been chipping away at on and off for a while now.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Hebrew', body: `The Middle Eastern language that I enjoyed speaking the second most last year was Hebrew, so I'd been meaning to brush up on this one for a while too. I promise I was already working on both my Arabic and Hebrew before the recent events in the region.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Maltese', body: `The other big Polyglot event of 2024 will be the Polyglot Conference in Malta this fall. Maltese is, at it's core, an Arabic dialect with heavy Sicilian/Italian influence, so it should be to difficult to get a hang of the basics, especially since I'm already studying a lot of Arabic these days. (In fact, I already read through a Maltese textbook last for no particular reason.)`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Thai', body: `Okay, this one is kind of random. On my latest trip back to Asia, I dropped by Penang, Malaysia for the Language Event being held there. But instead of brushing up on my Malay, I accidentally got sidetracked by a random urge to finally learn the Thai script.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'French', body: `After getting my C1 certificate in German, it's time for me to get back to the other European languages I'd been neglecting in recent years.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Korean', body: `This was my main project during the height of the pandemic, and the last language I got from zero to B2-ish in. I'm not doing much study or reading in Korean these days, but I attend a Korean conversation group here in LA on a semi-regular basis, so I'm keeping it up.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Italian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'German', body: `I hit a significant milestone in German with my C1 test last year, but I'm certainly not about to drop the language entirely right now. For now, I'm just keeping it up by reading a few books.`, links: ['www.google.com', 'www.github.com'] },
  { header: 'Russian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Armenian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Kazakh', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Uyghur', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Honorable Mentions', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'The backlog', body: 'testing', links: ['www.google.com', 'www.github.com'] }
  ]
</script>

This is regularly-updated list of the various languages I'm currently studying (actively, with textbooks etc.), maintaining (reading books, consuming other media) or just dabbling in at the moment, roughly in descending order of emphasis.

<Masonry items={gridItems1} columns={3} component={CardMasonryItem} />