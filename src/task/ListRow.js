import React from 'react';
import { IconButton, Typography } from '@material-ui/core'
import { Delete, Done } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../state/task'

export const ListRow = ({ task, index }) => {
    const dispatch = useDispatch()
    return (
        <Typography classes={{ root: 'list-row' }}>
            {task.taskName}
            <span>
                <IconButton aria-label="done" color="primary" onClick={() => dispatch(completeTask(index))}>
                    <Done />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => dispatch(deleteTask(index))}>
                    <Delete />
                </IconButton>
            </span>
        </Typography>
    );
}

