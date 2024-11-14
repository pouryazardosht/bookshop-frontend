import bookIcon from "../../../assets/icons/book.svg"
function HomeHeader() {
    return (
        <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-4">
                <img src={bookIcon} alt="book" />
                <h1 className="text-xl sm:text-2xl lg:text-3xl">
                    همه کتاب ها
                </h1>
            </div>
            <button
                className="bg-primaryColor text-white text-xl sm:text-2xl lg:text-3xl px-6 py-3 rounded-xl hover:scale-95 active:scale-90">
                مرتب سازی
            </button>
        </div>
    )
}

export default HomeHeader