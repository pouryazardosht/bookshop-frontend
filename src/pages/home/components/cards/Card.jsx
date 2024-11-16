import { Link } from 'react-router-dom'
import cartIcon from '../../../../assets/icons/shopping-cart.svg'
import bookImg from "../../../../assets/images/book-img.png"
function Card({ book }) {
    const { title, price } = book
    return (

        <Link key={book.id} to={book.id} className="bg-white rounded-xl flex flex-col items-center justify-between shadow-pz w-72 sm:w-56 md:w-60 lg:w-64 px-4 gap-3 py-5">
            <img className='w-40 h-48' src={bookImg} alt="book-img" />
            <p className='text-xl text-center '>{title}</p>
            <div className="flex items-center justify-between w-full">
                <p className='text-base'>
                    {price.toLocaleString()} تومان
                </p>
                <button className='hover:scale-95 active:scale-90'>
                    <img className='w-6' src={cartIcon} alt="cart" />
                </button>
            </div>
        </Link>

    )
}

export default Card

