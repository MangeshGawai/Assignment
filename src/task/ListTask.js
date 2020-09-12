import React, { useCallback, useMemo, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core'
import { ListRow } from "./ListRow";
import { useSelector } from 'react-redux'
import { taskStateSelector, statusTypes } from '../state/task'

export const ListTask = () => {
    const task = useSelector(taskStateSelector)
    const [taskStatus, setTaskStatus] = useState(undefined)
    const updateTaskStatus = useCallback((value) => {
        if (value !== taskStatus) {
            setTaskStatus(value)
        }
    }, [taskStatus])

    const taskList = useMemo(() => task.filter(({ status }) => (!taskStatus || status === taskStatus))
        , [task, taskStatus]
    )

    const activeBtn = flag => flag ? 'primary' : 'default'
    return (
        <div className={'root'}>
            {taskList.map((item, index) => <ListRow task={item} key={index} index={index} />)}
            {taskList.length ? null : <Typography> No Data Found </Typography>}
            <Grid container spacing={3} className={'list-grid'}>
                <Grid item xs={1}>
                    <Button>ALL({task.length})</Button>
                </Grid>
                <Grid item xs={11}>
                    <Button color={activeBtn(!taskStatus)} onClick={() => updateTaskStatus(undefined)} >ALL</Button>
                    <Button color={activeBtn(taskStatus === statusTypes.active)} onClick={() => updateTaskStatus(statusTypes.active)}  >ACTIVE</Button>
                    <Button color={activeBtn(taskStatus === statusTypes.completed)} onClick={() => updateTaskStatus(statusTypes.completed)}  >COMPLETED</Button>
                </Grid>
            </Grid>
        </div>
    );
}

