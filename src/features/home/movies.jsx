import { Link } from "react-router-dom";

export default function movies(){
  return(

            <div className="w-full h-full border grid grid-cols-12 gap-8">{/* previewModal  กล่องคลุ่มเนื้อหา ซ้าย-ขวา ใช้ grid */}
              <div className="col-span-8">{/* ซ้าย */}
                  <div className="my-5">{/* กล่องคลุมเนื้อหา ss-age ไม่ต้องปรับอะไร*/}
                      <div className="flex-start text-xl">{/* กล่องคลุมเนื้อหา ss */}
                        <div className="h-10 flex items-center w-full">{/* ss */}
                          <div className="mr-2">2025</div>
                          <span className="mr-2">5 ซีซั่น</span>
                          <div className="flex justify-between">{/* กล่องคลุมภาพ AD */}
                            <div className="flex gap-2">{/* กล่องเนื้อหา ad */}
                              <div className="">{/* icon ad */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                </svg>
                              </div>
                              <div className="icon คำอธิบาย">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="">{/*age*/}
                        <Link to="#">
                          <span className="border">{/* คลุมอายุ */}
                            <span className="px-2">18+</span>
                          </span>
                        </Link>
                        <span className="ml-2">ความรุนแรง</span>
                      </div>
                  </div>

                <div className="w-full mb-3 flex float-start">{/* กล่องคุม ข้อมูล2 */}
                  <div className="text-xl">ดูตอนใหม่ได้ 26 ธันวาคม เวลา 08:00 น. เวลาไทย</div>
                </div>

                <br />

                <div className="mt-5 mb-2">{/* กล่องคุม ข้อมูล3 */}
                  <div className="">เมื่อเด็กชายคนหนึ่งหายตัวไป เมืองเล็กๆ แห่งนี้ก็ค้นพบเรื่องลึกลับซึ่งเกี่ยวพันกับการทดลองลับ พลังเหนือธรรมชาติอันน่าหวาดกลัว และเด็กหญิงแปลกประหลาดคนหนึ่ง</div>
                </div>
              </div>

              <div className="col-span-4 items-end flex-col ">{/* ขวา */}
                <div className="my-[7px] mr-[7px]">{/*ข้อมูล (นักแสดง) */}
                  <span className="">นักแสดง: </span>
                  <Link><span className="">วิโนนา ไรเดอร์,</span></Link>{/* คนที่ 1 */}
                  <Link><span className="">เดวิด ฮาร์เบอร์,</span></Link>{/* คนที่ 2 */}
                  <Link><span className="">มิลลี่ บ็อบบี บราวน์,</span></Link>{/* คนที่ 3 */}
                  <span className="">เพิ่มเติม</span>
                </div>
                <div className="my-[7px] mr-[7px]">{/* ข้อมูล (แนว) */}
                  <span className="">แนว: </span>
                  <Link><span className="">ทีวีดราม่า,</span></Link>
                  <Link><span className="">ทีวีไซไฟ,</span></Link>
                  <Link><span className="">รายการทีวีวัยรุ่น,</span></Link>
                </div>
                <div className="my-[7px] mr-[7px]">{/* รายการนี้ */}
                  <span className="">รายการนี้: </span>
                  <Link><span>บอกลางร้าย,</span></Link>
                  <Link><span>หวนคิดถึงอดีต,</span></Link>
                  <Link><span>น่ากลัว,</span></Link>
                </div>
              </div>
            </div>
  );
}