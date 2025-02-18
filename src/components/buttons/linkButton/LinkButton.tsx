import { forwardRef, ButtonHTMLAttributes } from "react";

const LinkButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
    return (
        <button ref={ref} {...props} className="sans-preset6 text-neutral-600 underline hover:text-neutral-950" />
    )
})

export default LinkButton;