import axios from "axios";
import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      isModalOpen: false,
      setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
      setIsModalClose: () => set({ isModalOpen: false }),
      serviceType: "",
      setServiceType: (type) => set({ serviceType: type }),
      activityList: [],
      setActivityList: (activityList) => {
        set({
          activityList: activityList,
        });
      },
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
          (act) => act.name !== activity
        );
        set({
          interestedActivities: activities,
          selectedactivityList: activityList,
        });
      },
      setInterestedActivities: (activities) =>
        set({ interestedActivities: activities }),
    }),
    {
      name: "dxberienceStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAPIStore = create(
  persist(
    (set, get) => ({
      url: "https://dxberienceapi.up.railway.app/v1",
      api: axios.create({
        baseURL: "https://dxberienceapi.up.railway.app/v1",
        token: "",
        headers: {
          Authorization: `Bearer ${get()?.token}`,
          "Content-Type": "application/json",
        },
      }),
      submitLead: async (leadDetails) => {
        try {
          const api = get()?.api;
          let request = await api.post("/leads", leadDetails);
          return request?.data;
        } catch (error) {
          console.log(error);
          throw new Error(
            `Failed to submit lead: ${error.response.data.message}`
          );
        }
      },
      getProfiles: async () => {
        try {
          const api = get()?.api;
          let request = await api.get("/profile");
          return request?.data;
        } catch (error) {
          console.log(error);
          throw new Error(
            `Failed to get profiles: ${error.response.data.message}`
          );
        }
      },
    }),
    {
      name: "dxberienceAPIStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
