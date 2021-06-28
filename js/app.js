
loadREST();

function loadREST() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(function(response){
          return response.json();
     })
     .then(function(users){
          let html = '';

          users.forEach(function(user){
               html += `
                    <li>
                    Name: ${user.name}<br>
                    Email: ${user.email}<br>
                    <button onclick="loadPosts(${user.id})" class="button-primary button">Get User’s Posts</button>
                    </li>
               `;
          });
          document.getElementById('result').innerHTML = html;

     })
     .catch(function(error){
          console.log(error);
     })
}

function loadPosts(id) {
     fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
     .then(function(response){
          return response.json();
     })
     .then(function(posts){
          let html2 = '';

          posts.forEach(function(post){
               html2 += `
                    <li>
                    Title: ${post.title}
                    </li>
               `;
          });
          document.getElementById('posts').innerHTML = html2;
     })
     .catch(function(error){
          console.log(error);
     })
}