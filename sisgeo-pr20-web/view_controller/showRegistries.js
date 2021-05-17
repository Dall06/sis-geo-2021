function muestraRegistros(doc){
            
    var registry = new Registry(
        doc.id,
        doc.data().name,
        doc.data().code
    );
        
    let li = document.createElement("li");
    li.style.backgroundColor = '#d6d6d6'
    li.setAttribute("id", registry.id);
    
    let code = document.createElement("label");
    code.type = "text";
    code.textContent = registry.code;
    code.style.color = "blue";
    code.className = "code";

    let name = document.createElement("span");
    name.type = "text";
    name.textContent = "\t" + registry.name;
    name.className = "name";

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger m-3";
    deleteBtn.textContent = "Delete ";

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning m-3";
    editBtn.textContent = "Edit";
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#editModal");

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    li.appendChild(code);
    li.appendChild(name);
    ProductsUlLists.appendChild(li);
    // li.appendChild(document.createElement("br"));

    deleteBtn.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");             
        registry.deleteRegistry(id);
    });

    editBtn.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");   
        registry.editRegistry(id);
    });
}