import Delete from "../../../assets/images/icon-delete.svg?react";
import PrimaryButton from "../../buttons/primaryButton/PrimaryButton";
import SecondaryButton from "../../buttons/secondaryButton/SecondaryButton";
import ActionModal from "../actionModal/ActionModal";

const DeleteNote = () => {
    return (
        <ActionModal title="Delete Note"
            description="Are you sure you want to permanently delete this note? This action cannot be undone."
            icon={<Delete />}
            actionButton={<PrimaryButton className="bg-red-500 hover:bg-red-700" onClick={() => { console.log('testytest') }}>Archive Note</PrimaryButton>}
            cancelButton={<SecondaryButton onClick={() => { console.log('cancel') }}>Cancel</SecondaryButton>} />
    )
};

export default DeleteNote;