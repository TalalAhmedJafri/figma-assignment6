export default function Footer() {
    return (
      <div>
         <div className="p-[80] space-y-[80px] bg-White text-black">
              {/* Part 8 */}

              <div>
                <div className="flex">
                  <div className="w-1/2 justify-start">
                    <h1 className="font-semibold">
                    Subscribe to our newsletter
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-end">
                   <div className="flex-col space-y-[16px]">
                     <div className="flex  space-x-[16px]">
                       <p className="border border-solid border-black rounded-[5] border-r-[16x] p-[12] space-x-[8px] w-[256] h-[48]">Enter your email</p>
                       <button className="border border-solid border-black rounded-[5] px-[24] py-[12] w-[119] h-[48]">Subscribe</button>
                     </div> 
                     <div>
                       <p className="text-[12px]">By subscribing you agree to with our <button><u>Privacy Policy</u></button></p>
                     </div>
                   </div>
                  </div>

                </div>
              </div>
              <div>
               <div className=" flex space-x-[40px] pt-[80]">
                 <div className="flex space-x-[8.02px] justify-start w-1/4">
                   <img src="images/frame.png" className="w-[32.58px] h-[30.38px]"/>
                   <h1 className="font-bold text-[25.07px]">Ddsgnr</h1>
                 </div>
                 <div className="flex-col justify-center w-1/4 space-y-[16px]">
                   <h1 className="font-semibold">Courses</h1>
                   <p className="text-[14px]"><button>Business</button></p>
                   <p className="text-[14px]"><button>Development</button></p>
                   <p className="text-[14px]"><button>Technology</button></p>
                   <p className="text-[14px]"><button>Design</button></p>
                   <p className="text-[14px]"><button>Programming</button></p>
                 </div>
                 <div className="flex-col justify-center w-1/4 space-y-[16px]">
                   <h1 className="font-semibold">Resources</h1>
                   <p className="text-[14px]"><button>Career</button></p>
                   <p className="text-[14px]"><button>Resume</button></p>
                   <p className="text-[14px]"><button>Learning</button></p>
                   <p className="text-[14px]"><button>Interview Preparation</button></p>
                   <p className="text-[14px]"><button>Jobs</button></p>
                 </div>
                 <div className="flex-col justify-center w-1/4 space-y-[16px]">
                   <h1 className="font-semibold">About Us</h1>
                   <p className="text-[14px]"><button>Contact</button></p>
                   <p className="text-[14px]"><button>Help/Support</button></p>
                   <p className="text-[14px]"><button>FAQ</button></p>
                   <p className="text-[14px]"><button>Terms and Conditions</button></p>
                   <p className="text-[14px]"><button>Partners</button></p>
                 </div>
              </div>
              <div className="pt-[80] space-y-[32px]">
                <div className="border-b border-black"/>
                <div className="flex">
                 <div className="space-x-[24px] text-[14px] flex w-1/2">
                   <p >2023 Ddsgnr. All right reserved.</p>
                   <p><button><u>Privacy Policy</u></button></p>
                   <p><button><u>Terms of Service </u></button></p>
                   <p><button><u>Cookies Settings</u></button></p>
                 </div>
                 <div className="w-1/2 flex justify-end space-x-[12px]">
                   <button><img src="images/Facebook.png"/></button>
                   <button><img src="images/Instagram.png"/></button>
                   <button><img src="images/Twitter.png"/></button>
                   <button><img src="images/LinkedIn.png"/></button>
                 </div>
                </div>
              </div>
            </div>
         </div>
      </div>
    )
  }