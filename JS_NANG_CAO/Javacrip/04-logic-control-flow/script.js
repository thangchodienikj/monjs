// 1
// if => true , else = false 

//   const x = 10;
//   const y = 5;
  
//   if (x >= y) {
//     console.log(`${x} is greater than or equal to ${y}`);
//   }
  
//   if (x === y) {
//     console.log(`${x} is equal to ${y}`);
//   } else {
//     console.log(`${x} is NOT equal to ${y}`);
//   }
//   // không bằng 
//   if (x !== y) {
//     const z = 20;
//     console.log(`${z} is 20`);
//   }
  
//   console.log(z);
  
//   if (x >= y)
//     console.log(`${x} is greater than or equal to ${y}`),
//       console.log('This is true');
//   else console.log('This is false');

//2
// const d = new Date(2022, 9, 30, 6, 0, 0);
// const hour = d.getHours(); // thời gian của date trên tức là 6h 
// // tức là 6h < 12 
// if (hour < 12) {
//   console.log('Good Morning');
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');
// }

// if (hour < 12) {
//   console.log('Good Morning');

//   if (hour === 6) {
//     console.log('Wake Up!');
//   }
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');

//   if (hour >= 20) {
//     console.log('zzzzzzzz');
//   }
// }

// if (hour >= 7 && hour < 15) {
//   console.log('It is work time!');
// }

// if (hour === 6 || hour === 20) {
//   console.log('Brush your teeth!');
// }
//3

// const d = new Date(2022, 1, 10, 19, 0, 0);
// const month = d.getMonth(); // lấy tháng 1
// const hour = d.getHours(); // giờ là 19 

// // trường hơp trên trả về case 1
// switch (month) {
//   case 1:
//     console.log('It is January');
//     break;
//   case 2:
//     console.log('It is February');
//     break;
//   case 3:
//     console.log('It is March');
//     break;
//   default:
//     console.log('It is not Jan, Feb or March');
// }

// // trả về default vì ko có case nào thỏa mãn 
// switch (true) {
//   case hour < 12:
//     console.log('Good Morning');
//     break;
//   case hour < 18:
//     console.log('Good Afternoon');
//     break;
//   default:
//     console.log('Good Night');
// }
//4
// const d = new Date(2022, 1, 10, 19, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();

// // Immediate value evaluation
// switch (month) {
//   case 1:
//     console.log('It is January');
//     break;
//   case 2:
//     console.log('It is February');
//     break;
//   case 3:
//     console.log('It is March');
//     break;
//   default:
//     console.log('It is not Jan, Feb or March');
// }

// // Range evaluation
// switch (true) {
//   case hour < 12:
//     console.log('Good Morning');
//     break;
//   case hour < 18:
//     console.log('Good Afternoon');
//     break;
//   default:
//     console.log('Good Night');
// }

//5

// Giá trị sai (Falsy):
// - false
// - 0
// - "" hoặc '' (Chuỗi rỗng)
// - null
// - undefined
// - NaN

// Giá trị đúng (Truthy):
// - Mọi thứ khác ngoài giá trị sai
// - true
// - '0' (0 trong một chuỗi)
// - ' ' (khoảng trắng trong một chuỗi)
// - 'false' (false trong một chuỗi)
// - [] (mảng rỗng)
// - {} (đối tượng rỗng)
// - function () {} (hàm rỗng)


// const x = function () {};

// if (x) {
//   console.log('This is truthy');
// } else {
//   console.log('This is falsy');
// }

// console.log(Boolean(x));

// const children = 3;

// if (children) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }

// // !isNaN kiểm tra children có phải giá trị hợp lệ hay không 
// if (!isNaN(children)) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }

// const posts = ['Post One'];

// if (posts) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }


// if (posts.length > 0) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }

// const user = {
//   name: 'Brad',
// };

// if (user) {
//   console.log('List User');
// } else {
//   console.log('No User');
// }

// if (Object.keys(user).length > 0) {
//   console.log('List User');
// } else {
//   console.log('No User');
// }

// // Loose Equality (==)
// console.log(false == 0); // true
// console.log('' == 0); // true
// console.log(null == undefined); // true

// // Strict Equality
// console.log(false === 0); // false
// console.log('' === 0); // false
// console.log(null === undefined); // false

//8
const age = 17;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}
// toán tử 3 ngôi 
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

const auth = true;

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard') // true 
  : (alert('Access Denied'), '/login'); // false

console.log(redirect);


auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashoard');