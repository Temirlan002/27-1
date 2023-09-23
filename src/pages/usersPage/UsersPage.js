import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput, deleteAll } from "../../store/usersSlice";
import User from "../../components/User";

function UsersPage() {


    const dispatch = useDispatch()

    const { inputValue, users } = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    return (
        <>
            <input value={inputValue} onChange={changeInputFunc} type="text" placeholder="name" />
            <button onClick={addUserFunc}>add user</button>
            {users.map(user => <User name={user} />)}
            <button onClick={() => dispatch(deleteAll())}>delete all</button>
        </>
    )
}

export default UsersPage