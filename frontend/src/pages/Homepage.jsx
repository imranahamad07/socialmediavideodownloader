import { useEffect } from "react";
import Inputbox from "../Components/Inputbox";

export default function Homepage() {
    useEffect(() => {
        document.title = "instagram reel downloader | Homepage"
    })
    return <>
        <Inputbox />
        
        <div className={`flex w-full h-auto justify-center flex-col items-center mt-6`}>
            <div className={`w-full lg:w-[50%] md:w-[70%] lg:text-[15px] md:text-[14px] text-sm p-3 bg-[#f8f9fa]`}>
               <h1 className="font-bold">How to Use (simplified)</h1>
               <p className={`font-serif`}>1. Copy the Reel's unique link from the instagram app.</p>
               <p className="font-serif">2. Paste the copied link into the input field above.</p>
               <p className="font-serif">3. click the <span className="text-blue-800 font-semibold">Fetch</span> and your video will we processed.</p>
               <p className="font-serif">4. click the video : and press the download button</p>
            </div>

            <div className="w-full lg:w-[50%] md:w-[70%] p-3 lg:text-[15px] md:text-[14px] text-sm bg-[#f8f9fa]">
                <h1 className="font-bold">Features & Benifits</h1>
                <p><span className="font-semibold">Fast Download :</span> <span className="font-serif text-gray-800">Optimized for high-speed Reel retrieval.</span></p>
                <p><span className="font-semibold">High Quality :</span> <span className="font-serif text-gray-800">Downloads maintain original reel quality.</span></p>
                <p><span className="font-semibold">Simple & Clean Interface :</span> <span className="font-serif text-gray-800">A pure, clutter-free text-based design.</span></p>
                <p><span className="font-semibold">Private & Secure :</span> <span className="font-serif text-gray-800">your data and downloads are handled securely.</span></p>
                <p><span className="font-semibold">No Watermark :</span> <span className="font-serif text-gray-800">Get a clean, unbranded video file.</span></p>
            </div>
        </div>
    </>
}