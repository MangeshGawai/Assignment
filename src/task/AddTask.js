import React from 'react';
import { TextField, IconButton } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { addTask } from '../state/task'
export const AddTask = () => {
    const dispatch = useDispatch()
    const saveTask = () => {
        const value = document.getElementById('add-task').value
        if (value && value.trim().length) {
            dispatch(addTask(value.trim()))
        }
        document.getElementById('add-task').value = ''
    }
    return (
        <div >
            <TextField
                id="add-task"
                label="Add new task"
                variant="outlined"
                classes={{ root: 'add-task-input' }}
            />
            <IconButton aria-label="send" color="primary" onClick={saveTask}>
                <Send />
            </IconButton>
        </div>
    );
}

