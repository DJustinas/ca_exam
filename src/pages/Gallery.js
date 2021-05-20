import {useState as state} from 'react';

import http from "../plugins/Fetch";
function Gallery(props) {
    const [users, setUsers] = state([])
    return (
        users.map((item, index) => <SingleUser key={index} user={item} />)

    );
}

export default Gallery;