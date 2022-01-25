
const AddForm = ({ arr }) => {
    return (
        <div className='order-accepted'>
            <ul>
                {arr.map((el, id) => {
                    return (
                        <li key={id}>
                         
                            <p className='p'>Your address</p>
                            <span>{el.choose}</span>
                            <p className='p'>You number</p>
                            <span>{el.number}</span>
                            <p className='p'>Your Comment</p>
                            <span>{el.address}</span>
                           
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AddForm