import IconFrame from "../../IconFrame";

type ActionModalProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    actionButton: React.ReactNode;
    cancelButton: React.ReactNode;
}

const ActionModal = ({ title, description, icon, actionButton, cancelButton }: ActionModalProps) => {
    return (
        <div className="flex flex-col bg-white border border-neutral-200 rounded-xl w-[343px] h-[193px] sm:w-[440px]">
            <div className="flex p-5 flex-grow gap-4">
                <IconFrame icon={icon} />
                <div className="flex flex-col">
                    <h2 className="sans-preset3">{title}</h2>
                    <p className="sans-preset5">{description}</p>
                </div>
            </div>
            <div className="flex justify-end items-center px-5 py-4 border-t border-neutral-200 gap-4 h-[73px]">
                {cancelButton}
                {actionButton}
            </div>
        </div>
    );
};

export default ActionModal;
