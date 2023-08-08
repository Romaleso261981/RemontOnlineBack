const { Order } = require("../../schemas/order");
const { User } = require("../../schemas/user");

const addOrder = async (req, res) => {
  // const owner = req.user.id;
  const owner = '642e8dbdc1a738bdb26c8091';
  const petData = req.body;
  const data = { owner, ...petData };
  // const data = !!req.file
  //   ? { photo: req.file.path, owner, ...petData }
  //   : { owner, ...petData };

  Order.create(data)
    .then((order) => {
      if (order) {
        User.findByIdAndUpdate(owner, { $push: { userAddPet: order._id } })
          .then(async (user) => {
            if (user) {
              const allUserPets = await Order.find(
                { owner: owner },
                {
                  number: 1,
                  nametechnique: 1,
                  serialNumber: 1,
                  datecreation: 1,
                  brend: 1,
                  model: 1,
                  customerName: 1,
                  customerAddress: 1,
                  phone: 1,
                  photo: 1,
                  descriptionOfRepair: 1,
                  descriptionMalfunction: 1,
                  status: 1,
                  owner: 1,
                  cost: 1,
                }
              );
              res.status(201).json({ success: true, allUserPets });
            }
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: err, message: err.message })
    );
};

module.exports = addOrder;
