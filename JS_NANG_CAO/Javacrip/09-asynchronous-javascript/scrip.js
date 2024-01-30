//1
// setTimeout(function () {
//     console.log('Hello from callback');
//   }, 2000);
  
//   setTimeout(changeText, 3000);
  
//   function changeText() {
//     document.querySelector('h1').textContent = 'Hello from callback';
//   }
  
//   const timerId = setTimeout(changeText, 3000);
  
//   document.querySelector('#cancel').addEventListener('click', () => {
//     console.log(timerId);
//     clearTimeout(timerId);
//     console.log('Timer Cancelled');
//   });
//2
// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeRandomColor, 1000);
//   }
// }

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// function changeRandomColor() {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = `#${randomColor}`;
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// document.getElementById('start').addEventListener('click', startChange);
// document.getElementById('stop').addEventListener('click', stopChange);
//3
// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
//   ];
  
//   function createPost(post, cb) {
//     setTimeout(() => {
//       posts.push(post);
//       cb();
//     }, 2000);
//   }
  
//   function getPosts() {
//     setTimeout(() => {
//       posts.forEach(function (post) {
//         const div = document.createElement('div');
//         div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//         document.querySelector('#posts').appendChild(div);
//       });
//     }, 1000);
//   }
  
//   createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
//4
// const xhr = new XMLHttpRequest();

// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');
// xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);

//     data.forEach((repo) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

// xhr.send();
//5
// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         // console.log(JSON.parse(this.responseText).value);
//         jokeEl.innerHTML = JSON.parse(this.responseText).value;
//       } else {
//         jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
//       }
//     }
//   };

//   xhr.send();
// };

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);
//6
// function getData(endpoint, cb) {
//     const xhr = new XMLHttpRequest();
  
//     xhr.open('GET', endpoint);
  
//     xhr.onreadystatechange = function () {
//       if ((this.readyState === 4) & (this.status === 200)) {
//         cb(JSON.parse(this.responseText));
//       }
//     };
  
//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   }
  
//   getData('./movies.json', (data) => {
//     console.log(data);
//     getData('./actors.json', (data) => {
//       console.log(data);
//       getData('./directors.json', (data) => {
//         console.log(data);
//       });
//     });
//   });
//7
// Create a promise
// const promise = new Promise((resolve, reject) => {
//     // Do some async task
//     setTimeout(() => {
//       console.log('Async task complete');
//       resolve();
//     }, 1000);
//   });
  
//   // promise.then(() => {
//   //   console.log('Promise consumed..');
//   // });
  
//   const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true;
  
//       if (!error) {
//         resolve({ name: 'John', age: 30 });
//       } else {
//         reject('Error: Something went wrong');
//       }
//     }, 1000);
//   });
  
//   getUser
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('The promise has been resolved or rejected'));
  
//   console.log('Hello from global scope');
//8
// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
//   ];
  
//   function createPost(post) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let error = false;
  
//         if (!error) {
//           posts.push(post);
//           resolve();
//         } else {
//           reject('Something went wrong');
//         }
//       }, 2000);
//     });
//   }
  
//   function getPosts() {
//     setTimeout(() => {
//       posts.forEach(function (post) {
//         const div = document.createElement('div');
//         div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//         document.querySelector('#posts').appendChild(div);
//       });
//     }, 1000);
//   }
  
//   function showError(error) {
//     const h3 = document.createElement('h3');
//     h3.innerHTML = `<strong>${error}</strong>`;
//     document.getElementById('posts').appendChild(h3);
//   }
  
//   createPost({ title: 'Post Three', body: 'This is post' })
//     .then(getPosts)
//     .catch(showError);
//9
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true;
  
//       if (!error) {
//         resolve({ name: 'John', age: 30 });
//       } else {
//         reject('Error: Something went wrong');
//       }
//     }, 1000);
//   });
  
//   promise
//     .then((user) => {
//       console.log(user);
//       return user.name;
//     })
//     .then((name) => {
//       console.log(name);
//       return name.length;
//     })
//     .then((nameLength) => {
//       console.log(nameLength);
//     })
//     .catch((error) => {
//       console.log(error);
//       return 123;
//     })
//     .then((x) => console.log('This will run no matter what', x));