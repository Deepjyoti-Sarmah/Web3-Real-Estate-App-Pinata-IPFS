import { document } from "postcss";
import { sendJSONToIPFS } from "@/components/pinata";
import { useState } from "react";

export default function list() {
  
  async function updatePic(e){
    const file = e.target.file[0];
    const 
  }

  async function listProperty() {
    // let picture = picCid;
    let gettitle = document.getElementById("title").value.toString()
    let getprice = document.getElementById("price").value.toString()
    let getyear = document.getElementById("year").value.toString()
    let getcity = document.getElementById("city").value.toString()
    let getcountry = document.getElementById("country").value.toString()
    let getzip = document.getElementById("zip").value.toString()
    let gethoa = document.getElementById("hoa").value.toString()
    let getinfo = document.getElementById("info").value.toString()
    let getfloors = document.getElementById("floor").value.toString()
    let getaddress = document.getElementById("address").value.toString()
    let getbaths = document.getElementById("bath").value.toString()
    let getrooms = document.getElementById("room").value.toString()
    let getgarage = document.getElementById("garage").value.toString()
    let sellername = document.getElementById("sellername").value.toString()
    let selleremail = document.getElementById("selleremail").value.toString()
    let sellerphone = document.getElementById("sellerphone").value.toString() 
    
     if( !gettitle || !getprice || !getyear || !getcity || !getcountry || !getzip || !gethoa || !getinfo || 
      !getfloors || !getbaths || !getrooms || !getgarage || !sellername || !selleremail || !sellerphone || !getaddress ) return

    const receive = await sendJSONToIPFS(gettitle, getprice, getyear, getcity, getcountry, getzip, gethoa, getinfo,
            getfloors, getbaths, getrooms, getgarage, sellername, selleremail, sellerphone, getaddress);

    console.log(receive);

    
  }

  return (
    <div>
        <div className="container mx-auto sm:px-4" style={{fontFamily:'SF Pro Display'}}>
          <div className="flex flex-wrap  g-6">
            <div className="md:w-1/5 lg:w-1/5 pr-4 pl-4">
            <img className="mb-3 flex" src="net2dev.png" width="140" height="45" />
            </div>
            <div className="md:w-1/4 lg:w-3/4 pr-4 pl-4">
              <h4 className="mb-3 flex justify-end">Property Info</h4>
              <h5 className="flex justify-start align-items-right mt-2 mb-2">
                <span className="text-blue-600 bold">New Listing Title</span>
              </h5>
              <div className="sm:w-3/5 pr-4 pl-4">
              <input
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="title"
                      style={{
                        backgroundColor: "#d3d3d310",
                        fontWeight: "lighter",
                        color: "black",
                      }}
                    />
                    </div>
              <h5
                className="flex justify-end"
                id="displayresult"
              />
              <form className="needs-validation" noValidate>
                <div className="flex flex-wrap  g-3">
                  <div className="sm:w-1/5 pr-4 pl-4">
                    <label htmlFor="first" className="form-label">
                      Asking Price
                    </label>
                    <div className="relative flex items-stretch w-full has-validation">
                    <span className="input-group-text">$</span>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      name="price"
                      id="price"
                      style={{
                        backgroundColor: "#d3d3d310",
                        fontWeight: "lighter",
                        color: "black",
                      }}
                      required
                    />
                    </div>
                    <div className="hidden mt-1 text-sm text-red">Asking Price Required</div>
                  </div>

                  <div className="sm:w-1/5 pr-4 pl-4">
                    <label htmlFor="last" className="form-label">
                      Year Built
                    </label>
                    <div className="relative flex items-stretch w-full has-validation">
                    <span className="input-group-text">#</span>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      name="year"
                      id="year"
                      style={{
                        backgroundColor: "#d3d3d310",
                        fontWeight: "lighter",
                        color: "black",
                      }}
                      required
                    />
                    </div>
                    <div className="hidden mt-1 text-sm text-red">
                      Valid last name is required.
                    </div>
                  </div>
                  <div className="sm:w-1/5 pr-4 pl-4">
                    <label  className="form-label">
                      HOA
                    </label>
                    <div className="relative flex items-stretch w-full has-validation">
                    <span className="input-group-text">$</span>
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="hoa"
                        id="hoa"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:w-2/5 pr-4 pl-4">
                    <label  className="form-label">
                      Address
                    </label>
                    <div className="relative flex items-stretch w-full has-validation">
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="address"
                        id="address"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/4 pr-4 pl-4">
                    <label  className="form-label">
                      City
                    </label>
                    <div className="relative flex items-stretch w-full has-validation">
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="city"
                        id="city"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/3 pr-4 pl-4">
                    <label  className="form-label">
                      Country
                    </label>
                    <div className="relative flex items-stretch w-full has-validation">
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="country"
                        id="country"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/4 pr-4 pl-4">
                    <label  className="form-label">
                      Postal Code / Zip Code
                    </label>
                    <div className="relative flex items-stretch w-full has-validation">
                      <span className="input-group-text">#</span>
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="zip"
                        id="zip"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="lg:w-4/5 pr-4 pl-4">
                    <label  className="form-label">
                     Additional information
                    </label>
                    <div className="mb-4">
                        <textarea className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="info" rows="3"></textarea>
                     </div>
                  </div>
                </div>
              </form>
              <div className="flex flex-wrap  g-6">
                <div className="sm:w-1/5 pr-4 pl-4 mt-3">
                  <label htmlFor="country" className="form-label">
                    Floors
                  </label>
                  <div className="relative flex items-stretch w-full has-validation">
                      <input
                        type="number"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="floor"
                        id="floor"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                    </div>
                </div>
                <div className="sm:w-1/5 pr-4 pl-4 mt-3">
                  <label htmlFor="country" className="form-label">
                    Rooms
                  </label>
                  <div className="relative flex items-stretch w-full has-validation">
                      <input
                        type="number"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="room"
                        id="room"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                      </div>
                </div>
                <div className="sm:w-1/5 pr-4 pl-4 mt-3">
                  <label htmlFor="country" className="form-label">
                    Baths
                  </label>
                  <div className="relative flex items-stretch w-full has-validation">
                      <input
                        type="number"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="bath"
                        id="bath"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                      </div>
                </div>
                <div className="sm:w-1/5 pr-4 pl-4 mt-3">
                  <label htmlFor="country" className="form-label">
                    Garage
                  </label>
                  <div className="relative flex items-stretch w-full has-validation">
                      <input
                        type="number"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        name="garage"
                        id="garage"
                        style={{
                          backgroundColor: "#d3d3d310",
                          fontWeight: "lighter",
                          color: "black",
                        }}
                        required
                      />
                      </div>
                </div>
              </div>
              <h6 id="displaysuccess" />
              <h6>Add Property Picture</h6>
              <form
                className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 sm:w-1/3 pr-4 pl-4"
                style={{
                  boxShadow: "0px 1px 5px #ffffff",
                }}
              >
                <h5
                  className="flex justify-end"
                  id="displaypicchanged"
                />
                <input
                  style={{ backgroundColor: "transparent", color: "blue" }}
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-600 text-white hover:bg-gray-700 flex justify-end"
                  type="file"
                  name="Asset"
                  onChange={updatePic}
                />
              </form>
              <div className="flex flex-wrap  g-6">
                <h5 className="mt-3 mb-3 flex justify-start">
                  Seller Info
                </h5>
                <div className="sm:w-1/3 pr-4 pl-4">
                  <label htmlFor="email" className="form-label">
                    Name{" "}
                  </label>
                  <input
                    type="email"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="sellername"
                    id="sellername"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                  />
                </div>
                <div className="sm:w-1/4 pr-4 pl-4">
                  <label htmlFor="email" className="form-label">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="selleremail"
                    id="selleremail"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                  />
                </div>
                <div className="sm:w-1/4 pr-4 pl-4">
                  <label htmlFor="email" className="form-label">
                    Phone{" "}
                  </label>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="sellerphone"
                    id="sellerphone"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                  />
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex flex-wrap  ">
                      <img
                        className="bd-placeholder-img"
                        // src={picture}
                        width="100%"
                        height="100%"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      />
                </div>
                <button
                className="w-full inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 btn-md mt-4"
                style={{
                  backgroundColor: "primary",
                  fontWeight: "lighter",
                  fontSize: "20px",
                }}
                onClick={listProperty}
              >
                List Property
              </button>
              <hr className="my-3" />
              </div>
            </div>
          </div>
        </div> 

  );
}
