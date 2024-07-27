import { Input } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const FileUploder: React.FC = () => {
  const [file, setfile] = useState<File | null>(null);
  const [fileUrl, setfileUrl] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile) {
      const createUlr = URL.createObjectURL(selectedFile);
      setfile(selectedFile);
      setfileUrl(createUlr);
    }
  };

  return (
    <>
      <Box>
        <Box id="fileupload" className="w-full pb-6  border border-red-600">
          <Input className="self-center" type="file" onChange={handleFileUpload} />
        </Box>
        <Box id="playfile">
          {file && fileUrl && file.type.startsWith("video") ? (
            <Box>
              <video controls>
                <source src={fileUrl} />
              </video>
            </Box>
          ) : (
            <Box>
              {fileUrl !== null ? (
                <audio controls>
                  <source src={fileUrl} />
                </audio>
              ) : null}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default FileUploder;
