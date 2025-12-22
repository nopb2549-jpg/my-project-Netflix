import { Link } from "react-router-dom";
import detail_1 from"./myList.jsx";

export default function trendingnow(){
    return(
        <div className="mt-5 border">{/* กระดาษหลัก 1.เลือก-ss 2.อายุ 2.1จำนวนตอน */}
            {/* <h1>กระดาษหลัก</h1> */}
            {detail_1()}
        </div>
    );
}