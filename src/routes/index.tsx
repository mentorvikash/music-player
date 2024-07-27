import { createBrowserRouter } from "react-router-dom";
import MusicPlayer from "../page";
import FileUploder from "../page/FileUploder";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: FileUploder,
        
    },
    {
        path: "/upload",
        Component: MusicPlayer,
    }
    
])