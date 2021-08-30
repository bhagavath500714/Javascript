const posts = [
    { title: 'post One', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' },
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }


// getPosts();

// createPost({ title: 'post three', body: 'This is post three'});


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'post three', body: 'This is post three'}, getPosts);