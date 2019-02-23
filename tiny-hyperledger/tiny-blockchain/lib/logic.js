/**
* Buy card transaction
* @param {org.example.biznet.shipmentTransaction} shipment
* @transaction
 */
async function executeShipment(shipment){
    if (shipment.shipment){
       
        shipment.shipment.owner = shipment.to;  //set card owner to newOwner
        return getAssetRegistry("org.example.biznet.Shipment")
            .then(assetRegistry => {
                return assetRegistry.update(shipment.shipment); //updates card
            })

    }
 }