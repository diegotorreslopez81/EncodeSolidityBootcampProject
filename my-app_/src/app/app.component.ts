import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  submitAnswer() {
    throw new Error('Method not implemented.');
  }
  public walletConnected: boolean = false;
  public walletId: string = '';
  provider: ethers.providers.Provider;

  title = 'Proof your Knowledge and get an exclusive NFT';

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
}