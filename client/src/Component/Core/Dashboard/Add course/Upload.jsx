import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { FiUploadCloud } from "react-icons/fi";
import { useDropzone } from "react-dropzone";

const Upload = ({
  label,
  name,
  register,
  errors,
  setValue,
  video = false,
  viewData = null,
  editData = null,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  );

  // File Preview (image → Base64 | video → Object URL)
  const previewFile = (file) => {
    if (video) {
      setPreviewSource(URL.createObjectURL(file));
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => setPreviewSource(reader.result);
    }
  };

  // Dropzone Config
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: video ? { "video/*": ["mp4"] } : { "image/*": [".jpeg", ".jpg", ".png"] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      console.log("DROPZONE FILES:", acceptedFiles);
      const file = acceptedFiles[0];
      if (file) {
        previewFile(file);
        setSelectedFile(file);
      }
    },
    noClick: true,
  });

  // Register field
  useEffect(() => {
    register(name, { required: true });
  }, [register, name]);

  // Add file to form values
  useEffect(() => {
    setValue(name, selectedFile);
  }, [selectedFile, setValue]);

  return (
    <div>
      <label>{label}</label>

      <div
        {...getRootProps()}
        className="min-h-[250px] cursor-pointer rounded-md border-2 border-dotted border-richblack-500 relative"
      >
        <input {...getInputProps()} />

        {previewSource ? (
          // ---------------------- PREVIEW MODE ----------------------
          <div onClick={open} className="h-full w-full">
            {!video ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            ) : (
              <ReactPlayer
                url={previewSource}
                controls
                muted
                width="100%"
                height="100%"
              />
            )}

            <p className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded text-xs">
              Click to change
            </p>
          </div>
        ) : (
          // ---------------------- UPLOAD MODE ----------------------
          <div className="flex flex-col items-center p-6 text-center">
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>

            <p className="mt-2">
              Drag & drop a {video ? "video" : "image"}, or{" "}
              <span className="font-semibold text-yellow-50" onClick={open}>
                Browse
              </span>
            </p>

            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">This field is required</p>
      )}
    </div>
  );
};

export default Upload;
