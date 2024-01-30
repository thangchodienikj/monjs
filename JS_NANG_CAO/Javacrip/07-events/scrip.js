//1
// const clearBtn = document.querySelector('#clear');

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// clearBtn.addEventListener('click', () => alert('Clear Items'));

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
//2
// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// const onDoubleClick = () => {
//   if (document.body.style.backgroundColor !== 'purple') {
//     document.body.style.backgroundColor = 'purple';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// };
// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse up event');
// const onMouseWheel = () => console.log('mouse wheel event');
// const onMouseOver = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDragStart = () => console.log('drag start event');
// const onDrag = () => console.log('drag event');
// const onDragEnd = () => console.log('drag end event');

// // Event Listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('drag', onDrag);
// logo.addEventListener('dragend', onDragEnd);
//3
// const logo = document.querySelector('img');

// function onClick(e) {
  // Event properties
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.type);
  // console.log(e.timeStamp);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  // console.log(e.screenX);
  // console.log(e.screenY);
// }

// function onDrag(e) {
//   document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }

// logo.addEventListener('click', onClick);
// logo.addEventListener('drag', onDrag);

// document.querySelector('a').addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('Link was clicked');
// });

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
//4
// const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => {
//   console.log('keypress');
// };

// const onKeyUp = (e) => {
//   console.log('keyup');
// };

// const onKeyDown = (e) => {

//   if (e.keyCode === 13) {
//     alert('You pressed enter');
//   }


//   if (e.code === 'Digit1') {
//     console.log('You pressed 1');
//   }


//   if (e.repeat) {
//     console.log('You are holding down ' + e.key);
//   }

//   console.log('Shift: ' + e.shiftKey);
//   console.log('Control: ' + e.ctrlKey);
//   console.log('Alt: ' + e.altKey);

//   if (e.shiftKey && e.key === 'K') {
//     console.log('You hit shift + K');
//   }
// };

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);
//5
// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });

// Method 2
// function showKeyCodes(e) {
//     const insert = document.getElementById('insert');
//     insert.innerHTML = '';
  
//     const keyCodes = {
//       'e.key': e.key === ' ' ? 'Space' : e.key,
//       'e.keyCode': e.keyCode,
//       'e.code': e.code,
//     };
  
//     for (let key in keyCodes) {
//       const div = document.createElement('div');
//       div.className = 'key';
//       const small = document.createElement('small');
  
//       const keyText = document.createTextNode(key);
//       const valueText = document.createTextNode(keyCodes[key]);
  
//       small.appendChild(keyText);
//       div.appendChild(valueText);
//       div.appendChild(small);
  
//       insert.appendChild(div);
//     }
//   }
  
//   window.addEventListener('keydown', showKeyCodes);
//6
// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');

// function onInput(e) {
//   heading.textContent = e.target.value;
// }

// function onChecked(e) {
//   const isChecked = e.target.checked;
//   heading.textContent = isChecked ? 'Checked' : 'Not Checked';
// }

// function onFocus() {
//   console.log('Input is focused');
//   itemInput.style.outlineStyle = 'solid';
//   itemInput.style.outlineWidth = '1px';
//   itemInput.style.outlineColor = 'red';
// }

// function onBlur() {
//   console.log('Input is not focused');
//   itemInput.style.outlineStyle = 'none';
// }


// itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
// checkbox.addEventListener('input', onChecked);
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);
//7
// const form = document.getElementById('item-form');

// function onSubmit(e) {
//   e.preventDefault();


//   const item = document.getElementById('item-input').value;
//   const priority = document.getElementById('priority-input').value;

//   if (item === '' || priority === '0') {
//     alert('Please fill in all fields');
//     return;
//   }

//   console.log(item, priority);
// }


// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   const item = formData.get('item');
//   const priority = formData.get('priority');

//   console.log(item, priority);

//   const entries = formData.entries();
//   console.log(entries);

//   for (let entry of entries) {
//     console.log(entry[1]);
//   }
// }

// form.addEventListener('submit', onSubmit2);
//8
// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
//   alert('Button was clicked');
//   e.stopPropagation();
// });

// div.addEventListener('click', () => {
//   alert('Div was clicked');
// });

// form.addEventListener('click', () => {
//   alert('Form was clicked');
// });

// document.body.addEventListener('click', () => {
//   alert('Body was clicked');
// });
//9
// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// list.addEventListener('click', (e) => {
//   if (e.target.tagName === 'LI') {
//     e.target.remove();
//   }
// });

// list.addEventListener('mouseover', (e) => {
//   if (e.target.tagName === 'LI') {
//     e.target.style.color = 'red';
//   }
// });