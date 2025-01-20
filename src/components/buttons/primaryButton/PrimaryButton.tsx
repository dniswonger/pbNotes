import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    width?: number;
    height?: number;
}



const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>((props, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className={cn("bg-blue-500  rounded-lg sans-preset4 text-neutral-0 flex flex-row justify-center items-center px-3 py-4 h-[41px]",
                "focus:ring-2 focus:ring-[#99A0AE] focus:ring-offset-2 focus:border focus:border-black",
                !props.disabled && "hover:bg-blue-700",
                props.disabled && "bg-neutral-100 text-neutral-300",
                props.className
            )}
        >
            {props.children}
        </button>
    );
});

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
