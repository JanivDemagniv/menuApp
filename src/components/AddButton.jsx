import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import ROUTES from '../Router/routeModule';

export default function AddButton() {
    const navigate = useNavigate()
    return (
        <div className='add-container'>
            <IconButton onClick={() => { navigate(ROUTES.ADDDISH) }}><AddCircleIcon /></IconButton>
        </div>
    )
}
