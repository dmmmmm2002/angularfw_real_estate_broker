import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../../shared/services/loading.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnDestroy {
  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private loadingService: LoadingService) { }

  ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe;
  }

  async signin() {
    this.loading = true;
    //promise
    /*this.loadingService.loadingWithPromise(this.email.value as string, this.password.value as string).then((_: boolean) => {
      this.router.navigateByUrl('/main')
    }).catch(error => {
      console.error(error, 'Incorrect email or password!');
    }).finally(() => {
      console.log('Executed finally.');
    });*/

    //async-await
    /*try {
      const _ = await this.loadingService.loadingWithPromise(this.email.value as string, this.password.value as string);
      this.router.navigateByUrl('main');
    } catch (error) {
      console.error(error, 'Incorrect email or password!');
    }
    console.log('Executed finally.');*/


    // Observable
    // memory leak
    this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value as string, this.password.value as string)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            this.router.navigateByUrl('/main');
          }, error: (error) => {
            this.loading = false;
            console.error(error);
          }, complete: () => {
            this.loading = false;
            console.log('finally');
          }
        }
      );
  }
}
