import ShowPasswordIcon from "../../../assets/images/icon-show-password.svg?react"
import HidePasswordIcon from "../../../assets/images/icon-hide-password.svg?react"
import InfoIcon from "../../../assets/images/icon-info.svg?react"
import { forwardRef, InputHTMLAttributes, useState } from "react"
import { cn } from "@/lib/utils"
import LinkButton from "../../buttons/linkButton/LinkButton"
type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    infoText?: string;
    isErrored?: boolean;
    onForgotPassword?: () => void;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({ className, label, infoText, isErrored, disabled, onForgotPassword, ...props }, ref) => {

    const [isMasked, setIsMasked] = useState(true);

    return (
        <div className="flex flex-col gap-[6px]">
            <div className="flex items-center justify-between">
                {label &&
                    <label htmlFor="password" className="sans-preset4 text-neutral-950">{label}</label>
                }
                {onForgotPassword &&
                    <LinkButton onClick={onForgotPassword}>Forgot?</LinkButton>
                }
            </div>
            <div className={cn("flex flex-row justify-between items-center border border-neutral-200 rounded-lg p-2 outline-none",
                "focus-within:ring-2 focus-within:ring-[#99A0AE] focus-within:ring-offset-2 focus-within:border focus-within:border-black",
                disabled && "bg-neutral-50",
                isErrored && "border-red-500",
                className)}>
                <input ref={ref} disabled={disabled} type={isMasked ? "password" : "text"}  {...props} id="password"
                    className={cn("text-preset5 text-neutral-950  placeholder:text-neutral-500 border-none hover:border-none focus:bocus-none outline-none disabled:bg-neutral-50",
                        isMasked && "text-xs"
                    )} />
                <button disabled={disabled} onClick={() => setIsMasked(!isMasked)}>
                    {isMasked ? <ShowPasswordIcon className="text-neutral-500" /> : <HidePasswordIcon className="text-neutral-500" />}
                </button>
            </div>
            {infoText &&
                <div className={`flex gap-2 items-center  ${isErrored ? 'text-red-500' : 'text-neutral-600'}`}>
                    <InfoIcon height={16} width={16} />
                    <p className="sans-preset6">{infoText}</p>
                </div>
            }
        </div>
    )
})

export default PasswordField;
