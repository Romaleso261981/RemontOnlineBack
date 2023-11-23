const { Order } = require('../../schemas/order')
// const { NotFound } = require("http-errors");

const changeOrder = async (req, res) => {
	const { descriptionOfRepair, cost } = req.body
	const { orderId } = req.params

	try {
		const result = await Order.findByIdAndUpdate(orderId, {
			cost,
			descriptionOfRepair
		})

		if (!result) {
			return res.status(404).json({ status: 'error', message: `Order with id = ${orderId} not found` })
		}

		const category = 'прийнятий'

		const userWithPet = await Order.find({ type: category }).limit(100)

		res.json({
			status: 'success',
			code: 200,
			message: 'Order updated successfully',
			userWithPet
		})
	} catch (error) {
		res.status(500).json({ status: 'error', message: error.message })
	}
}

module.exports = changeOrder
