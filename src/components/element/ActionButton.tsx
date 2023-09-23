
import { twMerge } from "tailwind-merge"

export default function ActionButton({title, btnType, isDisable, icon, onClick, twClass}:{title:string, btnType:any, isDisable:boolean, icon?:JSX.Element, onClick?:any, twClass?:string}) {
    return (
        <>
            <button
                disabled={isDisable}
                type={btnType}
                onClick={onClick}
                className={twMerge("disabled:opacity-30 inline-flex justify-center items-center rounded-md border border-transparent bg-primary dark:bg-secondary px-2 py-2 text-sm font-medium text-secondary dark:text-primary shadow-sm hover:bg-accent dark:hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-offset-2", twClass)}
            >
                {icon}
                {title}
            </button>
        </>
    )
}