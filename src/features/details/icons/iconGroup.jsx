import Icon from "./index";

export default function IconGroup(){
    return(
        <div className="flex justify-between">
            <div className="flex gap-2">
                <div>
                    <Icon.radio />
                </div>
                <div>
                    <Icon.description />
                </div>
            </div>
        </div>
    );
}