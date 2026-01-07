export default function Card (){
    return(
        <div className="">
            <p className="flex justify-stard items-end mt-12 mb-5 gap-3 text-3xl">
                เนื้อหาอื่นในแบบเดียวกัน
            </p>

            {/* card */}
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,18rem))]">
                {/* 1 */}
                <div className="card bg-gray-600 text-white w-72 border rounded-t-md rounded-md border-none">
                    <img src="/img/cardListInDetail/1.jpg" className="card-img-top rounded-t-md" alt="เทส"/>
                    <div className="card-body p-4">
                        <div className="p-4">{/* ส่วนหัว */}
                            <div className="items-center flex flex-row-reverse justify-between">
                                <div className="broder border-solid border-1 rounded-4xl">
                                    <div className="m-1">
                                        <svg viewBox="0 0 24 24" width="24" height="24" data-icon="PlusMedium" data-icon-id=":r45:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                            <path fill="currentColor" fill-rule="evenodd" d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* ส่วนสอง */}
                                <div className="flex flex-row-reverse">
                                    <div className="mr-2">2025</div>
                                    <span className="border border-gray-300 px-1.5 mr-1.5 text-sm">HD</span>
                                    <span className="mr-2">
                                        <span className="border border-gray-300 px-1.5">16+</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* เนื้อหา */}
                        <p className="px-4 pb-4">
                            <div>
                                หกเดือนก่อน ฮิคารุหายตัวไปหนึ่งอาทิตย์ ตอนนี้ โยชิกิซึ่งเป็นเพื่อนรัก สัมผัสได้ว่ามีอะไรแปลกๆ จึงคาดคั้นความจริงจากเขา จากนั้นความจริงที่น่าตกใจก็ค่อยๆ เปิดเผยออกมา
                            </div>
                        </p>
                    </div>
                </div>
                
                {/* 2 */}
                <div className="card bg-gray-600 text-white w-72 border rounded-t-md rounded-md border-none">
                    <img src="/img/cardListInDetail/1.jpg" className="card-img-top rounded-t-md" alt="เทส"/>
                    <div className="card-body p-4">
                        <div className="p-4">{/* ส่วนหัว */}
                            <div className="items-center flex flex-row-reverse justify-between">
                                <div className="broder border-solid border-1 rounded-4xl">
                                    <div className="m-1">
                                        <svg viewBox="0 0 24 24" width="24" height="24" data-icon="PlusMedium" data-icon-id=":r45:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                            <path fill="currentColor" fill-rule="evenodd" d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* ส่วนสอง */}
                                <div className="flex flex-row-reverse">
                                    <div className="mr-2">2025</div>
                                    <span className="border border-gray-300 px-1.5 mr-1.5 text-sm">HD</span>
                                    <span className="mr-2">
                                        <span className="border border-gray-300 px-1.5">16+</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* เนื้อหา */}
                        <p className="px-4 pb-4">
                            <div>
                                หกเดือนก่อน ฮิคารุหายตัวไปหนึ่งอาทิตย์ ตอนนี้ โยชิกิซึ่งเป็นเพื่อนรัก สัมผัสได้ว่ามีอะไรแปลกๆ จึงคาดคั้นความจริงจากเขา จากนั้นความจริงที่น่าตกใจก็ค่อยๆ เปิดเผยออกมา
                            </div>
                        </p>
                    </div>
                </div>
                {/* 3 */}
                <div className="card bg-gray-600 text-white w-72 border rounded-t-md rounded-md border-none">
                    <img src="/img/cardListInDetail/1.jpg" className="card-img-top rounded-t-md" alt="เทส"/>
                    <div className="card-body p-4">
                        <div className="p-4">{/* ส่วนหัว */}
                            <div className="items-center flex flex-row-reverse justify-between">
                                <div className="broder border-solid border-1 rounded-4xl">
                                    <div className="m-1">
                                        <svg viewBox="0 0 24 24" width="24" height="24" data-icon="PlusMedium" data-icon-id=":r45:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                            <path fill="currentColor" fill-rule="evenodd" d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* ส่วนสอง */}
                                <div className="flex flex-row-reverse">
                                    <div className="mr-2">2025</div>
                                    <span className="border border-gray-300 px-1.5 mr-1.5 text-sm">HD</span>
                                    <span className="mr-2">
                                        <span className="border border-gray-300 px-1.5">16+</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* เนื้อหา */}
                        <p className="px-4 pb-4">
                            <div>
                                หกเดือนก่อน ฮิคารุหายตัวไปหนึ่งอาทิตย์ ตอนนี้ โยชิกิซึ่งเป็นเพื่อนรัก สัมผัสได้ว่ามีอะไรแปลกๆ จึงคาดคั้นความจริงจากเขา จากนั้นความจริงที่น่าตกใจก็ค่อยๆ เปิดเผยออกมา
                            </div>
                        </p>
                    </div>
                </div>
                {/* 3 */}
                <div className="card bg-gray-600 text-white w-72 border rounded-t-md rounded-md border-none">
                    <img src="/img/cardListInDetail/1.jpg" className="card-img-top rounded-t-md" alt="เทส"/>
                    <div className="card-body p-4">
                        <div className="p-4">{/* ส่วนหัว */}
                            <div className="items-center flex flex-row-reverse justify-between">
                                <div className="broder border-solid border-1 rounded-4xl">
                                    <div className="m-1">
                                        <svg viewBox="0 0 24 24" width="24" height="24" data-icon="PlusMedium" data-icon-id=":r45:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                            <path fill="currentColor" fill-rule="evenodd" d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* ส่วนสอง */}
                                <div className="flex flex-row-reverse">
                                    <div className="mr-2">2025</div>
                                    <span className="border border-gray-300 px-1.5 mr-1.5 text-sm">HD</span>
                                    <span className="mr-2">
                                        <span className="border border-gray-300 px-1.5">16+</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* เนื้อหา */}
                        <p className="px-4 pb-4">
                            <div>
                                หกเดือนก่อน ฮิคารุหายตัวไปหนึ่งอาทิตย์ ตอนนี้ โยชิกิซึ่งเป็นเพื่อนรัก สัมผัสได้ว่ามีอะไรแปลกๆ จึงคาดคั้นความจริงจากเขา จากนั้นความจริงที่น่าตกใจก็ค่อยๆ เปิดเผยออกมา
                            </div>
                        </p>
                    </div>
                </div>
            </div>

            {/* ส่วนปิด */}
            <div className="bg-gray-600 w-full h-24 flex justify-center items-end">
                <div className="boder border-e-gray-50 border-solid border-1 rounded-4xl p-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronDownMedium" data-icon-id=":r4l:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                        <path fill="currentColor" fill-rule="evenodd" d="m12 15.586 7.293-7.293 1.414 1.414-8 8a1 1 0 0 1-1.414 0l-8-8 1.414-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}