import HeaderTitle from "../components/HeaderTitle"
import TextAreaForm from "../components/summarization/TextAreaForm"
import SelectDocument from "../components/summarization/SelectDocument";
import SimpleText from "../components/element/SimpleText";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import SearchDocument from "../components/summarization/SearchDocument";

export default function Summarization() {
    const [option, setOption] = useState(1)
    return (
        <>
            <HeaderTitle/>
            <div className="flex justify-between lg:justify-start w-full bg-accent dark:bg-background px-1 lg:px-2  pt-1.5 lg:pt-3 rounded-t-md font-content">
                <button 
                    type="button"
                    className={twMerge("px-2 py-0.5 mt-2 bg-primary dark:bg-secondary mx-0.5 text-background dark:text-accent text-sm w-full lg:w-fit", option===1 && "text-accent bg-secondary dark:text-background dark:bg-primary")}
                    onClick={()=>{setOption(1)}}
                >
                    Input Teks
                </button>
                <button
                    type="button"
                    className={twMerge("px-2 py-0.5 mt-2 bg-primary mx-0.5 text-background text-sm w-full lg:w-fit dark:bg-secondary dark:text-accent", option===2 && "text-acent bg-secondary dark:text-background dark:bg-primary")}
                    onClick={()=>{setOption(2)}}
                >
                    Pilih Dokumen
                </button>
                <button
                    type="button"
                    className={twMerge("px-2 py-0.5 mt-2 bg-primary mx-0.5 text-background text-sm w-full lg:w-fit dark:bg-secondary dark:text-accent", option===3 && "text-acent bg-secondary dark:text-background dark:bg-primary")}
                    onClick={()=>{setOption(3)}}
                >
                    Pencarian Dokumen
                </button>
            </div>
            <div className="min-h-96 bg-secondary dark:bg-primary px-1 lg:px-2 py-5 pb-10 rounded-b-md">
                {option === 1 &&
                    <div>
                        <TextAreaForm/>
                    </div>
                }
                {option === 2 &&
                    <div>
                        <SelectDocument/>
                    </div>
                }
                {option === 3 &&
                    <div>
                        <SearchDocument/>
                    </div>
                }
            </div>
        </>
    )
}