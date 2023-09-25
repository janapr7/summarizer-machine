import HeaderTitle from "../components/HeaderTitle"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ActionButton from "../components/element/ActionButton";
import { ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Result() {
    const navigate = useNavigate();
    const { state } = useLocation();
    
    useEffect(() => {
        async function checkData() {
            if(state==null) navigate('/')
        }
        checkData();
    }, []);

    function exportTxt(data: string) {
        const blob = new Blob([data], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "hasil_ringkasan.txt";
        link.href = url;
        document.body.appendChild(link)
        link.click();
    }

    return (
        <>
            <HeaderTitle/>
            {state&& state.data &&
                <div className="justify-center dark:bg-primary bg-secondary px-1 lg:px-2 py-5 rounded-md">
                    <p className='mb-3 text-primary text-sm dark:text-secondary font-content font-semibold'>Hasil Ringkasan</p>
                    <div className="items-start">
                        <div className="min-w-0">
                            <form action="#">
                                <div className="focus-within:border-primary dark:focus-within:border-secondary">
                                    <textarea
                                    rows={10}
                                    name="teks"
                                    id="teks"
                                    className="bg-background dark:bg-accent text-primary dark:text-secondary font-content block w-full resize-none p-1 pb-2 focus:border-primary dark:focus:border-secondary focus:ring-0 text-sm ring-1 ring-inset ring-primary dark:ring-secondary rounded-md"
                                    defaultValue={state.data}
                                    readOnly
                                    />
                                </div>
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center space-x-5"></div>
                                    <div className="flex-shrink-0">
                                        <ActionButton
                                            title="Simpan ke .txt"
                                            btnType="button"
                                            isDisable={false}
                                            icon={<ArrowDownTrayIcon className="h-5 w-5 text-secondary dark:text-primary flex-none mr-2 font-content"/>}
                                            onClick={()=>{exportTxt(state.data)}}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}