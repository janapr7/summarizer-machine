import { Disclosure } from '@headlessui/react'
import DisclosureMenuBtn from './DisclosureMenuBtn';

export default function DisclosureMenu() {
    return(
        <>
            <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="space-y-1 py-2">
                    <DisclosureMenuBtn title="About" href="/about"/>
                    <DisclosureMenuBtn title="Summarization" href="/summarization"/>
                </div>
            </Disclosure.Panel>
        </>
    )
}