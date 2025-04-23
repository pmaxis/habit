"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config({ path: (0, path_1.join)(__dirname, '../.env') });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
console.log(process.env.JWT_SECRET);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map