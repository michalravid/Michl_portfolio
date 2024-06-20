import React,{ useEffect, useState } from "react";
import { useRef } from "react";
import {addTaskToList } from "../redux/action"
import { connect } from "react-redux";
import TaskData from "./task";
import EnterTask from "./enteringTask";
import { useLocation } from 'react-router-dom'
import {getAllTasks} from '../redux/action'

// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

function mapStateToProps(state) {
    return { taskList: state.tasks.taskList }
}

export default connect(mapStateToProps)(function ShowTaskList(props) {
    const loc = useLocation()
    const { taskList, dispatch } = props
    const [flag, setFlag] = useState(false);

    const [open, setOpen] = React.useState(false);

    const tasksContact = taskList.filter(task => task.contactTaskId == loc.state.idUser);

    const getAllTasksListForContact = async () => {
        try {
          
            const response = await axios.get(`http://localhost:8000/task/${loc.state.idUser}`)
            // console.log(response.data);
            if (response.status == 200) {
                // console.log(response.data)
                // dispatch(getAllTasks(response.data))
            }
        }
        catch (error) {
            console.log("oops---")
        }
    }

    const getAllTasksList = async () => {
        try {
          
            const response = await axios.get(`http://localhost:8000/task/`)
            // console.log(response.data);
            if (response.status == 200) {
                // console.log(response.data)
                dispatch(getAllTasks(response.data))
            }
        }
        catch (error) {
            console.log("oops")
        }
    }
    useEffect(() => {
        getAllTasksList()
        getAllTasksListForContact()
    }, [])

 

    const addNewTask = async (taskId, taskName, taskTypeId, contactTaskId, contactTaskName) => {
        try {
            const response = await axios.post('http://localhost:8000/task/',{ taskId: taskId, taskName: taskName, taskTypeId: taskTypeId, contactTaskId: contactTaskId, contactTaskName: contactTaskName })
            console.log(response.data);
            if (response.status == 200) {
                dispatch(addTaskToList({ taskId: taskId, taskName: taskName, taskTypeId: taskTypeId, contactTaskId: contactTaskId, contactTaskName: contactTaskName }))
            }
        }
        catch (error) {
            console.log("oops")
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
        // setFlag(true)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const add = ((taskId, taskName, taskTypeId, contactTaskId, contactTaskName) => {
        addNewTask(taskId, taskName, taskTypeId, contactTaskId, contactTaskName)
        // dispatch(addTaskToList({ taskId: taskId, taskName: taskName, taskTypeId: taskTypeId, contactTaskId: contactTaskId, contactTaskName: contactTaskName }))
        // setFlag(true)
    })

    //   useEffect(function () {
    //     console.log("contactsList", taskList)
    // }, [, taskList]);

    return (
        <>
            <React.Fragment>
                {tasksContact.map((item) => {
                    return (
                        <>
                            <TaskData id={item.taskId} />
                        </>
                    )
                })}
                {/* <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button> */}
                <Button variant="outlined" onClick={handleClickOpen}>add task</Button>
                {!flag || <EnterTask setFlag={setFlag} />}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(formData.entries());
                            const taskId = formJson.taskId;
                            const taskName = formJson.taskName;
                            const taskTypeId = formJson.taskTypeId;
                            const contactTaskId = formJson.contactTaskId;
                            const contactTaskName = formJson.contactTaskName;
                            console.log(contactTaskName);
                            add(taskId, taskName, taskTypeId, contactTaskId, contactTaskName)
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>Add Now</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            enter details of task
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="taskId"
                            name="taskId"
                            label="Task Id"
                            type="taskId"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="taskName"
                            name="taskName"
                            label="Task Name"
                            type="taskName"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="taskTypeId"
                            name="taskTypeId"
                            label="Task Type Id"
                            type="taskTypeId"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="contactTaskId"
                            name="contactTaskId"
                            label="Contact Task Id"
                            type="contactTaskId"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="contactTaskName"
                            name="contactTaskName"
                            label="Contact Task Name"
                            type="contactTaskName"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Ok</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

        </>
    )
})