import { useState } from "react";

const EditFeatures = () => {
  const [features, setFeatures] = useState([
    { title: "", description: "", icon: null },
  ]);

  const handleAddFeature = () => {
    setFeatures([...features, { title: "", description: "", icon: null }]);
  };

  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][field] = value;
    setFeatures(updatedFeatures);
  };

  const handleIconUpload = (index, file) => {
    const updatedFeatures = [...features];
    updatedFeatures[index].icon = URL.createObjectURL(file);
    setFeatures(updatedFeatures);
  };

  const handleRemoveFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Feature Management
      </h2>

      {features.map((feature, index) => (
        <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Feature Title
            </label>
            <input
              type="text"
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white"
              value={feature.title}
              onChange={(e) =>
                handleFeatureChange(index, "title", e.target.value)
              }
              placeholder="Enter Feature Title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-medium mb-2">
              Description
            </label>
            <textarea
              className="input-box w-full p-3 border rounded-md border-gray-700 bg-gray-900 text-white resize-none"
              value={feature.description}
              onChange={(e) =>
                handleFeatureChange(index, "description", e.target.value)
              }
              placeholder="Enter Description"
            ></textarea>
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
            {feature.icon && (
              <img
                src={feature.icon}
                alt="Uploaded Icon"
                className="w-16 h-16 mt-4 border border-gray-600 rounded-md"
              />
            )}
          </div>

          {features.length > 1 && (
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => handleRemoveFeature(index)}
            >
              Remove Feature
            </button>
          )}
        </div>
      ))}

      <div className="text-center">
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={handleAddFeature}
        >
          Add More Features
        </button>
      </div>
    </div>
  );
};

export default EditFeatures;
