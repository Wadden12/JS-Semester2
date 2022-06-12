let posts = [
    {
        title: "post1",
        author: "Author1",
        body: "Body of post1",
    },
    {
        title: "post2",
        author: "Author2",
        body: "Body of post2",
    },
];
function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 3000);
}
function getPosts() {
    var output = "";
    setTimeout(function () {
        posts.forEach(function (value) {
            output += `<li>Title: ${value.title} </li> 
              <li>Author ${value.author}</li><li> Body ${value.body}</li> <hr>
              `;
        });
        document.querySelector("#data").innerHTML = output;
    }, 1000);
}
createPost(
    { title: "post3", author: "Author3", body: "Body of post3" },
    getPosts
);
  // getPosts();
  // console.log(posts);
  // createPost({ title: "post3", author: "Author3", body: "Body of post3" });
  // console.log(posts);