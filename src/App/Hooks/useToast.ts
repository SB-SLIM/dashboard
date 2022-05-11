import { toast, ToastContent, ToastOptions, TypeOptions } from "react-toastify";

const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
const useToast = (content: ToastContent = "default msg", type: TypeOptions = "default") => {
    if (type === "default") {
        return toast(content, toastOptions)
    } else {
        return toast[type](content, toastOptions)
    }
};

export default useToast;