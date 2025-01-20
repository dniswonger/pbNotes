const IconFrame = ({ icon }: { icon: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center h-10 w-10 bg-neutral-100 rounded-lg text-neutral-950">
            {icon}
        </div>
    );
};

export default IconFrame;