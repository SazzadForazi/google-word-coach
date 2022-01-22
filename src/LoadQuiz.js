import React, { useEffect, useState } from 'react';

const LoadQuiz = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/question")
            .then(res => res.json())
            .then(data => setUsers(data))
        // .then(data => console.log(data))
    }, [])
    return (
        <div className='wrapper'>
            <h2>Found Users:{users?.quiz?.length}</h2>

        </div>
    );
};

export default LoadQuiz;