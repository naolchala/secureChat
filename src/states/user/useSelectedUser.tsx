import { create } from "zustand";
import { ContactResponse } from "../../api/contact.types";
import { immer } from "zustand/middleware/immer";
import { GroupResponse } from "../../api/group.types";

interface State {
	selectedContact?: ContactResponse;
	selectedGroup?: GroupResponse;
}

interface Action {
	setSelectedGroup: (group: GroupResponse) => void;
	setSelectedContact: (contact: ContactResponse) => void;
	clear: () => void;
}

export const useSelectedContact = create(
	immer<State & Action>((set) => {
		return {
			setSelectedContact: (contact) =>
				set((state) => {
					state.selectedContact = contact;
				}),
			setSelectedGroup: (group) =>
				set((state) => {
					state.selectedGroup = group;
				}),
			clear: () =>
				set((state) => {
					state.selectedContact = undefined;
					state.selectedGroup = undefined;
				}),
		};
	})
);
