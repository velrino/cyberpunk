import { getConnection } from 'typeorm';

const connect = async () => getConnection();

export default connect;
