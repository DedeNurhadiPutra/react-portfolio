import { toast } from "react-hot-toast";

const Toaster = {
  success: (message) => {
    toast.success(message);
  },
  error: (message, styles) => {
    toast.error(message, { styles });
  },
};

export default Toaster;
