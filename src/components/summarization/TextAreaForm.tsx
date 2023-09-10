import { useState } from 'react'

export default function TextAreaForm() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="justify-center">
                <div className="items-start space-x-4">
                    <div className="min-w-0">
                        <form action="#">
                        <div className="focus-within:border-primary dark:focus-within:border-secondary">
                            <textarea
                            rows={10}
                            name="teks"
                            id="teks"
                            className="block w-full resize-none p-1 pb-2 focus:border-primary dark:focus:border-secondary focus:ring-0 sm:text-sm"
                            placeholder="Masukkan Teks (Maksimum 2000 Karakter)"
                            defaultValue={''}
                            onChange={(e)=>setCount(e.target.value.length)}
                            />
                        </div>
                        <div className="flex justify-between mt-3">
                            <div className="flex items-center space-x-5">
                            <div className="flow-root">
                                <p className='font-semibold text-primary dark:text-secondary'>{count}/2000 Karakter</p>
                            </div>
                            </div>
                            <div className="flex-shrink-0">
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md border border-transparent bg-primary dark:bg-secondary px-4 py-2 text-sm font-medium text-secondary dark:text-primary shadow-sm hover:bg-accent dark:hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-offset-2"
                            >
                                Ringkas Teks
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}