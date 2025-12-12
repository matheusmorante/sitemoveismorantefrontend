import { useState } from "react";
import { useUser } from "../../../context/UserContext";
import { FormOpen } from "../../../types/formOpen.type";
import ChangeName from "./ChangeName";
import ProfileMenu from "./ProfileMenu";

const Profile = () => {
    const { user } = useUser();
    const [formOpen, setFormOpen] = useState<FormOpen | null>(null);
    const [profileOpen, setProfileOpen] = useState<boolean>(false);
    
    return (
        <>
            <i onClick={() => setProfileOpen(!profileOpen)} className="bi bi-person" />
            <div className="absolute right-2 top-10 z-40 text-sm">
                {user?.fullname}

                {
                    profileOpen && (
                        <ProfileMenu
                            setProfileOpen={setProfileOpen}
                            setFormOpen={setFormOpen}
                        />
                    )

                }

                {
                    formOpen === 'name' &&
                    <ChangeName
                        isOpen={formOpen === 'name'}
                        onClose={() => setFormOpen(null)}
                    />
                }

            </div>
        </>
    )
}

export default Profile
