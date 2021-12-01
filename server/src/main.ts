import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as cookieParser from 'cookie-parser';

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    const config = new DocumentBuilder()
        .setTitle('Сервер для emg-крипты')
        .setDescription('Документация REST API')
        .setVersion('0.1.0')
        .build()
    app.use(cookieParser());
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)


    await app.listen(PORT, () => console.log(`server started on port = ${PORT}`))
}

start()
