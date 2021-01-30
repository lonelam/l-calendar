// import {
//   Account,
//   Calendar,
//   createAccount,
//   Credentials,
//   syncCalendar,
//   transport,
// } from 'dav';
// import { injectable } from 'inversify';
// import { Observable, Subject } from 'rxjs';

// const xhr = new transport.Basic(
//   new Credentials({
//     username: '',
//     password: '',
//   })
// );
// @injectable()
// export class DavCalendarService {
//   public accountInstance: Account | null = null;
//   private _login$ = new Subject<void>();
//   public login$: Observable<void> = this._login$.asObservable();
//   async createAccount() {
//     const account = await createAccount({
//       xhr,
//       server: 'https://caldav.feishu.cn',
//     });
//     this.accountInstance = account;
//     this._login$.next();
//     return account;
//   }

//   async getCalendarObject() {
//     if (!this.accountInstance) {
//       return null;
//     }
//     const res: Calendar[] = [];
//     for (const c of this.accountInstance.calendars) {
//       res.push(await syncCalendar(c, { xhr }));
//     }
//     return res;
//   }
// }
