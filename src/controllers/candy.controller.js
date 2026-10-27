import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../utils/AppError.js";

export class CandyController {
  constructor(candyService) {
    this.candyService = candyService;
  }

  list = asyncHandler(async (req, res) => {
    const candies = await this.candyService.list();

    res.render("candy/list", { candies });
  });

  details = asyncHandler(async (req, res) => {
    const candyId = Number(req.params.id);

    const candy = await this.candyService.read(candyId);

    res.render("candy/details", { candy });
  });

  edit = asyncHandler(async (req, res) => {
    const candyId = Number(req.params.id);
    const payload = req.body;

    const updatedCandy = await this.candyService.update(candyId, payload);

    res.redirect("/doces/" + updatedCandy.id);
  });

  delete = asyncHandler(async (req, res) => {
    const candyId = Number(req.params.id);

    await this.candyService.delete(candyId);

    res.redirect("/doces");
  });

  create = asyncHandler(async (req, res) => {
    const payload = req.body;

    const newCandy = await this.candyService.create(payload);

    res.redirect("/doces/" + newCandy.id);
  });

  form = asyncHandler(async (req, res) => {
    res.render("candy/form");
  });
}
