import { HandleError } from "./handleError";
import { Service } from "./service";
import { main } from "./app";

const handleError = new HandleError();
const service = new Service();
main(handleError, service);