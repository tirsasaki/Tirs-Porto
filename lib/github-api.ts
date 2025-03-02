const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'tirsasaki';

export async function fetchGitHubData() {
  try {
    const [user, repos] = await Promise.all([
      fetch(`${GITHUB_API_URL}/users/${USERNAME}`),
      fetch(`${GITHUB_API_URL}/users/${USERNAME}/repos`)
    ]);

    const userData = await user.json();
    const reposData = await repos.json();

    // Calculate stats
    const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
    const totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);

    return {
      repositories: userData.public_repos,
      stars: totalStars,
      forks: totalForks,
      contributions: userData.contributions || 0, // Note: Requires separate API call for actual contributions
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return {
      repositories: 0,
      stars: 0,
      forks: 0,
      contributions: 0,
    };
  }
}
