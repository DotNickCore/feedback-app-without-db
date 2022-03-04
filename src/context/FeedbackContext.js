import { createContext, useState, useEffect } from 'react'
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from content 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from content 2',
            rating: 10
        },
        {
            id: 3,
            text: 'This item is from content 3',
            rating: 10
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    //setFeedback(feedback.map((item) => (item.id === id ? data : item)))

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id, updateItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updateItem} : item))
        )
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}
        >
            {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext