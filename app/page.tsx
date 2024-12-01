import Image from "next/image";

export default function Home() {
  return (
<div>

      {/* Part 1 */}

    <div className="flex bg-White">
    <div className="bg-background text-black w-1/2 pl-20 pt-80 pr-40 justify-center items-center space-y-6 ">
    <h1 className="text-5xl font-bold">Learn new skills online with ease</h1>
    <p className="pr-20">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    <div className="space-x-5 pt-7">
    <button className="border-solid bg-black text-white border-2 rounded-lg px-3 py-2 ">Start learning now</button>
    <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Explore Courses</button>
    </div>   
    </div>
    <div className=" w-1/2 flex justify-end items-center">
      <img src="images/Image.png"/>
    </div>
    </div>

    {/* Part 2 */}

      <div className="bg-Header text-black pt-[80] pb-[80] flex">
      <span className="flex justify-start items-center pr-96 pl-6 w-1/2">
      <h1 className="text-2xl font-bold ">Trusted by 2000+ companies worldwide.</h1>
      </span>
     <span className="flex justify-end items-center w-1/2 space-x-[40px]">
      <img src="images/Logo1.png"/>
      <img src="images/Logo2.png"/>
      <img src="images/Logo3.png"/>
      <img src="images/Logo4.png"/>
      <img src="images/Logo5.png"/>
      <img src="images/Logo6.png"/>
      </span>
    </div>

    {/* Part 3 */}
    <div>
     <div className="bg-White text-black pt-[112] pb-[112] ">
      <div className="flex justify-center items-center flex-col space-y-10">
        <h1 className="text-5xl font-bold">Explore Courses By Category</h1>
        <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      <div className="flex space-x-6 pt-[80]">
        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/pen-tool-2.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Design & Development</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>

        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/volume-high.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Marketing</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>

        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/group.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Development</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>
       
        
      </div>

      <div className="flex space-x-6 pt-[80]">
        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/microphone.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Communication</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>

        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/link.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Digital Marketing</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>

        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/arrow-2.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Self Development</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>
       
        
      </div>

      <div className="flex space-x-6 pt-[80]">
        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/briefcase.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Business</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>

        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/book1.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Finance</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>

        <div className="w-1/3 bg-Header p-[16]" >
        <div className="flex justify-center items-center space-x-[32px]">
       <span className="w-1/3 bg-White flex justify-center items-center space-[10px] mx-[10] p-[34]">
        <img src="images/book.png "/>
        </span>
        <span className="w-1/2">
        <h1 className="font-bold">Consulting</h1>
        <p>50+ Courses Available</p>
        </span>
        </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-[80]">
        <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Explore Courses</button>
        </div>

      </div>

      {/* Part 4 */}
      
      <div className="bg-White text-black py-[112] px-[64] space-y-[32px]">
        <div className="flex justify-center items-center flex-col space-y-[32px]" >
          <h1 className="font-bold text-[48px]">Our Achivements</h1>
          <p className="flex justify-center items-center text-center font-normal px-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

        <div className="flex justify-center items-center space-x-52">
        <div  className="flex justify-center items-center space-x-52 pt-[8] pb-[8] ">
          <span className="space-[8px]">
            <h1 className="font-bold text-[40px]">+200</h1>
            <p className="flex justify-center items-center">Courses</p>
          </span>

          <span className="space-[8px]">
            <h1 className="font-bold text-[40px]">50k</h1>
            <p className="flex justify-center items-center">Mentors</p>
          </span>
        </div>
        <div  className="flex justify-center items-center space-x-52 pt-[8] pb-[8] ">
          <span className="space-[8px]">
            <h1 className="font-bold text-[40px]">370k</h1>
            <p className="flex justify-center items-center">Students</p>
          </span>

          <span className="space-[8px]">
            <h1 className="font-bold text-[40px]">100+</h1>
            <p className="flex justify-center items-center">Recognition</p>
          </span>
        </div>
        </div>
        
      </div>

      {/* Part 5 */}

      <div className="bg-White text-black space-y-[64px]">
        <div className="flex justify-center items-center flex-col space-y-[16px]">
          <h1 className="font-bold text-[56px]">Courses</h1>
          <p>Your Ultimate Guide to learning</p>
        </div>

        <div className=" space-y-[64px] flex-col">
          <div className=" flex justify-center items-center space-x-[8px]">
            <button className="px-[16] py-[8]" >Popular</button>
            <button className="px-[16] py-[8]" >Recommended</button>
            <button className="px-[16] py-[8]" >Best  Price</button>
          </div>
          {/* Part 5.1 */}

          <div className="flex-col space-y-[60px] py-[112]">

          {/* row 1 */}

           <div className="space-x-[32px] flex ">

          {/* card 1 */}
          <div  className="bg-Header w-1/3">
            <span className="flex-col space-y-[24px]">
              <img src="images/courses/image1.png" className="w-full"/>
            <div className="space-y-[24px] pb-[24]">
             <div className="flex px-[16]">
              <span className="flex justify-start w-1/2">
              <h2 className="font-semibold">Design</h2>
              </span>
              <span className="flex justify-end space-x-[4px] w-1/2">
                <img src="images/courses/Star-1.png"/>
                <h2>5</h2>
              </span>
             </div>
              
            <span className="flex justify-start flex-col px-[16] space-y-[8px]">
              <h1 className="font-bold">UX/UI Design 201</h1>
              <p className="pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </span>

            <span className="flex items-center space-x-[16px] px-[16]">
            <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Enroll Now</button>
            <p>$400</p>
            </span>
            </div>
            </span>
          </div>

           {/* card 2 */}
           <div  className="bg-Header w-1/3">
            <span className="flex-col space-y-[24px]">
              <img src="images/courses/image2.png" className="w-full h-[62%]"/>
            <div className="space-y-[24px] pb-[24]">
             <div className="flex px-[16]">
              <span className="flex justify-start w-1/2">
              <h2 className="font-semibold">Programmimg</h2>
              </span>
              <span className="flex justify-end space-x-[4px] w-1/2">
                <img src="images/courses/Star-1.png"/>
                <h2>5</h2>
              </span>
             </div>
              
            <span className="flex justify-start flex-col px-[16] space-y-[8px]">
              <h1 className="font-bold">Introduction to Python</h1>
              <p className="pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </span>

            <span className="flex items-center space-x-[16px] px-[16]">
            <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Enroll Now</button>
            <p>$400</p>
            </span>
            </div>
            </span>
          </div>

           {/* card 3 */}
           <div  className="bg-Header w-1/3">
            <span className="flex-col space-y-[24px]">
              <img src="images/courses/image3.png" className="w-full"/>
            <div className="space-y-[24px] pb-[24]">
             <div className="flex px-[16]">
              <span className="flex justify-start w-1/2">
              <h2 className="font-semibold">Business</h2>
              </span>
              <span className="flex justify-end space-x-[4px] w-1/2">
                <img src="images/courses/Star-1.png"/>
                <h2>5</h2>
              </span>
             </div>
              
            <span className="flex justify-start flex-col px-[16] space-y-[8px]">
              <h1 className="font-bold ">Data Analysis for Beginners</h1>
              <p className="pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </span>

            <span className="flex items-center space-x-[16px] px-[16]">
            <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Enroll Now</button>
            <p>$400</p>
            </span>
            </div>
            </span>
          </div>
          </div>

                    {/* row 2 */}

                    <div className="space-x-[32px] flex">

{/* card 1 */}
<div  className="bg-Header w-1/3">
  <span className="flex-col space-y-[24px]">
    <img src="images/courses/image4.png" className="w-full"/>
  <div className="space-y-[24px] pb-[24]">
   <div className="flex px-[16]">
    <span className="flex justify-start w-1/2">
    <h2 className="font-semibold">Design</h2>
    </span>
    <span className="flex justify-end space-x-[4px] w-1/2">
      <img src="images/courses/Star-1.png"/>
      <h2>5</h2>
    </span>
   </div>
    
  <span className="flex justify-start flex-col px-[16] space-y-[8px]">
    <h1 className="font-bold">UX/UI Design 201</h1>
    <p className="pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </span>

  <span className="flex items-center space-x-[16px] px-[16]">
  <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Enroll Now</button>
  <p>$400</p>
  </span>
  </div>
  </span>
</div>

 {/* card 2 */}
 <div  className="bg-Header w-1/3">
  <span className="flex-col space-y-[24px]">
    <img src="images/courses/image5.png" className="w-full h-[62%]"/>
  <div className="space-y-[24px] pb-[24]">
   <div className="flex px-[16]">
    <span className="flex justify-start w-1/2">
    <h2 className="font-semibold">Programmimg</h2>
    </span>
    <span className="flex justify-end space-x-[4px] w-1/2">
      <img src="images/courses/Star-1.png"/>
      <h2>5</h2>
    </span>
   </div>
    
  <span className="flex justify-start flex-col px-[16] space-y-[8px]">
    <h1 className="font-bold">Introduction to Python</h1>
    <p className="pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </span>

  <span className="flex items-center space-x-[16px] px-[16]">
  <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Enroll Now</button>
  <p>$400</p>
  </span>
  </div>
  </span>
</div>

 {/* card 3 */}
 <div  className="bg-Header w-1/3">
  <span className="flex-col space-y-[24px]">
    <img src="images/courses/image6.png" className="w-full"/>
  <div className="space-y-[24px] pb-[24]">
   <div className="flex px-[16]">
    <span className="flex justify-start w-1/2">
    <h2 className="font-semibold">Business</h2>
    </span>
    <span className="flex justify-end space-x-[4px] w-1/2">
      <img src="images/courses/Star-1.png"/>
      <h2>5</h2>
    </span>
   </div>
    
  <span className="flex justify-start flex-col px-[16] space-y-[8px]">
    <h1 className="font-bold ">Data Analysis for Beginners</h1>
    <p className="pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </span>

  <span className="flex items-center space-x-[16px] px-[16]">
  <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Enroll Now</button>
  <p>$400</p>
  </span>
  </div>
  </span>
</div>
</div>

          </div> 

          {/* Part 6 */}

          <div className="py-[112] space-y-[64px] bg-secondary">

            <div className="space-y-[16px]">
              <h1 className="flex justify-center items-center font-bold text-[48px]">Our team</h1>
              <p className="flex justify-center items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className="space-y-[64px]">
            {/* row 1 */}
            <div className="flex justify-center items-center">
             <span className="w-1/3 flex justify-center items-center flex-col space-y-[24px]">
             <img src="images/team/image1.png"/>
              <span className=" flex justify-center items-center flex-col pb-[24]">
               <h1 className="font-bold">James Nduku</h1>
               <h2>Marketing Coordinator</h2>
              </span>
              <span className="space-x-[14px]">
              <button><img src="images/LinkedIn.png"/></button>
              <button><img src="images/Twitter.png"/></button>
              <button><img src="images/team/Vector.png"/></button>
              </span>
             </span>

             <span className="w-1/3 flex justify-center items-center flex-col space-y-[24px]">
             <img src="images/team/image2.png"/>
              <span className=" flex justify-center items-center flex-col pb-[24]">
               <h1 className="font-bold">Joseph Munyambu</h1>
               <h2>Nursing Assistant</h2>
              </span>
              <span className="space-x-[14px]">
              <button><img src="images/LinkedIn.png"/></button>
              <button><img src="images/Twitter.png"/></button>
              <button><img src="images/team/Vector.png"/></button>
              </span>
             </span>

             <span className="w-1/3 flex justify-center items-center flex-col space-y-[24px]">
             <img src="images/team/image3.png"/>
              <span className=" flex justify-center items-center flex-col pb-[24]">
               <h1 className="font-bold">Joseph Ngumbau</h1>
               <h2>Medical Assistant</h2>
              </span>
              <span className="space-x-[14px]">
              <button><img src="images/LinkedIn.png"/></button>
              <button><img src="images/Twitter.png"/></button>
              <button><img src="images/team/Vector.png"/></button>
              </span>
             </span>
            </div>

            {/* row 2 */}
            <div className="flex justify-center items-center">
             <span className="w-1/3 flex justify-center items-center flex-col space-y-[24px]">
             <img src="images/team/image4.png"/>
              <span className=" flex justify-center items-center flex-col pb-[24]">
               <h1 className="font-bold">Erick Kipkemboi</h1>
               <h2>Web Designer</h2>
              </span>
              <span className="space-x-[14px]">
              <button><img src="images/LinkedIn.png"/></button>
              <button><img src="images/Twitter.png"/></button>
              <button><img src="images/team/Vector.png"/></button>
              </span>
             </span>

             <span className="w-1/3 flex justify-center items-center flex-col space-y-[24px]">
             <img src="images/team/image5.png"/>
              <span className=" flex justify-center items-center flex-col pb-[24]">
               <h1 className="font-bold">Stephen Kerubo</h1>
               <h2>President of Sales</h2>
              </span>
              <span className="space-x-[14px]">
              <button><img src="images/LinkedIn.png"/></button>
              <button><img src="images/Twitter.png"/></button>
              <button><img src="images/team/Vector.png"/></button>
              </span>
             </span>

             <span className="w-1/3 flex justify-center items-center flex-col space-y-[24px]">
             <img src="images/team/image6.png"/>
              <span className=" flex justify-center items-center flex-col pb-[24]">
               <h1 className="font-bold">John Leboo</h1>
               <h2>Dog Trainer</h2>
              </span>
              <span className="space-x-[14px]">
              <button><img src="images/LinkedIn.png"/></button>
              <button><img src="images/Twitter.png"/></button>
              <button><img src="images/team/Vector.png"/></button>
              </span>
             </span>
            </div>
            </div>

            <div>

              {/* part 7 */}
              <div className="py-[112] px-[64] space-y-[80px] bg-secondary flex-col">
                <div className="space-y-[24px] flex justify-center items-start flex-col">
                  <h1 className="text-[48px] font-bold">
                  Customer testimonials
                  </h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="space-x-[48px] flex ">
                  {/* box 1 */}
                  <div className="border-2 border-solid border-black w-1/3 space-y-[24px] p-[32]">
                   <img src="images/Stars.png"/>
                   <p className="pr-40">
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse varius enim in eros elementum tristique. 
                     Duis cursus, mi quis viverra ornare."
                   </p>
                   <div className="flex space-x-[20px] justify-start items-center">
                     <span>
                       <img src="images/team/image3.png" className="rounded-full"/>
                     </span>
                     <span>
                       <h1 className="font-semibold text-[16px]">James Nduku</h1>
                       <p>Software Developer</p>
                     </span>
                   </div>
                   
                  </div>

                  {/* box 2 */}
                  <div className="border-2 border-solid border-black w-1/3 space-y-[24px] p-[32]">
                   <img src="images/Stars.png"/>
                   <p className="pr-40">
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse varius enim in eros elementum tristique. 
                     Duis cursus, mi quis viverra ornare."
                   </p>
                   <div className="flex space-x-[20px] justify-start items-center">
                     <span>
                       <img src="images/team/image1.png" className="rounded-full"/>
                     </span>
                     <span>
                       <h1 className="font-semibold text-[16px]">Erick Kipkemboi</h1>
                       <p>Scrum Master</p>
                     </span>
                   </div>
                   
                  </div>

                  {/* box 3 */}
                  <div className="border-2 border-solid border-black w-1/3 space-y-[24px] p-[32]">
                   <img src="images/Stars.png"/>
                   <p className="pr-40">
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse varius enim in eros elementum tristique. 
                     Duis cursus, mi quis viverra ornare."
                   </p>
                   <div className="flex space-x-[20px] justify-start items-center">
                     <span>
                       <img src="images/team/image6.png" className="rounded-full"/>
                     </span>
                     <span>
                       <h1 className="font-semibold text-[16px]">Stephen Kerubo</h1>
                       <p>UI/UX Designer</p>
                     </span>
                   </div>
                   
                  </div>

              </div>
              <div className="flex items-center">
               <div className="space-x-[8px] flex justify-start w-1/2">
                 <button><img src="images/Dot.png"/></button> 
                 <button><img src="images/Dot-gray.png"/></button>
                 <button><img src="images/Dot-gray.png"/></button>
                 <button><img src="images/Dot-gray.png"/></button>
                 <button><img src="images/Dot-gray.png"/></button>
               </div>
               <div className="space-x-[15px] flex justify-end w-1/2">
                <button className="border-2 border-solid border-black rounded-full p-[12]"><img src="images/Vector1.png"/></button>
                <button className="border-2 border-solid border-black rounded-full p-[12]"><img src="images/Vector2.png"/></button>
               </div>
              </div>
              
            </div>
           

          </div>

      </div>  

      </div>

      </div>

      </div>  
      </div>
      

  )
};