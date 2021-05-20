import {useState as state, useEffect} from 'react';

import http from "../plugins/Fetch";
import SingleUser from "../components/SingleUser";

function Gallery(props) {
    const [users, setUsers] = state([])

    useEffect(() => {
        http.get('/getusers').then(res => {
            console.log(res)
        })
    }, [])



    return (
        <div className='d-flex f-wrap'>
            {users.map((item, index) => <SingleUser key={index} user={item} />)}
        </div>


    );
}

export default Gallery;