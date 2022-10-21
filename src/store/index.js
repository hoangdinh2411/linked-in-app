import axiosConfig from "services/axiosConfig";
import { SWRConfig } from "swr";

const SWRConfigProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigProvider;
