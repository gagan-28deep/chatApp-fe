import { LogOut } from "lucide-react";
import useUser from "../../hooks/useUser";
const LogoutButton = () => {
	const {handleLogout} = useUser();
	const logout = () => {
		alert("You are logged out");
	};

	return (
		<div className='mt-auto'>
			<LogOut className='w-6 h-6 text-white cursor-pointer' onClick={handleLogout} />
		</div>
	);
};
export default LogoutButton;
