const link = "https://api.github.com/users/mavenless/repos"

function getRepos() {
    return fetch(link)
    .then(res => res.json())
    .then(data => {
        return data;
    });
}

async function getDataFromRepo() {
    const repos = await getRepos();
    let res= [];
    for(const repo of repos) {
        res.push({
            name: repo.name,
            description: repo.description || "No description",
            url: repo.html_url,
            language: repo.language || "No specified language",
            date: new Date(repo.updated_at).toUTCString(),
        });
    }
    
    return res.sort((a, b) => {
        return +new Date(b.date) - +new Date(a.date);
    });
}

export { getDataFromRepo };
