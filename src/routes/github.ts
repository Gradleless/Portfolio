const link: string = "https://api.github.com/users/gradleless/repos";

async function getRepos(): Promise<any[]> {
    return fetch(link)
    .then(res => res.json())
    .then(data => {
        return data;
    });
}
interface Repo {
    name: string;
    url: string;
    description: string;
    date: string;
    language: string;
}

async function getDataFromRepo(): Promise<any[]> {
    const repos: any[] = await getRepos();
    const result: Repo[] = [];
    for(const repo of repos) {
        result.push({
            name: repo.name,
            description: repo.description || "Aucune description",
            url: repo.html_url,
            language: repo.language || "Langage non spécifié",
            date: new Date(repo.created_at).toUTCString(),
        });
    }
    
    return result.sort((a, b) => {
        return +new Date(b.date) - +new Date(a.date);
    });
}

export type { Repo };
export { getDataFromRepo };


