import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.biznet{
   export class Business extends Participant {
      businessId: string;
      businessName: string;
   }
   export class Shipment extends Asset {
      shipmentId: string;
      amount: string;
      product: string;
      owner: Business;
   }
   export class shipmentTransaction extends Transaction {
      shipment: Shipment;
      to: Business;
      from: Business;
   }
// }
