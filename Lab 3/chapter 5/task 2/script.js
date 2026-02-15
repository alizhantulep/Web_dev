const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addButton.onclick = function() {
    let text = input.value;

    if (text == "") {
        return;
    }

    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        li.classList.toggle('done');
    };

    let span = document.createElement('span');
    span.textContent = text;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';

    let delImg = document.createElement('img');
    delImg.src = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgKmKw7P2y41GusbvRQ5jef4yp3Bh04ensMQ4xGFGQkcxKpQ0V';
    
    deleteBtn.append(delImg);

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);
    list.append(li);

    input.value = "";
};