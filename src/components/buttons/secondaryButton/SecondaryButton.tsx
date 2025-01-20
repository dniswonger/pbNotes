import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

const SecondaryButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className={cn('rounded-lg w-[130px] h-[41px] sans-preset4 flex flex-row justify-center items-center px-3 py-4 gap-2 bg-neutral-100 text-neutral-600',
                'focus:ring-2 focus:ring-[#99A0AE] focus:ring-offset-2 focus:bg-neutral-0 focus:border focus:border-black focus:text-neutral-950',
                !props.disabled && 'hover:bg-neutral-0 hover:border hover:border-neutral-300 hover:text-neutral-950',
                props.disabled && 'bg-neutral-100 text-neutral-300',
                props.className
            )}
        >
            {props.children}
        </button>
    );
});

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;



