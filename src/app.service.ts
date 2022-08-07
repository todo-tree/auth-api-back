import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';

@Injectable()
export class AppService {
  getHello(token: string): Promise<any> | any {
    return admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        return decodedToken;
      })
      .catch((err) => {
        throw err.code;
      });
  }
}
