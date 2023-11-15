const { createApp } = Vue

createApp({
    data() {
        return {
            toDos: [
                "Creare repository",
                "Aprire VStudio",
                "Clonare la repository"
            ],
            newToDo: "",
        };
    },
    methods: {
        addNewToDo: function() {
            this.toDos.push(this.newToDo);
            this.newToDo="";
        },
        removeToDo: function(index) {
            this.toDos.splice(index, 1);
        }
    }
}).mount('#app');