import { useState } from "react";

const ManageSkills = () => {
  const [skills, setSkills] = useState([{ title: "", icon: null }]);

  const handleAddSkill = () => {
    setSkills([...skills, { title: "", icon: null }]);
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleIconUpload = (index, file) => {
    const updatedSkills = [...skills];
    updatedSkills[index].icon = URL.createObjectURL(file);
    setSkills(updatedSkills);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Manage Skills
      </h2>

      {skills.map((skill, index) => (
        <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Skill Title
            </label>
            <input
              type="text"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={skill.title}
              onChange={(e) =>
                handleSkillChange(index, "title", e.target.value)
              }
              placeholder="Enter Skill Title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Upload Icon
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleIconUpload(index, e.target.files[0])}
              className="block text-white"
            />
            {skill.icon && (
              <img
                src={skill.icon}
                alt="Skill Icon"
                className="w-16 h-16 mt-4"
              />
            )}
          </div>

          {skills.length > 1 && (
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => handleRemoveSkill(index)}
            >
              Remove Skill
            </button>
          )}
        </div>
      ))}

      <div className="text-center">
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={handleAddSkill}
        >
          Add More Skills
        </button>
      </div>
    </div>
  );
};

export default ManageSkills;
