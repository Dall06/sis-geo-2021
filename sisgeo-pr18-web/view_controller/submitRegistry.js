ProductAddForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    var registro = new Registry(
        null,
        ProductAddForm.name.value,
        ProductAddForm.code.value
    );
    registro.addRegistry();
    ProductAddForm.name.value ='';
    ProductAddForm.code.value ='';
    $('#addModal').modal('hide');
});