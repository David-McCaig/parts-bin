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
        item_name: 'Santa Cruz Nomad',
        description:'Load up the van, hit the road, climb a mountain.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/Breezer-Series-III-1.jpg',
        price: '$7500',
      },
      {
        id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d4',
        customer_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        item_name: 'Santa Cruz Nomad 2',
        description:'Load up the van, hit the road, climb a mountain, hammer it back down.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/The-2022-Santa-Cruz-Bicycles-Chameleon-29er-5.jpg',
        price: '$4500',
      },
      {
        id: 'a193a6a7-42ab-4182-97dc-555ee85e7486',
        customer_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        item_name: 'Giant Reign Advanced pro med',
        description:'Really great bike. Only used for a couple seasons in mint condition',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/DSC7556.jpg',
        price: '$3500',
      },
      {
        id: '8f16bd30-bab5-40af-aca2-b63d5fdd1acc',
        customer_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
        item_name: 'Marin Rift Zone 3 med',
        description:'I have a Marin Rift Zone 3 mtb for sale. Frame is a Large. Didn’t really use it much. Bike is in immaculate condition. Suspension works amazing, shifts amazing. Great all around mountain bike.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/Johns-1982-Ritchey-Tamalpais-Mountain-Bike-2.jpg',
        price: '$2850',
      },
      {
        id: 'bdc6bb69-e09c-498d-8abd-be2792504d00',
        customer_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
        item_name: 'Kona Process large',
        description:'This is a large 2020 KONA process in very good condition has upgraded charger 2.1 damper in fork and upgraded 170mm pnw dropper. Also upgraded to 35mm rise race face atlas bars.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/1989-Otis-Guy-Braunstein-Quay-Art-of-the-Mountain-Bike-4.jpg',
        price: '$3850',
      },
      {
        id: 'f3e13429-b5e9-4a50-b01c-75fb07cefded',
        customer_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
        item_name: 'Kona Process large',
        description:'This is a large 2020 KONA process in very good condition has upgraded charger 2.1 damper in fork and upgraded 170mm pnw dropper. Also upgraded to 35mm rise race face atlas bars.',
        category: 'Bikes',
        image_path:'http://localhost:8000/images/1985-Cunningham-Indian-1.jpg',
        price: '$3250',
      },
    ]);
  };