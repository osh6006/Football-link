import toast from "react-hot-toast";
import { supabase } from "libs/superbase-client";
import { FileObject } from "@supabase/storage-js/src/lib/types";

export const getBanner = async (): Promise<FileObject[]> => {
  const { data, error } = await supabase.storage
    .from("spolink")
    .list(`banner_images`);

  if (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }

  console.log(data);

  return data.filter((item) => item.metadata.size > 0).reverse();
};
