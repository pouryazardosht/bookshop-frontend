import useTitle from "../../hooks/useTitle"
import bookIcon from "../../assets/icons/book.svg"
function HomePage() {
    useTitle("صفحه اصلی")
    return (
        <section className="container my-14">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src={bookIcon} alt="book" />
                    <h1 className="text-3xl">
                        همه کتاب ها
                    </h1>
                </div>
                <button
                    className="bg-primaryColor text-white text-2xl px-6 py-3 rounded-xl hover:scale-95 active:scale-90">
                    مرتب سازی
                </button>
            </div>
        </section>
    )
}

export default HomePage