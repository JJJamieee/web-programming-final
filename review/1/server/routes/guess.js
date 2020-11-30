import express from "express";
import getNumber from "../core/getNumber";

const router = express.Router();

function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) {
    return null;
  }
  return parsed;
}

// nothing needed to do here, just getNumber to set a number.
router.post("/start", (_, res) => {
  getNumber(true);

  res.json({ msg: "The game has started." });
});

router.get("/guess", (req, res) => {
  const number = getNumber();
  const guessed = roughScale(req.query.number, 10);

  if (guessed !== 0 && !guessed) {
    res.status(200).send({ msg: "No number provided." });
  } else if (guessed < 0 || guessed > 99) {
    res.status(200).send({ msg: "Please guess number between [0, 99]." });
  }

  // TODO (done)
  // checked if number and guessed are the same, response with some hint
  if (number === guessed) {
    res.status(200).send({ msg: "Well guess!" });
  } else if (guessed < number) {
    res.status(200).send({ msg: "The number you guessed was too small QQ" });
  } else {
    res.status(200).send({ msg: "The number you guessed was too large QQ" });
  }
});

// TODO (done)
// add router.post('/restart',...)
router.post("/restart", (_, res) => {
  getNumber(true);

  res.json({ msg: "The game has restarted." });
});

export default router;
