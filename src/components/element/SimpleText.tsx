
import { twMerge } from "tailwind-merge"

export default function SimpleText({text, twClass}:{text:string, twClass?:string}) {
    return (
        <>
            <p className={twMerge("text-primary dark:text-secondary font-semibold", twClass)}>
                {text}
            </p>
        </>
    )
}