/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('customer').del();
    await knex('customer').insert([
      {
        id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        customer_name: 'Frank ',
        email: 'frank@gmail.com',
      },
      {
        id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        customer_name: 'Jason Data',
        email: 'jason@gmail.com',
      },
      {
        id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
        customer_name: 'Sean Rathbun',
        email: 'sean@gmail.com',
      },
      {
        id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
        customer_name: 'Brock Kelly',
        email: 'brock@gmail.com',
      },
      {
        id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
        customer_name: 'Gerry Roach',
        email: 'gerry@gmail.com',
      },
      {
        id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
        customer_name: 'Serena Pardy',
        email: 'serena@gmail.com',
      },
    ]);
  };