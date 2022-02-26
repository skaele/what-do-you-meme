import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface'
const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '4k9HnozuUWP0gyjWARLw',
    database: 'what-do-you-meme-db',
    synchronize: true,
    dropSchema: true,
}

export default options
