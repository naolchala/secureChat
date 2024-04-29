import { useMutation } from "@tanstack/react-query";
import { RegisterAPIProps } from "../../api/auth.types";
import AuthAPI from "../../api/auth";
import { useToast } from "@chakra-ui/react";
import { useToken } from "../../utils/token";

export const REGISTER = "REGISTER";
export const useRegisterMutation = () => {
	const toast = useToast();
	const { setToken } = useToken();

	const mutation = useMutation({
		mutationKey: [REGISTER],
		mutationFn: async (data: RegisterAPIProps) => AuthAPI.register(data),
		onSuccess: (data) => {
			setToken(data.token);
			toast({
				title: "Welcome to SecureChat",
				status: "success",
				isClosable: true,
				position: "top",
			});
		},
	});

	return mutation;
};
