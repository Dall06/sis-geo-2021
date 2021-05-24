const GetTODOS = (data) => {
    if (data.length) {
        let innerHTMLDiv = '';
        data.forEach(document => {
            const todo = document.data();
            const column = `
            <li class="list-group-item border-info">
            <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <h5 class="card-title">${todo.title}</h5>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p>Artist: ${todo.description}</p>
                        <p>Album: ${todo.category}</p>
                    </div>
                </div>
            </div>
            </div>
        </li> `;
            innerHTMLDiv += column;
        });
        TODOsList.innerHTML = innerHTMLDiv;
    }
    else {
        TODOsList.innerHTML = '<p class="text-center">Ingrese con sus claves para ver los platillos.</p>';
    }
}