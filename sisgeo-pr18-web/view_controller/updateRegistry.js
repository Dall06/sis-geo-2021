ProductEditForm.addEventListener('submit',(e)=> {
    e.preventDefault();

    let id =ProductEditForm.id.value;
    let name = ProductEditForm.name.value;
    let code = ProductEditForm.code.value;

    var registry = new Registry(id,name,code);

    registry.updateRegistry();

    var currentRegistry = document.getElementById(id);
    currentRegistry.querySelector('.name').value = name + ' ';
    currentRegistry.querySelector('.code').value = code + ' ' ;

    ProductEditForm.name.value ='';
    ProductEditForm.code.value ='';

    $('#editModal').modal('hide');
});