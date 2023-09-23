import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'

export default function DisclosureMenuBtn({title, href}:{title:string, href:string}) {
    return(
        <>  
            <Link to={href}>
                <Disclosure.Button
                    as="a"
                    className="text-primary hover:bg-secondary hover:text-accent dark:text-secondary dark:hover:bg-primary dark:hover:text-background block rounded-md py-2 px-2 text-lg font-semibold font-header text-start"
                >
                    {title}
                </Disclosure.Button>
            </Link>
        </>
    )
}