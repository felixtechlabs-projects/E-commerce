import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [postArray, setPostArray] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPostArray(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);


  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> User Id </th>
                    <th> Title </th>
                    <th> Body </th>
                </tr>
            </thead>
            <tbody>
                 {
                    postArray.map((post, index) => (
                        <tr key={index}> 
                            <td> { post.id } </td>
                            <td> { post.userId } </td>
                            <td> { post.title } </td>
                            <td> { post.body } </td>
                        </tr>
                    ))
                 }
            </tbody>
        </table>

    </div>
  )
}

export default Posts