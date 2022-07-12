import { fetchCreateProduct } from "../client/fetchCreateProduct";
import { create } from "../utils/createStore";

const INITIAL_STATE = {
  name: "",
  category: "",
  city: "",
  address: "",
  description: "",
  latitude: "",
  longitude: "",
  services: [],
  currentService: "",
  currentImage: "",
  images: [],
  policy1: "",
  policy2: "",
  policy3: "",
};

const createAdminStore = () =>
  create("admin")((set, get) => ({
    ...INITIAL_STATE,
    loading: false,
    loaded: false,
    error: false,

    setName: (name) => set({ name }),
    setCategory: (category) => set({ category }),
    setAddress: (address) => set({ address }),
    setDescription: (description) => set({ description }),
    setLatitude: (latitude) => set({ latitude }),
    setLongitude: (longitude) => set({ longitude }),
    setCity: (city) => {
      set({
        city,
      });
    },
    setCurrentService: (currentService) => set({ currentService }),
    setServices: () => {
      const serviceSelected = get().currentService;
      const servicesSelected = get().services;
      if (serviceSelected && !servicesSelected.includes(serviceSelected)) {
        set((state) => {
          return {
            ...state,
            services: [...state.services, serviceSelected],
            currentService: "",
          };
        });
      }
      return;
    },
    setCurrentImage: (img) => set({ currentImage: img }),
    setPolicy1: (policy1) => set({ policy1 }),
    setPolicy2: (policy2) => set({ policy2 }),
    setPolicy3: (policy3) => set({ policy3 }),
    addImages: () => {
      const currentImage = get().currentImage;
      const images = get().images;
      if (currentImage && !images.includes(currentImage)) {
        set((state) => {
          return {
            ...state,
            images: [...state.images, currentImage],
            currentImage: "",
          };
        });
      }
    },

    deleteImage: (urlImg) => {
      const currentImages = get().images;
      set({ images: currentImages.filter((img) => img !== urlImg) });
    },

    getDataFormatted: () => {
      const {
        name,
        category,
        city,
        address,
        description,
        latitude,
        longitude,
        services,
        currentService,
        currentImage,
        images,
        policy1,
        policy2,
        policy3,
      } = get();

      const policy1Desc = policy1.split("\n");
      const policy2Desc = policy2.split("\n");
      const policy3Desc = policy3.split("\n");

      const data = {
        name,
        description,
        images: images.map((image) => ({ title: "productImg", url: image })),
        typeOfPolicyAddPoliciesDTOList: [
          {
            typeOfPolicyId: 1,
            listPolicies: policy1Desc.map((policy) => ({
              description: policy,
            })),
          },
          {
            typeOfPolicyId: 2,
            listPolicies: policy2Desc.map((policy) => ({
              description: policy,
            })),
          },
          {
            typeOfPolicyId: 3,
            listPolicies: policy3Desc.map((policy) => ({
              description: policy,
            })),
          },
        ],
        city_id: city,
        category_id: category,
        features: services.map((service) => ({
          name: service,
          icon: "https://cdn-icons-png.flaticon.com/512/1330/1330132.png",
        })),
        latitude,
        longitude,
        address,
      };

      return data;
    },

    doPostProduct: async () => {
      const data = get().getDataFormatted();
      const response = await fetchCreateProduct(data);
      return response;
    },

    resetState: () => set(INITIAL_STATE),

    deleteService: (serviceToRemove) =>
      set((state) => ({
        ...state,
        services: state.services.filter(
          (service) => service !== serviceToRemove
        ),
      })),
  }));

export const useAdminStore = createAdminStore();
