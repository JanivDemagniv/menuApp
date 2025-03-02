import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function Line({ dish, del }) {
    return (
        <div className='line-container'>
            <div className='line-div line-title'>Name:</div>
            <div className='line-div'>{dish.name}</div>
            <div className='line-div line-title'>Price:</div>
            <div className='line-div'>{dish.price}</div>
            <div className='line-div'>
                <IconButton onClick={() => del(dish)}><DeleteIcon /></IconButton>
            </div>

        </div>
    )
}
