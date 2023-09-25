import { useState, FormEvent } from 'react'
import { DocumentIcon, MagnifyingGlassIcon, ScissorsIcon } from '@heroicons/react/24/outline';
import ActionButton from '../element/ActionButton';
import { useNavigate } from 'react-router-dom';
import { api } from '../../helper/api';
import SimpleText from '../element/SimpleText';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import sand_timer from '../../asset/img/sand_timer.gif'

export default function SearchDocument() {
    const navigate = useNavigate();
    const [documents, setDocuments] = useState<string[] | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClick()
    }
    const handleClick = async () => {
        setDocuments(null)
        setFileName(null);
        setIsLoading(true)
        const formData = new FormData();
        const queryElement = document.getElementById("query") as HTMLInputElement | null;

        if (queryElement) {
            formData.append("query", queryElement.value);
        }
        
        try{
            const response = await api.post('/find', formData)
            setDocuments(response.data.data)
            setIsLoading(false)
        } catch(error:any){
            console.log(error)
            setIsLoading(false)
        }
    }

    const handleSum = async () => {
        const formData = new FormData();

        if (fileName) {
            formData.append("filename", fileName);
        }
        
        try{
            const response = await api.post('/summarize/search', formData)

            setTimeout(() => {navigate("/result", {state:{data:response.data.data}})}, 500)
        } catch(error:any){
            console.log(error)
        }
    }

    return (
        <>
            <div className="justify-center">
                <div className="items-start">
                    <div className="min-w-0">
                        <form onSubmit={handleSubmit}>
                            <div className='flex items-center w-full'>
                                <div className="w-full mr-2 focus-within:border-primary dark:focus-within:border-secondary">
                                    <input
                                    type='text'
                                    name="query"
                                    id="query"
                                    autoComplete='off'
                                    className="appearance-none bg-background dark:bg-accent text-primary dark:text-secondary font-content block w-full resize-none px-1 py-2 focus:border-primary dark:focus:border-secondary focus:ring-0 text-sm ring-1 ring-inset ring-primary dark:ring-secondary rounded-md"
                                    placeholder="Masukkan Kata Kunci"
                                    />
                                </div>
                                <div className="flex-shrink-0">
                                    <ActionButton
                                        title=""
                                        btnType="button"
                                        isDisable={isLoading}
                                        icon={<MagnifyingGlassIcon className="h-5 w-5 text-secondary dark:text-primary flex-none font-content"/>}
                                        onClick={()=>{handleClick()}}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {isLoading &&
                <div className='flex justify-center items-center mt-10'>
                    <img src={sand_timer} className='h-10'/>
                </div>
            }
            {documents ? (
                <div>
                    {documents.length >= 1 ?
                        <div className='outline ouline-primary dark:outline-secondary mt-5 p-1 max-h-96 overflow-auto'>
                            <p className='mb-3 text-primary text-sm dark:text-secondary font-content'>{`Menampilkan hasil pencarian (${documents.length} hasil):`}</p>
                            {documents.map((data, index) => (
                                <div className='overflow-auto mb-2' key={index}>
                                    <button
                                        type='button'
                                        className='text-left inline-flex items-start text-primary text-sm dark:text-secondary font-content'
                                        onClick={()=>{setFileName(data)}}
                                    >
                                        <DocumentIcon className='w-4 h-4 mr-1 mt-0.5'/>
                                        <p className=''>{data}</p>
                                    </button>
                                </div>
                            ))}
                        </div>
                        : <p className='mt-5 text-primary text-sm dark:text-secondary font-content'>Dokumen tidak ditemukan</p>
                    }
                </div>) : null
            }
            { fileName != null &&
                <>
                    <div className="overflow-auto">
                        <SimpleText
                            text={`Selected Document: ${fileName}`}
                            twClass="mt-5 font-content text-sm"
                        />
                    </div>
                    <ActionButton
                        title="Ringkas Dokumen"
                        btnType="button"
                        isDisable={false}
                        icon={<ScissorsIcon className="h-5 w-5 text-secondary dark:text-primary mr-1"/>}
                        twClass="my-1 w-full lg:w-fit font-content"
                        onClick={()=>{handleSum()}}
                    />
                    <div className="overflow-auto max-h-96 lg:max-h-screen mt-10 outline ouline-primary dark:outline-secondary">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer fileUrl={`${process.env.REACT_APP_API_BASE_URL}cdn/${fileName}`}/>
                        </Worker>
                    </div>
                </>
            }
        </>
    )
}