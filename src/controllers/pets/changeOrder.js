const { Order } = require('../../schemas/order');
// const { NotFound } = require("http-errors");

const changeOrder = async (req, res) => {
   const { descriptionMalfunction, descriptionOfRepair, cost } = req.body;
   // const { orderId } = req.params;
   const orderId  = '642e8dbdc1a738bdb26c8091';

   try {
      const result = await Order.findByIdAndUpdate(orderId, {
         cost,
         descriptionMalfunction,
         descriptionOfRepair,
      });

      if (!result) {
         return res.status(404).json({ status: 'error', message: `Order with id = ${orderId} not found` });
      }

      res.json({
         status: 'success',
         code: 200,
         message: 'Order updated successfully',
         result,
      });
   } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
   }
};

module.exports = changeOrder;
