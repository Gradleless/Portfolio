<script>
	import "../app.css";
</script>

	<svelte:head>
		<title>Portfolio - Lycia D.</title>
		<meta name="title" content="Portfolio - Lycia D." />
		<meta name="description" content="Développeuse" />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://lycia.anhost.fr/" />
		<meta property="og:title" content="Portfolio - Lycia D." />
		<meta property="og:description" content="Développeuse" />
		<meta property="og:image" content="https://lycia.anhost.fr/jsp.png" />
		
		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://lycia.anhost.fr/" />
		<meta property="twitter:title" content="Portfolio - Lycia D." />
		<meta property="twitter:description" content="Développeuse" />
		<meta property="twitter:image" content="https://lycia.anhost.fr/jsp.png" />

		<!-- Disabling dark reader -->
		<meta name="darkreader-lock">
	</svelte:head>

	<main class="relative bg-primary min-h-screen">
		<slot />
	</main>

	<footer class="relative w-full text-[0.8rem] pb-5 pt-5 bg-card text-secondary">
		<div class="flex flex-col items-center *:bg-card bg-card">
			<p class="">Made with Svelte, Tailwind and ❤️ by 
				<a href="https://github.com/gradleless/" class="transition ease-in delay-100 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100 font-bold">Lycia D</a>.
			</p>
			<p>© 2024 Lycia D. All rights reserved.</p>
		</div>
	</footer>

