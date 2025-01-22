import { cn } from "@/lib/utils";
import { useId } from "react";

type MenuItemProps = {
    icon: React.ReactNode,
    label: string,
    checked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MenuItem = ({ icon, label, checked, onChange }: MenuItemProps) => {
    const id = useId()
    return (
        <label htmlFor={`menuItem-${id}`} className={cn(`w-[68.6px] h-8 sm:w-[80px] sm:h-[50px] sm:gap-1 rounded text-neutral-600 dark:text-neutral-400 sans-preset6 flex flex-col items-center justify-center bg-neutral-0 dark:bg-neutral-950 cursor-pointer select-none`,
            checked && 'bg-blue-50 text-blue-500 dark:bg-blue-50 dark:text-blue-500 '
        )}>
            <input type='radio' id={`menuItem-${id}`} checked={checked} onChange={onChange} className="hidden" />
            <span>{icon}</span>
            <span className="sm:block hidden">{label}</span>
        </label>
    )
}

export default MenuItem;


// /* Menu Item */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 4px 0px;
// gap: 4px;

// margin: 0 auto;
// width: 80px;
// height: 50px;

// background: #EBF1FF;
// border-radius: 4px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Menu Item */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 4px 0px;
// gap: 4px;

// margin: 0 auto;
// width: 68.6px;
// height: 32px;

// background: #EBF1FF;
// border-radius: 4px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;

