import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { FiUploadCloud } from "react-icons/fi";

const Upload = ({
  label,
  name,
  register,
  errors,
  setValue,
  video= false,
  viewData = null,
  editData = null,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  );

  return (
    <>
      <div>
        <label>{label}</label>
        <div>
            {
                previewSource ? (
                    // Agar user ne file upload kar di → previewSource me data aa jayega → preview dikhao
                    <div>
                        {
                            !video ? (
                                <img src={previewSource} alt="Preview" className="h-full w-full rounded-md object-cover"/>
                            ):(
                                <ReactPlayer src={previewSource} />
                            )
                        }
                    </div>
                ):
                // Agar user ne file upload kar di → previewSource me data aa jayega → preview dikhao
                (
                    <div>
                        <div>
                        Drag and drop an image, or Browse 
                        Max 6MB each 
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    </>
  );
};

export default Upload;
