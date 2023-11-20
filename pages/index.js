import Image from 'next/image'
import { Inter } from 'next/font/google'
import { readFileFromIPFS } from '@/components/pinata';
import { pinatajwt } from '@/components/config'; 
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [listings, getListing] = useState("");

  useEffect(() => {
    fetchListing();
  },[]);

  async function fetchListing() {
    const array = await readFileFromIPFS();
    getListing(array);
  }
  
  return (
    <div>
        {/* {listings.map((list, i) => ( */}
            <div> 
              <div>
                <h2>Title</h2>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          {/* <img src={Picture + pinatajwt} /> */}
                          <ul>
                            <li >
                            <img src="map-solid.svg" alt="twbs" width="30" height="30" className=""/>
                            </li>
                            <li className="">
                              <h6>Address</h6>
                            </li>
                            <li className="">
                              <h6>City</h6>
                            </li>
                            <li className="">
                              <h6>City</h6>
                            </li>
                            <li className="">
                              <h6> Country</h6>
                            </li>
                            <li className="">
                              <h6>Zip</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <a className="" aria-current="true">
                        <img src="dollar-solid.svg" alt="twbs" width="32" height="32" className=""/>
                        <div className="">
                          <div>
                            <h5 className="">Price</h5>
                          </div>
                        </div>
                      </a>
                      <a className="" aria-current="true">
                        <div className="">
                          <div>
                            <h6 className="">Seller: Name<img src="person-solid.svg" alt="twbs" width="20" height="20" className=""/></h6>
                          </div>
                          <div>
                            <h6 className="">Email<img src="at-solid.svg" alt="twbs" width="20" height="20" className="" /></h6>
                          </div>
                          <div>
                            <h6 className="">Phone<img src="phone-solid.svg" alt="twbs" width="20" height="20" className="" /></h6>
                          </div>
                        </div>
                        </a>
                        <a className="" aria-current="true">
                        <img src="calendar-solid.svg" alt="twbs" width="32" height="32" className=""/>
                          <div className="flex gap-2 w-full justify-between">
                            <div>
                              <h5 className="">Listed since: Listed</h5>
                            </div>
                          </div>
                        </a>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
            
                    <div className="">
                      <div className="">
                      <img src='house-solid.svg' width="32" height="32" />
                        <h4 className="">Floors Floors</h4>
                        </div>
                      </div>
            
                      <div className="">
                      <div className="">
                      <img src='build-solid.svg' width="32" height="32" />
                        <h4 className="fw-semibold">Built Year</h4>
                        </div>
                      </div>
            
                      <div className="">
                        <div className="">
                        <img src='bed-solid.svg' width="32" height="32" />
                        <h4 className="fw-semibold">Beds Rooms</h4>
                        </div>
                      </div>
            
                      <div className="">
                      <div className="">
                      <img src='bath-solid.svg' width="32" height="32" />
                        <h4 className="fw-semibold">Baths Baths</h4>
                        </div>
                      </div>
            
                      <div className="">
                      <div className="">
                      <img src='garage-solid.svg' width="32" height="32" />
                        <h4 className="fw-semibold">Garage Garage</h4>
                        </div>
                      </div>
            
                      <div className="">
                      <div className="">
                      <img src='dollar-solid.svg' width="32" height="32" />
                        <h4 className="fw-semibold">HOA Hoa</h4>
                        </div>
                      </div>
                    </div>
                    <div className="">
                    <p>Info
                    </p>
                    </div>
                  </div>
                </div> 
              </div>
              <div className=""></div>
            </div>
        {/* ))} */}
    </div> 
  );
  //
  //
  // return(
  //   <>
  //     <div>
  //       <div className='m-auto p-3'>
  //         <h2 className='text-4xl font-bold p-4 m-4'>Title</h2>
  //       </div>
  //       <div className='flex flex-row'>
  //         <div>
  //           <div placeholder='image section' className='p-6 m-4'> 
  //             <div>
  //               <img placeholder='room image'/> Image
  //             </div>
  //           
  //             <div className='m-2 p-2'>
  //               <ul className='flex flex-row my-2'>
  //                 <li className='p-2'>Icon</li>
  //                 <li className='p-2'>Place</li>
  //                 <li className='p-2'>Country</li>
  //               </ul>
  //             </div>
  //           </div>
  //       
  //           <div placeholder='price section' className='m-4 p-6'>
  //             <span placeholder='price' /> Price
  //             <ul placeholder='Address' className='flex flex-row align-middle'>
  //               <li className='p-2'>Seller</li>
  //               <li className='p-2'>email</li>
  //               <li className='p-2'>No</li>
  //             </ul>
  //             <span placeholder='listing date' /> Listing Date
  //           </div>
  //         </div>
  //       
  //         <div placeholder='info section' className='m-4 p-6'>
  //           <span className='flex-grow max-w-full flex-1 px-4 flex flex-col gap-2'>
  //             Floor
  //           </span>          
  //           <span className='flex-grow max-w-full flex-1 px-4 flex flex-col gap-2'>
  //             Beds
  //           </span>          
  //           <span className='flex-grow max-w-full flex-1 px-4 flex flex-col gap-2'>
  //             Garage
  //           </span>          
  //           <span className='flex-grow max-w-full flex-1 px-4 flex flex-col gap-2'>
  //             Built
  //           </span>          
  //           <span className='flex-grow max-w-full flex-1 px-4 flex flex-col gap-2'>
  //             Bath
  //           </span>          
  //           <span className='flex-grow max-w-full flex-1 px-4 flex flex-col gap-2'>
  //             HOA
  //           </span>          
  //           <p className='m-4 p-6'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}
