import Icons from "./index";
import { NavLink, useLocation } from "react-router-dom";

export default function IconGroup() {
    const location = useLocation();

    return(
        <div className="w-100 flex  justify-between">
            <div className="w-[50%] pl-2 flex items-center gap-3">
                <span className="p-px border border-black border-solid border-0.5 rounded-xl">
                    <Icons.play />
                </span>
                <span className="p-px border border-black border-solid border-0.5 rounded-xl">
                    <Icons.list />
                </span>
                <span className="p-px border border-black border-solid border-0.5 rounded-xl">
                    <Icons.like />
                </span>
            </div>

            <div className="w-[20%] flex justify-center items-end">
                <NavLink to='/detailPage' state={{background: location}}> <span> <Icons.arrow /> </span> </NavLink>
            </div>
        </div>
    );
}