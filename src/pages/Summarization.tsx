import HeaderTitle from "../components/HeaderTitle"
import TextAreaForm from "../components/summarization/TextAreaForm"

export default function Summarization() {
    return (
        <>
            <div>
                <HeaderTitle/>
                <h1 className="font-bold my-2 text-primary dark:text-secondary">Input Teks:</h1>
                <TextAreaForm/>
                <h1 className="font-bold mt-20 mb-2 text-primary dark:text-secondary">Input Dokumen PDF:</h1>
                <div className="flex justify-between sm:justify-start">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md border border-transparent bg-primary dark:bg-secondary px-4 py-2 text-sm font-medium text-secondary dark:text-primary shadow-sm hover:bg-accent dark:hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-offset-2"
                    >
                        Pilih Dokumen
                    </button>
                    <button
                        type="submit"
                        className="ml-5 inline-flex items-center rounded-md border border-transparent bg-primary dark:bg-secondary px-4 py-2 text-sm font-medium text-secondary dark:text-primary shadow-sm hover:bg-accent dark:hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-offset-2"
                    >
                        Upload Dokumen
                    </button>
                </div>
            </div>
        </>
    )
}