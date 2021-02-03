const express = require("express");
const router = express.Router();

// Controller
const controllerCharacter = require("../../controllers/characterController")

// @routes GET api/characters
// @description Get all characters
router.get("/", controllerCharacter.findAll);

// @routes GET api/characters/i
// @description Get all characters
router.get("/:id", controllerCharacter.findOne);

// @routes POST api/characters/
// @description Create a character
router.post("/", controllerCharacter.create);

// @routes PUT api/characters/:id
// @description Update a character
router.patch("/:id", controllerCharacter.update);

// @routes DELETE api/characters/:id
// @description Delete a character
router.delete('/:id', controllerCharacter.remove);


module.exports = router;
