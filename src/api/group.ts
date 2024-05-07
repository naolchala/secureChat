import { axiosWithToken } from "../utils/api";
import {
	AddMemberToGroupProps,
	CreateGroupProps,
	GroupResponse,
	RemoveMemberFromGroupProps,
} from "./group.types";

const getGroups = async () => {
	const groups = await axiosWithToken()
		.get<GroupResponse[]>("/group")
		.then((res) => res.data);

	return groups;
};

const createGroup = async (data: CreateGroupProps) => {
	const response = await axiosWithToken()
		.post("/group/create", data)
		.then((res) => res.data);
	return response;
};

const addMember = async (data: AddMemberToGroupProps) => {
	const res = await axiosWithToken()
		.put("/group/add-contact", data)
		.then((res) => res.data);
	return res;
};

const removeMember = async (data: RemoveMemberFromGroupProps) => {
	const res = await axiosWithToken()
		.put("/group/remove-contact", data)
		.then((res) => res.data);
	return res;
};

const GroupAPI = {
	getGroups,
	createGroup,
	addMember,
	removeMember,
};
export default GroupAPI;
