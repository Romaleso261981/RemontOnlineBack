const { Order } = require("../../schemas/order");

async function aboutUserEndPets(req, res) {
  const { user } = req;

  const userWithPet = await Order.find(
    { owner: user._id },
    {
      number: 1,
      serialNumber: 1,
      datecreation: 1,
      brend: 1,
      model: 1,
      customerName: 1,
      customerAddress: 1,
      phone: 1,
      cost: 1,
      descriptionOfRepair: 1,
      descriptionMalfunction: 1,
      nametechnique: 1,
      status: 1,
      _id: 1,
    }
  );
  return res.status(200).json({
    data: {
      userWithPet,
      user,
    },
  });
}

module.exports = aboutUserEndPets;
