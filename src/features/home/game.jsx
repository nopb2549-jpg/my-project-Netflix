import { Link } from "react-router-dom";
import data_1 from"./movies.jsx";
import data_2 from"./trendingnow.jsx";

export default function game(){
    return(
        <div className="w-full h-full text-white px-20 bg-gray-950">
            {data_1()}
            {data_2()}
        </div>
    );
}