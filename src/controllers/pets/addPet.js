const { Pet } = require("../../schemas/pet");
const { User } = require("../../schemas/user");

const addPet = async (req, res) => {
  const owner = req.user.id;
  const petData = req.body;
  console.log(petData);
  const data = { owner, ...petData };
  // const data = !!req.file
  //   ? { photo: req.file.path, owner, ...petData }
  //   : { owner, ...petData };

  Pet.create(data)
    .then((pet) => {
      if (pet) {
        User.findByIdAndUpdate(owner, { $push: { userAddPet: pet._id } })
          .then(async (user) => {
            if (user) {
              const allUserPets = await Pet.find(
                { owner: owner },
                {
                  nametechnique: 1,
                  datecreation: 1,
                  model: 1,
                  phone: 1,
                  photo: 1,
                  comments: 1,
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

module.exports = addPet;
