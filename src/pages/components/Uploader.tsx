import { ChangeEvent, useState } from "react";

type UploaderProps = {
  title: string;
  onUpload?: () => void;
};

export const Uploader = ({ title, onUpload }: UploaderProps) => {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    onUpload;
    if (!file) {
      return;
    }
  };

  return (
    <div className="uploader">
      {title ? <p>{title}</p> : null}
      <input type="file" onChange={handleFileChange} />
      <button className="uploader_btn btn btn_primary" onClick={handleUploadClick} >Upload</button>
    </div>
  );
};
