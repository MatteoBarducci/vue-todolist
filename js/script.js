const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'Wash the dishes',
                    done: true
                },
                {
                    text: 'Sweep the floor',
                    done: false
                },
                {
                    text: 'Water the plants',
                    done: true
                },
                {
                    text: 'Dust furniture',
                    done: false
                },
                {
                    text: 'Make the bed',
                    done: true
                },
                {
                    text: 'Take out the trash',
                    done: true
                },
            ],
            newTaskText: '',
        };
    },
    methods: {
        deletetask(index) {
            this.toDoList.splice(index, 1)
        },
        addNewTask(){
            const newTask = {
                text: this.newTaskText,
                done: false
            }
            this.toDoList.push(newTask)
        }
    }
}).mount('#app');