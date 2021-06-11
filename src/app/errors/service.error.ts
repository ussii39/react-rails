export class ServiceError extends Error {
  errorCode: string;
  errorMessage: string | undefined;

  constructor(errorCode: string, errorMessage?: string, e?: string) {
    super(e);
    this.name = new.target.name;
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}
