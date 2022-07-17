import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {

    const posts = useSelector((state) => state.posts.list)

    return (
        <>
            <div>
                {
                posts.map((item, key) => {
                    return <h1 key={key}>{item}</h1>
                })
                }
            </div>
      </>
    )
}

export default Main