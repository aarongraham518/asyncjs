const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post Two'}
];

function getPost(){
    //using setTime to mimic retrieval time from a server
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    setTimeout(() =>{
        posts.push(post);
    }, 2000);
}


getPost();

createPost({title: 'Post Three', body: 'This is ost three'});
