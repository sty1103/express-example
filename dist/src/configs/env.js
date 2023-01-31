"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
if (process.env.NODE_ENV === 'production') {
    dotenv_1.default.config({ path: path_1.default.resolve('.env.production') });
}
else if (process.env.NODE_ENV === 'development') {
    dotenv_1.default.config({ path: path_1.default.resolve('.env.development') });
}
else {
    dotenv_1.default.config({ path: path_1.default.resolve('.env.local') });
}
