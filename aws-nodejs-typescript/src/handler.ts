import { APIGatewayProxyHandler } from "aws-lambda"
import "source-map-support/register"

const pkg = require("../package.json") // eslint-disable-line


export const hello: APIGatewayProxyHandler = async (event, ctx) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: pkg.name,
      version: pkg.version,
      message: "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      event,
      env: process.env,
    }),
  }
}
