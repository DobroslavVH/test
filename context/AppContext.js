import React from "react";
import { createContext, useReducer } from "react";

const AppContext = createContext();

const postReducer = (state, action) => {
    switch (action.type) {
        case 'add_post':
            return [ ...state, 
                {
                    id: Math.floor(Math.random() * 99),
                    title: action.payload
                }]; 
        case 'delete_post':
            return state.filter((post) => post.id !== action.payload)
        default:
            return state;
    }
};

export const AppProvider = ({children}) => {
    const [ posts, dispatch ] = useReducer(postReducer, []);
    
    const addPost = (title) => {
        dispatch({type: 'add_post', payload: title})
    };
    const deletePost = (id) => {
        dispatch({type: 'delete_post', payload: id})
    };
    
    return (
        <AppContext.Provider value={{posts, addPost, deletePost}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;