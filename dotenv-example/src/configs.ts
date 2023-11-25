const DATABASE_URL: string = `${process.env.DATABASE_URL}`;

const PORT: number = parseInt(`${process.env.PORT || 3000}`);

export default {
    DATABASE_URL,
    PORT
}