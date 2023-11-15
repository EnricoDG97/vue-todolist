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
        }
    }
}).mount('#app');