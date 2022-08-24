//Create a new array and add the object of todo only if it's completed and body has the word 'go' in it. Since there aren't "go", I did with 'country'
import axios from 'axios';

async function getData() {
    const response = await axios('https://dummyjson.com/todos');
    const array = [];
    response.data.todos.forEach((item) => {
        if (item.completed && item.todo.includes('country')) {
            array.push(item);
        }
        
    });
    console.log(array)
  
}

getData();
