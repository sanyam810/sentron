"use client";

import { useState } from "react";

import axios from "axios";

// const fs = require('fs');

// import tr_schedule from "../tr_schedule.csv";


const MyForm1:React.FC=()=>{

    const[text,setText]=useState<string>("");
    const[image,setImage]=useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [genderr, setGender] = useState<string>("M"); // Default to Male
    const [language, setLanguage] = useState<string>("en"); // Default to English

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


        const announcement = text;
    
        const language_code = language
        const gender = genderr;
        const api_did = 'BASIC c2VudHJvbmtleTFAZ21haWwuY29t:J03qop7yw6YzXHa5EhU34';
    
        let voice_name = '';
    
        switch (language_code) {
          case 'hi': // Hindi
            voice_name = gender === 'M' ? 'hi-IN-MadhurNeural' : 'hi-IN-SwaraNeural';
            break;
          case 'en': // English
            voice_name = gender === 'M' ? 'en-IN-PrabhatNeural' : 'en-IN-NeerjaNeural';
            break;
          case 'bn': // Bengali
            voice_name = gender === 'M' ? 'bn-IN-BashkarNeural' : 'bn-IN-TanishaaNeural';
            break;
          case 'ta': // Indian Tamil
            voice_name = gender === 'M' ? 'ta-IN-ValluvarNeural' : 'ta-IN-PallaviNeural';
            break;
          case 'te': // Telegu
            voice_name = gender === 'M' ? 'te-IN-MohanNeural' : 'te-IN-ShrutiNeural';
            break;
          case 'mr': // Marathi
            voice_name = gender === 'M' ? 'mr-IN-ManoharNeural' : 'mr-IN-AarohiNeural';
            break;
          case 'kn': // Kannada
            voice_name = gender === 'M' ? 'kn-IN-GaganNeural' : 'kn-IN-SapnaNeural';
            break;
          case 'gu': // Gujarati
            voice_name = gender === 'M' ? 'gu-IN-NiranjanNeural' : 'gu-IN-DhwaniNeural';
            break;
          case 'ml': // Malayalam
            voice_name = gender === 'M' ? 'ml-IN-MidhunNeural' : 'ml-IN-SobhanaNeural';
            break;
          case 'ur': // Indian Urdu
            voice_name = gender === 'M' ? 'ur-IN-SalmanNeural' : 'ur-IN-GulNeural';
            break;
          default:
            // Handle any other language or default case
            voice_name = '';
            break;
        }
    
        const headers = {
          'Ocp-Apim-Subscription-Key': 'e53da45bded141568b4413f4a0751037',
          'Ocp-Apim-Subscription-Region': 'centralindia',
          'Content-type': 'application/json',
          // 'X-ClientTraceId': uuidv4(), // You may need to import or include the UUID library.
        };
    
        const constructed_url = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=${language}`
        // const params = {
        //   'api-version': '3.0',
        //   'from': 'en',
        //   'to': [language_code],
        // };
    
        const body = [{
          'text': text,
        }];
    
        const request = await fetch(constructed_url, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
          // params,
        });
        
        await new Promise((resolve) => setTimeout(resolve, 100));

        const responseData = await request.json();
        const data = JSON.stringify(responseData, null, 2);
        const translated_announcement = responseData[0].translations[0].text;
    
        const url = 'https://api.d-id.com/talks';
        const payload = {
          script: {
            type: 'text',
            input: translated_announcement,
            provider: {
              type: 'microsoft',
              voice_id: voice_name,
            },
          },
          config: {
            fluent: 'false',
            pad_audio: '0.0',
            stitch: true,
          },
          source_url:
            'https://img.etimg.com/thumb/width-1200,height-900,imgsize-1041812,resizemode-75,msid-101659464/news/new-updates/india-welcomes-is-first-regional-ai-news-anchor-lisa.jpg',
        };
    
        const postHeaders = {
          'accept': 'application/json',
          'content-type': 'application/json',
          'Authorization': api_did,
        };
    
        const response = await fetch(url, {
          method: 'POST',
          headers: postHeaders,
          body: JSON.stringify(payload),
        });
        let vid_id;
        if (response.status === 201) {
          const responseJson = await response.json();
          vid_id = responseJson.id;
          if (vid_id) {
            console.log(`Video ID: ${vid_id}`);
          } else {
            console.log('Video ID not found in the response.');
          }
        } else {
          console.log(`Request failed with status code: ${response.status}`);
        }
    
      

        const get_url = `https://api.d-id.com/talks/${vid_id}`;
        const getResponse = await fetch(get_url, { headers: postHeaders });

        await new Promise((resolve) => setTimeout(resolve, 100));

        const getResponseData = await getResponse.json();

        

        const result_url = getResponseData.result_url;
    
        if (result_url) {
          console.log(`Result URL: ${result_url}`);
        } else {
          console.log('Failed to fetch the result URL.');
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    return (
      <div className="max-w-lg mx-auto p-4 space-y-4 gradient-bg-welcome rounded-xl text-white">
        <h1 className="text-2xl font-bold">Image Project</h1>
        <p>Teach based on images, from files or your webcam</p>
        <div>
          <label htmlFor="text-input" className="block text-md font-medium text-white">
            Enter Text:
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={handleTextChange}
            rows={4}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div>
          {/* <label htmlFor="image-input" className="block text-sm font-medium text-gray-700">
            Upload Image:
          </label> */}
          {/* <input
            type="file"
            id="image-input"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}
        </div>
        <div className="mb-4">
        <p className="text-sm font-medium text-white">Select Gender:</p>
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
          <label htmlFor="language-select" className="block text-sm font-medium text-white">
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
      </div>
    );
    
};

export default MyForm1;