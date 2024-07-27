const getCars = async (req, res) => {
  const owner = "642e8dbdc1a738bdb26c8091";

  const carsRespons = {
    total: 3,
    limit: 5,
    page: 1,
    data: [
      {
        _id: "5f8f3d1b2b915f6e8c7b9d0e",
        name: "Audi",
        model: "A6",
        price: 50000,
        owner
      },
      {
        _id: "5f8f3d1b2b915f6e8c7b9d0f",
        name: "BMW",
        model: "X5",
        price: 70000,
        owner
      },
      {
        _id: "5f8f3d1b2b915f6e8c7b9d10",
        name: "Mercedes",
        model: "E-class",
        price: 60000,
        owner
      }
    ]
  };
  return res.status(201).json({
    status: "successful",
    carsRespons
  });
};

module.exports = getCars;
