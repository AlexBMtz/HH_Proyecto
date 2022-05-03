"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const frequencyroutes_1 = __importDefault(require("./routes/frequencyroutes"));
const programroutes_1 = __importDefault(require("./routes/programroutes"));
const scheduleroutes_1 = __importDefault(require("./routes/scheduleroutes"));
const roleroutes_1 = __importDefault(require("./routes/roleroutes"));
const periodroutes_1 = __importDefault(require("./routes/periodroutes"));
const userroutes_1 = __importDefault(require("./routes/userroutes"));
const coordinatorroutes_1 = __importDefault(require("./routes/coordinatorroutes"));
const studentrouters_1 = __importDefault(require("./routes/studentrouters"));
const teacherRoutes_1 = __importDefault(require("./routes/teacherRoutes"));
const courseroutes_1 = __importDefault(require("./routes/courseroutes"));
const coursedetailsroutes_1 = __importDefault(require("./routes/coursedetailsroutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto: ', this.app.get('port'));
        });
    }
    routes() {
        this.app.use('/api/frequencies', frequencyroutes_1.default);
        this.app.use('/api/programs', programroutes_1.default);
        this.app.use('/api/schedules', scheduleroutes_1.default);
        this.app.use('/api/roles', roleroutes_1.default);
        this.app.use('/api/periods', periodroutes_1.default);
        this.app.use('/api/users', userroutes_1.default);
        this.app.use('/api/coordinators', coordinatorroutes_1.default);
        this.app.use("/api/students", studentrouters_1.default);
        this.app.use("/api/teachers", teacherRoutes_1.default);
        this.app.use("/api/courses", courseroutes_1.default);
        this.app.use("/api/courseDetails", coursedetailsroutes_1.default);
    }
}
const server = new Server();
server.start();
