import { Poppins } from "@next/font/google"
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { mangaOptions } from "../../assets/data/data";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string | boolean
    label: string
}

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string | boolean
    label: string
}
const poppins = Poppins({ subsets: ["latin"], weight: "400" })
export const Input = ({ label, error, ...props }: InputProps) => {

    return (
        <>
            <label className="flex flex-col gap-1">
                <span className={`text-base link ${poppins.className}`}>{label}</span>
                <input className="border-2 border-gray-200 outline-none rounded-md p-2 focus:border-gray-400" {...props} />
                <small className="error">{error}</small>
            </label>
        </>
    )
}

export const TextArea = ({ label, error, ...props }: TextAreaProps) => {

    return (
        <>
            <label className="flex flex-col gap-1">
                <span className={`text-base link ${poppins.className}`}>{label}</span>
                <textarea rows={2} cols={2} className="border-2 border-gray-200 outline-none rounded-md p-4 focus:border-gray-400" {...props} />
                <small className="error">{error}</small>
            </label>
        </>
    )
}



const animatedComponents = makeAnimated();

export const MySelect = ({ label, ...props }: any) => {
    return (
        <label className="flex flex-col gap-1">
            <span className={`text-base link ${poppins.className}`}>{label}</span>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[mangaOptions[4], mangaOptions[5]]}
                isMulti
                options={mangaOptions}
                className="select"
                {...props}
            />
        </label>
    );
}
