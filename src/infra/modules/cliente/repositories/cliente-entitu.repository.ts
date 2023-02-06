import { EntityRepository, MongoRepository } from 'typeorm';
import { ClienteEntity } from '../../database/mongodb/entities/cliente.entity';

@EntityRepository(ClienteEntity)
export class ClienteEntityRepository extends MongoRepository<ClienteEntity> {}
