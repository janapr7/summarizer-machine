import DesktopMenuBtn from "./DesktopMenuBtn"
// import ContactBtn from "./ContactBtn"

export default function DesktopMenu() {
    return(
        <>
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <DesktopMenuBtn title="About" href="/about"/>
                <DesktopMenuBtn title="Summarization" href="/summarization"/>
            </div>
        </>
    )
}