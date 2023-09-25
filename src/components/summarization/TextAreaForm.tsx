import { useState } from 'react'
import { ScissorsIcon } from '@heroicons/react/24/outline';
import ActionButton from '../element/ActionButton';

export default function TextAreaForm() {
    const [count, setCount] = useState(0);
    const textLimit = 2000;

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
                                className="bg-background dark:bg-accent text-primary dark:text-secondary text-sm font-content block w-full resize-none p-1 pb-2 focus:border-primary dark:focus:border-secondary focus:ring-0 ring-1 ring-inset ring-primary dark:ring-secondary rounded-md"
                                placeholder="Masukkan Teks (Maksimum 2000 Karakter)"
                                defaultValue={''}
                                onChange={(e)=>setCount(e.target.value.length)}
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <div className="flex items-center space-x-5">
                                    <div className="flow-root font-content">
                                        {count <= textLimit ? <p className='font-semibold text-primary dark:text-secondary text-sm'>{count}/2000 Karakter</p>
                                        : <p className='font-semibold text-red-600'>{count}/2000 Karakter</p>}
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <ActionButton
                                        title="Ringkas Teks"
                                        btnType="submit"
                                        isDisable={count > textLimit}
                                        icon={<ScissorsIcon className="h-5 w-5 text-secondary dark:text-primary flex-none mr-2 font-content"/>}
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