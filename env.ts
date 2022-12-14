export default class Env {
    static readonly localhost = "localhost";
    static readonly port = Number(process.env.PORT) || 5000;
    static readonly host = "";
    static readonly logsCatalog = "./storage/logs";
    static readonly DEBUG = process.env["NODE_ENV"] != "production";
}