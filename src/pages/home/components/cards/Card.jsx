import cartIcon from '../../../../assets/icons/shopping-cart.svg'
import bookImg from "../../../../assets/images/book-img.png"
function Card() {
    const price = 1000
    return (
        <div className="bg-white rounded-xl flex flex-col items-center shadow-pz w-72 sm:w-56 md:w-60 lg:w-64 px-4 gap-2 py-5">
            <img className='w-40 h-48' src={bookImg} alt="book-img" />
            <p className='text-xl'>نام کتاب</p>
            <div className="flex items-center justify-between w-full">
                <p className='text-base'>
                    {price.toLocaleString()} تومان
                </p>
                <img src={cartIcon} alt="cart" />
            </div>
        </div>

    )
}

export default Card

