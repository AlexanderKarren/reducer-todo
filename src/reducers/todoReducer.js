export const initialState = [
    {
        id: 0,
        task: "Welcome to my new reducer todo app!",
        completed: false,
        tags: ["app", "react", "javascript"],
        due: "2020-04-16"
    },
    {
        id: 1,
        task: "Take a look around.",
        completed: false,
        tags: ["todo"],
        due: "2020-07-25"
    },
    {
        id: 2,
        task: "Finish this assignment",
        completed: false,
        tags: ["school", "Lambda"],
        due: "2020-03-17"
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            let tag = (action.payload.tags === "") ? [null] : action.payload.tags[0].split(",");
          return [...state, {
              id: Date.now(),
              task: action.payload.task,
              completed: false,
              tags: tag,
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
            return state.filter(todo => !todo.completed)
        default:
          return state;
    }
}