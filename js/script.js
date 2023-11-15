const { createApp } = Vue

createApp({
    data() {
        return {
            toDos: [
                {
                    text: "Creare repository",
                    done: false,
                },
                {
                    text: "Aprire VStudio",
                    done: false,
                },
                {
                    text: "Clonare la repository",
                    done: false,
                }
            ],
            newToDo: "",
        };
    },
    methods: {
        addNewToDo: function () {
            this.toDos.push({ text: this.newToDo, done: false });
            this.newToDo = "";
        },
        removeToDo: function (index) {
            this.toDos.splice(index, 1);
        },
        changeStatus: function (index) {
            this.toDos[index].done = !this.toDos[index].done;
        },
    }
}).mount('#app');