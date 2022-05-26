import { Md5 } from 'ts-md5/dist/md5';

export class SecurityUtils {

    //Funzione che genera l'MD5 della password!
    public static computeMd5(plain_password: string): string {
        return Md5.hashStr(plain_password)
    }
}