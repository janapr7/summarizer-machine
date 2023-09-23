import HeaderTitle from "../components/HeaderTitle"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ActionButton from "../components/element/ActionButton";
import { ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Result() {
    const navigate = useNavigate();
    const { state } = useLocation();
    
    // useEffect(() => {
    //     async function checkData() {
    //         if(state==null) navigate('/')
    //     }
    //     checkData();
    // }, []);

    return (
        <>
            <div>
                <HeaderTitle/>
                <h1>Result</h1>
                {state && <p>Dokumen: {state.data}</p>}
            </div>
            <div className="justify-center">
                <div className="items-start space-x-4">
                    <div className="min-w-0">
                        <form action="#">
                            <div className="focus-within:border-primary dark:focus-within:border-secondary">
                                <textarea
                                rows={10}
                                name="teks"
                                id="teks"
                                className="font-content block w-full resize-none p-1 pb-2 focus:border-primary dark:focus:border-secondary focus:ring-0 sm:text-sm ring-1 ring-inset ring-primary dark:ring-secondary rounded-md"
                                defaultValue={''}
                                readOnly
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <div className="flex items-center space-x-5"></div>
                                <div className="flex-shrink-0">
                                    <ActionButton
                                        title="Simpan ke .txt"
                                        btnType="submit"
                                        isDisable={false}
                                        icon={<ArrowDownTrayIcon className="h-5 w-5 text-secondary dark:text-primary flex-none mr-2 font-content"/>}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}