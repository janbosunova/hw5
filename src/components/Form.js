import { useState } from 'react'

import AddForm from './AddForm'
const Form = () => {
    const [arr, setArr] = useState([])
    const [data, setData] = useState({})
    const formChangeHadler = (e) => {
        const keys = e.target.name
        setData((prevData) => {
            return {
                ...prevData,
                [keys]: e.target.value,
            }
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setArr((prevArr) => [...prevArr, data])
    }
    return (
        <>
            <form onSubmit={submitHandler} className='order'>
               
                    <h3>Регистрация</h3>
                 
                <div className='block'>
                    <label>Выберите</label>
                    <select  name='choose' onChange={formChangeHadler}>
                        
                        <option value='Талас'>Талас</option>
                        <option value='Иссык-Куль'>Иссык-Куль</option>
                        <option value='Нарын'>Нарын</option>
                        <option value='Чуй'>Чуй</option>
                        <option value='Ош'>Ош</option>
                        <option value='Баткен'>Баткен</option>
                        <option value='Жалал-Абад'>Жалал-Абад</option>
                    </select>
                </div>
                <div className='block'>
                    <input
                        name='number'
                        onChange={formChangeHadler}
                        type='number'
                        placeholder='Your phone number'
                    />
                </div>
                <p className='paragragh'>Коментарии</p>
                <div className='block'>
                    <textarea
                        name='address'
                        onChange={formChangeHadler}
                        placeholder='Your comment'
                    ></textarea>
                </div>
                <div className='block'>
                    <button>Отправить</button>
                </div>
            </form>
            <AddForm arr={arr} />
        </>
    )
}
export default Form;