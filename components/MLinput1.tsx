"use client";

import { useState } from "react";

import axios from "axios";

// const fs = require('fs');

const MyForm:React.FC=()=>{

    const[text,setText]=useState<string>();
    const[image,setImage]=useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
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
        
        let payload = {
            "script" : {
                "type" : "text",
                "input" : `${text}`
            },
            "source_url" : "https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202011/Nabila-Jamal_1200-1200x768.jpg?VersionId=j7luI6neaIERTRaYEFVFnQQI3Lkg4.Xm"
        }
        
      
        try{
            const response=await axios.post('https://api.d-id.com/talks',JSON.stringify(payload),{
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              Authorization: "Basic dG9vbXVjaHZpYnJhbml1bUBnbWFpbC5jb20:56aViahWh8LglJ_y4dcvO"
                    
            },
            });

            if (response.status === 201) {
                    let vid_id = response.data.id;
                    if (vid_id) {
                      console.log(`Video ID: ${vid_id}`);
                      try{
                        const response2=await axios.get(`https://api.d-id.com/talks/${vid_id}`,{
                            headers: {
                              accept: "application/json",
                              "content-type": "application/json",
                              Authorization: "Basic dG9vbXVjaHZpYnJhbml1bUBnbWFpbC5jb20:56aViahWh8LglJ_y4dcvO"
                            },
                        }); 

                            const data=response2.data;
                            console.log("data :")
                            console.log(data);
                            console.log("data.result_url :")
                            const ans=data.result_url;
                            console.log("error?");
                            console.log(ans);

                            if(data){
                                console.log("ans :")
                                try{
                                    const response3=await axios.get(ans);
                                    console.log("response3 :")
                                    if(response3.status === 200){
                                        console.log("response3 :")
                                        // const localFilePath = "downloaded_video.mp4";
                                        // fs.writeFileSync(localFilePath, response3.data, 'binary');
                                        // console.log(`File downloaded and saved as ${localFilePath}`);
                                        const localFilePath = "downloaded_video.mp4";
                                        const blob = new Blob([response.data]);
                                        const url = window.URL.createObjectURL(blob);
    
                                        const a = document.createElement('a');
                                        a.href = url;
                                        a.download = localFilePath;
                                        document.body.appendChild(a);
                                        a.click();
                                        window.URL.revokeObjectURL(url);
    
                                        console.log(`File downloaded and saved as ${localFilePath}`);
                                    }
                                    else{
                                        console.log(`Failed to download the file. Status code: ${response.status}`);
                                    }
                                }catch(error){
                                    console.error("Error:", error);
                                }
                            }

                            
                        
                        
                        
                      }
                      catch (error){
                            console.error("Error:", error);
                      }
                        
                    } else {
                      console.log('Video ID not found in the response.');
                    }
                } 
            else {
                console.log(`Request failed with status code: ${response.status}`);
            }
        }
        catch (error) {
            console.error("Error:", error);
        }

        
    };
    
    return(
        <div className="max-w-lg mx-auto p-4 space-y-4 gradient-bg-welcome rounded-xl text-white">
            <h1 className="text-2xl font-bold">Image Project</h1>
            <p>Teach based on images, from files or your webcam</p>
      <div>
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-700">
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
        <label htmlFor="image-input" className="block text-sm font-medium text-gray-700">
          Upload Image:
        </label>
        <input
          type="file"
          id="image-input"
          accept=".png, .jpg, .jpeg"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />
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

export default MyForm;