import { Link } from "react-router-dom";
import data_1 from"./movies.jsx";

export default function game(){
    return(
        <div className="w-full h-full text-white px-20 bg-gray-950">
            {data_1()}
        </div>
    );
}