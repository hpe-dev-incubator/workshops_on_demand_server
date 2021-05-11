import express from "express";
import models from "../models";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Replays
 *   description: Hackshack Replay management
 */

// Get replays
/**
 * @swagger
 * path:
 *  /replays:
 *    get:
 *      summary: Returns a list of replays.
 *      tags: [Replays]
 *      responses:
 *        "200":
 *          description: A JSON array of replay objects
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Replay'
 */
router.get("/replays", (req, res) => {
  models.replays
    .findAll({
      raw: true,
      order: [["id", "ASC"]]
    })
    .then(entries => res.send(entries));
});

export default router;