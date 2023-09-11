/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GlAllocateHistory } from "@prisma/client";

export class GlAllocateHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GlAllocateHistoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GlAllocateHistoryCountArgs>
  ): Promise<number> {
    return this.prisma.glAllocateHistory.count(args);
  }

  async findMany<T extends Prisma.GlAllocateHistoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GlAllocateHistoryFindManyArgs>
  ): Promise<GlAllocateHistory[]> {
    return this.prisma.glAllocateHistory.findMany(args);
  }
  async findOne<T extends Prisma.GlAllocateHistoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GlAllocateHistoryFindUniqueArgs>
  ): Promise<GlAllocateHistory | null> {
    return this.prisma.glAllocateHistory.findUnique(args);
  }
  async create<T extends Prisma.GlAllocateHistoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GlAllocateHistoryCreateArgs>
  ): Promise<GlAllocateHistory> {
    return this.prisma.glAllocateHistory.create<T>(args);
  }
  async update<T extends Prisma.GlAllocateHistoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GlAllocateHistoryUpdateArgs>
  ): Promise<GlAllocateHistory> {
    return this.prisma.glAllocateHistory.update<T>(args);
  }
  async delete<T extends Prisma.GlAllocateHistoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GlAllocateHistoryDeleteArgs>
  ): Promise<GlAllocateHistory> {
    return this.prisma.glAllocateHistory.delete(args);
  }
}