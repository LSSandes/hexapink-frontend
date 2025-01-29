import React from "react";
import CustomFileButton from "./CustomFileButton";

export default function HexapinkPaperFourCustomButton() {
  const handleCustomFileButton = () => {
    alert("My Custom File Buttton clicked");
  };
  return (
    <CustomFileButton onClick={handleCustomFileButton}>
      <span>Make My Custom File</span>
    </CustomFileButton>
  );
}
