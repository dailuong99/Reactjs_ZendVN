import { createStore } from 'redux'

// console.log('redux run');
const innitReducer = {
    listTasks: [{
        id: 20,
        name: 'Di cho',
        level: 1
    }]
}


// Bước 1: Khởi tạo ra store
function reducer(state = innitReducer, action) {
    console.log('===== reducer run ====');

    console.log('state', state)

    console.log('action', action)

    if (action.type === 'ADD_NEW_TASK') {
        // Khi muốn thay đổi Object trong Javscript
        // Luôn  luôn phải copy

        return {
            ...state,
            listTasks: [...state.listTasks, action.taskItem]
        }

    }

    if (action.type === 'DELETE_TASK_BY_ID') {
        // Khi muốn thay đổi Object trong Javscript
        // Luôn luôn phải copy
        const index = action.listTasks.findIndex(task => task.id === 2);

        const listTasksAfterDelete = arr.splice(2, 1);

        return {
            ...state,
            listTasks: listTasksAfterDelete
        }

    }
    //add arr, gọi cấu trúc dựa theo tên gọi của từng tên gọi
    // if (action.type === 'ADD_LIST_TASKS') {
    //     return {
    //         ...state,
    //         listTasks: [...state.listTasks, action.taskLists]
    //     }
    // }

    ///tra ve == state ban dau se return
    return state;
}
const store = createStore(reducer)




store.dispatch({
    type: 'ADD_NEW_TASK',
    taskItem: {
        id: 2,
        name: 'dai',
        level: 2
    }
    // type: 'DELETE_TASK_BY_ID',
    // type: 'EDIT_TASK_BY_ID',
    // type: 'SORT_TASKS',

})
store.dispatch({
    type: 'DELETE_TASK_BY_ID',
    taskItem: {
        id: 1,
        name: 'dai',
        level: 2
    }
    // type: 'DELETE_TASK_BY_ID',
    // type: 'EDIT_TASK_BY_ID',
    // type: 'SORT_TASKS',

})

//add arr, gọi cấu trúc dựa theo tên gọi của từng tên gọi
// store.dispatch({
//     type: 'ADD_LIST_TASKS',
//     taskLists: [
//         {
//             id: 2,
//             name: 'dai 2',
//             level: 3
//         },
//         {
//             id: 7,
//             name: 'dai 2',
//             level: 3
//         }
//     ]
// })

console.log('store', store);