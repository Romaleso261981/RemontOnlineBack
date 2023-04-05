const { Pet } = require("../../schemas/pet");

async function aboutUserEndPets(req, res) {
  const { user } = req;

  const data = await Pet.find();
  const userWithPet = await Pet.find(
    { owner: user._id },
    {
      nametechnique: 1,
      model: 1,
      phone: 1,
      photo: 1,
      comments: 1,
      datecreation: 1,
      _id: 1,
    }
  );
  return res.status(200).json({
    data: {
      userWithPet,
      user,
      data,
    },
  });
}

module.exports = aboutUserEndPets;
