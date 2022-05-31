import { createConnection } from "typeorm";

import { User, Post } from "./entity";

async function main(): Promise<void> {
    const conn = await createConnection({
        type: "mysql",
        url: "mysql://user:password@localhost:3306/dbname",
        timezone: "Z",
        entities: [
            //
            User,
            Post,
        ],

        synchronize: false,
        // debug: true,
    });

    const userRepo = conn.getRepository<User>(User);

    const users = await userRepo
        .createQueryBuilder("u")
        .distinct(false)
        .select()
        .innerJoin("Post", "p", "p.user_id = u.id")
        .where("p.id = :pid", { pid: 1 })
        .getMany();

    console.log(users);

    const user2 = await userRepo.findOne(2);
    console.log(user2);

    await conn.close();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
