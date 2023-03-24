const { createApp } = Vue;
createApp({
    data() {
        return {
            toDoElements: [
                {
                    text: 'Fare X',
                    done: true
                },
                {
                    text: 'Disfare Y',
                    done: false
                },
                {
                    text: 'Sentire Z',
                    done: true
                },
                {
                    text: 'Trovare Q',
                    done: true
                },
                {
                    text: 'Prendere K',
                    done: false
                },
            ],
    
            newToDo: {
                text: '',
                done: false
            },
        }
    },

    methods: {
        selectToDo(toDo) {
            console.log(toDo);
            if(toDo.done == true) {
                toDo.done = false;
            } else {
                toDo.done = true;
            }
        },
    
        deleteToDo(toDoIndex) {
            this.toDoElements.splice(toDoIndex, 1);
        },

        addToDo() {
            if(this.newToDo.text == "") {
                alert("Attenzione, To Do incompleto!");
            } else {
                this.toDoElements.push(this.newToDo);
                this.newToDo = {
                    text: "",
                    done: false
                }
            }
        }
    },
}).mount('#app');