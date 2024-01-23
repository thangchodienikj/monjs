//1 vòng for 
// const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'John') {
//     console.log(names[i] + ' is the best');
//   } else {
//     console.log(names[i]);
//   }
// }

//
// // Break kết thúc vòng for luân khi đến 15 
// for (let i = 0; i <= 20; i++) {
//     if (i === 15) {
//       console.log('Breaking...');
//       break;
//     }
//     console.log(i);
//   }
  
//   // Continue chạ cho đến hết vòng for khi đã tìm được 13
//   for (let i = 0; i <= 20; i++) {
//     if (i === 13) {
//       console.log('Skipping 13...');
//       continue;
//     }
//     console.log(i);
//   }

//3
// let i = 0;
// // phiên bản bé của for 
// while (i <= 20) {
//     console.log('Number ' + i);
//     i++;
//   }

//   const arr = [10, 20, 30, 40, 50];
  
//   while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
//   }
  
//   while (i <= 5) {
//     console.log('Number ' + i);
  
//     let j = 1;
//     while (j <= 5) {
//       console.log(`${i} * ${j} = ${i * j}`);
//       j++;
//     }
  
//     i++;
//   }
  
//   do {
//     console.log('Number ' + i);
//     i++;
//   } while (i <= 20);
//4
// let j = 1;

// while (j <= 100) {
//   if (j % 15 === 0) {
//     console.log('FizzBuzz : '+ j + ' Chia hết cho 15' );
//   } else if (j % 3 === 0) {
//     console.log('Fizz : ' + j + ' Chia hết cho 3' );
//   } else if (j % 5 === 0) {
//     console.log('Buzz : '+ j + ' Chia hết cho 5' );
//   } else {
//     console.log(j);
//   }

//   j++;
// }

// 
// const items = ['book', 'table', 'chair', 'kite'];
// const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];


// for (const user of users) {
//   console.log(user.name);
// }

// // Loop over strings
// const str = 'Hello World';

// for (const letter of str) {
//   console.log(letter);
// }

// // Loop over Maps
// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);

// for (const [key, value] of map) {
//   console.log(key, value);
// }
// const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];


// console.log(socials.__proto__);

// // Dạng dài
// socials.forEach(function (item) {
//   console.log(item);
// });


// // Hình thức ngắn
// socials.forEach((item) => console.log(item));

// // Chúng ta cũng có thể truyền vào chỉ mục và mảng ban đầu
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));


// // Sử dụng hàm được đặt tên
// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

// const socialObjs = [
//   { name: 'Twitter', url: 'https://twitter.com' },
//   { name: 'Facebook', url: 'https://facebook.com' },
//   { name: 'Linkedin', url: 'https://linkedin.com' },
//   { name: 'Instagram', url: 'https://instagram.com' },
// ];

// socialObjs.forEach((item) => console.log(item.url));

//8
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

// // Phiên bản ngắn
// const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// const evenNumbers3 = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number); // giá trị chia hết cho 2 sẽ được đẩy vào mảng evenNumbers
//   }
// });

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];


// const retailCompanies = companies.filter(
//   (company) => company.category === 'Retail'
// );
// console.log(retailCompanies);


// const earlyCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end <= 2005
// );
// console.log(earlyCompanies);


// const longCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(longCompanies);

//9
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log('ok : '+ doubledNumbers);


// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });
// console.log(doubledNumbers2);

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// const companyNames = companies.map((company) => company.name); // lấy tất cả name trong mảng companies

// const companyInfo = companies.map((company) => {
//   return {
//     name: company.name,
//     category: company.category,
//   };
// }); // lấy tất cả name , category  trong mảng companies 
// console.log(companyInfo);

// const companyYears = companies.map((company) => {
//   return {
//     name: company.name,
//     length: company.end - company.start + ' years',
//   };
// });
// console.log(companyYears);

// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number)) 
//   .map((sqrt) => sqrt * 2);
// console.log(squareAndDouble);

// const squareAndDouble2 = numbers
//   .map(function (number) {
//     return Math.sqrt(number);
//   })
//   .map(function (sqrt) {
//     return sqrt * 2;
//   })
//   .map(function (sqrtDoubled) {
//     return sqrtDoubled * 3;
//   });
// console.log(squareAndDouble2);

//   //filter dùng để tạo ra 1 mảng mới khi thỏa mãn 1 điều kiện 
// const evenDouble = numbers
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);

// console.log(evenDouble);
//10
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// const sum3 = () => {
//   let acc = 0;
//   for (const cur of numbers) {
//     acc += cur;
//   }
//   return console.log(acc);
// };
// sum3();

// const cart = [
//   { id: 1, name: 'Product 1', price: 130 },
//   { id: 2, name: 'Product 2', price: 150 },
//   { id: 3, name: 'Product 3', price: 200 },
// ];

// const total = cart.reduce(function (acc, product) { // mặc định giá trị acc = 0 , gán mảng cart sử dụng chung product
//   return acc + product.price; 
// }, 0);

// console.log(total);
//11
// Challenge 1
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];
  
  const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
      name: person.firstName + ' ' + person.lastName,
      email: person.email,
    }));
  
  console.log(youngPeople);
  

  const numbers = [2, -30, 50, 20, -12, -9, 7];
  
  const positiveSum = numbers
    .filter((number) => number > 0)
    .reduce((acc, cur) => acc + cur, 0);
  
  console.log(positiveSum);
  
  // Challenge 3
  const words = ['coder', 'programmer', 'developer'];
  
  const cWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
  });
  
  console.log(cWords);