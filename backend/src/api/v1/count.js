import express from "express";
import Count from "../../model/Count";

const router = express();

router.get("/next", async (req, res) => {
  if ((await Count.count()) === 0) {
    let newCount = new Count({});
    await newCount.save();
  }

  let count = await Count.findOne().sort({ _id: -1 });
  count.count += 1;

  if (count.count > 5) {
    count.count = 0;
  }

  await count.save();

  return res.json({
    count: count.count
  });
});

router.get("/pre", async (req, res) => {
  if ((await Count.count()) === 0) {
    let newCount = new Count({});
    await newCount.save();
  }

  let count = await Count.findOne().sort({ _id: -1 });
  count.count -= 1;

  if (count.count < 1) {
    count.count = 0;
  }

  await count.save();

  return res.json({
    count: count.count
  });
});

router.get("/", async (req, res) => {
  if ((await Count.count()) === 0) {
    let newCount = new Count({});
    await newCount.save();
  }

  let count = await Count.findOne().sort({ _id: -1 });

  return res.json({
    count: count.count
  });
});

export default router;
