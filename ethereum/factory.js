import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x34cB421c5c2Cb711e436400ed5e8B7B64fDd5176'
);

export default instance;