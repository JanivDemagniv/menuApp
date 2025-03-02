import AddButton from './AddButton';
import { useCurrentMenu } from '../provider/MenuProvider';
import { useEffect } from 'react';
import Line from './Line';

export default function MenuList() {
    const { menu, setMenu } = useCurrentMenu()

    useEffect(() => {
        let sotrageData = JSON.parse(localStorage.getItem('Menu'))
        setMenu(sotrageData)
    }, [])

    const deleteDish = (removeDish) => {
        let newDishesh = menu.filter((dish) => dish.name != removeDish.name)
        setMenu(newDishesh)
        localStorage.setItem('Menu', JSON.stringify(newDishesh))
    }


    if (!menu) return <p>loading...</p>
    if (menu) return (
        <div className='container'>
            <h1>Menu</h1>
            <div>
                {menu.length == 0 || !menu ? <p>No Dishes on the Menu</p> : menu.map((dish) => {
                    return <Line dish={dish} del={deleteDish} />
                })}
            </div>
            <AddButton />
        </div>
    )
}
