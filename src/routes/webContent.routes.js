import { Router } from "express";
import { WebContentcreate,WebContentget,photoUpload } from "../controllers/WebContent.controllers.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/webcontent-post").post(WebContentcreate);
router.route("/webcontent-get").get(WebContentget);
router.route("/photoUpload").post(
    // upload.array("photos", 10),
    upload.fields([
        { name: "appphoto", maxCount: 3 },
        { name: "photos", maxCount: 8 },
    ]),
    photoUpload);


export default router;