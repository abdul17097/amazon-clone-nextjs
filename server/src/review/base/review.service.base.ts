/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Review, Product, User } from "@prisma/client";

export class ReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReviewCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewCountArgs>
  ): Promise<number> {
    return this.prisma.review.count(args);
  }

  async findMany<T extends Prisma.ReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindManyArgs>
  ): Promise<Review[]> {
    return this.prisma.review.findMany(args);
  }
  async findOne<T extends Prisma.ReviewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindUniqueArgs>
  ): Promise<Review | null> {
    return this.prisma.review.findUnique(args);
  }
  async create<T extends Prisma.ReviewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewCreateArgs>
  ): Promise<Review> {
    return this.prisma.review.create<T>(args);
  }
  async update<T extends Prisma.ReviewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewUpdateArgs>
  ): Promise<Review> {
    return this.prisma.review.update<T>(args);
  }
  async delete<T extends Prisma.ReviewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewDeleteArgs>
  ): Promise<Review> {
    return this.prisma.review.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.review
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
