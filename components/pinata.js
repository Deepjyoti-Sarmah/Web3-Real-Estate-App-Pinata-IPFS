import axios from 'axios';
import { 
    pinatakey, 
    pinatasecret,
    pinatajwt,
    readHeader,
    getHeader,
    sendJsonHeader,
    ipfsgateway,
} from './config';

export async function getDate() {
  const dateFormat = new Date(Date.now());
  const dateValue = (dateFormat.getMonth() + 1) + 
    "." + (dateFormat.getDate()) + "." + (dateFormat.getFullYear());
  const time = (new Date(dateValue.split(".").join("-")).getTime())/ 1000;
  return {dateValue, time};

}

export async function sendFileToIPFS(file) {
  const formData = new FormData();
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  formData.append("file", file);
  const opts = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", opts);
  const options = {
    maxBodyLength: "Infinity",
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      pinata_api_key: pinatakey,
      pinata_secret_api_key: pinatasecret,
      Accept: 'text/plain',
    }
  }
  const sendPic = await axios.post(url, formData, options);
  return sendPic.data.IpfsHash;
}

export async function gettingFileFromIPFS() {
  const queryFilter = "metadata=[name]=listed";
}

export async function sendJSONToIPFS(gettitle, getprice, getyear, getcity, getcountry, getzip, gethoa, getinfo, 
    getfloors, getbaths, getrooms, getgarage, sellername, selleremail, sellerphone, getaddress, picture) {
  
  const fetchTime = await getDate();
  const listDate = fetchTime.dateValue;
  const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
  
  const data = JSON.stringify({
    "pinataMetadata": {
      name: "listed",
    },
    "pinataOptions": {
      "cidVersion":1
    },
    "pinataContent":{
      "propertyInfo": {
          "Title": gettitle,
          "Price": getprice,
          "Year": getyear,
          "Address": getaddress,
          "City": getcity,
          "Country": getcountry,
          "Zip": getzip,
          "Hoa": gethoa,
          "Info": getinfo,
          "Floors": getfloors,
          "Baths": getbaths,
          "Rooms": getrooms,
          "Garage": getgarage,
          "Name": sellername,
          "Email": selleremail,
          "Phone": sellerphone,
          "Listed": listDate,
          "Picture" : "https://" + ipfsgateway + ".mypinata.cloud/ipfs/" + picture + '?pinataGatewayToken='
      }
    }
  });
  const sendFile = await axios.post(url, data, sendJsonHeader);
  const hash = `ipfs://${resFile.data.IpfsHash}`;
  // console.log(hash);
  return hash
  
}
