import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

type BorderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode;
}


const BorderButton = forwardRef<HTMLButtonElement, BorderButtonProps>((props, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className={cn('rounded-lg w-[130px] h-[41px] sans-preset4 flex flex-row justify-center items-center px-3 py-4 gap-2 bg-neutral-0 text-neutral-950 border border-neutral-300',
                'focus:ring-2 focus:ring-[#99A0AE] focus:ring-offset-2 focus:text-neutral-950 focus:border focus:border-neutral-950',
                'hover:bg-neutral-100  hover:text-neutral-600  hover:border-none',
                'disabled:bg-neutral-100 disabled:text-neutral-300 disabled:pointer-events-none disabled:border-none',
                props.className
            )}
        >
            {props.icon}
            {props.children}
        </button>
    );
});

BorderButton.displayName = 'BorderButton';

export default BorderButton;



