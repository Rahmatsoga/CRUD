import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function ShowDynamic() {
    const { id } =useParams();
    useEffect(){
        
    }
  return (
    <div>ShowDynamic</div>
  )
}

export default ShowDynamic

//in app.jsx after : all content/name are dynamic path 