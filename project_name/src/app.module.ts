import { Module } from '@nestjs/common';
import { QuizService } from './app.service';
import { QuizController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {}



// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
