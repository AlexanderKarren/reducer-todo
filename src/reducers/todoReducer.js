export const initialState = [
    {
        id: 0,
        task: "Welcome to my new reducer todo app!",
        completed: false,
        tags: ["todo", "app", "javascript"],
        due: "2020-4-16"
    },
    {
        id: 1,
        task: "Take a look around.",
        completed: false,
        tags: ["todo"],
        due: "2020-7-25"
    },
    {
        id: 2,
        task: "Finish this assignment",
        completed: false,
        tags: ["todo", "Lambda"],
        due: "2020-3-16"
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
          return [...state, {
              id: Date.now(),
              task: action.payload.task,
              completed: false,
              tags: action.payload.tags[0].split(","),
              due: action.payload.due
          }];
        case "TOGGLE_COMPLETION":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                else {
                    return todo;
                }
            })
        case "CLEAR_COMPLETED":
            return state.filter(todo => {
                return !todo.completed;
            })
        default:
          return state;
    }
}