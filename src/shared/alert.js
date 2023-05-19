import Swal from "sweetalert2";

const notifyRequired = (error) => {
  Swal.fire({
    icon: "warning",
    title: "Required",
    text: error,
  });
};

const notifySuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    showConfirmButton: false,
    timer: 1800,
  });
};
const notifyWithTitle =(title,message)=>{
  Swal.fire({
    icon: "success",
    title: title,
    text: message,
    showConfirmButton: false,
    timer: 1800,
  });
}
const notifyError = (error) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: error,
  });
};

export { notifyRequired, notifySuccess, notifyError,notifyWithTitle };
