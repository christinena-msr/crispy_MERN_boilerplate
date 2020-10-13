const router = require("express").Router();
const modelController = require("../../controllers/modelController");

router.route("/")
  .get(modelController.findAll)
  .post(modelController.create)

router
  .route("/:id")
  .get(modelController.findById)
  .put(modelController.update)
  .delete(modelController.remove);

module.exports = router;