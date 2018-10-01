import typeorm from 'typeorm';

export default {
  create(Model, object) {
    return typeorm.getManager().getRepository(Model).save(object);
  },
  list(Model) {
    return typeorm.getManager().getRepository(Model).find();
  },
  first(Model, id) {
    return typeorm.getManager().getRepository(Model).findOne(id);
  },
};
