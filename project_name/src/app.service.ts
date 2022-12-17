import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers, Signer } from 'ethers';


@Injectable()
export class QuizService {
//  quiz: Quiz[] = [
//   {
//     id: 1,
//     texte: "Who create btc?",
//     correct: "Satoshi"
//  },
//  {
//   id: 2,
//   texte: "Whois the boss eth?",
//   correct: "Vitalik"
// },
// ]


  provider: ethers.providers.Provider;
  
  constructor(private configService: ConfigService ) {
    this.provider =  ethers.getDefaultProvider('goerli')
    }

  getNextQuestion() {
    return this.provider.get('/api/next-question');
  }

  submitAnswer(answer: number) {
    return this.provider.post('/api/submit-answer', { answer });
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuizService {

//   constructor(private http: HttpClient) { }

//   getNextQuestion() {
//     return this.http.get('/api/next-question');
//   }

//   submitAnswer(answer: number) {
//     return this.http.post('/api/submit-answer', { answer });
//   }
// }








//////////////////////////////////////////////////////////////

// import { EtherscanProvider } from '@ethersproject/providers';
// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { ethers } from 'ethers';

// @Injectable()
// export class AppService {
// provider: ethers.providers.Provider;

// // constructor(private configService: ConfigService) {
// //   this.provider = ethers.getDefaultProvider('goerli');
// // }

//   claimTokens() {
    
//   }



  // getAdd(): any {
  //   return "Okey";
  // }
  // getLastBlock(): any {
  //   const provider = ethers.getDefaultProvider("goerli");
  //   return provider.getBlock("latest");
  // }

//   getHello(): string {
//     return 'Hello World!';
//   }

// }
