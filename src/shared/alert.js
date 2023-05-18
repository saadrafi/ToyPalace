import Swal from "sweetalert2"

const notifyRequired =(error)=>{
    Swal.fire({
      icon: "warning",
      title: "Required",
      text: error,
    });
}

const notifySuccess =(message)=>{
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
}
const notifyError =(error)=>{
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
}

export {notifyRequired,notifySuccess,notifyError}