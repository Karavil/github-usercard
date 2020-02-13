/**
 * Accepts a user object that holds values pertaining to their GitHub profile
 * @param {object} user 
 */
function UserCard(user) {
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

function appendUserCard(user_login) {
   axios.get(GITHUB_API + '/users/' + user_login)
      .then(user => {
         // After getting info, create a card with it
         cards.appendChild(UserCard(user.data));
      })
      .catch(function (error) {
         // Handle error in case we had an error fetching user info
         console.log('Error fetching follower info:', error);
      });
}

const GITHUB_API = 'https://api.github.com';
const GITHUB_USERNAME = 'Karavil';

const cards = document.querySelector('.cards');

// Get followers of the user provided in GITHUB_USERNAME
axios.get(GITHUB_API + '/users/' + GITHUB_USERNAME + '/followers')
   .then(followers => {
      followers.data.forEach((follower) => {
         // For each follower, get their GitHub Info
         appendUserCard(follower.login);
      });
   })
   .catch(function (error) {
      // Handle errors regarding fetching user followers on GitHub
      console.log('Error fetching follower list:', error);
   });
