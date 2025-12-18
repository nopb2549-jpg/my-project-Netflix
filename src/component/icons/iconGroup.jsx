import Icons from "./index";
import { NavLink } from "react-router-dom";

export default function IconGroup(action) {
    return(
        <div className="w-100 flex  justify-between">
            <div className="w-[50%] pl-[8px] flex items-center gap-3">
                <span className="p-[1px] border border-black border-solid border-[2px] rounded-xl">
                    <Icons.play />
                </span>
                <span className="p-[1px] border border-black border-solid border-[2px] rounded-xl">
                    <Icons.list />
                </span>
                <span className="p-[1px] border border-black border-solid border-[2px] rounded-xl">
                    <Icons.like />
                </span>
            </div>

            <div className="w-[20%] flex justify-center items-end">
                <NavLink to='/movies'> <span> <Icons.arrow /> </span> </NavLink>
            </div>
        </div>
    );
}