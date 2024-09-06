import { useState } from "react";

const EditProjects = () => {
  const [projects, setProjects] = useState([
    {
      title: "",
      skills: "",
      shortDescription: "",
      longDescription: "",
      images: [],
      startDate: "",
      endDate: "",
      githubLink: "",
      deployedLink: "",
    },
  ]);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        skills: "",
        shortDescription: "",
        longDescription: "",
        images: [],
        startDate: "",
        endDate: "",
        githubLink: "",
        deployedLink: "",
      },
    ]);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleImageUpload = (index, files) => {
    const updatedProjects = [...projects];
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    updatedProjects[index].images = [
      ...updatedProjects[index].images,
      ...newImages,
    ];
    setProjects(updatedProjects);
  };

  const handleRemoveImage = (index, imageIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[index].images = updatedProjects[index].images.filter(
      (_, i) => i !== imageIndex
    );
    setProjects(updatedProjects);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Project Management
      </h2>

      {projects.map((project, index) => (
        <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Project Title
            </label>
            <input
              type="text"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={project.title}
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
              placeholder="Enter Project Title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Skills Used
            </label>
            <input
              type="text"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={project.skills}
              onChange={(e) =>
                handleProjectChange(index, "skills", e.target.value)
              }
              placeholder="Enter Skills Used"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Short Description
            </label>
            <textarea
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white resize-none"
              value={project.shortDescription}
              onChange={(e) =>
                handleProjectChange(index, "shortDescription", e.target.value)
              }
              placeholder="Enter Short Description"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Long Description
            </label>
            <textarea
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white resize-none"
              value={project.longDescription}
              onChange={(e) =>
                handleProjectChange(index, "longDescription", e.target.value)
              }
              placeholder="Enter Long Description"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Upload Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleImageUpload(index, e.target.files)}
              className="block text-white"
            />
            <div className="flex flex-wrap mt-4">
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex} className="relative mr-4 mb-4">
                  <image
                    src={image}
                    alt={`Project Image ${imgIndex}`}
                    className="w-32 h-32 object-cover border border-gray-600 rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 rounded-full"
                    onClick={() => handleRemoveImage(index, imgIndex)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Start Date
            </label>
            <input
              type="date"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={project.startDate}
              onChange={(e) =>
                handleProjectChange(index, "startDate", e.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              End Date
            </label>
            <input
              type="date"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={project.endDate}
              onChange={(e) =>
                handleProjectChange(index, "endDate", e.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              GitHub Link
            </label>
            <input
              type="url"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={project.githubLink}
              onChange={(e) =>
                handleProjectChange(index, "githubLink", e.target.value)
              }
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Deployed Link
            </label>
            <input
              type="url"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={project.deployedLink}
              onChange={(e) =>
                handleProjectChange(index, "deployedLink", e.target.value)
              }
              placeholder="https://your-deployed-site.com"
            />
          </div>

          {projects.length > 1 && (
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => handleRemoveProject(index)}
            >
              Remove Project
            </button>
          )}
        </div>
      ))}

      <div className="text-center">
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={handleAddProject}
        >
          Add More Projects
        </button>
      </div>
    </div>
  );
};

export default EditProjects;
