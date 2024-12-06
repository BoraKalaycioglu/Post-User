const postContainer = document.querySelector('.posts');

async function loadPosts () {
  const data = await fetch('https://dummyjson.com/posts')
    .then(x => x.json())
  console.log(data.posts);

  postContainer.innerHTML = '';
  for (const post of data.posts) {
    postContainer.innerHTML += `<h3>${post.title}</h3>
    <hr>`
  }

}

loadPosts();
