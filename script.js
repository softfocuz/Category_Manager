function createRowNoButtons(name, subtext) {
    const div = document.createElement("div");
    const title = document.createElement("h4");
    const paragraph = document.createElement("p")
    
    title.textContent = name;
    paragraph.textContent = subtext;
    div.append(title).append(paragraph)
    document.getElementById("category").appendChild(div);
    
}

function createRow(name, subtext) {
    let currentName = name;
    let userInput = subtext;

    const div = document.createElement("div");
    const update = document.createElement("button");
    const del = document.createElement("button");
    const title = document.createElement("h4");
    const paragraph = document.createElement("p");
    
    title.textContent = currentName;
    update.textContent = "Update";
    del.textContent = "Delete";
    paragraph.textContent = userInput;

    del.onclick = function() {
        fetch("http://127.0.0.1:8000/categories/" + currentName, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(function() {
            div.remove();
        })
    }

    update.onclick = function() {
        const new_name = prompt("Enter new name: ")
        fetch("http://127.0.0.1:8000/categories/" + currentName + "?new_name=" + new_name, {
            method: "PUT"
        })
        .then(response => response.json())
        .then(function() {
            title.textContent = new_name;
            currentName = new_name;
        })
    }

    div.append(title, update, del)
    document.getElementById("category").appendChild(div);
}

fetch("http://127.0.0.1:8000/")
    .then(response => response.json())
    .then(function(data) {
        data.category.forEach(function(name) {
            createRowNoButtons(name);
        })
    })

function addCategory() {
    const name = prompt("Enter Category Name: ")
    fetch("http://127.0.0.1:8000/categories?name=" + name, {
        method: "POST"
    })
    .then(response => response.json())
    .then(function() {
        createRow(name);
    })
}