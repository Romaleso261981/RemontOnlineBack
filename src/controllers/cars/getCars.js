const getCars = async (req, res) => {
  const owner = "642e8dbdc1a738bdb26c8091";

  const carsRespons = {
    total: 10,
    limit: 5,
    page: 2,
    data: [
      {
        id: 4320,
        brand: "Opel",
        price: 780987,
        year: 2023
      },
      {
        id: 4319,
        brand: "Reno",
        price: 324019,
        year: 2013
      },
      {
        id: 4318,
        brand: "Hundai",
        price: 987000,
        year: 2013
      },
      {
        id: 4317,
        brand: "Skoda",
        price: 453007,
        year: 1998
      },
      {
        id: 4316,
        brand: "Lada",
        price: 4500,
        year: 1991
      },
      {
        id: 4315,
        brand: "Maybach",
        price: 940050,
        year: 2024
      },
      {
        id: 4314,
        brand: "Toyota",
        price: 400500,
        year: 2019
      },
      {
        id: 4313,
        brand: "BMW",
        price: 389000,
        year: 2000
      },
      {
        id: 3709,
        brand: "AUDi",
        price: 2000,
        year: 2000
      },
      {
        id: 3642,
        brand: "AUDi",
        price: 2000,
        year: 2000
      }
    ]
  };
  return res.status(201).json({
    status: "successful",
    carsRespons
  });
};

module.exports = getCars;
