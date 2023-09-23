import { Link } from 'react-router-dom'

export default function DesktopMenuBtn({title, href}:{title:string, href:string}) {
    return(
        <>  
            <Link to={href}>
                <button
                    type="button"
                    className="text-lg font-semibold mr-10 flex-shrink-0 p-1 text-primary hover:text-accent dark:text-secondary dark:hover:text-background font-header"
                >
                    {title}
                </button>
            </Link>
        </>
    )
}