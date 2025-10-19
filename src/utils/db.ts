import { PrismaClient } from "@prisma/client";

export class PrismaService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public get prismaClient(): PrismaClient {
    return this.prisma;
  }
}
