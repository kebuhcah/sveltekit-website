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
  
  I finished re-reading a solid series of Palestinian Arabic textbooks last year, and since then my "study" has largely consisted of Lebanese podcasts on Youtube (many of which are subtitled in English), Levantine music, and Syrian-dubbed Turkish TV shows on Netflix. When I have doubts about something new I hear, I have a trusty :a[dictionary]{href=https://www.amazon.com/Olive-Tree-Dictionary-Transliterated-Conversational/dp/9657397065 target=_blank} and :a[reference grammar]{href=https://www.amazon.com/Reference-Georgetown-Classics-Languages-Linguistics/dp/1626163650 target=_blank} to help me out when Google isn't enough.`},
  { header: 'Modern Standard Arabic', body: `I seem to have more or less reached the end of the line in terms of Levantine Arabic textbooks, so the other thing I'm doing is working on my *fuṣḥā*  as well, both as another way to expand my vocabulary and to actually be able properly understand journalistic Arabic without guessing and getting confused half the time.
  
  I've found a whole bunch of intermediate-to-advanced level textbooks that I plan to work my way through, with :a[Upper Intermediate Arabic through Discussion]{href=https://www.amazon.com/Upper-Intermediate-Arabic-through-Discussion/dp/1649032668 target=_blank} being my main focus right now. For long term goal, I recently realized that NYU's :a[Library of Arabic Literature]{href=https://nyupress.org/library-of-arabic-literature/ target=_blank} is a treasure trove of classical Arabic texts with *parallel translations*, and I'd like to try reading some of them soon (although I suppose most of it wouldn't be *Modern* Standard Arabic*, really).
  ` },
  { header: 'Czech', body: 
  `Have you heard? This year's Polyglot Gathering is going to be in Prague! As a bit of a Slavic language connoisseur myself, of course I have to work on my Czech a bit. 
  
  I've been studying a lot of it through Russian, since it helps highlight the differences between the languages. I recently started on :a[Chcete ještě lépe mluvit česky? (Do you want to speak Czech even better?)]{href=https://ucebnice.heureka.cz/chcete-jeste-lepe-mluvit-cesky-chotite-esce-lucse-remediosova-h-cechova-e-putz-h/#prehled/ target=_blank} after finishing the first book in the series. As the date of the Gathering approaches, I'll also want to start looking more seriously for other sources of comprehensible input.`},
  { header: 'Amharic', body: `This is one I've been chipping away at on and off for a while now. I finally got a solid grasp on the Ge'ez/Amharic script and the overall contours of the grammatical system last year, so the main challenge is building vocabulary.
  
  But in any case, there's one additional factor to make sure I keep working on Amharic for at least the next few months: *I'll be doing a presentation on it at the Polyglot Gathering*, with a focus on it's similarities and differences with Arabic and Hebrew. 
  
  For the most part I'm currently using Wolf Leslau's :a[Amharic Textbook]{href=https://www.amazon.com/Amharic-Textbook-Through-Wolf-Leslau/dp/3447005548 target=_blank}, which despite being a bit older is still the best, most systematic textbook I've been able to find. (Leslau also wrote a great :a[Reference Grammar]{href=https://www.harrassowitz-verlag.de/isbn_978-3-447-03372-5.ahtml target=_blank} that look at from time to time.)` },
  { header: 'Hebrew', body: `Besides Arabic, the other Middle Eastern language that I enjoyed speaking a lot last year was Hebrew, so I'd been meaning to brush up on this one for a while too. At the moment, the textbook I'm using is :a[Brandeis Modern Hebrew, Intermediate to Advanced]{href=https://www.amazon.com/Brandeis-Modern-Hebrew-Intermediate-Advanced/dp/1611684471 target=_blank}.  (I promise I was already working on both my Arabic and Hebrew before the recent events in the region.)` },

  { header: 'Maltese', body: `The other big Polyglot event of 2024 will be the Polyglot Conference in Malta this fall. Maltese is, at it's core, an Arabic dialect with heavy Sicilian/Italian influence, so it should be to difficult to get a hang of the basics, especially since I'm already studying a lot of Arabic these days. (In fact, I already read through a Maltese textbook last for no particular reason.)
  
  In addition to revisiting the textbook I used last year, I've also gotten hold of a variety of grammatical/linguistic studies on Maltese and followed a dozen of Maltese accounts on Facebook. Once I've brushed up a bit, I'm also hoping to start watching :a[Maltese TV online]{href=https://tvm.com.mt/mt/tvmi/ target=_blank} regularly to see how much I can understand.` },
  { header: 'Armenian', body: `Having lived in Glendale, CA for the past two years (the world's most Armenian city after Yerevan, the capital of Armenia), I've been mildly interested in learning some Armenian for a while now, although my interest has come and gone in a few waves. 
  
  I'm currently once again in a phase of high interest in Armenian, in part thanks to discovering a few new textbooks, as well as the realization that my grasp of the Armenian script is now solid enough that textbooks I used to struggle with are no longer so hard to use.` },
  { header: 'Thai', body: `Okay, this one is kind of random. On my latest trip back to Asia, I dropped by Penang, Malaysia for the Language Event being held there. But instead of brushing up on my Malay, I accidentally got sidetracked by a random urge to finally learn the Thai script properly. Once the script finally "clicked" for me, I couldn't get enough of the language and blazed through several textbooks. I've lowered the priority of Thai at the moment (I guess I have to, when you look at everything above it in the list), though I'm still slowly chipping away at this cool :a[Thai reading textbook]{href=https://readingthai.wisc.edu/thai-reader-site-volume-1.html target=_blank} on UW Madison's website.` },
  { header: 'French', body: `After getting my C1 certificate in German, it's time for me to get back to the other European languages I'd been neglecting in recent years.` },
  { header: 'Italian', body: `Speaking of the Polyglot Conference in Malta, I'm also currently making plans to travel around Italy a bit as part of the same trip. ` },
  { header: 'Korean', body: `This was my main project during the height of the pandemic, and the last language I got from zero to B2-ish in. I'm not doing much study or reading in Korean these days, but I attend a Korean conversation group here in LA on a semi-regular basis, so I'm keeping it up.` },
  { header: 'German', body: `I hit a significant milestone in German with :a[my C1 test]{href=/blog/languages/german-c1-exam} last year, but I'm certainly not about to drop the language entirely right now. For now, I'm just keeping it up by reading a few books.` },
]
</script>

## Overview

A website about my language learning experiences would obviously not be complete without a section about what specific language I actually am learning right now. So here you go.

My language learning priorities have finally settled down a bit after a couple of shakeups in recent months - first, my completion of the German C1 exam, which popped German off the top of the stack (IT term), and secondly my short trip back to Asia (Penang, Bangkok, Shanghai) in December, prior to which I was working on Malay and Hokkien for a bit. Those have also fallen off the list.

It goes without saying that I'll be updating this page on a regular basis as I get distracted by shiny objects, which happens all the time.

Things get a bit blurry towards the bottom of the list, since there is a variety of languages that I'm still listening to, reading or speaking semi-regularly that these days that I wouldn't really consider myself to be "studying" or "dabbling in" - mostly languages that I am conversational in already but have neglected for a long time, like... Japanese, Serbo-Croatian, Hindi and so on.

<Masonry items={gridItems1} columns={3} component={CardMasonryItem} />