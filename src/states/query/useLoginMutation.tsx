import { useMutation } from "@tanstack/react-query";
import { LoginAPIProps } from "../../api/auth.types";
import { useToken } from "../../utils/token";
import { useToast } from "@chakra-ui/react";
import AuthAPI from "../../api/auth";

export const LOGIN = "LOGIN";
export const useLoginMutation = () => {
	const { setToken } = useToken();
	const toast = useToast();
	const mutation = useMutation({
		mutationKey: [LOGIN],
		mutationFn: (data: LoginAPIProps) => AuthAPI.login(data),
		onSuccess: (data) => {
			setToken(data.token);
			toast({
				position: "top",
				status: "success",
				title: "Login Success",
				duration: 3000,
				isClosable: true,
			});
		},
	});
	return mutation;
};
