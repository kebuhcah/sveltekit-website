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
  { header: 'Levantine Arabic', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Modern Standard Arabic', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Czech', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Thai', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'French', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Korean', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Italian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Maltese', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'German', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Russian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Japanese', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Armenian', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Kazakh', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  { header: 'Uyghur', body: 'testing', links: ['www.google.com', 'www.github.com'] },
  ]
</script>

lorem ipsum

<Masonry items={gridItems1} columns={3} component={CardMasonryItem} />