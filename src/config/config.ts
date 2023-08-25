import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

export const provider = new ethers.providers.JsonRpcProvider(
  process.env.RPC_URL
);

// sdk Setup, you will need clientId and secretKey for the sdk you can get this from thirdweb
export const sdk = new ThirdwebSDK('fantom-testnet', {
  clientId: process.env.CLIENT_ID,
  secretKey: process.env.SECRET_KEY,
});

// const contract = await sdk.getContract(Address, Abi);
