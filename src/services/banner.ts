import { supabase } from "libs/superbase-client";
import { FileObject } from "@supabase/storage-js/src/lib/types";
import toast from "react-hot-toast";

export const getBanner = async (
  sports: string,
  leagueId: number,
): Promise<FileObject[]> => {
  const { data, error } = await supabase.storage
    .from("spolink")
    .list(`banner_images/${sports}/${leagueId}`);

  if (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }

  return data.filter((item) => item.metadata.size > 0);
};
