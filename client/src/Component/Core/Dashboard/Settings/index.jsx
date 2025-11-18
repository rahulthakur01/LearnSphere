import ChangeProfilePic from "./ChangeProfilePic";
import EditProfileInfo from "./EditProfileInfo";
import UpdatePassword from "./UpdatePassword";
const Settings = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <ChangeProfilePic />
        <EditProfileInfo/>
        <UpdatePassword/>
      </div>
    </>
  );
};
export default Settings;
