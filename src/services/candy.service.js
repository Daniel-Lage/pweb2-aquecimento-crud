import { AppError } from "../utils/AppError.js";

export class CandyService {
  constructor(candyRepository) {
    this.candyRepository = candyRepository;
  }

  async create(payload) {
    payload.preco = Number(payload.preco);

    if (payload.preco <= 0) {
      throw new AppError("Preço deve ser maior que zero", 400);
    }

    const existingCandy = await this.candyRepository.readByName(payload.nome);

    if (existingCandy) {
      throw new AppError("Doce já cadastrado", 409);
    }

    return await this.candyRepository.create(payload);
  }

  async list() {
    return await this.candyRepository.list();
  }

  async read(id) {
    const candy = await this.candyRepository.read(id);

    if (!candy) {
      throw new AppError("Doce não foi encontrado", 404);
    }

    return candy;
  }

  async update(id, payload) {
    await this.read(id);

    payload.preco = Number(payload.preco);

    return await this.candyRepository.update(id, payload);
  }

  async delete(id) {
    await this.read(id);
    return await this.candyRepository.delete(id);
  }
}
