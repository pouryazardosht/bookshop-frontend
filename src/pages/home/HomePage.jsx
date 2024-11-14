import useTitle from "../../hooks/useTitle"
import CardsContainer from "./components/cards/CardsContainer"
import HomeHeader from "./components/HomeHeader"
function HomePage() {
    useTitle("صفحه اصلی")
    return (
        <section className="container my-14">
            <HomeHeader />
            <CardsContainer />
        </section>
    )
}

export default HomePage