/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

function cardCreator (user){
  axios.get(`https://api.github.com/users/${user}`)
  .then(response =>{
    const cards = document.querySelector('.cards')
    cards.appendChild(docCreator(response))
  })
  .catch(err => {
    console.log('ERROR')
  })
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['aleclol', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

for(let user of followersArray){
  cardCreator(user)
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function docCreator (obj){
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const pUse = document.createElement('p')
  const pLoc = document.createElement('p')
  const pProf = document.createElement('p')
  const a = document.createElement('a')
  const pFol = document.createElement('p')
  const pFolg = document.createElement('p')
  const pBio = document.createElement('p')

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  pUse.classList.add('username')
  
  img.setAttribute('src', obj.data.avatar_url)
  a.setAttribute('href', obj.data.html_url)

  h3.textContent = obj.data.name
  pUse.textContent = obj.data.login
  pLoc.textContent = `Location: ${obj.data.location}`
  pProf.textContent = `Profile: `
  a.textContent = `${obj.data.html_url}`
  pFol.textContent = `Followers: ${obj.data.followers}`
  pFolg.textContent = `Following: ${obj.data.following}`
  pBio.textContent = `Bio: ${obj.data.bio}`
  
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(h3)
  cardInfo.appendChild(pUse)
  cardInfo.appendChild(pLoc)
  cardInfo.appendChild(pProf)
  cardInfo.appendChild(pFol)
  cardInfo.appendChild(pFolg)
  cardInfo.appendChild(pBio)
  pProf.appendChild(a)
  
  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
