export default function Sharing() {
    return <>

        <div className="w-full flex justify-center p-4 items-center h-auto mt-3">
            <div className={`w-full lg:w-[50%] md:w-[60%] flex flex-col gap-1 justify-center items-center `}>
                <h1 className=" text-2xl font-serif text-green-800">Sharing is Caring <i className="text-gray-500 ri-share-forward-line"></i></h1>
                <p className="text-gray-800 font-serif">Share Instagram Reels Downloader with your friends</p>

                <div className={`flex gap-5 text-xl lg:text-3xl md:text-xl `}>
                    <span className="cursor-pointer hover:bg-gray-200 px-1 rounded-xl transition-all"><i className="ri-whatsapp-line"></i></span>
                    <span className="cursor-pointer hover:bg-gray-200 px-1 rounded-xl transition-all"><i className="ri-twitter-x-line"></i></span>
                    <span className="cursor-pointer hover:bg-gray-200 px-1 rounded-xl transition-all"><i className="ri-instagram-line"></i></span>
                    <span className="cursor-pointer hover:bg-gray-200 px-1 rounded-xl transition-all"><i className="ri-meta-line"></i></span>
                    <span className="cursor-pointer hover:bg-gray-200 px-1 rounded-xl transition-all"><i className="ri-telegram-line"></i></span>
                </div>
            </div>
        </div>
    
    </>
}