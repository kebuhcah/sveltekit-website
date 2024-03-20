<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/slt-logo.png';
	import github from '$lib/images/github.svg';
	import twitter from '$lib/images/twitter-icon.webp';
	import medium from '$lib/images/medium_logo.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} width="200px" height="200px" alt="Sun Language Theories" />
		</a>
	</div>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li class="mobile-hide" aria-current={$page.url.pathname === '/blog/category' ? 'page' : undefined}>
				<a href="/blog/category">Topics</a>
			</li>
			<li aria-current={$page.url.pathname === '/blog/editorial/about' ? 'page' : undefined}>
				<a href="/blog/editorial/about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
	<div class="corner corner-gap">
		<a href="https://twitter.com/kebuhcah">
			<img src={twitter} alt="Twitter" />
		</a>
	</div>
	<div class="corner">
		<a href="https://github.com/kebuhcah">
			<img src={github} alt="GitHub" />
		</a>
	</div>
	<div class="corner">
		<a href="https://medium.com/sunlanguagetheories">
			<img src={medium} alt="Medium" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: right;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner-gap {
		margin-left: auto;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		margin-left: -0.2em;
		--background: rgba(82, 82, 82, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
