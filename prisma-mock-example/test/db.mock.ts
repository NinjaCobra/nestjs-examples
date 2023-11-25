import { PrismaClient, users } from "@prisma/client";
import { DeepMockProxy, mockDeep, mockReset } from "jest-mock-extended";
import prisma from "../src/db";

jest.mock("../src/db", () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>()
}))

beforeEach(() => {
    mockReset(prismaMock);
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

export const userMock = {
    id: 1,
    age: 35,
    name: "ninjacobra",
    uf: "RS"
} as users;