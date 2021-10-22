const LinksSocialMedia = {
  github: 'caiovinni',
  youtube: 'channel/UCHpf2qotLkxa3OB5TsOo92Q',
  facebook: '',
  instagram: 'caiokenmm',
  twitter: ''
}

function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userLink.href = data.html_url
    userBio.textContent = data.bio
    userAvatar.src = data.avatar_url
    userLogin.textContent = data.login

  })

  //alert(url)
}

getGitHubProfileInfos()
