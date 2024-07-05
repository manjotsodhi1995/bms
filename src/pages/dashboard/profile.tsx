import { CardTitle, FormCard } from "@/components/dashboard/CardForm";
import { Avatar } from "@mui/material";

const ProfilePage = () => {
  const handleSaveChanges = () => {};
  return (
    <div className="flex flex-col gap-8 mt-6">
      <h1 className="text-3xl font-medium">Edit your profile</h1>

      <p>
        <Avatar sx={{ width: 56, height: 56 }} />
        Add your profile photo
      </p>

      <FormCard onSaveChanges={handleSaveChanges} className="gap-4">
        <CardTitle className="font-medium mt-4">Add your details</CardTitle>
        <input
          placeholder="Username"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />

        <input
          placeholder="First Name"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
        <input
          placeholder="Last Name"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
        <input
          placeholder="Email Address"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
        <input
          placeholder="Mobile Number"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
        <input
          placeholder="Date of Birth"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
        <label htmlFor="male">
          <input
            id="male"
            value="Male"
            type="radio"
            className="size-4 mr-2 accent-black"
          />
          Male
        </label>

        <label htmlFor="female">
          <input
            id="female"
            value="Female"
            type="radio"
            className="size-4 mr-2 accent-black"
          />
          Female
        </label>

        <CardTitle className="font-medium">Add your socials</CardTitle>

        <input
          placeholder="Instagram"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
        <input
          placeholder="Twitter"
          className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
        <input
          placeholder="Facebook"
          className="mb-12 w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
        />
      </FormCard>
    </div>
  );
};

export default ProfilePage;
