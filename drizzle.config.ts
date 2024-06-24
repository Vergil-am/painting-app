import {defineConfig} from "drizzle-kit"

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./db/migration",
    dialect: "postgresql",
    dbCredentials: {
        // url : process.env.DATABASE_URL!
        url: "postgresql://Vergil-am:X3oI9nlqdaTr@ep-falling-rain-717340.eu-central-1.aws.neon.tech/painting-app?sslmode=require"
    }
})