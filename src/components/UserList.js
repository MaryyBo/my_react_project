import React, { useState } from 'react';
import UserCard from './UserCard';
import { getUsers } from '../api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers] = useState([]);
    const [userCount, setUserCount] = useState(100);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);

    const loadPage = () => {
        console.log('UserList loadPage');
        getUsers(userCount, page).then(data => {
            const { results } = data;

            setUsers(results);
        })
            .catch((error) => {
                setIsError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const renderUsers = () => {
        return filteredUsers.length > 0 ? filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
            : users.map((user) => <UserCard user={user} key={user.login.uuid} />);
    }

    const handleSetUserCount = (event) => {
        const { target: { value } } = event;

        setUserCount(value);
    }
  

    return (
        <>
            <h1 className="header-text">Users List</h1>

            <input type="number" min={1} max={500} onChange={handleSetUserCount} />
            <button onClick={() => loadPage()}>Load users</button>

            {isError && <h2>{isError.message}</h2>}

            <section className="card-container">{users.length ? renderUsers() : null}</section>
        </>
    );
}

export default UserList;