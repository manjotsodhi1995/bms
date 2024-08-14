import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "@/utils/middleware";
import toast from "react-hot-toast";

export default function FormDialog({ email }: any) {
  const [open, setOpen] = React.useState(false);
  const [oldPass, setOldPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateForm = () => {
    if (!oldPass || !newPass || !confirmPass) {
      toast.error("All fields are required*.");
      return false;
    }
    if (newPass !== confirmPass) {
      toast.error("New Password and Confirm Password do not match.");
      return false;
    }
    if (newPass.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await axios
        .put("https://kafsbackend-106f.onrender.com/api/v1/users/update", {
          password: confirmPass,
          email,
        })
        .then(() => {
          toast.success("Password Changed Successfully");
          setOldPass("");
          setNewPass("");
          setConfirmPass("");
        });
      handleClose();
    } catch (error) {
      console.log("failed to save password");
    }
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="flex items-center ml-2 gap-1 text-black w-full text-md mt-2"
        onClick={handleClickOpen}
      >
         <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`fill-black ml-2.5`}
            >
              <path d="M11.25 20.25C11.25 20.4489 11.171 20.6397 11.0303 20.7803C10.8897 20.921 10.6989 21 10.5 21H4.5C4.30109 21 4.11032 20.921 3.96967 20.7803C3.82902 20.6397 3.75 20.4489 3.75 20.25V3.75C3.75 3.55109 3.82902 3.36032 3.96967 3.21967C4.11032 3.07902 4.30109 3 4.5 3H10.5C10.6989 3 10.8897 3.07902 11.0303 3.21967C11.171 3.36032 11.25 3.55109 11.25 3.75C11.25 3.94891 11.171 4.13968 11.0303 4.28033C10.8897 4.42098 10.6989 4.5 10.5 4.5H5.25V19.5H10.5C10.6989 19.5 10.8897 19.579 11.0303 19.7197C11.171 19.8603 11.25 20.0511 11.25 20.25ZM21.5306 11.4694L17.7806 7.71937C17.6399 7.57864 17.449 7.49958 17.25 7.49958C17.051 7.49958 16.8601 7.57864 16.7194 7.71937C16.5786 7.86011 16.4996 8.05098 16.4996 8.25C16.4996 8.44902 16.5786 8.63989 16.7194 8.78063L19.1897 11.25H10.5C10.3011 11.25 10.1103 11.329 9.96967 11.4697C9.82902 11.6103 9.75 11.8011 9.75 12C9.75 12.1989 9.82902 12.3897 9.96967 12.5303C10.1103 12.671 10.3011 12.75 10.5 12.75H19.1897L16.7194 15.2194C16.5786 15.3601 16.4996 15.551 16.4996 15.75C16.4996 15.949 16.5786 16.1399 16.7194 16.2806C16.8601 16.4214 17.051 16.5004 17.25 16.5004C17.449 16.5004 17.6399 16.4214 17.7806 16.2806L21.5306 12.5306C21.6004 12.461 21.6557 12.3783 21.6934 12.2872C21.7312 12.1962 21.7506 12.0986 21.7506 12C21.7506 11.9014 21.7312 11.8038 21.6934 11.7128C21.6557 11.6217 21.6004 11.539 21.5306 11.4694Z" />
            </svg>{" "}
        Change Password{" "}
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-96">
              <input
                type="password"
                name="oldPass"
                value={oldPass}
                placeholder="Old Password*"
                id="oldPass"
                className="w-full border p-2 rounded"
                onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div className="w-96">
              <input
                type="password"
                name="newPass"
                value={newPass}
                placeholder="New Password*"
                id="confirmPass"
                className="w-full border p-2 rounded"
                onChange={(e) => setNewPass(e.target.value)}
              />
            </div>
            <div className="w-96">
              <input
                type="password"
                name="confirmPass"
                value={confirmPass}
                placeholder="Confirm Password*"
                id="confirmPass"
                className="w-full border p-2 rounded"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="flex items-center gap-2 bg-[#f3f4f6] text-black rounded-md w-fit p-[5px] px-[10px] text-sm"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-black text-white rounded-md w-fit p-[5px] px-[10px] text-sm"
            onClick={handleSubmit}
          >
            Change Password
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
