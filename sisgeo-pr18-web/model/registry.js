class Registry {  
    constructor(id, name, code){
        this.id = id;
        this.name = name;
        this.code = code;
    };

    deleteRegistry = (id) => {
        database.collection("products").doc(id).delete();
    };

    addRegistry = () => {
        database.collection('products').add({
            name: this.name,
            code: this.code
        });
    }

    editRegistry = (id) => {
        ProductEditForm.name.value = this.name;
        ProductEditForm.code.value = this.code;
        ProductEditForm.id.value = this.id;
    };

    updateRegistry = () => {
        database.collection('products').doc(this.id).update({
            name: this.name,
            code: this.code
        });
    };
};

// export default Registry;