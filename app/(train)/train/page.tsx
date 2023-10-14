import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";

import MyForm1 from "@/components/MLtest";
import MyForm2 from "@/components/MLtest2";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col p-32 gap-24">
          {/* <div className="text-6xl font-serif ">New Project</div> */}
          <div className="flex flex-col gap-32 mx-auto">
          <div className="flex flex-row gap-32 mx-auto">
          <div className="flex-1 p-4">
                <MyForm1 />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-12">
                  <div className="text-4xl font-serif">
                  Emergency Announcement System
                  </div>
                  <div className="text">
                    Start by uploading your train schedule in CSV format,
                    <br />
                    which includes information such as train numbers, departure
                    and arrival times, stations, and other relevant details. Our
                    system parses the CSV file, extracting the essential
                    information required to generate the video.
                    <br />
                    Once the data is processed, the system generates visually
                    appealing videos that include animations, text overlays, and
                    voiceovers in regional languages. and Multilingual Voiceovers
                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex flex-row gap-32 mx-auto">
              <div className="flex-1">
                <div className="flex flex-col gap-12">
                  <div className="text-4xl font-serif">
                    Multilingual Train Schedule Generator
                  </div>
                  <div className="text">
                    Start by uploading your train schedule in CSV format,
                    <br />
                    which includes information such as train numbers, departure
                    and arrival times, stations, and other relevant details. Our
                    system parses the CSV file, extracting the essential
                    information required to generate the video.
                    <br />
                    Once the data is processed, the system generates visually
                    appealing videos that include animations, text overlays, and
                    voiceovers in regional languages. and Multilingual Voiceovers
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4">
                <MyForm2 />
              </div>
            </div>
            <div>{/* MyForm */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
