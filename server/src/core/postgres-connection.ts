import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface'
const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '4k9HnozuUWP0gyjWARLw',
    database: 'what-do-you-meme-db',
    // Typically it is unsafe to use 'synchronize: true' for schema synchronization on production once you get data in your database.
    // https://orkhan.gitbook.io/typeorm/docs/migrations
    synchronize: true,
}

export default options
