/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('product').del()
    await knex('product').insert([
      {
        id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
        customer_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        item_name: 'Breezer Series III',
        description:'Breezer Series III Full fox set up 26 inch wheels Fox fork and fox shock Spank grips Upgraded flat pedals Size medium Shimano brakes Brand new sram nx chain Really good condition.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/Breezer-Series-III-1.jpg',
        price: '$7500',
      },
      {
        id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d4',
        customer_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        item_name: 'Santa Cruz Nomad 2',
        description:'I have a Santa Cruz mtb for sale. Frame is a Large. Didnt really use it much. Bike is in immaculate condition. Suspension works amazing, shifts amazing. Great all around mountain bike.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/The-2022-Santa-Cruz-Bicycles-Chameleon-29er-5.jpg',
        price: '$4500',
      },
      {
        id: 'a193a6a7-42ab-4182-97dc-555ee85e7486',
        customer_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        item_name: 'Giant Reign Advanced pro med',
        description:'Breezer Series III Full fox set up 26 inch wheels Fox fork and fox shock Spank grips Upgraded flat pedals Size medium Shimano brakes Brand new sram nx chain Really good condition.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/DSC7556.jpg',
        price: '$3500',
      },
      {
        id: '8f16bd30-bab5-40af-aca2-b63d5fdd1acc',
        customer_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
        item_name: 'Ritchey Tamalpais',
        description:'I have a Ritchey Tamalpais mtb for sale. Frame is a Large. Didnt really use it much. Bike is in immaculate condition. Suspension works amazing, shifts amazing. Great all around mountain bike.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/Johns-1982-Ritchey-Tamalpais-Mountain-Bike-2.jpg',
        price: '$2850',
      },
      {
        id: 'bdc6bb69-e09c-498d-8abd-be2792504d00',
        customer_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
        item_name: 'Otis Guy Braunstein',
        description:'This is a large Otis Guy Braunstein process in very good condition has upgraded charger 2.1 damper in fork and upgraded 170mm pnw dropper. Also upgraded to 35mm rise race face atlas bars.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/1989-Otis-Guy-Braunstein-Quay-Art-of-the-Mountain-Bike-4.jpg',
        price: '$3850',
      },
      {
        id: 'f3e13429-b5e9-4a50-b01c-75fb07cefhed',
        customer_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
        item_name: 'Cunningham mtb',
        description:'This is a med cunningham in very good condition has upgraded charger 2.1 damper in fork and upgraded 170mm pnw dropper. Also upgraded to 35mm rise race face atlas bars.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/1985-Cunningham-Indian-1.jpg',
        price: '$3250',
      },
      {
        id: 'f3e13429-b5e9-4a50-b01c-75fb07cefced',
        customer_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
        item_name: 'Moots Womble 29er',
        description:'I have a Moots Womble 29er mtb for sale. Frame is a Large. Didnt really use it much. Bike is in immaculate condition. Suspension works amazing.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/The-Dreamiest-Hardtail-a-Review-of-the-Moots-Womble-1.jpg',
        price: '$5200',
      },
      {
        id: 'c04acf73-4a31-4e80-854e-5daaebc05fe0',
        customer_id: '1f4a5687-be2a-4508-a2cd-7e039c0122a5',
        item_name: 'Otto bike',
        description:'I have a Santa Cruz mtb for sale. Frame is a Large. Didnt really use it much. Bike is in immaculate condition. Suspension works amazing, shifts amazing. Great all around mountain bike.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/Jacquie-Phelans-1979-Drop-Bar-Cunningham-39.jpg',
        price: '$5200',
      },
      {
        id: '96a5bb6d-344f-4498-984a-5830e80c43b3',
        customer_id: 'f4f1ac25-403a-4d6d-bdd3-a502026d5fff',
        item_name: 'Oddity bike',
        description:'I have a Santa Cruz mtb for sale. Frame is a Large. Didnt really use it much. Bike is in immaculate condition. Suspension works amazing, shifts amazing. Great all around mountain bike.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/Oddity.jpg',
        price: '$5200',
      },
      {
        id: 'dd861000-340d-4813-b911-102927588978',
        customer_id: 'd6984fbf-224f-4db5-8778-0c0e37a034a2',
        item_name: 'WZRD Bikes',
        description:'I have a WZRD mtb for sale. Frame is a Large. Didnt really use it much. Bike is in immaculate condition. Suspension works amazing, shifts amazing. Great all around mountain bike.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/morgan-taylor-wzrd-bikes-bcxc-22.jpg',
        price: '$5200',
      },
      {
        id: 'dd14bfe1-5a3e-4233-9cd5-92f1f4ad4676',
        customer_id: '12969746-4b1c-4f51-8e49-1a4c535423f8',
        item_name: 'Ritchey No Serial',
        description:'I have a Ritchey No Serial mtb for sale. Frame is a Large. Didnt really use it much. Bike is in immaculate condition. Suspension works amazing, shifts amazing. Great all around mountain bike.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/1980-Ritchey-No-Serial-2.jpg',
        price: '$2400',
      },
      {
        id: '24708357-b8cf-4ca5-90a6-4fa5e40d6323',
        customer_id: '26f54a7c-4e6b-4073-b487-cbfb6c018c2f',
        item_name: 'Crust Bikes',
        description:'Crust Bikes in excellent condition \ santa cruz reserve 30 wheelset carbon sram brakes sram xo1 groupset gold chainring absolute black oval fox performance fork 160mm cash or pick up at 90720',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/2022-Philly-Bike-Expo-Rons-Bikes-x-Crust-Bikes-Alumalith-27.5-ATB-1.jpg',
        price: '$4200',
      },
      {
        id: '2b80c241-0e52-491a-9cc0-5edd7f9be491',
        customer_id: '26f54a7c-4e6b-4073-b487-cbfb6c018c2f',
        item_name: 'Ignite Inferno crank',
        description:'New take-off GX DUB crankset with boost spaced 30t X-Sync chainring and 175mm arms. Bottom bracket not included. Has bit of shop wear as shown in one pic.',
        category: 'Components',
        image_path:'http://localhost:8000/images/part-ignite-inferno-crank.jpeg',
        price: '$400',
      },
      {
        id: 'e99d0411-0245-4cc4-93d0-150026718a0b',
        customer_id: '26f54a7c-4e6b-4073-b487-cbfb6c018c2f',
        item_name: 'Fox dropper seatpost',
        description:'FOX Transfer Factory Dropper Seatpost 31.6, 200 mm, Internal Routing, Kashima Coat Upper The dropper is brand new.',
        category: 'Components',
        image_path:'http://localhost:8000/images/fox-dropper-post.jpeg',
        price: '$800',
      },
      {
        id: '7df72176-7064-4c9b-adc7-c406e3da0b47',
        customer_id: 'd6984fbf-224f-4db5-8778-0c0e37a034a2',
        item_name: 'Wolftooth stainless ss cog',
        description:'I have two new Wolftooth stainless steel singlespeed cogs for sale. Both are brand new and never used. Bought these for a bike that Im selling',
        category: 'Components',
        image_path:'http://localhost:8000/images/allcitycog.jpeg',
        price: '$60',
      },
      {
        id: 'bb959b3f-4d46-4bbc-b3e1-f213cf765a65',
        customer_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
        item_name: 'Pair of MKS pedals',
        description:'I have a set of mks pedals. Both are brand new and never used. Bought these for a bike that Im selling still running smooth. DM me for details',
        category: 'Components',
        image_path:'http://localhost:8000/images/parts-mks-pedals.jpg',
        price: '$40',
      },
      {
        id: 'ce9c3ecf-c766-4421-b70e-3e79a485bfa3',
        customer_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
        item_name: 'Paul Canti brakes',
        description:'The Touring Canti is a powerful cantilever brake with a similar design to the Neo-Retro, but with the arms angled upward.',
        category: 'Components',
        image_path:'http://localhost:8000/images/parts-paul-breaks.jpeg',
        price: '$120',
      },
      {
        id: '48aa03d1-8fae-4979-87f8-31798a29d9f5',
        customer_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
        item_name: 'Wolf Tooth Stem',
        description:'Bring your bars up high and close with the Peeper stem by Discord Components. Designed and made in the USA with wide dirt drop handlebars in mind.',
        category: 'Components',
        image_path:'http://localhost:8000/images/parts-peeper-stem.jpeg',
        price: '$50',
      },
      {
        id: '2f17d3f1-4f97-4bb0-9d38-934a81975627',        
        customer_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        item_name: 'Rene Herse cranks',
        description:'Hello these are brand new never ridden XX1 take-off cranks. They are 170mm 34T Boost. You are purchasing from Flat Tire Co. Bike Shop, DM for questions.',
        category: 'Components',
        image_path:'http://localhost:8000/images/parts-Rene-Herse-cranks.jpeg',
        price: '$250',
      },
      {
        id: '1dfaca2e-5b57-437c-b5bc-6e49b69dd753',       
        customer_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        item_name: 'Team Yo Eddy frame and fork',
        description:'Selling my Team Yo Eddy frame and fork. In good condition.Bike Shop, free shipping in the US. DM for questions. Size XL Karate Monkey includes frame and fork.',
        category: 'Components',
        image_path:'http://localhost:8000/images/parts-team-yo-eddy.jpeg',
        price: '$400',
      },
      {
        id: '90d1c0ae-dfea-436f-a3a3-a2599dc9545a',    
        customer_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
        item_name: 'Wolf Tooth seatpost collar',
        description:'Both are brand new and never used. Bought these for a bike that Im selling still running smooth. Designed and made in the USA. DM me for details',
        category: 'Components',
        image_path:'http://localhost:8000/images/parts-wolftooth-collar.jpeg',
        price: '$40',
      },
      {
        id: 'd644a32c-bbfc-439e-a8a1-499ce7f684ea',   
        customer_id: 'd6984fbf-224f-4db5-8778-0c0e37a034a2',
        item_name: 'Wolf Tooth seatpost collar',
        description:'Both are brand new and never used. Bought these for a bike that Im selling still running smooth. Designed and made in the USA. DM me for details',
        category: 'Components',
        image_path:'http://localhost:8000/images/product-chrisking-bb.jpeg',
        price: '$40',
      },
    ]);
  };