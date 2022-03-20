import React from 'react'
import { useParams } from 'react-router-dom';
const Contact=()=>
{
    const {cname}= useParams();
    return <h1>hello the contact is {cname} </h1>
}
export default Contact;