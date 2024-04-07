"use client";

import ImageUploader from "@/components/image-uploder";
import { useState } from "react";

export default function Home() {
    const [image, setImage] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ImageUploader
        label="Upload Image"
        value={image}
        onChange={(value) => setImage(value)}
      />
    </main>
  );
}
