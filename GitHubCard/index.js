/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const GITHUB_API = 'https://api.github.com';
const GITHUB_USERNAME = 'Karavil';

const cards = document.querySelector('.cards');

axios.get(GITHUB_API + '/users/' + GITHUB_USERNAME)
   .then(function (response) {
      // handle success
      console.log(response);
      cards.appendChild(createUserCard(response.data));
      
   })
   .catch(function (error) {
      // handle error
      console.log(error);
   });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/**
 * Accepts a user object that holds values pertaining to their GitHub profile
 * @param {object} user 
 */
function createUserCard(user) {
   const card = document.createElement('div');
   card.classList.add('card');

   //User Image from GitHub
   const userImage = document.createElement('img');
   userImage.src = user.avatar_url;

   //Card Info & Components
   const cardInfo = document.createElement('div');
   cardInfo.classList.add('card-info');

   //User real name
   const name = document.createElement('h3')
   name.classList.add('name');
   name.textContent = user.name;

   //Username
   const username = document.createElement('p')
   username.classList.add('username')
   username.textContent = user.login;

   //User location
   const location = document.createElement('p')
   location.textContent = user.location;

   //Profile link to github
   const profile = document.createElement('p')
   const profileLink = document.createElement('a');

   profileLink.href = user.html_url;
   profileLink.textContent = user.html_url;

   profile.appendChild(profileLink);

   //Follower counts
   const followers = document.createElement('p')
   followers.textContent = user.followers;
   const following = document.createElement('p')
   following.textContent = user.following;

   //User bio
   const bio = document.createElement('p')
   bio.textContent = user.bio;

   //Append all components of cardInfo
   cardInfo.appendChild(name);
   cardInfo.appendChild(username);
   cardInfo.appendChild(location);
   cardInfo.appendChild(profile);
   cardInfo.appendChild(followers);
   cardInfo.appendChild(following);
   cardInfo.appendChild(bio);

   //Append user image and info to card
   card.appendChild(userImage);
   card.appendChild(cardInfo);

   return card;
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
