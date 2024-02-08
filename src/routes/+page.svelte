<script>
	import { useMousePosition } from '@svelteuidev/composables';
	import { Group, Text, Code } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import { getDataFromRepo } from './github.js'

	const [position, ref] = useMousePosition(true);
	$: ({ x, y } = $position);

	// @ts-ignore
	let width; // J'le ferai en typescript la prochaine fois
	let repos = [];
	onMount(async () => {
		repos = await getDataFromRepo();
		width = screen.width;
	});

</script>
<canvas id="theme"></canvas>
<div use:ref class="leftport">
	<h1 class="text-3xl font-bold text-slate-500 dark:text-slate-400 mt-2 ">
		<a href="https://github.com/mavenless/" target="_blank" rel="noopener noreferrer">Lycia D.</a>
	</h1>
	<h2>
		Développeuse
	</h2>
	<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
		Je suis développeuse et j'adore faire du backend. Je suis passionnée par le développement web, mais surtout par l'implémentation de fonctionnalité côté serveur.
	</p>

	<div class="svgs">
			<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript" />
			<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
			<img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="svelte" />
			<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
			<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express" />
			<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
			<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel" />
			<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="git" />
			<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="github" />
			<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord" />
			<img src="https://img.shields.io/badge/Golang-blue?style=for-the-badge&logo=go" alt="golang" />
			<img src="https://img.shields.io/badge/Tailwindcss-darkblue?style=for-the-badge&logo=tailwindcss" alt="tailwindcss" />	
	</div>
	<!-- <Text>
	    The mouse is at <Code>{x}</Code>, <Code>{y}</Code>
	</Text> -->
</div>

<Group position="right" direction="row" class="rightport">

	{#if width < 480}
		<h1 class="text-3xl font-bold text-slate-500 dark:text-slate-400 mt-2 border-opacity-0 border-spacing-0 border-blue-200">About me</h1>
	{/if}

	<p id="about" class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
		Bonjour à tous, je suis Lycia D. ou Maven, fondatrice passionnée d'Anhost, un hébergeur spécialisé dans la confidentialité et la sécurité. 
		En tant que développeuse backend, je suis animée par la création de solutions techniques robustes et innovantes. 
		Inspirée par l'univers de Cyberpunk 2077, j'aime repousser les limites de la technologie pour créer des expériences utilisateur immersives. 
		En dehors du monde du développement, vous me trouverez souvent en train de profiter de la vie nocturne, accompagnée de mon fidèle compagnon félin. 
		Je suis une créatrice dans l'âme, constamment à la recherche de nouveaux défis et de projets passionnants à développer mais faisant également de la musique en utilisant FL Studio, ou en écrivant des one-shots.
	</p>

	{#each repos as repo, i}
	<a href={repo.url} target="_blank" rel="noopener noreferrer">
		<div class="card rounded overflow-hidden shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
			<h2 class="font-bold text-xl mb-2">{repo.name} - {repo.date}</h2>
			<p class="text-gray-700 text-base">{repo.description}</p>
			<div class="px-6 pt-4 pb-2">
			<p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{repo.language}</p>
		</div>
		</div>
	</a>
	{/each}
</Group>