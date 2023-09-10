import NavBar from "./navbar/NavBar"
import Footer from "./Footer"

export default function Layout({children}:{children:JSX.Element}) {
    return (
        <>
            <div className="px-5 sm:px-32 md:px-32 lg:px-40 xl:px-56 2xl:px-64 bg-backgroud dark:bg-accent min-h-screen flex flex-col min-h-screen">
                <NavBar/>
                <div className="flex-grow my-5">
                    {children}
                </div>
                <div className="mt-auto">
                    <Footer/>
                </div>
            </div>
        </>
    )
}