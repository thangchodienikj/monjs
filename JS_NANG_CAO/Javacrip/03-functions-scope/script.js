//1 
// hàm không tham sô không trả về
// function sayHello() {
//     console.log('Hello World');
//   }
  
//   sayHello();
// // hàm có tham số không trả về
//   function add(num1, num2) {
//     console.log(num1 + num2);
//   }
  
//   add(5, 10);
  
//   // hàm có tham số có trả về 
//   function subtract(num1, num2) {
//     return num1 - num2;
//   }
  
//   // trả giá trị 
//   const result = subtract(10, 2);
//   console.log(result, subtract(20, 5));
//2

// function registerUser(user = 'Bot') {
//     return user + ' is registered';
//   }
  
//   console.log(registerUser());
  
//   function sum(...numbers) {
//     let total = 0;
  
//     for (const num of numbers) {
//       total += num;
//     }
  
//     return total;
//   }
  
//   console.log(sum(1, 2, 3, 4, 5, 6, 100));
  
//   function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
//   }
  
//   const user = {
//     id: 1,
//     name: 'John',
//   };
  
//   console.log(loginUser(user));
//   console.log(
//     loginUser({
//       id: 2,
//       name: 'Sara',
//     })
//   );
  
//   // Arrays as params
//   function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
  
//     const item = arr[randomIndex];
  
//     console.log(item);
//   }
  
//   getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//3

// const x = 100;

// console.log(x, 'in global');

// function run() {
//   console.log(window.innerHeight); // chiều cao của cửa sổ trình duyệt 
//   console.log(x, 'in function');
// }

// run();

// if (true) {
//   console.log(x, 'in block');
// }

// function add() {
//   const x = 1;
//   const y = 50;
//   console.log(x + y);
// }

// add();

//4
// const x = 100;

// // true luân đúng chạy trong điện luân đúng 
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }

// // vòng lặp for lặp 10 lần
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }

// console.log(c);

// function run() {
//   var d = 100;
//   console.log(d);
// }

// run();

// const foo = 1;
// var bar = 2;
//5
// function first() {
//     const x = 100;
  
//     function second() {
//       const y = 200;
//       console.log(x + y);
//     }
  
//     second();
//   }
  
//   first(); // = 300 chạy lần lượt
  
//   if (true) {
//     const x = 100;
  
//     if (x === 100) {
//       const y = 200;
//       console.log(x + y);
//     }
//   }
//6
// Nối chuỗi
// function addDollarSign(value) {
//     return '$' + value;
//   }

//   console.log(addDollarSign(100));
  
//   // Function Expression
//   const addPlusSign = function (value) {
//     return '+' + value;
//   };
  
//   console.log(addPlusSign(200));
//7
// hàm ngắn ngọn 
// const add = (a, b) => {
//     return a + b;
//   };
//   const subtract = (a, b) => a - b;

//   const double = (a) => a * 2;
  
//   const createObj = () => ({
//     name: 'Brad',
//   });
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   numbers.forEach(function (n) {
//     console.log(n);
//   });

//   numbers.forEach((n) => console.log(n));
  
//   console.log(add(1, 2));
//   console.log(subtract(10, 5));
//   console.log(double(10));
//   console.log(createObj());
//8
// Cú pháp IFFE (Có phạm vi riêng và chạy ngay)
// (function () {
//     const user = 'John';
//     console.log(user);
//     const hello = () => console.log('Hello from the IIFE');
//     hello();
//   })();
  
// // Thông số
//   (function (name) {
//     console.log('Hello ' + name);
//   })('Shawn');
  
// // Đặt tên là IIFE (Chỉ có thể gọi đệ quy)
//   (function hello() {
//     console.log('Hello');
//   })();
//9 

// const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelsius(35)} \xB0C `);

// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }

// console.log(minMax([2, 31, 4, 5, 6]));

// ((length, width) => {
//   const area = length * width;

//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

//   console.log(output);
// })(20, 10);
//10
