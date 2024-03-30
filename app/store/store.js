import { create } from "zustand";

export const useStore = create((set, get) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setIsModalClose: () => set({ isModalOpen: false }),
  serviceType: "",
  setServiceType: (type) => set({ serviceType: type }),
  interestedActivities: [],
  selectedactivityList: [],
  addInterestedActivity: (activity, activityList) => {
    const activities = [...get().interestedActivities, activity];
    const allActivtyList = [...get().selectedactivityList, activityList];
    set({
      interestedActivities: activities,
      selectedactivityList: allActivtyList,
    });
  },
  removeInterestedActivity: (activity) => {
    const activities = get().interestedActivities.filter(
      (act) => act !== activity
    );
    const activityList = get().selectedactivityList.filter(
      (act) => act.title !== activity
    );
    set({
      interestedActivities: activities,
      selectedactivityList: activityList,
    });
  },
  setInterestedActivities: (activities) =>
    set({ interestedActivities: activities }),
}));
