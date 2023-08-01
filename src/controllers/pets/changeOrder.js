const { Order } = require('../../schemas/order');
const { NotFound } = require("http-errors");

const changeOrder = async (req, res) => {
   const { descriptionMalfunction, descriptionOfRepair, cost } = req.body;
   const { orderId } = req.params;

   const oldUser = await Order.findById(orderId);


   const newCost = cost === '' ? oldUser.cost : cost;
   const newDescriptionMalfunction = descriptionMalfunction === '' ? oldUser.descriptionMalfunction : descriptionMalfunction;
   const newDescriptionOfRepair = descriptionOfRepair === '' ? oldUser.descriptionOfRepair : descriptionOfRepair;

   try {
      const newUser = await Order.findByIdAndUpdate(orderId, {
         cost: newCost,
         descriptionMalfunction: newDescriptionMalfunction,
         descriptionOfRepair: newDescriptionOfRepair,
      });

      if (!newUser) {
         throw new NotFound(`Order with id = ${orderId} not found`);
       }

      res.json({
         status: 'success',
         code: 200,
         message: 'Order updated successfully',
         newUser,
      });
   } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
   }
};

module.exports = changeOrder;
