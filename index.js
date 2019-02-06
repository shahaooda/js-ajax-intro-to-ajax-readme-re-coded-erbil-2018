function showRepos(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repos").innerHTML = repoList
}
function getCommits(el)
{
  let name = el.dataset.repo;
  let request = new XMLHttpRequest();
  request.addEventListener("load",showCommits)
  request.open("GET",'https://api.github.com/repos/A7madXatab/' + name + '/commits');
  request.send();
}
function showCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}
function getRepos()
{
  let request = new XMLHttpRequest();
  request.addEventListener("load",showRepos);
  request.open("GET",'https://api.github.com/users/A7madXatab/repos');
  request.send();
}