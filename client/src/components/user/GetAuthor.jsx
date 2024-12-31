import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GetAuthor = ({authorId}) => {
    const [author, setAuthor] = useState("");
    useEffect(() => {
        const getAuthorName = async () => {
            const response = await axios.get(`http://localhost:3000/admin/author/${authorId}`);
            setAuthor(response.data.username);
        }
        getAuthorName();
    }, [])
    return (
        <div>
            {
                author
            }
        </div>
    )
}

export default GetAuthor