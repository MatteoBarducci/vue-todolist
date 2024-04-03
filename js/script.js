const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: [
                {
                    text: 'Wash the dishes',
                    done: true
                },
                {
                    text: 'Sweep the floor',
                    done: false
                },
                {
                    name: 'Take out the trash',
                    done: true
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
            ]
        };
    },
    methods: {
    }
}).mount('#app');