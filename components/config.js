//Pinata IPFS API info
//
// API Key: ac5edbf278e8d5673c05
//
// API Secret: 10217f6efcc1a26f70ecf9a71f7dc5440b9a24d2a3a6ca35821a8d7f7aae38b2
//  
// JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiNTAwODRmYi0yNmY4LTQ1ZDUtYjJhYi01MzQxNzBmNDkyYzgiLCJlbWFpbCI6ImRlZXBqeW90aXNhcm1haDM3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJhYzVlZGJmMjc4ZThkNTY3M2MwNSIsInNjb3BlZEtleVNlY3JldCI6IjEwMjE3ZjZlZmNjMWEyNmY3MGVjZjlhNzFmN2RjNTQ0MGI5YTI0ZDJhM2E2Y2EzNTgyMWE4ZDdmN2FhZTM4YjIiLCJpYXQiOjE2OTkxMTgxOTV9.zRiS8KqKskP9gog03a64I6ic8QAMIEt_8tIDQKpKq3Y
//
//############################################################################################
//
//Pinata Gateway
//
//JWT: yLGVt1hwQEXdyaSYihgyuVln1isvcpGzNRJ2GUiTXoAkl3Fn2lJ2M69Wz4lndU_I
//
//#################################################################################################
//


export const pinatakey = "ac5edbf278e8d5673c05";
export const pinatasecret = "10217f6efcc1a26f70ecf9a71f7dc5440b9a24d2a3a6ca35821a8d7f7aae38b2";
export const pinatajwt = "yLGVt1hwQEXdyaSYihgyuVln1isvcpGzNRJ2GUiTXoAkl3Fn2lJ2M69Wz4lndU_I";
export const ipfsGateway = "sapphire-suspicious-urial-393";

export const readHeader = {
  "Content-Type": "application/json",
}

export const getHeader = {
  headers: {
    pinata_api_key: pinatakey,
    pinata_secret_api_key: pinatasecret,
  }
}

export const sendJsonHeader = {
  headers: {
    "Content-Type": "application/json",
    pinata_api_key: pinatakey,
    pinata_secret_api_key: pinatasecret,
  }
}
