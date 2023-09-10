import { Link } from 'react-router-dom'

export default function DesktopMenuBtn({title, href}:{title:string, href:string}) {
    return(
        <>  
            <Link to={href}>
                <button
                    type="button"
                    className="text-xl font-medium mr-10 flex-shrink-0 p-1 text-primary hover:text-accent dark:text-secondary dark:hover:text-background"
                >
                    {title}
                </button>
            </Link>
        </>
    )
}