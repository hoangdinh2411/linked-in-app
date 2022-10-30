import axiosConfig from "services/axiosConfig";
import useSWR from "swr";

const UseCustomSWR = (key, formData, options = {} ) => {
  const { data, error, ...other } = useSWR(
    key,
    axiosConfig.post("/client/auth/register",formData).then((res) => console.log(res)),
    options
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    ...other,
  };
};

export default UseCustomSWR;
