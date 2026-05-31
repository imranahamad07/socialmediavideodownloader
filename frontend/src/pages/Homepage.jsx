import { useEffect } from "react";
import Inputbox from "../Components/Inputbox";
import Navbar from "../Components/Navbar";

export default function Homepage() {
    useEffect(() => {
        document.title = "instagram reel downloader | Homepage"
    })
    return <>
        <Inputbox />
    </>
}