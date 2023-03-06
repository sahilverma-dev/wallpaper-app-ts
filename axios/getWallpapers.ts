import { api } from ".";
import { Wallpaper } from "../interfaces/wallpapers";

export const getWallpapers = async (): Promise<Wallpaper[]> => {
  try {
    const { data } = await api("", {
      params: {
        type: "phone",
        method: "highest_rated",
      },
    });
    return data?.wallpapers;
  } catch (error) {
    console.log(error);
    return [];
  }
};
