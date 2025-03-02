import React from 'react'
import { Route, Routes } from 'react-router'
import MenuList from '../components/MenuList'
import ROUTES from './routeModule'
import AddDish from '../form/AddDish'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<MenuList />} />
            <Route path={ROUTES.ADDDISH} element={<AddDish />} />
        </Routes>
    )
}
