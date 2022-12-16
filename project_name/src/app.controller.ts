import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuizService } from './app.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('next-question')
  getNextQuestion() {
    return this.quizService.getNextQuestion();
  }

  @Post('submit-answer')
  submitAnswer(@Body() answer: number) {
    return this.quizService.submitAnswer(answer);
  }
}


// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { ethers } from 'ethers';
// import { AppService, QuizService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

  // @Post('claim-tokens')
  // claimTokens(@Body() body: any){
  //   return this.appService.claimTokens();
  // }


  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get("last-block")
  // getLastBlock(): any {
  //   return this.appService.getLastBlock();
  // }

  // @Get("addition")
  // getAdd(): any {
  //   return this.appService.getAdd() + " " +this.appService.getHello();
  // }
// }
