export abstract class BaseService<Request = unknown, Response = unknown> {
  abstract execute(request?: Request): Response | Promise<Response>;
}
