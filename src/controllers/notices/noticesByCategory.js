const { Order } = require("../../schemas/order");

async function noticesByCategory(req, res) {
  const { user } = req;
  const { category } = req.params;

  const userWithPet = await Order.find({ type: category }).limit(100);
  console.log(userWithPet);

  return res.status(200).json({
    data: {
      userWithPet,
      user,
    },
  });
}

module.exports = { noticesByCategory };

// const { Notice } = require("../../schemas/notices");

// const noticesByCategory = async (req, res, next) => {
//   const { category } = req.params;
// console.log(category);
//   try {
//     const result = await Notice.find(
//       { category: category },
//       { name: 0, sex: 0, comments: 0, createdAt: 0, updatedAt: 0, owner: 0 }
//     );

//     // if (!result.length) {
//     //   return res.status(404).json({
//     //     message: "no data found",
//     //     code: 404,
//     //   });
//     // }
//     return res.status(200).json({
//       message: "list of notices by category",
//       code: 200,
//       data: result,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { noticesByCategory };
