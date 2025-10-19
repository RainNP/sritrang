import { PrismaService } from "../utils/db";

export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: string) {
    return await this.prisma.prismaClient.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        userTier: true,
        profilePictureUrl: true,
        points: true,
      },
    });
  }
}
