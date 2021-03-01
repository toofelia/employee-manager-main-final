
const users = document.querySelector('.users');

async function getUsers(){
     const req = await fetch("/api/v1/users")
     const res = await req.json()
     return res  
  }

function displayUsers(usersFetched) {
    const elements = usersFetched.map(function(user) {
      const userViewTemplate = `
        
        <div class="user">
         <div class="user-data">${user.username}</div>
         <div class="user-data">${user.email}</div>
         <div class="user-data">${user.password}</div>
         <div class="user-data">${user.uid}</div>
         </div>
       
      `;
     
      return document.createRange().createContextualFragment(userViewTemplate).querySelector("div");      
    });
    elements.forEach(function(user){
      users.appendChild(user)
   })

}


getUsers().then(usersFetched => displayUsers(usersFetched));
