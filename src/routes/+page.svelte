<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { getDataFromRepo } from './github';
	import type { Repo } from './github';


	let repos: Repo[] = [];
	onMount(async () => {
		repos = await getDataFromRepo();
	});

	let text = 'Lycia D.';
	$: animatedText = '';
	let index = 1;
	let direction = 1;

	function startWriting() {
		const interval = setInterval(() => {
			if(!text) return;
			animatedText = text.slice(0, index);
			index += direction;
			if(index <= text.length && index > 1) {
				animatedText += '_';
			}
			if (index > text.length || index === 1) {
				direction *= -1;
			}

			if (index === text.length + 1) {
				clearInterval(interval);
				setTimeout(startWriting, 1500);
			}
		}, 100);
	}

	startWriting();

	let random = "Cyberpunk 2077";
	let randomText = random;

	function randomizeText() {
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		random = Array.from({ length: random.length }, () => possible[Math.floor(Math.random() * possible.length)]).join('');
	}

	let hover = false;
	let hoverInterval: number;

	function handleHover() {
		hover = true;
		randomizeText();
		hoverInterval = setInterval(randomizeText, 0);

	}

	let normalizeInterval: number;

	function handleHoverEnd() {
		hover = false;
		clearInterval(hoverInterval);
		normalizeInterval = setInterval(normalizeText, 30);
	}

	let i: number = 0;

	function normalizeText() {	
		if(random[i] !== randomText[i]) {
			random = randomText.slice(0, i+1) + random.slice(i+1, random.length);
			i++;
		} else if(random === randomText) {
			clearInterval(normalizeInterval);
			i = 0;
		}
	}

</script>

<div class="max-sm:mx-5 md:pt-52">
	<div class="md:ml-14 md:mr-[60vw] max-sm:pt-2 md:fixed *:mb-3">
		<h1 class="text-3xl font-bold text-secondary mt-2">
			<a href="https://github.com/gradleless/" target="_blank" rel="noopener noreferrer">{animatedText}</a>
		</h1>
		<h2 class="text-text">
			Développeuse
		</h2>
		<p class="text-slate-400 mt-2 text-sm">
			Je suis développeuse et j'adore faire du backend. Je suis passionnée par le développement web, mais surtout par l'implémentation de fonctionnalité côté serveur.
		</p>
	
		<div class="flex flex-row flex-wrap gap-1">
				<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript" />
				<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
				<img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="svelte" />
				<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
				<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express" />
				<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
				<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel" />
				<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="git" />
				<object data="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/gradleless" type="image/svg+xml" title="github"></object>
				<object data="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white&link=https://discord.com/users/566716997887590401" type="image/svg+xml" title="discord"></object>
				<img src="https://img.shields.io/badge/Golang-blue?style=for-the-badge&logo=go" alt="golang" />
				<img src="https://img.shields.io/badge/Tailwindcss-darkblue?style=for-the-badge&logo=tailwindcss" alt="tailwindcss" />
				<object data="https://img.shields.io/badge/Mon email-gray?style=for-the-badge&logo=mailgun&link=mailto:lycia.dufour@skiff.com" type="image/svg+xml" title="mail"></object>
		</div>
	</div>
	
	<div class="md:ml-[50vw] pb-[5vh] md:mr-12">
	
		<p id="about" class="mt-2 text-sm text-slate-400 mb-5 max-sm:mt-8">
			Bonjour à tous, je suis Lycia D. ou Maven, fondatrice passionnée d'Anhost, un hébergeur spécialisé dans la confidentialité et la sécurité. 
			En tant que développeuse backend, je suis animée par la création de solutions techniques robustes et innovantes. 
			Inspirée par l'univers de <a href="https://www.cyberpunk.net/fr/en/" on:mouseenter={handleHover} on:mouseleave={handleHoverEnd} >{random}</a>, j'aime repousser les limites de la technologie pour créer des expériences utilisateur immersives. 
			En dehors du monde du développement, vous me trouverez souvent en train de profiter de la vie nocturne, accompagnée de mon fidèle compagnon félin. 
			Je suis une créatrice dans l'âme, constamment à la recherche de nouveaux défis et de projets passionnants à développer mais faisant également de la musique en utilisant FL Studio, ou en écrivant des one-shots.
		</p>
	
		{#each repos as repo, _}
		<a href={repo.url} target="_blank" rel="noopener noreferrer" class="max-sm:mx-2" in:fly>
			<div class="md:mb-4 p-[1rem] w-full shadow-md text-tertiary *:bg-card bg-card rounded-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
				<h2 class="font-bold text-xl mb-2">{repo.name} - {repo.date}</h2>
				<p class=" text-base">{repo.description}</p>
				<div class="px-3 pt-4 pb-2">
					<p class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 bg-zinc-500">#{repo.language}</p>
				</div>
			</div>
		</a>
		{/each}
	</div>
</div>




