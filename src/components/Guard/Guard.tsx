import { ReactNode, useEffect } from "react";
import { useUser } from "../../states/user/useUser";
import { useNavigate } from "react-router-dom";

interface GuardProps {
	children?: ReactNode;
}

export const Guard = ({ children }: GuardProps) => {
	const { user } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, [user, navigate]);

	// if (!user) {
	// 	return (
	// 		<>
	// 			<Spinner />
	// 		</>
	// 	);
	// }

	return <>{children}</>;
};
