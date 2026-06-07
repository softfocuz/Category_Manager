function createRowNoButtons(name, subtext) {
    const div = document.createElement("div");
    const title = document.createElement("h4");
    const paragraph = document.createElement("p");
    
    title.textContent = name;
    paragraph.textContent = subtext;
    div.append(title, paragraph)
    document.getElementById("category").appendChild(div);
}

function createRow(name, subtext) {
    let currentName = name;

    const div = document.createElement("div");
    const update = document.createElement("button");
    const del = document.createElement("button");
    const title = document.createElement("h4");
    const paragraph = document.createElement("p");
    
    title.textContent = currentName;
    paragraph.textContent = subtext;
    update.textContent = "Update";
    del.textContent = "Delete";

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
        const new_name = prompt("Enter New Name: ")
        const new_subtext = prompt("Enter New Subtext: ")
        fetch("http://127.0.0.1:8000/categories/" + currentName + "?new_name=" + new_name + "&new_subtext=" + new_subtext, {
            method: "PUT"
        })
        .then(response => response.json())
        .then(function() {
            title.textContent = new_name;
            paragraph.textContent = new_subtext;
            currentName = new_name;
        })
    }

    const headers = document.createElement("div");
    headers.className = "headers";
    headers.append(title, update, del)
    div.append(headers, paragraph)
    document.getElementById("category").appendChild(div);
}

fetch("http://127.0.0.1:8000/")
    .then(response => response.json())
    .then(function(data) {
        data.category.forEach(function(item) {
            createRowNoButtons(item.name, item.subtext);
        })
    })

function addCategory() {
    const name = prompt("Enter Category Name: ")
    const subtext = prompt("Enter Subtext: ")
    fetch("http://127.0.0.1:8000/categories?name=" + name + "&subtext=" + subtext, {
        method: "POST"
    })
    .then(response => response.json())
    .then(function() {
        createRow(name, subtext);
    })
}