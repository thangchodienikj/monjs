//1

// let x;

// // Array Literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];

// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');

// // Get value by index
// x = numbers[0];

// x = numbers[0] + numbers[3];

// x = `My favorite fruit is an ${fruits[2]}`;

// x = numbers.length;

// fruits[2] = 'pear';

// // length is not read-only
// // fruits.length = 2;

// fruits[3] = 'strawberry';

// // Using the length as the index will always add on the the end
// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';

// x = fruits;

// console.log(x);

//2
/*
let x;

const arr = [28, 38, 44, 29, 109];

// push() - Thêm phần từ vào mảng
arr.push(100);
console.log(arr);
// pop() - Bỏ giá trị cuối cùng 
arr.pop();
console.log(arr);
// unshift() - Thêm giá trị vào đầu mảng
arr.unshift(99);
console.log(arr);
// shift() - Xóa giá trị đầu tiên
arr.shift();
console.log(arr);
// Reverse() - Đảo ngược một mảng
arr.reverse();
console.log(arr);
// includes() - Check to see if something is in the array
x = arr.includes(445);
console.log(x);
// indexOf() - Trả về chỉ mục của kết quả khớp đầu tiên
x = arr.indexOf(28);
console.log(x);
// Trả về mảng dưới dạng chuỗi
x = arr.toString();
console.log(x);
x = arr.join();
console.log(x);
// slice() trả về các phần tử đã chọn trong một mảng, dưới dạng một mảng mới. Slice lấy chỉ mục của phần tử đầu tiên và chỉ mục của phần tử cuối cùng được đưa vào mảng mới.
x = arr.slice(1, 4);
console.log(x);
// splice() hoạt động giống như slice() ngoại trừ việc nó lấy chỉ mục của phần tử đầu tiên và số phần tử sau đó làm đối số thứ hai. nó cũng làm thay đổi mảng ban đầu trong đó slice() không
x = arr.splice(1, 4);
console.log(x);
// Xóa một phần tử/giá trị - Phần sau đây sẽ thay đổi mảng ban đầu bằng cách loại bỏ phần tử có chỉ số là 4. x sẽ bằng một mảng mới có giá trị được lấy ra đó.
x = arr.splice(4, 1);
console.log(x);
// Phương thức xâu chuỗi - Một số phương thức có thể được xâu chuỗi tùy thuộc vào giá trị trả về.
x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x);
*/
// 3
/*
let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// Lồng mảng

// Lồng berries vào trong fruits
const v =fruits.push(berries);
// Bây giờ chúng ta có thể truy cập 'blueberry' như sau
x = fruits[3][1];

console.log(x);
// Tạo một biến mới và lồng cả hai mảng
const allFruits = [fruits, berries];

x = allFruits[1][2];

console.log(allFruits);
// concat() - Nối mảng
x = fruits.concat(berries);

console.log(x);
// Toán tử spread (...) - Nối với
x = [...fruits, ...berries];

console.log(x);
// flat() - Làm phẳng một mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

console.log(x);
// Các phương thức tĩnh của đối tượng Array

// isArray() - Kiểm tra xem có phải là mảng không
x = Array.isArray(fruits);

console.log(x);
// from() - Tạo một mảng từ một giá trị giống như mảng
x = Array.from('12345');

// of() - Tạo một mảng từ một bộ giá trị
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
*/
//4
// Challenge 1

// const arr = [1, 2, 3, 4, 5];

// // arr.reverse();
// // arr.push(0);
// // arr.unshift(6);

// // Same result as above
// arr.push(6); // thê vào cuối
// arr.unshift(0); //  thêm vào đầu
// arr.reverse(); // đảo ngược mảng


// // Challenge 2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // Solution 1
// const arr3 = arr1.slice(0, 4).concat(arr2); // xóa số 4 và nối 2 mảng thành arr3 

