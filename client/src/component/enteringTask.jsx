import React, { useEffect, useState ,useRef} from "react";
import { connect } from "react-redux";
import { addTaskToList } from "../redux/action";
import { Redirect } from 'react-router-dom'

function mapStateToProps(state) {
    return { taskList: state.tasks.taskList }
}

export default connect(mapStateToProps)(function EnterTask(props) {
    const {setFlag,taskList, dispatch } = props
    let taskIdRef = useRef('')
    let taskNameRef = useRef('')
    let taskTypeIdRef = useRef('')
    let contactTaskIdRef = useRef('')
    let contactTaskNameRef = useRef('')

    const ok = (() => {
        dispatch(addTaskToList({ taskId: taskIdRef.current.value, taskName: taskNameRef.current.value, taskTypeId: taskTypeIdRef.current.value, contactTaskId: contactTaskIdRef.current.value , contactTaskName: contactTaskNameRef.current.value}))
        setFlag(false)
    })

    return (
        <>
            <label>task id: </label>
            <input ref={taskIdRef}></input>
            <br></br>
            <label> task name:</label>
            <input ref={taskNameRef}></input>
            <br></br>
            <label>task type id: </label>
            <input ref={taskTypeIdRef}></input>
            <br></br>
            <label>contact id: </label>
            <input ref={contactTaskIdRef}></input>
            <br></br>
            <label>contact name: </label>
            <input ref={contactTaskNameRef}></input>
            <br></br>
            <button onClick={ok}>ok</button>
        </>
    )
})