import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface SideBarProps {
  onStateChange: (newState: string) => void;
  initialState: string;
  isVisible: boolean;
}

interface UpdateProfile {
  displayPic: string;
}

import { Avatar } from "@mui/material";
import { cn } from "@/utils";
import { useStore } from "@/hooks/useStore";
import axios from "@/utils/middleware";
import { API } from "@/api";
import { X, Pencil, Loader2 } from "lucide-react";
// import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";

const fetchProfile = async () => {
  const response = await axios.get(API.users.profile);
  return response.data.data;
};

const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios.postForm(API.content.upload, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

const updateProfile = async (body: UpdateProfile) => {
  const response = await axios.put(API.users.update, body);
  return response.data.data;
};

const SideBar: React.FC<SideBarProps> = ({
  onStateChange,
  initialState,
  isVisible,
}) => {
  const {
    root: { auth },
  } = useStore();
  const { data, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  useEffect(() => {
    if (!data) return;
    setProfilePic(data?.displayPic);
  }, [data, isSuccess]);

  const queryClient = useQueryClient();
  const [select, setSelect] = useState<string>(initialState);
  const [profilePic, setProfilePic] = useState<string>("");

  const { mutate: uploadFileMutation, isPending } = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data: any) => {
      setProfilePic(data.contentUrl);
      // updateProfile(profilePic)
    },
  });

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSettled: async () => {
      // setFname("");
      // setLname("");
      // setMobile("");
      // setDob("");
      // setPassword("");
      // setGender("");
      setProfilePic("");
      return await queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });


  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    mutate({
      displayPic: profilePic,
    });
  };

  return (
    <>
      <div
        className={`h-[100vh] max-sm:fixed sm:w-[25%] sm:max-w-[350px] min-w-[200px] bg-gray-300 text-black flex flex-col items-center w-[40px] z-50 sm:z-10 md:block  ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="absolute top-2 left-4 hover:border-2 hover:border-black rounded"
        >
          <X className="size-8" />
        </Link>
        <div className="mt-2 flex w-full justify-center max-sm:pl-5">
          <input
            accept="image/*"
            className="hidden"
            id="profilePic"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                uploadFileMutation(e.target.files[0]);
              }
            }}
          />
          <label
            htmlFor="profilePic"
            className="relative flex w-fit justify-center gap-2 items-center"
          >
            <Avatar
              src={profilePic || data?.displayPic}
              sx={{ width: 100, height: 100 }}
              className={cn({
                "opacity-60": isPending,
              })}
            />
            {isPending && (
              <Loader2 className="absolute left-8 size-10 animate-spin" />
            )}
            <Pencil className="size-4" />
          </label>
          <button onClick={formSubmitHandler}>change profile</button>
        </div>
        <div
          className={`flex my-1 w-full p-2 cursor-default  hover:cursor-pointer items-center group ${
            select == "acc" ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setSelect("acc");
            onStateChange("acc");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`fill-black ml-2.5 mr-1 ${
              select == "acc" ? "fill-white" : ""
            }`}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M11.9996 7.50001C11.1095 7.50001 10.2395 7.76393 9.49949 8.2584C8.75947 8.75287 8.18269 9.45567 7.8421 10.2779C7.5015 11.1002 7.41239 12.005 7.58602 12.8779C7.75965 13.7508 8.18824 14.5527 8.81757 15.182C9.44691 15.8113 10.2487 16.2399 11.1216 16.4135C11.9946 16.5872 12.8994 16.4981 13.7216 16.1575C14.5439 15.8169 15.2467 15.2401 15.7412 14.5001C16.2356 13.7601 16.4996 12.89 16.4996 12C16.4983 10.8069 16.0238 9.66305 15.1802 8.8194C14.3365 7.97576 13.1926 7.50125 11.9996 7.50001ZM11.9996 15C11.4062 15 10.8262 14.8241 10.3328 14.4944C9.8395 14.1648 9.45498 13.6962 9.22792 13.1481C9.00085 12.5999 8.94144 11.9967 9.0572 11.4147C9.17295 10.8328 9.45868 10.2983 9.87823 9.87869C10.2978 9.45914 10.8323 9.17341 11.4143 9.05766C11.9962 8.9419 12.5994 9.00131 13.1476 9.22837C13.6958 9.45544 14.1643 9.83996 14.494 10.3333C14.8236 10.8267 14.9996 11.4067 14.9996 12C14.9996 12.7957 14.6835 13.5587 14.1209 14.1213C13.5583 14.6839 12.7952 15 11.9996 15ZM20.2496 12.2025C20.2533 12.0675 20.2533 11.9325 20.2496 11.7975L21.6483 10.05C21.7216 9.95826 21.7724 9.85056 21.7965 9.7356C21.8206 9.62064 21.8174 9.50162 21.7871 9.38814C21.5578 8.5262 21.2147 7.69862 20.7671 6.9272C20.7084 6.82625 20.6271 6.74037 20.5294 6.67641C20.4318 6.61245 20.3205 6.57216 20.2046 6.55876L17.9808 6.31126C17.8883 6.21376 17.7946 6.12001 17.6996 6.03001L17.4371 3.80064C17.4236 3.68459 17.3831 3.57329 17.319 3.47563C17.2549 3.37797 17.1688 3.29665 17.0677 3.23814C16.296 2.79128 15.4685 2.44861 14.6067 2.21907C14.4932 2.18888 14.3741 2.1858 14.2592 2.21006C14.1442 2.23432 14.0365 2.28526 13.9449 2.35876L12.2021 3.75001C12.0671 3.75001 11.9321 3.75001 11.7971 3.75001L10.0496 2.35407C9.9578 2.28073 9.85011 2.22997 9.73514 2.20587C9.62018 2.18177 9.50116 2.18501 9.38768 2.21532C8.52588 2.44504 7.69836 2.78803 6.92674 3.23532C6.82579 3.29394 6.73992 3.37532 6.67595 3.47297C6.61199 3.57062 6.5717 3.68186 6.5583 3.79782L6.3108 6.02532C6.2133 6.11845 6.11955 6.2122 6.02955 6.30657L3.80018 6.56251C3.68413 6.57601 3.57284 6.61644 3.47518 6.68057C3.37752 6.7447 3.29619 6.83076 3.23768 6.93189C2.79082 7.7036 2.44815 8.53111 2.21862 9.39283C2.18843 9.50638 2.18534 9.62544 2.2096 9.74041C2.23387 9.85537 2.2848 9.96303 2.3583 10.0547L3.74955 11.7975C3.74955 11.9325 3.74955 12.0675 3.74955 12.2025L2.35362 13.95C2.28027 14.0418 2.22951 14.1495 2.20541 14.2644C2.18131 14.3794 2.18455 14.4984 2.21487 14.6119C2.44417 15.4738 2.78718 16.3014 3.23487 17.0728C3.29349 17.1738 3.37486 17.2597 3.47251 17.3236C3.57017 17.3876 3.6814 17.4279 3.79737 17.4413L6.02112 17.6888C6.11424 17.7863 6.20799 17.88 6.30237 17.97L6.56206 20.1994C6.57556 20.3154 6.61598 20.4267 6.68011 20.5244C6.74424 20.6221 6.8303 20.7034 6.93143 20.7619C7.70315 21.2088 8.53066 21.5514 9.39237 21.781C9.50592 21.8111 9.62498 21.8142 9.73995 21.79C9.85491 21.7657 9.96257 21.7148 10.0542 21.6413L11.7971 20.25C11.9321 20.2538 12.0671 20.2538 12.2021 20.25L13.9496 21.6488C14.0413 21.7221 14.149 21.7729 14.264 21.797C14.3789 21.8211 14.4979 21.8178 14.6114 21.7875C15.4734 21.5582 16.3009 21.2152 17.0724 20.7675C17.1733 20.7089 17.2592 20.6275 17.3232 20.5299C17.3871 20.4322 17.4274 20.321 17.4408 20.205L17.6883 17.9813C17.7858 17.8888 17.8796 17.795 17.9696 17.7L20.1989 17.4375C20.315 17.424 20.4263 17.3836 20.5239 17.3195C20.6216 17.2553 20.7029 17.1693 20.7614 17.0681C21.2083 16.2964 21.551 15.4689 21.7805 14.6072C21.8107 14.4936 21.8138 14.3746 21.7895 14.2596C21.7652 14.1447 21.7143 14.037 21.6408 13.9453L20.2496 12.2025ZM18.7402 11.5931C18.7561 11.8642 18.7561 12.1359 18.7402 12.4069C18.729 12.5924 18.7871 12.7755 18.9033 12.9206L20.2336 14.5828C20.081 15.068 19.8855 15.5386 19.6496 15.9891L17.5308 16.2291C17.3463 16.2496 17.1759 16.3377 17.0527 16.4766C16.8722 16.6795 16.68 16.8717 16.4771 17.0522C16.3382 17.1755 16.25 17.3458 16.2296 17.5303L15.9942 19.6472C15.5438 19.8833 15.0732 20.0787 14.588 20.2313L12.9249 18.901C12.7918 18.7946 12.6265 18.7368 12.4561 18.7369H12.4111C12.1401 18.7528 11.8684 18.7528 11.5974 18.7369C11.4118 18.7257 11.2287 18.7839 11.0836 18.9L9.41674 20.2313C8.93162 20.0786 8.46102 19.8832 8.01049 19.6472L7.77049 17.5313C7.75001 17.3467 7.66182 17.1764 7.52299 17.0531C7.32003 16.8727 7.12783 16.6805 6.94737 16.4775C6.82412 16.3387 6.65376 16.2505 6.46924 16.23L4.35237 15.9938C4.1163 15.5433 3.92084 15.0727 3.7683 14.5875L5.09862 12.9244C5.21478 12.7793 5.27291 12.5962 5.26174 12.4106C5.24581 12.1396 5.24581 11.8679 5.26174 11.5969C5.27291 11.4113 5.21478 11.2283 5.09862 11.0831L3.7683 9.4172C3.92095 8.93208 4.11641 8.46147 4.35237 8.01095L6.46831 7.77095C6.65282 7.75047 6.82318 7.66228 6.94643 7.52345C7.12689 7.32049 7.31909 7.12828 7.52205 6.94783C7.66144 6.82449 7.74999 6.65374 7.77049 6.46876L8.00581 4.35282C8.45628 4.11675 8.92689 3.92129 9.41206 3.76876L11.0752 5.09907C11.2203 5.21524 11.4034 5.27337 11.5889 5.2622C11.8599 5.24626 12.1317 5.24626 12.4027 5.2622C12.5882 5.27337 12.7713 5.21524 12.9164 5.09907L14.5824 3.76876C15.0675 3.92141 15.5381 4.11687 15.9886 4.35282L16.2286 6.46876C16.2491 6.65328 16.3373 6.82364 16.4761 6.94689C16.6791 7.12735 16.8713 7.31955 17.0517 7.52251C17.175 7.66134 17.3454 7.74953 17.5299 7.77001L19.6467 8.00533C19.8828 8.4558 20.0783 8.92641 20.2308 9.41158L18.9005 11.0747C18.7832 11.221 18.725 11.406 18.7374 11.5931H18.7402Z"
            />
          </svg>
          <h2>Account Settings</h2>
        </div>
        {/* <div
        className={`flex my-1 w-full p-2 cursor-default  hover:cursor-pointer items-center group ${
          select == "pay" ? "bg-black text-white" : ""
        }`}
        onClick={() => {
          setSelect("pay");
          onStateChange("paycard");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`fill-black ml-2.5 mr-1 ${
            select == "pay" ? "fill-white" : ""
          }`}
        >
          <g clip-path="url(#clip0_1594_13923)">
            <path d="M21.5934 13.2244C21.3144 13.0096 20.9895 12.8622 20.6442 12.7934C20.2988 12.7246 19.9422 12.7364 19.6022 12.8278L15.6797 13.7297C15.7709 13.3442 15.7738 12.943 15.6879 12.5563C15.6021 12.1695 15.4298 11.8072 15.1841 11.4965C14.9383 11.1858 14.6254 10.9347 14.2688 10.7622C13.9122 10.5896 13.5212 10.5 13.125 10.5H8.43188C8.03775 10.499 7.64733 10.5761 7.28319 10.7269C6.91904 10.8777 6.58838 11.0991 6.31031 11.3784L4.18969 13.5H1.5C1.10218 13.5 0.720644 13.658 0.43934 13.9393C0.158035 14.2206 0 14.6022 0 15L0 18.75C0 19.1478 0.158035 19.5294 0.43934 19.8107C0.720644 20.092 1.10218 20.25 1.5 20.25H11.25C11.3113 20.25 11.3724 20.2425 11.4319 20.2275L17.4319 18.7275C17.4701 18.7184 17.5075 18.7058 17.5434 18.69L21.1875 17.1394L21.2288 17.1206C21.579 16.9456 21.8789 16.6843 22.1002 16.3614C22.3215 16.0385 22.457 15.6645 22.4939 15.2747C22.5307 14.8849 22.4678 14.4922 22.3109 14.1335C22.154 13.7748 21.9084 13.4619 21.5972 13.2244H21.5934ZM1.5 15H3.75V18.75H1.5V15ZM20.5716 15.7697L17.0091 17.2866L11.1562 18.75H5.25V14.5603L7.37156 12.4397C7.51035 12.2998 7.67555 12.1889 7.85758 12.1134C8.03961 12.0379 8.23482 11.9994 8.43188 12H13.125C13.4234 12 13.7095 12.1185 13.9205 12.3295C14.1315 12.5405 14.25 12.8266 14.25 13.125C14.25 13.4234 14.1315 13.7095 13.9205 13.9205C13.7095 14.1315 13.4234 14.25 13.125 14.25H10.5C10.3011 14.25 10.1103 14.329 9.96967 14.4697C9.82902 14.6103 9.75 14.8011 9.75 15C9.75 15.1989 9.82902 15.3897 9.96967 15.5303C10.1103 15.671 10.3011 15.75 10.5 15.75H13.5C13.5565 15.7498 13.6127 15.7436 13.6678 15.7313L19.9491 14.2866L19.9781 14.2791C20.1699 14.2258 20.3745 14.2454 20.5527 14.334C20.7309 14.4226 20.87 14.5739 20.9433 14.7589C21.0167 14.9439 21.0189 15.1495 20.9498 15.3361C20.8806 15.5227 20.7449 15.6771 20.5687 15.7697H20.5716ZM15.375 9C15.5603 9.00021 15.7453 8.98516 15.9281 8.955C16.1338 9.56582 16.51 10.105 17.0124 10.5088C17.5147 10.9125 18.1222 11.164 18.763 11.2335C19.4037 11.3029 20.051 11.1875 20.6282 10.9008C21.2054 10.614 21.6884 10.168 22.0202 9.61547C22.352 9.06291 22.5186 8.42691 22.5004 7.78266C22.4821 7.1384 22.2798 6.51284 21.9173 5.97993C21.5548 5.44703 21.0473 5.02905 20.4548 4.77543C19.8623 4.52181 19.2096 4.44315 18.5737 4.54875C18.3757 3.96023 18.0192 3.43775 17.5434 3.03879C17.0676 2.63984 16.4909 2.37988 15.8769 2.28754C15.2629 2.19519 14.6353 2.27403 14.0631 2.51537C13.491 2.75672 12.9966 3.15123 12.6342 3.65547C12.2719 4.15971 12.0556 4.75414 12.0093 5.37335C11.963 5.99256 12.0885 6.61254 12.3718 7.16506C12.6552 7.71759 13.0854 8.18123 13.6153 8.50497C14.1452 8.82872 14.7541 9.00001 15.375 9ZM21 7.875C21 8.24584 20.89 8.60835 20.684 8.9167C20.478 9.22504 20.1851 9.46536 19.8425 9.60728C19.4999 9.74919 19.1229 9.78632 18.7592 9.71397C18.3955 9.64163 18.0614 9.46305 17.7992 9.20083C17.537 8.9386 17.3584 8.60451 17.286 8.2408C17.2137 7.87708 17.2508 7.50008 17.3927 7.15747C17.5346 6.81486 17.775 6.52202 18.0833 6.316C18.3916 6.10997 18.7542 6 19.125 6C19.6223 6 20.0992 6.19755 20.4508 6.54918C20.8025 6.90081 21 7.37772 21 7.875ZM15.375 3.75C15.784 3.75021 16.1818 3.88416 16.5076 4.13145C16.8334 4.37874 17.0695 4.72579 17.1797 5.11969C16.7956 5.38997 16.4721 5.73744 16.2299 6.13989C15.9878 6.54234 15.8323 6.9909 15.7734 7.45688C15.6425 7.48515 15.509 7.49961 15.375 7.5C14.8777 7.5 14.4008 7.30246 14.0492 6.95083C13.6975 6.5992 13.5 6.12228 13.5 5.625C13.5 5.12772 13.6975 4.65081 14.0492 4.29918C14.4008 3.94755 14.8777 3.75 15.375 3.75Z" />
          </g>
          <defs>
            <clipPath id="clip0_1594_13923">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h2>Payment Method</h2>
      </div> */}
        <Link to={"/"} className="flex w-full">
          <div
            className={`my-1 flex w-full p-2 cursor-default  hover:cursor-pointer items-center group ${
              select == "log" ? "bg-black text-white" : ""
            }`}
            onClick={() => {
              setSelect("log");
              onStateChange("log");
              auth.logout();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`fill-black ml-2.5 mr-1 ${
                select == "log" ? "fill-white" : ""
              }`}
            >
              <path d="M11.25 20.25C11.25 20.4489 11.171 20.6397 11.0303 20.7803C10.8897 20.921 10.6989 21 10.5 21H4.5C4.30109 21 4.11032 20.921 3.96967 20.7803C3.82902 20.6397 3.75 20.4489 3.75 20.25V3.75C3.75 3.55109 3.82902 3.36032 3.96967 3.21967C4.11032 3.07902 4.30109 3 4.5 3H10.5C10.6989 3 10.8897 3.07902 11.0303 3.21967C11.171 3.36032 11.25 3.55109 11.25 3.75C11.25 3.94891 11.171 4.13968 11.0303 4.28033C10.8897 4.42098 10.6989 4.5 10.5 4.5H5.25V19.5H10.5C10.6989 19.5 10.8897 19.579 11.0303 19.7197C11.171 19.8603 11.25 20.0511 11.25 20.25ZM21.5306 11.4694L17.7806 7.71937C17.6399 7.57864 17.449 7.49958 17.25 7.49958C17.051 7.49958 16.8601 7.57864 16.7194 7.71937C16.5786 7.86011 16.4996 8.05098 16.4996 8.25C16.4996 8.44902 16.5786 8.63989 16.7194 8.78063L19.1897 11.25H10.5C10.3011 11.25 10.1103 11.329 9.96967 11.4697C9.82902 11.6103 9.75 11.8011 9.75 12C9.75 12.1989 9.82902 12.3897 9.96967 12.5303C10.1103 12.671 10.3011 12.75 10.5 12.75H19.1897L16.7194 15.2194C16.5786 15.3601 16.4996 15.551 16.4996 15.75C16.4996 15.949 16.5786 16.1399 16.7194 16.2806C16.8601 16.4214 17.051 16.5004 17.25 16.5004C17.449 16.5004 17.6399 16.4214 17.7806 16.2806L21.5306 12.5306C21.6004 12.461 21.6557 12.3783 21.6934 12.2872C21.7312 12.1962 21.7506 12.0986 21.7506 12C21.7506 11.9014 21.7312 11.8038 21.6934 11.7128C21.6557 11.6217 21.6004 11.539 21.5306 11.4694Z" />
            </svg>{" "}
            <div>
              <h2 className="block w-full text-left">Logout</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
