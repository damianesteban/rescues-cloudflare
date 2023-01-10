import type { PrismaClient } from '@prisma/client/edge';


export const resolvers = {
  Query: {
    rescues: async (_parent: any, _args: any, ctx: { prisma: PrismaClient}) => {
      return await ctx.prisma.rescue.findMany();
    },
    rescuers: async (_parent: any, _args: any, ctx: { prisma: PrismaClient}) => {
      return await ctx.prisma.rescuer.findMany();
    },
    rescue: async (_parent: any, args: any, ctx: { prisma: PrismaClient}) => {
      return await ctx.prisma.rescue.findUnique({
        where: {
          id: parseInt(args.id),
        },
      });
    },
    rescuer: async (parent: any, args: any, ctx: { prisma: PrismaClient }) => {
      return await ctx.prisma.rescuer.findUnique({
        where: {
          id: parseInt(args.id),
        },
      });
    }
  },
  Mutation: {
    createRescue: async (parent: any, args: any, ctx: { prisma: PrismaClient }) => {
      return await ctx.prisma.rescue.create({
        data: {
          name: args.name
        },
      });
    },
    createRescuer: async (parent: any, args: any, ctx: { prisma: PrismaClient }) => {
      return await ctx.prisma.rescuer.create({
        data: {
          name: args.name
        },
      });
    },
  },
  Rescue: {
    rescuers: async (parent: any, args: any, ctx: { prisma: PrismaClient }) => {
      return await ctx.prisma.rescue.findUnique({
        where: {
          id: parent.id,
        },
      }).rescuers();
    }
  },
  Rescuer: {
    rescues: async (parent: any, args: any, ctx: { prisma: PrismaClient }) => {
      return await ctx.prisma.rescuer.findUnique({
        where: {
          id: parent.id,
        },
      }).rescues();
    }
  }
}

