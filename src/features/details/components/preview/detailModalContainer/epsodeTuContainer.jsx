import Episodes from "../../../../../assets/img/list-14.jpg";

export default function episodeTuContainer(){
    return(
        // ส่วนที่ 2 
        <div className="">
            <div className="mb-2">{/* กล่องคุลมตอน */}
                <span className="mr-2">สเตรนเจอร์ ธิงส์ 5</span>
                <span className="border">
                    <span className="px-1.25">16+</span>
                </span>
                <span className="ml-2">ความรุนแรง</span>
            </div>

            {/* Episode item */}
            {/* 1 */}
            <div className="w-full p-4 bg-zinc-800">
                {/* card */}
                <div role="button" tabIndex={0} aria-label="Episode 1: บทที่หนึ่ง ภารกิจแฝงตัว" className="flex items-center cursor-pointer">
                    {/* ส่วนที่ 1 : เลขตอน */}
                    <div className="text-lg font-semibold text-gray-300 pt-2 w-6 text-center"> 1 </div>

                    {/* ส่วนที่ 2 : รูป */}
                    <div className="w-40 aspect-video shrink-0 overflow-hidden rounded">
                        <img src={Episodes} alt="บทที่หนึ่ง: ภารกิจแฝงตัว" className="w-full h-full object-cover"/>
                    </div>

                    {/* ส่วนที่ 3 : ข้อมูล */}
                    <div className="flex-1">
                        {/* ชื่อ + เวลา */}
                        <div className="flex justify-between items-start px-2 pt-2 pb-1">
                            <span className="font-medium">
                                บทที่หนึ่ง: ภารกิจแฝงตัว
                            </span>
                            <span className="text-sm text-gray-400">
                                71 นาที
                            </span>
                        </div>

                        {/* เรื่องย่อ */}
                        <p className="px-2 pb-3 text-sm text-gray-400 leading-relaxed">
                            พฤศจิกายนปี 1987 ชาวแก๊งต้องหลบเลี่ยงกองทัพเพื่อลักลอบเข้าไปตามหาเว็คนาในโลกกลับด้าน
                            แต่พวกเขากลับมองไม่เห็นอันตรายที่อยู่ใกล้ตัวกว่าที่คิด
                        </p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="w-full p-4 border-b-2 border-gray-700">
                {/* card */}
                <div role="button" tabIndex={0} aria-label="Episode 1: บทที่หนึ่ง ภารกิจแฝงตัว" className="flex items-center cursor-pointer">
                    {/* ส่วนที่ 1 : เลขตอน */}
                    <div className="text-lg font-semibold text-gray-300 pt-2 w-6 text-center"> 2 </div>

                    {/* ส่วนที่ 2 : รูป */}
                    <div className="w-40 aspect-video shrink-0 overflow-hidden rounded">
                        <img src={Episodes} alt="บทที่หนึ่ง: ภารกิจแฝงตัว" className="w-full h-full object-cover"/>
                    </div>

                    {/* ส่วนที่ 3 : ข้อมูล */}
                    <div className="flex-1">
                        {/* ชื่อ + เวลา */}
                        <div className="flex justify-between items-start px-2 pt-2 pb-1">
                            <span className="font-medium">
                                บทที่หนึ่ง: ภารกิจแฝงตัว
                            </span>
                            <span className="text-sm text-gray-400">
                                71 นาที
                            </span>
                        </div>

                        {/* เรื่องย่อ */}
                        <p className="px-2 pb-3 text-sm text-gray-400 leading-relaxed">
                            พฤศจิกายนปี 1987 ชาวแก๊งต้องหลบเลี่ยงกองทัพเพื่อลักลอบเข้าไปตามหาเว็คนาในโลกกลับด้าน
                            แต่พวกเขากลับมองไม่เห็นอันตรายที่อยู่ใกล้ตัวกว่าที่คิด
                        </p>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="w-full p-4 border-b-2 border-gray-700">
                {/* card */}
                <div role="button" tabIndex={0} aria-label="Episode 1: บทที่หนึ่ง ภารกิจแฝงตัว" className="flex items-center cursor-pointer">
                    {/* ส่วนที่ 1 : เลขตอน */}
                    <div className="text-lg font-semibold text-gray-300 pt-2 w-6 text-center"> 3 </div>

                    {/* ส่วนที่ 2 : รูป */}
                    <div className="w-40 aspect-video shrink-0 overflow-hidden rounded">
                        <img src={Episodes} alt="บทที่หนึ่ง: ภารกิจแฝงตัว" className="w-full h-full object-cover"/>
                    </div>

                    {/* ส่วนที่ 3 : ข้อมูล */}
                    <div className="flex-1">
                        {/* ชื่อ + เวลา */}
                        <div className="flex justify-between items-start px-2 pt-2 pb-1">
                            <span className="font-medium">
                                บทที่หนึ่ง: ภารกิจแฝงตัว
                            </span>
                            <span className="text-sm text-gray-400">
                                71 นาที
                            </span>
                        </div>

                        {/* เรื่องย่อ */}
                        <p className="px-2 pb-3 text-sm text-gray-400 leading-relaxed">
                            พฤศจิกายนปี 1987 ชาวแก๊งต้องหลบเลี่ยงกองทัพเพื่อลักลอบเข้าไปตามหาเว็คนาในโลกกลับด้าน
                            แต่พวกเขากลับมองไม่เห็นอันตรายที่อยู่ใกล้ตัวกว่าที่คิด
                        </p>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="w-full p-4 border-b-2 border-gray-700">
                {/* card */}
                <div role="button" tabIndex={0} aria-label="Episode 1: บทที่หนึ่ง ภารกิจแฝงตัว" className="flex items-center cursor-pointer">
                    {/* ส่วนที่ 1 : เลขตอน */}
                    <div className="text-lg font-semibold text-gray-300 pt-2 w-6 text-center"> 4 </div>

                    {/* ส่วนที่ 2 : รูป */}
                    <div className="w-40 aspect-video shrink-0 overflow-hidden rounded">
                        <img src={Episodes} alt="บทที่หนึ่ง: ภารกิจแฝงตัว" className="w-full h-full object-cover"/>
                    </div>

                    {/* ส่วนที่ 3 : ข้อมูล */}
                    <div className="flex-1">
                        {/* ชื่อ + เวลา */}
                        <div className="flex justify-between items-start px-2 pt-2 pb-1">
                            <span className="font-medium">
                                บทที่หนึ่ง: ภารกิจแฝงตัว
                            </span>
                            <span className="text-sm text-gray-400">
                                71 นาที
                            </span>
                        </div>

                        {/* เรื่องย่อ */}
                        <p className="px-2 pb-3 text-sm text-gray-400 leading-relaxed">
                            พฤศจิกายนปี 1987 ชาวแก๊งต้องหลบเลี่ยงกองทัพเพื่อลักลอบเข้าไปตามหาเว็คนาในโลกกลับด้าน
                            แต่พวกเขากลับมองไม่เห็นอันตรายที่อยู่ใกล้ตัวกว่าที่คิด
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}