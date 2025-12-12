import { SetStateAction } from "react";
import { FormOpen } from "../../../types/formOpen.type";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../mock/services/auth";

interface Props {
    setFormOpen: React.Dispatch<SetStateAction<FormOpen | null>>,
    setProfileOpen: React.Dispatch<SetStateAction<boolean>>
}

const ProfileMenu = ({ setFormOpen, setProfileOpen }: Props) => {
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <ul className="flex flex-col bg-gray-100 items-center p-2"
        >
            <div className="flex w-full justify-end">
                <i className="bi bi-x" onClick={() => setProfileOpen(false)} />
            </div>
            <div className="flex flex-col px-4 gap-2">
                <li onClick={() => setFormOpen('name')}>Alterar Nome</li>
                <li onClick={() => setFormOpen('email')}>Alterar Email</li>
                <li onClick={() => setFormOpen('password')}>Alterar Senha</li>
            </div>
            <div className="mt-3" onClick={onLogout}>
                <i className="bi bi-door-open-fill"></i>
                Sair
            </div>
        </ul>
    )
}

export default ProfileMenu