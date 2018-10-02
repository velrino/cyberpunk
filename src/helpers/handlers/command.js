export default class Command {
  emit(body, status = null) {
    return { body, status };
  }
}
