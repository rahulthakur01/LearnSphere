import ChangeProfilePic from "./ChangeProfilePic";
import EditProfileInfo from "./EditProfileInfo";
import UpdatePassword from "./UpdatePassword";
import DeleteAccount from "./DeleteAccount";
const Settings = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <ChangeProfilePic />
        <EditProfileInfo/>
        <UpdatePassword/>
        <DeleteAccount/>
      </div>
    </>
  );
};
export default Settings;
