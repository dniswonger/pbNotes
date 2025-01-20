import Archive from "../../../assets/images/icon-archive.svg?react";
import PrimaryButton from "../../buttons/primaryButton/PrimaryButton";
import SecondaryButton from "../../buttons/secondaryButton/SecondaryButton";
import ActionModal from "../actionModal/ActionModal";

const ArchiveNote = () => {
    return (
        <ActionModal title="Archive Note"
            description="Are you sure you want to archive this note? You can find it in the Archived Notes section and resotre it anytime."
            icon={<Archive />}
            actionButton={<PrimaryButton onClick={() => { console.log('testytest') }}>Archive Note</PrimaryButton>}
            cancelButton={<SecondaryButton onClick={() => { console.log('cancel') }}>Cancel</SecondaryButton>} />
    )
};

export default ArchiveNote;