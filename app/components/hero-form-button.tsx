'use client'
import { useFormStatus } from "react-dom";

export default function SubmitButton(){
    const {pending} = useFormStatus();
    return(
        <button
            disabled={pending}
            type="submit"
            className="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-third-700 hover:bg-third-800 focus:ring-4 focus:outline-none focus:ring-third-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-third-600 dark:hover:bg-third-700 dark:focus:ring-third-800"
        >
            {pending ? "Submiting...": "Submit"}
        </button>
    )
}