// // Solution 2
// const arr4 = [...arr1, ...arr2]; // nối chuỗi theo dạng ...

// arr4.splice(4, 1);

// console.log(arr4);
//5
// let x;

// // Tạo một đối tượng
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };


// // Truy cập thuộc tính đối tượng
// x = person.name;// Ký hiệu dấu chấm
// x = person['age']; // Ký hiệu khung
// x = person.address.state;
// x = person.hobbies[0];

// // Cập nhật thuộc tính
// person.name = 'Jane Doe';
// person['isAdmin'] = false;


// // Xóa thuộc tính
// delete person.age;

// // Tạo thuộc tính mới
// person.hasChildren = true;

// // Thêm hàm
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();

// // mảng liên hợp 
// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Traversy',
// };

// x = person2['first name'];

// console.log(x);

//6
// let x;


// // Tạo đối tượng bằng cách sử dụng hàm tạo đối tượng
// const todo = new Object();

// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo;

// // Lồng ghép đối tượng
// const person = {
//   address: {
//     coords: {
//       lat: 42.9384,
//       lng: -71.3232,
//     },
//   },
// };

// x = person.address.coords.lat;

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// // Toán tử trải rộng
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// // Tương tự như sử dụng ...
// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);
// // Mảng đối tượng
// const todos = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'Pickup kids from school' },
//   { id: 3, name: 'Take out trash' },
// ];

// x = todos[2].name;
// console.log(x);
// // Lấy mảng khóa đối tượng
// x = Object.keys(todo);
// console.log(x);
// // Lấy chiều dài của một đối tượng
// x = Object.keys(todo).length;
// console.log(x);
// // Lấy mảng giá trị đối tượng
// x = Object.values(todo);
// console.log(x);

// // Lấy mảng các cặp khóa/giá trị đối tượng
// x = Object.entries(todo);
// console.log(x);
// // check đối tượng trong mảng
// x = todo.hasOwnProperty('name');

// console.log(x);

//7

// Đặt thuộc tính của đối tượng có cùng tên với biến
// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;
// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);


// // Phá hủy thuộc tính của đối tượng

// const todo = {
//   id: 1,
//   title: 'Take out trash',
//   user: {
//     name: 'John',
//   },
// };

// const {
//   id: todoId, // đổi tên id thành todoId
//   title,
//   user: { name }, // phá hủy nhiều cấp độ
// } = todo;

// console.log(todoId);

// // Phá hủy mảng và sử dụng toán tử còn lại/trải rộng
// const numbers = [23, 67, 33, 49, 52];

// const [first, second, ...rest] = numbers;

// console.log(first, second, rest);
//8
// const post = {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body',
//   };
  
// // Chuyển đổi sang chuỗi JSON
//   const str = JSON.stringify(post);
  
//   console.log(str.id);
  

// // Phân tích cú pháp JSON
//   const obj = JSON.parse(str);
  
//   console.log(obj.id);
  

// // JSON & mảng
//   const posts = [
//     {
//       id: 1,
//       title: 'Post One',
//       body: 'This is the body',
//     },
//     {
//       id: 2,
//       title: 'Post Two',
//       body: 'This is the body',
//     },
//   ];
  
//   const str2 = JSON.stringify(posts);
  
//   console.log(str2);
  //9
  // Step 1
// const library = [
//     {
//       title: 'The Road Ahead',
//       author: 'Bill Gates',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//     {
//       title: 'Steve Jobs',
//       author: 'Walter Isaacson',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//     {
//       title: 'Mockingjay',
//       author: 'Suzanne Collins',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//   ];
  
//   // Step 2
//   library[0].status.read = true;
//   library[1].status.read = true;
//   library[2].status.read = true;
  
//   // Step 3
//   const { title: firstBook } = library[0];
  
//   console.log(firstBook);
  
//   // Step 4
//   const libraryJSON = JSON.stringify(library);
  
//   console.log(libraryJSON);
