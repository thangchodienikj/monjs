// //1
// // Đối tượng cửa sổ toàn cục
// console.log(window);

// // Đối tượng tài liệu là một phần của đối tượng cửa sổ
// console.dir(window.document);

// // Chúng ta có thể truy cập trực tiếp các phần tử DOM bằng các thuộc tính
// console.log(document.body);
// console.log(document.links[0]);

// // Chúng ta có thể thiết lập thuộc tính của các phần tử
// // document.body.innerHTML = '<h1>Xin chào từ body</h1>';

// // Đối tượng tài liệu có rất nhiều phương thức. Một là `document.write()`, nó sẽ ghi nội dung nào đó vào tài liệu
// document.write('Xin chào từ JS');

// // Chúng ta cũng có các phương thức để chọn phần tử một cách trực tiếp hơn
// // lấy theo id
// document.getElementById('main').innerHTML = '<h1>Xin chào từ main</h1>';
// // lấy theo class
// document.querySelector('#main h1').innerText = 'Xin chào';
//2
// let output;

// // document.all không được dùng nữa
// output = document.all;
// output = document.all[11];
// output = document.all.length;

// // Mọi thứ trong thẻ html
// output = document.documentElement;

// // Thẻ đầu và thẻ thân
// output = document.head;
// output = document.body;

// // HTMLCollection mọi thứ trong head/body
// output = document.head.children;
// output = document.body.children;

// // Thuộc tính ngẫu nhiên
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;


// // Lấy tất cả các form
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;


// // Thay đổi id biểu mẫu
// document.forms[0].id = 'new-id';

// // Lấy tất cả link
// // output = document.links;
// // output = document.links[0];
// // output = document.links[0].href;
// // output = document.links[0].href = 'https://facebook.com';
// // output = document.links[0].id = 'google-link';
// // output = document.links[0].className = 'google-class';
// // output = document.links[0].classList;


// // Lấy tất cả hình ảnh
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// // Biến HTMLCollection thành một mảng
// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);
//3
// lấy theo id

// console.log(document.getElementById('app-title'));

// // Lấy thuộc tính trong id đấy
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));


// // Đặt thuộc tính
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title');

// const title = document.getElementById('app-title');

// // Lấy/thay đổi nội dungconsole.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Again';
// title.innerHTML = '<strong>Shopping List</strong>';

// // Thay đổi kiểu
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';
// title.style = 'color: red; background-color: black;';


// // lấy theo class


// // Sử dụng bất kỳ bộ chọn CSS nào
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// // Sử dụng các phương thức này trên các phần tử khác
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';

//4
// querySelectorAll()
// Returns a NodeList

// const listItems = document.querySelectorAll('.item');

// // Truy cập các phần tử theo chỉ mục
// console.log(listItems[1].innerText);


// // Đặt màu cho phần tử cụ thể
// listItems[1].style.color = 'red';


// // Chúng ta có thể sử dụng forEach() trên NodeList
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = ` Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

// // getElementsByClassName()

// // Trả về một HTMLCollection

// const listItems2 = document.getElementsByClassName('item');

// console.log(listItems2[2].innerText);

// const listItemsArray = Array.from(listItems2);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// });

// // getElementsByTagName()

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText);

//6
// let output;

// // Lấy phần tử con từ phần tử cha

// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// // Get parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// // Get sibling elements

// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';

// console.log(output);

//7
// let output;

// // Get child nodes

// const parent = document.querySelector('.parent');

// output = parent.childNodes;
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].textContent;
// output = parent.childNodes[3].outerHTML;

// output = parent.childNodes[3].innerText = 'Child One';
// output = parent.childNodes[5].style.color = 'red';

// output = parent.firstChild;
// output = parent.lastChild;

// parent.lastChild.textContent = 'Hello';

// // Get parent node

// const child = document.querySelector('.child');

// output = child.parentNode;
// output = child.parentElement;

// child.parentNode.style.backgroundColor = '#ccc';
// child.parentNode.style.padding = '10px';

// // Get sibling nodes
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem.nextSibling;
// output = secondItem.previousSibling;

// console.log(output);

//8

// Quick & Dirty
function createListItem(item) {
    const li = document.createElement('li');
  
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  
    document.querySelector('.items').appendChild(li);
  }
  
  // Clean & Performant
  function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
  
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';
  
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
  
    button.appendChild(icon);
    li.appendChild(button);
  
    document.querySelector('.items').appendChild(li);
  }
  
  createListItem('Eggs');
  createNewItem('Cheese');