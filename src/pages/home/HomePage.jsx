import useTitle from "../../hooks/useTitle"
import HomeHeader from "./components/HomeHeader"
function HomePage() {
    useTitle("صفحه اصلی")
    return (
        <section className="container my-14">
            <HomeHeader />
        </section>
    )
}

export default HomePage