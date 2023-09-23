import HeaderTitle from "../components/HeaderTitle"
import ActionButton from "../components/element/ActionButton"
import { ScissorsIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
// Import the main component


export default function Preview() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <HeaderTitle/>
                <h1>Preview</h1>

                <ActionButton
                    title="Ringkas Dokumen"
                    btnType="button"
                    isDisable={false}
                    icon={<ScissorsIcon className="h-5 w-5 text-secondary dark:text-primary flex-none mx-1"/>}
                    onClick={()=>{navigate("/result", {state:{data:"Logbook.pdf"}})}}
                />
            </div>
        </>
    )
}