import InfoIcon from "../../../assets/images/icon-info.svg?react"
import { forwardRef, InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import BaseInput from "../../inputs/baseInput/BaseInput"

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    infoText?: string;
    isErrored?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ className, label, infoText, isErrored = false, ...props }, ref) => {

    return (
        <div className="flex flex-col gap-[6px]">
            {label &&
                <label htmlFor="input" className="sans-preset4 text-neutral-950">{label}</label>
            }
            <BaseInput id="input" ref={ref} {...props} className={cn(
                isErrored && "border-red-500",
                className)} />
            {infoText &&
                <div className={`flex gap-2 items-center  ${isErrored ? 'text-red-500' : 'text-neutral-600'}`}>
                    <InfoIcon height={16} width={16} />
                    <p className="sans-preset6">{infoText}</p>
                </div>
            }
        </div>
    )
})

export default TextField;