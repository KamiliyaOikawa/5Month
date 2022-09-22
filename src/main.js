import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {Button, TextField, Box, } from "@mui/material";
import Todolist from "./todolist";
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
const Main = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState();
    const todos = useSelector((state) => state.todos)
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleClick = () => {
        dispatch({
            type: 'ADD_TODO',
            payload: {label: todo, id: Math.ceil(Math.random() * 500)}
        })
    }

    const handleDelete = () => {
      dispatch({
          type:'DELETE_ALL'
          })
    }
    return (
        <>
            <Box sx={{
                height: '100vh',
                width: '100%',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Box sx={{display: 'flex'}}>
                    <Stack><TextField onChange={handleChange}id="outlined-basic" label="Enter" variant="outlined"></TextField>
                    <Button onClick={handleClick} variant={"contained" } sx={{marginLeft:'1px'}}>Add</Button>
                    <Button onClick={handleDelete}size={"large"} variant={"outlined"} color="error" startIcon={<DeleteIcon />} sx={{marginLeft:'3px'}}>DELETE ALL</Button>
                    </Stack>
                    </Box>
                <Todolist />
                </Box>

        </>
    );
}
export default Main;
