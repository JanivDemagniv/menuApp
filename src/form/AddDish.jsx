import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ROUTES from '../Router/routeModule'
import { useCurrentMenu } from '../provider/MenuProvider'

export default function AddDish() {
    const navigate = useNavigate()
    const { menu, setMenu } = useCurrentMenu()

    const [data, setData] = useState({
        name: '',
        price: ''
    })


    useEffect(() => {
        localStorage.setItem('Menu', JSON.stringify(menu))

    }, [menu])

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        setMenu((perv) => [...perv, data])
        navigate(ROUTES.ROOT)
    }


    return (
        <form>
            <h1>Add New Dish</h1>
            <label>Dish Name</label>
            <input
                name='name'
                type='text'
                value={data.name}
                onChange={onChange} />
            <label>Dish Price</label>
            <input
                name='price'
                type='number'
                value={data.price}
                onChange={onChange} />
            <input value='Submit' type='button' onClick={onSubmit} />
        </form>
    )
}
