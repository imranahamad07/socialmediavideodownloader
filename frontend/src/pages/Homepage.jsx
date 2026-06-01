import { useEffect } from "react";
import Inputbox from "../Components/Inputbox";
import Sharing from "../Components/Sharing";
import { GiCheckMark } from "react-icons/gi";

export default function Homepage() {
    useEffect(() => {
        document.title = "instagram reel downloader | Homepage"
    })
    return <>
        <Inputbox />

        {/* <div className={`flex w-full h-auto justify-center flex-col items-center mt-6`}>
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
        </div> */}

        <div className={`flex w-full h-auto justify-center items-center`}>
            <div className="w-[95%] rounded lg:w-[50%] md:w-[60%] h-50 p-2 bg-[#E2DEFF]">
                <h1 className="text-center text-1xl font-semibold">What's special about our service?</h1>
                <div className="flex flex-col mt-2  font-serif">
                    <p className="flex gap-2 items-center">
                        <span className="text-purple-500"><GiCheckMark /></span>
                        <span>Optimized for high-speed Reel retrieval.</span>
                    </p>
                    <p className="flex gap-2 items-center">
                        <span className="text-purple-500"><GiCheckMark /></span>
                        <span>Downloads maintain original reel quality.</span>
                    </p>
                    <p className="flex gap-2 items-center">
                        <span className="text-purple-500"><GiCheckMark /></span>
                        <span>A pure, clutter-free text-based design.</span>
                    </p>
                    <p className="flex gap-2 items-center">
                        <span className="text-purple-500"><GiCheckMark /></span>
                        <span>Your data and downloads are handled securely.</span>
                    </p>
                    <p className="flex gap-2 items-center">
                        <span className="text-purple-500"><GiCheckMark /></span>
                        <span>Get a clean, unbranded video file.</span>
                    </p>
                </div>
            </div>
        </div>

        <Sharing />
    </>
}