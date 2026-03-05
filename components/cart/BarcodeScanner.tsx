"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState<string>("");
  const [scannedCode, setScannedCode] = useState<string>("");

  //catch the user's interaction with keyboard
  useEffect(() => {
    const handleBarcodeInput = (event: KeyboardEvent) => {
      const { key } = event;
      if (key === "Enter") {
        setBarcode("");
        setScannedCode(barcode);
      } else if (key !== "Backspace") {
        setBarcode((prev) => prev + key);
      }
    };
    window.addEventListener("keydown", handleBarcodeInput);
    return () => {
      window.removeEventListener("keydown", handleBarcodeInput);
    };
  }, [barcode]);
  return (
    <div className="bg-white rounded-lg">
      <Input
        onChange={() => {}}
        id="barcode"
        type="text"
        value={scannedCode}
        placeholder="Code"
      />
    </div>
  );
};

export default BarcodeScanner;
