import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress             
        sx={{
          color: '#293264'
        }} 
      />
    </div>
  );
}