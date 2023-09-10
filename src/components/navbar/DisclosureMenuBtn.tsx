import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'
// import Link from 'next/link';

export default function DisclosureMenuBtn({title, href}:{title:string, href:string}) {
    return(
        <>  
            <Link to={href}>
                <Disclosure.Button
                    as="a"
                    className="text-primary hover:bg-secondary hover:text-accent dark:text-secondary dark:hover:bg-primary dark:hover:text-background block rounded-md py-2 px-2 text-base font-medium text-start"
                >
                    {title}
                </Disclosure.Button>
            </Link>
        </>
    )
}