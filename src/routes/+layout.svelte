<script>
	// import Header from './Header.svelte';
	// import './styles.css';
	import "../app.css";
</script>
	<svelte:head>
		<title>Portfolio - Lycia D.</title>
		<meta name="title" content="Portfolio - Lycia D." />
		<meta name="description" content="Portfolio - Lycia D." />
		<link rel="icon" href="https://avatars.githubusercontent.com/u/57102194?v=4" type="image/png">

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://lycia.anhost.fr/" />
		<meta property="og:title" content="Portfolio - Lycia D." />
		<meta property="og:description" content="Développeuse" />
		<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://lycia.anhost.fr/" />
		<meta property="twitter:title" content="Portfolio - Lycia D." />
		<meta property="twitter:description" content="Développeuse" />
		<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
	</svelte:head>
<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<p>Made with Svelte, Tailwind and ❤️ by <a href="https://github.com/mavenless/" class="transition ease-in delay-100 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100">Lycia D.</a> </p>
		<p class="licence">© 2024 Lycia D. All rights reserved.</p>
	</footer>
</div>

<style>
	


	footer {
		padding: 12px;
		text-align: center;
    	padding: 1rem;
    	position: relative;
    	bottom: 0;
    	/* margin-left: 25vw; */
    	font-size: 0.8rem;
	}

	.licence {
		margin-right: 9.5vw;
	}

	footer a {
		font-weight: bold;
	}

	@media (max-width: 800px) {
		footer {
			padding: 12px 0;
			font-size: 0.8rem;
		}
	}
</style>
