/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
        <h1>tess</h1>
        <div className="flex items-start space-x-4 mx-1">
            <div className="min-w-0 flex-1">
                <form action="#">
                <div className="border-b border-accent dark:border-background focus-within:border-primary dark:focus-within:border-secondary rounded rounder-md">
                    <textarea
                    rows={3}
                    name="teks"
                    id="teks"
                    className="block w-full resize-none pb-2 focus:border-primary dark:focus:border-secondary focus:ring-0 sm:text-sm"
                    placeholder="Masukkan Teks (Maksimum 2000 Karakter)"
                    defaultValue={''}
                    />
                </div>
                <div className="flex justify-between pt-2">
                    <div className="flex items-center space-x-5">
                    <div className="flow-root">
                        <p className='font-semibold text-primary'>0/2000 Karakter</p>
                    </div>
                    </div>
                    <div className="flex-shrink-0">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md border border-transparent bg-primary dark:bg-secondary px-4 py-2 text-sm font-medium text-secondary dark:text-primary shadow-sm hover:bg-accent dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-offset-2"
                    >
                        Ringkas Teks
                    </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </>
    
  )
}
