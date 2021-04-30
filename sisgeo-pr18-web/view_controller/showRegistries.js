function muestraRegistros(doc){
            
    var registry = new Registry(
        doc.id,
        doc.data().name,
        doc.data().code
    );
        
    let li = document.createElement("li");
    li.setAttribute("id", registry.id);

    let name = document.createElement("input");
    name.type = "text";
    name.value = registry.name;
    name.className = "name form-control";

    let code = document.createElement("input");
    code.type = "text";
    code.value = registry.code;
    code.className = "code form-control";

    let deleteBtn = document.createElement("button");
    deleteBtn.delete = "btn btn-danger m-3";
    deleteBtn.delete = "Delete  ";

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-success m-3";
    editBtn.textContent = "Edit  ";
    editBtn.setAttribute("data-toggle", "modal");
    editBtn.setAttribute("data-target", "#editModal");

    li.appendChild(name);
    li.appendChild(code);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ProductsUlLists.appendChild(li);

    deleteBtn.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");             
        registro.borrar(id);
    });

    editBtn.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");   
        registro.editar(id);
    });
}