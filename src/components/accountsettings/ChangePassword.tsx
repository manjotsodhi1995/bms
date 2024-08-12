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
        className="flex items-center gap-2 bg-black text-white rounded-md w-fit p-[5px] px-[10px] text-sm mx-auto mt-2 sm:my-0 my-[20px]"
        onClick={handleClickOpen}
      >
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
                placeholder="old Passssword"
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
                placeholder="New Password *"
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
                placeholder="Confirm Password *"
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
            className="flex items-center gap-2 bg-black text-white rounded-md w-fit p-[5px] px-[10px] text-sm"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-black text-white rounded-md w-fit p-[5px] px-[10px] text-sm"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
