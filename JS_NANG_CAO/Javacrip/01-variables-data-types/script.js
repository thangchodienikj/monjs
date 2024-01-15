 // bài 1 
//1 
/*
console.log(100);

console.log(20, 'Hello', true);

console.table({ name: 'Brad', email: 'brad@gmail.com' });
*/
//2
/*
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/
//3
/*
let firstName = 'John';
const lastName = 'Doe';
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}
console.log(score);

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
    name: 'Brad',
  };
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);
*/
//4
/*
// Chuỗi
const firstName = 'Sara';

// Số
const age = 30;
const temp = 98.9;

// Boolean 
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
*/
//5
/*
const name = 'John';
const age = 30;

const person = {
  name: 'Brad',
  age: 40,
};

let newName ;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName); // John, Jonathan
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
*/
//6
/*
let amount = 'hello';

amount = parseInt(amount); // chuyển đổi thành số nguyên
amount = +amount; // chuyển đổi thành số 
amount = Number(amount); // chuyển đổi thành số 


amount = amount.toString();  // chuyển đổi thành chuỗi
amount = String(amount); // chuyển đổi thành chuỗi 


amount = parseFloat(amount); // chuyển đổi thành số thập phân 


amount = Boolean(amount); // Chuyển đổi thành boolean

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);
*/
//7
/*
// 1. Arithmetic Operators
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// nối chuỗi 
x = 'Hello' + ' ' + 'World';

// số mũ 
x = 2 ** 3;

// tăng dần 
x = 1;
// x = x + 1;
x++;

// giảm dần
// x = x - 1;
x--;

// 2. Assignment Operators

x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';

// Equal to (Type and value)
x = 2 === '2';

// Not equal to (Just the value, not the type)
x = 2 != '2';

// Not equal to (Type and value)
x = 2 !== 2;

// Greater than and less than
x = 10 > 5;
console.log(x);
x = 10 < 5;
console.log(x);
x = 10 <= 5;
console.log(x);
x = 10 >= 5;
console.log(x);
*/
//8 
/*
let x;

// sử lý chuỗi thành số 
x = 5 + '5';

x = 5 + Number('5');
console.log(x);
x = 5 * '5';

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;

x = Number(null);

x = Number(true);

x = Number(false);

// true is coerced to a 1
x = 5 + true;

// false is coerced to 0 (falsy)
x = 5 + false;

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;

console.log(x, typeof x);
*/
//9
/*
let x;

const name = 'John';
const age = 31;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'; // nối chuỗi 

x = `Hello, my name is ${name} and I am ${age} years old`; // nối chuỗi 

const s = new String('Hello World');
x = s.length;

// Access value by key
x = s[0];

x = s.toUpperCase(); // viết hoa 

x = s.toLowerCase(); // viết thường

x = s.charAt(0); // chỡ cái ở vị trí  số 0 trong chuỗi

x = s.indexOf('d'); // xác định vị trí của chữ  d trong chuỗi 

x = s.substring(2,5); // các chữu thuộc trong phạm vi từ vị trí thứ 2 đến vị trí thứ 5

x = s.substring(7); // từ vị tữ thứ 7 cho đến hết 

x = s.slice(-11, -1); // ngược lại

x = '         Hello World';
x = x.trim(); // xóa khoảng trắng ở đầu và cuối


x = s.replace('World', 'John'); // đổi tất cả giá trị trong chuỗi 

x = s.includes('Hell'); // kiếm tra trong chuỗi có giá trị cần tìm ;

x = s.valueOf(); // trả mảng về giá trị nguyễn thủy 

x = s.split(''); // tách trở về 1 mảng chuỗi 

console.log(x);
*/
//10
/*
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
*/
//11
/*
let x;

const num = new Number(5);

// toString() - trả về một chuỗi biểu diễn số
x = num.toString();
console.log(x);
// Để lấy độ dài
x = num.toString().length;
console.log(x);
// toFixed() - trả về một chuỗi biểu diễn số với số thập phân được chỉ định
x = num.toFixed(2);
console.log(x);
// toPrecision() - trả về một số có độ dài được chỉ định
x = num.toPrecision(3);
console.log(x);
// toExentialial() - chuyển đổi một số thành ký hiệu số mũ và trả về giá trị của nó dưới dạng chuỗi
x = num.toExponential(2);
console.log(x);
// toLocaleString() - trả về một chuỗi biểu diễn số, sử dụng ngôn ngữ hiện tại
x = num.toLocaleString('en-US');
console.log(x);
// valueOf - Nhận giá trị
x = num.valueOf();

// Bản thân đối tượng Number có một số thuộc tính và phương thức

// Số lớn nhất và nhỏ nhất có thể
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);

*/
//12
/*
let x;

// số mũ
x = Math.sqrt(9);
console.log(x);
// Giá trị tuyệt đối
x = Math.abs(-5);
console.log(x);
// làm tròn
x = Math.round(4.2);
console.log(x);
// làm tròn lên
x = Math.ceil(4.2);
console.log(x);
// làm tròn xuống
x = Math.floor(4.9);
console.log(x);
// số mũ
x = Math.pow(2, 3);
console.log(x);
// số bé nhất
x = Math.min(4, 5, 3);
console.log(x);
// số lớn nhất
x = Math.max(4, 5, 3);
console.log(x);
// Nhận số/thậpGet a random number between 1 and 100 phân ngẫu nhiên trong khoảng từ 0 đến 1
x = Math.random();
console.log(x);
// Nhận một số ngẫu nhiên từ 1 đến 100
x = Math.floor(Math.random() * 100 + 1);

console.log(x);
*/
// 13
/*
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);


const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);


const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);


const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);


const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
*/
//14
/*
let d;

d = new Date();

// chuỗi thành chuỗi 
d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0);
console.log(d);

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// Lấy timestamp hiện tại
d = Date.now();

// Lấy timestamp của một ngày cụ thể
d = new Date();
d = d.getTime();
d = d.valueOf();

// Tạo một ngày từ một timestamp
d = new Date(1666962049745);

// Chuyển đổi từ mili-giây sang giây
d = Math.floor(Date.now() / 1000);

// In kết quả ra console
console.log(d);
*/
//15 
let x;
let d = new Date();

// Date methods

x = d.toString(); // chuyển thành chuỗi 

x = d.getTime(); // tính mili-giây ở 1 thời điểm cố định 
x = d.valueOf();

x = d.getFullYear(); // năm hiện tại

x = d.getMonth();
x = d.getMonth() + 1; // tháng hiện tại

x = d.getDate(); // ngày hiện tại

x = d.getDay(); // ngày thứ mấy trong tuần

x = d.getHours(); // giờ hiện tại 

x = d.getMinutes(); // phút hiện tại

x = d.getSeconds(); // giây hiện tại

x = d.getMilliseconds(); //  mili-giây hiện tại 

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);