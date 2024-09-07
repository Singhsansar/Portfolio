import { useRef } from "react";
import AnimationWrapper from "../common/animationWrapper";
import { Toaster } from "react-hot-toast";
import InputBox from "../common/input.component";

const EditProfilePage = () => {
  const bioLimit = 150;
  const profileImageEle = useRef();
  const editprofileform = useRef();

  const social_links = {
    youtube: "",
    facebook: "",
    twitter: "",
    github: "",
    instagram: "",
    website: "",
  };

  return (
    <AnimationWrapper className="mt-10">
      <div className="max-w-6xl my-10 mx-auto h-full">
        <form
          ref={editprofileform}
          className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-10 rounded-lg shadow-md max-md:w-full"
        >
          <Toaster />
          <h1 className="text-2xl text-white font-semibold mb-6 text-center">
            Edit Profile
          </h1>

          <div className="flex flex-col w-full  items-center py-10 gap-8 lg:gap-10">
            <div className="flex flex-col items-center justify-center mb-5">
              <label
                htmlFor="uploadImg"
                id="profileImgLabel"
                className="relative block w-48 h-48 bg-gray-300 rounded-full overflow-hidden border border-gray-400"
              >
                <div className="w-full h-full  top-0 left-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100">
                  Upload Image
                </div>
                <img
                  src=""
                  ref={profileImageEle}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </label>
              <input
                type="file"
                id="uploadImg"
                accept=".png, .jpg, .jpeg"
                hidden
              />
            </div>

            <div className="w-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputBox
                  name="fullname"
                  type="text"
                  icon="fi-rr-user"
                  placeholder="Full Name"
                />
                <InputBox
                  name="Email"
                  type="email"
                  icon="fi-rr-envelope"
                  placeholder="Email"
                />
                <InputBox
                  name="designation1"
                  type="text"
                  icon="fi-rr-briefcase"
                  placeholder="Primary Designation"
                />
                <InputBox
                  name="designation2"
                  type="text"
                  icon="fi-rr-briefcase"
                  placeholder="Secondary Designation"
                />
                <InputBox
                  name="dob"
                  type="date"
                  icon="fi-rr-calendar"
                  placeholder="Date of Birth"
                />
              </div>

              {/* Resume Upload Section */}
              <div className="mt-5">
                <label htmlFor="resume" className="block mb-2 text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf"
                  className="input-box"
                />
              </div>

              {/* Bio Text Area */}
              <textarea
                name="bio"
                maxLength={bioLimit}
                className="input-box h-40 resize-none mt-5 pl-5"
                placeholder="Bio"
              ></textarea>
              <p className="text-right text-gray-600 mt-1">
                {bioLimit} Characters Left
              </p>

              {/* Social Links Section */}
              <p className="my-6 text-gray-600">
                Add your Social Handles Below
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                {Object.keys(social_links).map((key, i) => (
                  <InputBox
                    key={i}
                    name={key}
                    type="text"
                    placeholder={`https://${key}.com`}
                    icon={`fi ${
                      key !== "website" ? `fi-brands-${key}` : "fi-rr-globe"
                    } text-2xl`}
                  />
                ))}
              </div>

              {/* Submit Button */}
              <button
                className="bg-black text-white hover:text-black hover:bg-white rounded-md max-w-[20%] px-10 py-3  mt-2"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </AnimationWrapper>
  );
};

export default EditProfilePage;
