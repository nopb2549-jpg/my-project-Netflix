import Header from '../../features/details/components/header'
import Preview from '../../features/details/components/preview/indexPreview'

export default function DetailPage(){
    return(
        <div className="w-full h-full text-white px-20 bg-gray-950">
            {Header()}
            {Preview()}
        </div>
    );
}