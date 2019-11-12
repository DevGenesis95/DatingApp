import { Injectable } from '@angular/core';
import * as altertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(messgae: string, okCallback: () =>  any) {
altertify.confirm(messgae, (e: any) => {
  if (e) {
    okCallback();
  } else {}
});
}

success(messgae: any) {
  altertify.success(messgae);
}

error(messgae: any) {
  altertify.error(messgae);
}
warning(messgae: any) {
  altertify.warning(messgae);
}
message(messgae: any) {
  altertify.message(messgae);
}
}
