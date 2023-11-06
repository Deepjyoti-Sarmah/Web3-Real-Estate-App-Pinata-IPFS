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

export async function sendJSONToIPFS(gettitle, getprice, getyear, getcity, getcountry, getzip, gethoa, getinfo, 
    getfloors, getbaths, getrooms, getgarage, sellername, selleremail, sellerphone, picture, getaddress) {
  
  const fetchTime = await getDate();
  const listDate = fetchTime.dateValue;
  const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';


}
