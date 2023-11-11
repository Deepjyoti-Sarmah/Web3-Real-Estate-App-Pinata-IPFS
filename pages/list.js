import { document } from "postcss";
import { sendFileToIPFS, sendJSONToIPFS } from "@/components/pinata";
import { useState } from "react";
import { gatewayjwt, ipfsGateway } from "@/components/config";
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function list() {

  const [picCid, getPicCid] = useState(""); 
  const [picture, getPicture] = useState("pinatalogo.png");

  
  async function updatePic(e){
    const file = e.target.files[0];
    const getCID = await sendFileToIPFS(file);
    getPicCid(getCID);
    const ipfsPath = "https://" + ipfsGateway + ".mypinata.cloud/ipfs/" + getCID + "?pinataGatewayToken=" + gatewayjwt;
    getPicture(ipfsPath);

    // console.log(getCID);
  }

  async function listProperty() {
    let picture = picCid;
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
      !getfloors || !getbaths || !getrooms || !getgarage || !sellername || !selleremail || !sellerphone || !getaddress || !picture) return

    const receive = await sendJSONToIPFS(gettitle, getprice, getyear, getcity, getcountry, getzip, gethoa, getinfo,
            getfloors, getbaths, getrooms, getgarage, sellername, selleremail, sellerphone, getaddress || picture);
    // console.log(receive);

    if (receive === "complete") {
      let confirmation = "listed Successfully";
      document.getElementById("displayresult").innerHTML = confirmation;
    } else {
      let confirmation = "Info not completed";
      document.getElementById("displayresult").innerHTML = confirmation;
    }  
  }

  return (
    
    <div class="mx-auto max-w-xl">
      <form action="" class="space-y-5">
        <div class="grid grid-cols-12 gap-5">

          <div class="col-span-12">
            <label for="example9" class="mb-1 block text-sm font-medium text-gray-400">Title</label>
            <input type="text" id="title" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Enter Title" />
          </div>

          <div class="col-span-4">
            <label for="example10" class="mb-1 block text-sm font-medium text-gray-400">Asking Price</label>
            <input type="text" id="price" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="$" />
          </div>
          <div class="col-span-4">
            <label for="example11" class="mb-1 block text-sm font-medium text-gray-400">Year Built</label>
            <input type="text" id="year" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="#" />
          </div>
          <div class="col-span-4">
            <label for="example12" class="mb-1 block text-sm font-medium text-gray-400">HOA</label>
            <input type="text" id="hoa" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="$" />
          </div>

          <div class="col-span-12">
            <label for="example9" class="mb-1 block text-sm font-medium text-gray-400">Address</label>
            <input type="text" id="address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Enter Address" />
          </div>


          <div class="col-span-12">
            <label for="example9" class="mb-1 block text-sm font-medium text-gray-400">Additional Information</label>
              <div class="mt-2">
                <textarea id="info" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            {/* <input type="text" id="example9" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="1864 Main Street" /> */}
          </div>

          <div class="col-span-3">
            <label for="example10" class="mb-1 block text-sm font-medium text-gray-400">Floors</label>
            <input type="text" id="example10" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="0" />
          </div>
          <div class="col-span-3">
            <label for="example11" class="mb-1 block text-sm font-medium text-gray-400">Rooms</label>
            <input type="text" id="example12" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="0" />
          </div>
          <div class="col-span-3">
            <label for="example12" class="mb-1 block text-sm font-medium text-gray-400">Baths</label>
            <input type="text" id="example12" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="0" />
          </div>
          <div class="col-span-3">
            <label for="example10" class="mb-1 block text-sm font-medium text-gray-400">Garage</label>
            <input type="text" id="example10" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="0" />
          </div>
          
          <div class="col-span-full ">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-400">Cover photo</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-100">
              <div class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer px-2 rounded-md bg-gray-400 font-semibold text-indigo-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-900">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          
          <div class="col-span-6">
            <label for="example9" class="mb-1 block text-sm font-medium text-gray-400">Seller Info</label>
            <input type="text" id="example9" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Name" />
          </div>

          <div class="col-span-6">
            <label for="example9" class="mb-1 block text-sm font-medium text-gray-400">Email</label>
            <input type="text" id="example9" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Email" />
          </div>
          
          <div class="col-span-6">
            <label for="example9" class="mb-1 block text-sm font-medium text-gray-400">Phone</label>
            <input type="text" id="example9" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Phone number" />
          </div>
          

          <div class="col-span-12">
            <button type="button" class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
