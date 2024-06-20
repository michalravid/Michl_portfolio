import { useEffect, useState } from "react";
import { useRef } from "react";
import { deleteTask } from "../redux/action";
import { updateTask } from "../redux/action";
import { connect } from "react-redux";
import Carrousel from "./carrousel";
// import img1 from '../image/nn.JPG';
import img1 from '../image/img1.JPG';
import img2 from '../image/img2.png'
import img3 from '../image/img3.png'
import img4 from '../image/img4.png'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";




// function mapStateToProps(state) {
//     return { taskList: state.tasks.taskList }
// }

// export default connect(mapStateToProps)(function TaskData(props) {
//     const { id, taskList, dispatch } = props
//     let typeIdRef = useRef('')
//     const [flagImage, setFlagImage] = useState(false)
//     const [flagEdit, setFlagEdit] = useState(false)
//     const navigate = useNavigate()
//     useEffect(function () {

//     }, [, taskList]);

//     const searchTask = taskList.filter(num => num.taskId == id)
//     const edit = (() => {
//         setFlagEdit(!flagEdit)
//     })
//     const change = (() => {
//         dispatch(updateTask({ taskId: id, taskTypeId: typeIdRef.current.value }))
//         setFlagEdit(!flagEdit)
//     })
//     const remove = (() => {
//         dispatch(deleteTask({ taskId: id }))
//     })
//     const pictures = (() => {
//         setFlagImage(!flagImage)
//         navigate('/carrousel')
//     })

//     return (
//         <>
//             <ul>
//                 {
//                     searchTask.map((task) => (<li key={task.taskId}>
//                         <label> taskName: </label>
//                         <br></br>
//                         <span>{task.taskName}</span>
//                         <br></br>
//                         <label> taskType:</label>
//                         <br></br>
//                         <span>{task.taskTypeId}</span>
//                         <br></br>
//                         <label>contactTask:</label>
//                         <br></br>
//                         <span>{task.contactTaskName}</span>
//                         <br></br>
//                         <label>idContactTask:</label>
//                         <br></br>
//                         <span>{task.contactTaskID}</span>

//                         <button onClick={edit}>edit</button>
//                         <button onClick={remove}>remove</button>
//                         <button onClick={pictures}>more explain...</button>
//                         {!flagImage || <Carrousel><img src={img1} width={800} /><img src={img2} /><img src={img3} /><img src={img4} /></Carrousel>}
//                         {!flagEdit || <> <label>enter a taskType: </label><br></br> <input ref={typeIdRef}></input><button onClick={change}>change</button></>}
//                     </li>))
//                 }
//             </ul>
//         </>
//     )
// })

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function mapStateToProps(state) {
    return { taskList: state.tasks.taskList }
}

export default connect(mapStateToProps)(function TaskData(props) {
    const { id, taskList, dispatch } = props
    let typeIdRef = useRef('')
    const [flagImage, setFlagImage] = useState(false)
    const [flagEdit, setFlagEdit] = useState(false)
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    // useEffect(function () {

    // }, [, taskList]);


    const deleteOneTask = async (taskId, taskName, taskTypeId, contactTaskId, contactTaskName) => {
        try {
            const response = await axios.delete(`http://localhost:8000/task/${id}`)
            console.log(response.data);
            if (response.status == 200) {
                dispatch(deleteTask({ taskId: id }))
            }
        }
        catch (error) {
            console.log("oops")
        }
    }

    const updateOneTask = async (taskTypeId) => {
        try {
            debugger
            const response = await axios.put('http://localhost:8000/task/',{ taskId: id, taskTypeId: taskTypeId})
            console.log(response.data);
            if (response.status == 200) {
                dispatch(updateTask({ taskId: id, taskTypeId: taskTypeId}))
            }
        }
        catch (error) {
            console.log("oops")
        }
    }

    const searchTask = taskList.filter(num => num.taskId == id)
    // const edit = (() => {
    //     handleClickOpen()
    //     setFlagEdit(!flagEdit)
    // })
    const change = ((taskTypeId) => {
        updateOneTask(taskTypeId)
        // dispatch(updateTask({ taskId: id, taskTypeId: taskTypeId}))
        // setFlagEdit(!flagEdit)
    })
    const remove = (() => {
        deleteOneTask()
        // dispatch(deleteTask({ taskId: id }))
    })
    const pictures = (() => {
        setFlagImage(!flagImage)
        // navigate('/carrousel')
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {               
                // key = { task.taskId } >
                searchTask.map((task) => (
                    < Container sx={{ py: 8 }} maxWidth="md" >
                         <React.Fragment>
                        <Grid container spacing={4}>
                            <Grid item key={task.taskId} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {task.taskName}
                                        </Typography>
                                        <Typography>
                                            taskId: {task.taskId}<br />taskTypeId: {task.taskTypeId}<br />contactTaskId: {task.contactTaskId}<br />contactTaskName: {task.contactTaskName}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={handleClickOpen}>edit</Button>
                                        <Button onClick={remove}>remove</Button>
                                        <Button onClick={pictures}>more explain...</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        {flagImage && <Carrousel><img src={img1} width={800} height={300}/><img src={img2} width={800} height={300}/><img src={img3} width={800} height={300}/><img src={img4} width={800} height={300}/></Carrousel>}
                        {/* {!flagEdit || <> <label>enter a taskType: </label><br></br> <input ref={typeIdRef}></input><button onClick={change}>change</button></>}           */}
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    component: 'form',
                                    onSubmit: (event) => {
                                        event.preventDefault();
                                        const formData = new FormData(event.currentTarget);
                                        const formJson = Object.fromEntries(formData.entries());
                                        const taskTypeId = formJson.taskTypeId;
                                        console.log(taskTypeId);
                                        change(taskTypeId)
                                        handleClose();
                                    },
                                }}
                            >
                                <DialogTitle>Change Now</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        enter a new task type id
                                    </DialogContentText>
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
                                </DialogContent>
                                <DialogActions>
                                    <Button  onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">Ok</Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    </Container >
                ))}
        </>
    )
});



{/* 
                    <label> taskName: </label>
                    <br></br>
                    <span>{task.taskName}</span>
                    <br></br>
                    <label> taskType:</label>
                    <br></br>
                    <span>{task.taskTypeId}</span>
                    <br></br>
                    <label>contactTask:</label>
                    <br></br>
                    <span>{task.contactTaskName}</span>
                    <br></br>
                    <label>idContactTask:</label>
                    <br></br>
                    <span>{task.contactTaskID}</span>

                    <button onClick={edit}>edit</button>
                    <button onClick={remove}>remove</button>
                    <button onClick={pictures}>more explain...</button>
                    {!flagImage || <Carrousel><img src={img1} width={800} /><img src={img2} /><img src={img3} /><img src={img4} /></Carrousel>}
                    {!flagEdit || <> <label>enter a taskType: </label><br></br> <input ref={typeIdRef}></input><button onClick={change}>change</button></>} */}


{/* </ul> */ }
{/* < Container sx={{ py: 8 }
            } maxWidth="md" >
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={edit}>edit</Button>
                                    <Button onClick={remove}>remove</Button>
                                    <Button onClick={pictures}>more explain...</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container > */}

