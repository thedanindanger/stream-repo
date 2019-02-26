# Commands

Go to server directory run ./startFabric.sh

Once running got to directory with bna file, upload bna if not present

    composer network install --archiveFile tiny-blockchain@0.0.1.bna --card PeerAdmin@hlfv1

Start the installed card

    composer network start --networkName tiny-blockchain --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1


Import local network card

    composer card import --file tiny-blockchain-admin.card 

Now run

    composer-playground

anywhere

For automatic rest server type

    composer-rest-server

Pick your network and got to localhost:3000/explorer

run yeoman composer again

   yo hyperledger-composer

pick the running business network

name it whatever

network card is admin@tiny-blockchain

Do not use namespaces

cd to app directory

Run

    npm install

   npm start


   

