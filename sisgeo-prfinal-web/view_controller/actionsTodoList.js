const onSubmitTODO = (e) => {
    e.preventDefault();
    database.collection("todos").add({
        title: TodoForm.title.value,
        description: TodoForm.description.value,
        category: TodoForm.category.value,
    });
}
TodoForm.addEventListener('submit', onSubmitTODO);