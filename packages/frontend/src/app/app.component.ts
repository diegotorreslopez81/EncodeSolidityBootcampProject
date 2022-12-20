import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proof your Knowledge and get an exclusive NFT';
  public isResultSubmitted = false;

  public walletConnected: boolean = false;
  public walletId: string = '';
  provider: ethers.providers.Provider;
    
  constructor(private walletService: WalletService) {
    this.provider = ethers.providers.getDefaultProvider("goerli");
    this.connectToWallet  = async () => {
      const accounts = await this.walletService.connectWallet();
      if(accounts.length > 0){
        this.walletConnected = true;
        this.walletId = accounts[0];
      }
    }
  }

  connectToWallet  = async () => {
  }  
  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }
  ngOnInit(): void {
    this.checkWalletConnected();
  }

  checkIsSubmitted(evt) {
    console.log('evt => ', evt);
    if (evt === 'true') {
      this.isResultSubmitted = true;
    }
  }

  mintNFT() {
    
  } 
}
