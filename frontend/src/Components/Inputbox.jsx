import { useState } from "react"
import axios from 'axios';

export default function Inputbox() {

    const [reelUrl, setReelUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const [reel, setReel] = useState(null);
    const [error, setError] = useState(null);

    const pasteHandler = async () => {
        const text = await navigator.clipboard.readText();
        setReelUrl(text);
    }

    const urlHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/download`, {
                url: reelUrl
            });
            setReel(res.data.videoUrl);
            setReelUrl("");

        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || "something went wrong !")
        } finally {
            setLoading(false);
        }
    }

    return <>
        <div className="flex justify-center items-center h-70  gap-6 flex-col">

            <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-serif">Download Instagram reel free <span className="text-blue-600">Lifetime</span> </h1>
                <p>Enter your Instagram link below to download</p>
            </div>

            <form className="w-full flex justify-center gap-3 items-center"
                onSubmit={urlHandler}
            >
                <input type="text"
                    placeholder="Paste your instagram link here..."
                    className={`border border-gray-400 rounded  h-11 lg:w-[40vw] md:w-[60%] outline-none focus:border-blue-300 w-[65%] p-2`}
                    value={reelUrl}
                    readOnly={loading}
                    onChange={(e) => {
                        setReelUrl(e.target.value);
                        setError(null);
                    }}
                />

                <button onClick={pasteHandler}
                    className={`bg-blue-800 text-white h-11 cursor-pointer rounded px-4`}
                    type="button"
                    disabled={loading}
                >
                    <i className="ri-clipboard-line"></i>
                </button>

                <button type="submit"
                    className={`${loading ? 'bg-gray-500 ' : 'bg-green-600 text-white'} lg:px-4 md:px-4 h-11 cursor-pointer text-white rounded p-2 px-2`}
                    disabled={loading}
                >
                    {loading ? "loading..." : "Fetch"}
                </button>

            </form>
        </div>


        <div className="w-full h-auto flex justify-center items-center">
            {reel ? (
                <div className="w-[80vw] lg:w-[20vw] flex flex-col justify-center gap-2 items-center md:w-[20vw]  h-[60vh] ">
                    <video className="w-full h-full" src={reel} controls ></video>
                </div>
            ) : loading ? (
                <div className="animate-pulse">
                    <div className="bg-gray-300 h-70 w-80 rounded"></div>
                </div>
            ) : error && (
                <p className="text-black">{error}</p>
            )}

        </div>
    </>
}