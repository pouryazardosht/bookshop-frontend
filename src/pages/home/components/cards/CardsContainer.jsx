import { Oval } from "react-loader-spinner"
import { useBooks } from "../../../../context/BookContext"
import Card from "./Card"

function CardsContainer() {

    const { books } = useBooks()
    const result = books.data
    return (
        <div className=" flex justify-center my-6">

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {result ? result.map((book) => (
                    <Card key={book.id} book={book} />
                )) :
                    <div className="h-screen flex items-center justify-center">

                        <Oval
                            visible={true}
                            height="80"
                            width="80"
                            color="#F21055"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                }
            </div>
        </div >
    )
}

export default CardsContainer