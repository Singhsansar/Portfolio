import { useRef, useState } from "react";
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
      <div className="max-w-6xl mx-auto h-full">
        <form
          ref={editprofileform}
          className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-20 rounded-lg shadow-md w-[100%]"
        >
          <Toaster />
          <h1 className="text-2xl text-white font-semibold mb-6 text-center">
            Edit Profile
          </h1>

          <div className="flex flex-col lg:flex-row items-start py-10 gap-8 lg:gap-10">
            {/* Profile Image Upload Section */}
            <div className="flex flex-col items-center mb-5">
              <label
                htmlFor="uploadImg"
                id="profileImgLabel"
                className="relative block w-48 h-48 bg-gray-300 rounded-full overflow-hidden border border-gray-400"
              >
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100">
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

            {/* Profile Details Form */}
            <div className="w-full">
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
              <button className="btn-dark w-auto px-10 mt-6" type="submit">
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
