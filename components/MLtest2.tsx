"use client";

import { useState } from "react";

import axios from "axios";
// import VideoOverlay from "./overlay";
// const fs = require('fs');

// import tr_schedule from "../tr_schedule.csv";
interface VideoOverlayProps {
    videoSource: string | null;
  }
  
  const VideoOverlay: React.FC<VideoOverlayProps> = ({ videoSource }) => {
    if (!videoSource) {
      return null; // If no video source is provided, don't render the component
    }
  
    return (
      <div className="video-overlay">
        <video autoPlay controls>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };



const MyForm2:React.FC=()=>{

    const[text,setText]=useState<string>("");
    const[image,setImage]=useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [genderr, setGender] = useState<string>("M"); // Default to Male
    const [language, setLanguage] = useState<string>("en"); // Default to English
    const [isLoading, setIsLoading] = useState(false);

    const [showVideoOverlay, setShowVideoOverlay] = useState(false);
    const [videoSource, setVideoSource] = useState<string | null>(null);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleGenderToggle = (selectedGender: string) => {
      setGender(selectedGender);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setLanguage(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          setImage(file);
          const imageUrl = URL.createObjectURL(file);
          setImageUrl(imageUrl);
        }
    };

    const handleSubmit = async () => {
      try {
        const language_code = language
        const gender = genderr;

        setIsLoading(true);

        setTimeout(()=>{
            switch (language_code) {
                case 'en': // Hindi
                  setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/en_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/en_f.mp4");
                  break;
                case 'hi': // English
                  setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/hi_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/hi_f.mp4");
                  break;
                case 'bn':
                  setShowVideoOverlay(true); // Bengali
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/bn_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/bn_f.mp4");
                  break;
                case 'ta': // Indian Tamil
                 setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/ta_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/ta_f.mp4");
                  break;
                case 'te': // Telegu
                setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/te_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/te_f.mp4");
                  break;
                case 'mr': // Marathi
                setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/mr_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/mr_f.mp4");
                  break;
                case 'kn': // Kannada
                setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/kn_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/kn_f.mp4");
                  break;
                case 'gu': // Gujarati
                setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/gu_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/gu_f.mp4");
                  break;
                case 'ml': // Malayalam
                setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/ml_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/ml_f.mp4");
                  break;
                case 'ur': // Indian Urdu
                setShowVideoOverlay(true);
                  gender === 'M' ? setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/ur_m.mp4") : setVideoSource("https://virdb-files.s3.ap-south-1.amazonaws.com/output_1/ur_f.mp4");
                  break;
                default:
                  // Handle any other language or default case
                  break;
              }
              setShowVideoOverlay(true); // Display video overlay after the delay
              setIsLoading(false);
        },5000)
        

      } catch (error) {
        console.error(error);
      }
    };
    
    return (
      <div className="max-w-lg mx-auto p-4 space-y-4 gradient-bg-welcome rounded-xl text-white">
        <h1 className="text-2xl font-bold">Image Project</h1>
        <p>Teach based on images, from files or your webcam</p>
        <div>
          {/* <label htmlFor="text-input" className="block text-sm font-medium text-gray-700">
            Enter Text:
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={handleTextChange}
            rows={4}
            className="w-full p-2 border rounded text-black"
          /> */}
        </div>
        <div>
          <label htmlFor="image-input" className="block text-md text-white font-bold font-medium text-gray-700">
            Upload CSV File:
          </label>
          <input
            type="file"
            id="image-input"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
        <p className="text-md  font-medium text-white">Select Anchor:</p>
        <div className="flex flex-row gap-8">
          <button
            onClick={() => handleGenderToggle("M")}
            className={`flex-1 p-2 border rounded text-center ${genderr === "M" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          >
            Male
          </button>
          <button
            onClick={() => handleGenderToggle("F")}
            className={`flex-1 p-2 border rounded text-center ${genderr === "F" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          >
            Female
          </button>
        </div>
      </div>
        <div>
          <label htmlFor="language-select" className="block text-md font-medium text-white ">
            Select Language:
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="w-full p-2 border rounded text-black"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="ta">Indian Tamil</option>
            <option value="te">Telegu</option>
            <option value="mr">Marathi</option>
            <option value="kn">kannada</option>
            <option value="gu">Gujarati</option>
            <option value="ml">Malayalam</option>
            <option value="ur">Indian Urdu</option>
            {/* Add more language options as needed */}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        {isLoading ? (
        <div className="text-white font-bold items-center">Loading... Please wait</div>
      ) : (
        showVideoOverlay && <VideoOverlay videoSource={videoSource} />
      )}
      </div>
    );
    
};

export default MyForm2;