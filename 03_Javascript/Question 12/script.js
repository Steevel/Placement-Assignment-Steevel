//
let POSTS = [];

// Get the elements
const postsContainer = document.querySelector(".posts");
const postTitle = document.querySelector("#title");
const postBody = document.querySelector("#post");
console.log(postTitle.value, postBody.value);

// Display all the posts
function displayPosts(posts) {
  postsContainer.innerHTML = "";
  posts.map((item) => {
    postsContainer.innerHTML += `
      <div id="${item.id}" class="post flex items-center rounded-md shadow-md p-2 mx-2 my-4">
        <div class="divide-y-2 w-full">
          <strong class="text-lg italic text-bold">${item.title}</strong>
          <p>${item.body}</p>
        </div>
        <button onClick="deletePost(${item.id})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
      </div>
  `;
  });
}

// Fetch all the posts from api
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  POSTS = await response.json();
  displayPosts(POSTS);
  // console.log(POSTS);
}

getPosts();

// Delete post
function deletePost(key) {
  console.log("key", key);
  const filteredPosts = POSTS.filter((item) => item.id !== key);
  console.log("filtered posts", filteredPosts);
  POSTS = filteredPosts;
  console.log(POSTS);
  displayPosts(filteredPosts);
}

// Add post
document
  .querySelector("#submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const userId = document.getElementById("uid");
    const title = document.getElementById("title");
    const postBody = document.getElementById("post");
    const id = POSTS[POSTS.length - 1].id + 1;
    console.log("data", userId.value, title, postBody);

    if (userId.value !== "" && title.value !== "" && postBody.value !== "") {
      POSTS = [
        {
          userId: userId.value,
          id: id,
          title: title.value,
          body: postBody.value,
        },
        ...POSTS,
      ];
      displayPosts(POSTS);
      userId.value = "";
      title.value = "";
      postBody.value = "";
    } else {
      alert("Please fill all the fields");
    }
  });
