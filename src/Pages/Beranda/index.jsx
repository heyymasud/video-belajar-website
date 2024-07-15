import Button from "../../Components/Elements/Button"
import Navbar from "../../Components/Layouts/Navbar"
import main from "../../Data/mainData"

const Beranda = () => {
    const heroHeader = main[0].heroHeader[0]
    {console.log(heroHeader.image)}
    return (
        <>
        <Navbar />
        <main className="h-screen" >
            <header className="flex flex-col items-center h-full">
                <section className={`flex flex-col items-center justify-center bg-[url('${heroHeader.image}')] bg-cover bg-center bg-no-repeat h-[400px] w-10/12 px-[140px] py-16 `} >
                    <h1 className="text-3xl xl:text-5xl font-semibold text-slate-900 text-center font-pop">{heroHeader.title}</h1>
                    <p className="text-slate-500 text-center">{heroHeader.subtitle}</p>
                    <Button className="bg-primary-500 text-white px-4 py-2 rounded">{heroHeader.button}</Button>
                </section>
            </header>
        </main>
        </>
    )
}

export default Beranda