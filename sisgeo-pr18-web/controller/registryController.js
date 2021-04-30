class RegistryController {
    deleteRegistry = (id) => {
        db.collection("products").doc(id).delete();
    };

    addRegistry = () => {
        db.collection('products').add({
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
        db.collection('products').doc(this.id).update({
            name: this.name,
            code: this.code
        });
    };
}

// export default RegistryController;