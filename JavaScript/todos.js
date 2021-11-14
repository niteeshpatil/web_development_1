let input = prompt("What would you like to do?")
const todos = ['letter', 'number']
while (input !== 'Quit' && input !== 'q') {
    if (input == 'list') {
        console.log('*******************')
        console.log('*******************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log('*******************')
    }
    else if (input == 'new') {
        const newTodo = prompt('OK,What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to list!`)
    }
    else if (input == 'delet') {
        const index = prompt('ok enter the endex to delet:');
        if (!Number.isNaN(index)) {
            console.log('Invalid Index');
        }
        else
            todos.splice(index, 1);
    }
    input = prompt("what would you like to do?")
}
console.log("Ok Quit The App!")