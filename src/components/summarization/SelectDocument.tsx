import ActionButton from "../element/ActionButton";
import SimpleText from "../element/SimpleText";
import { DocumentIcon, ArrowUpTrayIcon, ScissorsIcon } from "@heroicons/react/24/outline"
import { useState, useRef, MutableRefObject } from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function SelectDocument() {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [message, setMessage] = useState(null);
    const [viewPDF, setViewPDF] = useState(null);
    const inputFileRef = useRef() as MutableRefObject<HTMLInputElement>;
    const newPlugin = defaultLayoutPlugin();

    const onFileChange = (event:any) => {
        setFile(null);
        setMessage(null);
        try{
            if(event.target.files.length > 1) throw { message: 'Pilih hanya 1 dokumen' }
            if(event.target.files.length == 1){
                let pdfFile = event.target.files[0];
                if(pdfFile.type != "application/pdf") throw { message: 'Pilih hanya dokumen bertipe PDF' }
                if(pdfFile.size > 5000000) throw { message: 'Ukuran maksimum dokumen 5 MB' }
                setFile(pdfFile);
                setFileName(pdfFile.name);

                let reader = new FileReader();
                reader.readAsDataURL(pdfFile);
                reader.onload = (e:any) => {
                    setViewPDF(e.target.result);
                }
            }
        } catch (error:any){
            setMessage(error.message);
        }
    }

    return (
        <>
            <div className="flex justify-between sm:justify-start w-full lg:w-fit">
                <input type="file" id="pdfFile" name="pdfFile" ref={inputFileRef} onChange={onFileChange} accept="application/pdf" hidden/> 
                <ActionButton
                    title="Pilih Dokumen"
                    btnType="button"
                    isDisable={false}
                    icon={<DocumentIcon className="h-5 w-5 fill-secondary dark:fill-primary text-primary dark:text-secondary flex-none mx-1"/>}
                    twClass="mx-1 w-full lg:w-fit font-content"
                    onClick={() => inputFileRef.current.click()}
                />
                <ActionButton
                    title="Ringkas Dokumen"
                    btnType="submit"
                    isDisable={!file}
                    icon={<ScissorsIcon className="h-5 w-5 text-secondary dark:text-primary flex-none mx-1"/>}
                    twClass="mx-1 w-full lg:w-fit font-content"
                />
            </div>
            {message == null && file != null &&
                <SimpleText
                    text={`Selected Document: ${fileName}`}
                    twClass="mt-5 font-content"
                />
            }
            {message != null &&
                <SimpleText
                    text={message}
                    twClass="text-red-600 dark:text-red-600 mt-5font-content"
                />
            }
            {file != null && viewPDF != null &&
                <>
                    <div className="overflow-auto max-h-96 lg:max-h-screen mt-10 outline ouline-primary dark:outline-secondary">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer fileUrl={viewPDF}/>
                        </Worker>
                    </div>
                </>
            }
        </>
    )
}