// Logs requests to our server:
// Example: Fri, 06 Mar 2026 00:31:05 GMT GET /favicon.ico
import { NextFunction, Request, Response } from "express";

const logging = (request: Request, _response: Response, next: NextFunction): void => {
  console.log(`${new Date().toUTCString()} ${request.method} ${request.path}`);
  next();
};

export default logging;
