import { createStore } from 'redux'

// console.log('redux run');
const innitReducer = {
    listTasks: [{
        id: 1,
        name: 'Di cho',
        level: 1
    }]
}


// Bước 1: Khởi tạo ra store
function reducer(state = innitReducer, action) {
    if (action.type === 'ADD_NEW_TASK') {
        // Khi muốn thay đổi Object trong Javscript
        // Luôn  luôn phải copy

        return {
            ...state,
            listTasks: [...state.listTasks, action.taskItem]
        }

    }

    // if (action.type === 'DELETE_TASK_BY_ID') {
    //     // Khi muốn thay đổi Object trong Javscript
    //     // Luôn luôn phải copy
    //     const deleteId = action.taskItem.deleteId;
    //     const listTasksAfterDelete = state.listTasks.filter(function(taskItem){
    //     return taskItem.id !== deleteId
    //     })
    //     return {
    //         ...state,
    //         listTasks: listTasksAfterDelete
    //     }
    // }

    
    if (action.type === 'EDIT_TASK_BY_ID') {
        // Khi muốn thay đổi Object trong Javscript
        // Luôn luôn phải copy
        const updateTask = action.taskItem;
        
        return {
            ...state,
            listTasks: state.listTasks.map(function(taskItem){
                if (taskItem.id === updateTask.id){
              return{
                ...taskItem,
                ...updateTask
              };
                }
                return taskItem;
            })
        }
    }


    ///tra ve == state ban dau se return
    return state;
}
const store = createStore(reducer)

// console.log('Trước khi thêm mới', store.getState());

store.dispatch({
    type: 'ADD_NEW_TASK',
    taskItem: {
        id: 2,
        name: 'di choi',
        level: 2
    }
})
store.dispatch({
    type: 'ADD_NEW_TASK',
    taskItem: {
        id:3,
        name: 'di hoc',
        level: 3
    }
})
// console.log('Sau khi thêm mới', store.getState());

// console.log('Trước khi xoa', store.getState());

// store.dispatch({
//     type: 'DELETE_TASK_BY_ID',
//     taskItem: {
//         deleteId: 1,
    
//     }
// })
// store.dispatch({
//     type: 'DELETE_TASK_BY_ID',
//     taskItem: {
//         deleteId: 20,
    
//     }
// })
// console.log('Sau khi xoa', store.getState());

console.log('Trước khi EDIT_TASK_BY_ID', store.getState());

store.dispatch({
    type: 'EDIT_TASK_BY_ID',
    taskItem: {
        id:3,
        name: 'di hoc edit',
        level: 3
    }
})
console.log('Sau khi EDIT_TASK_BY_ID', store.getState());

console.log('store', store);