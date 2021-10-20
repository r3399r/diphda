import { injectable } from 'inversify';
import {
  AGRICULTURE,
  ART_FUN_DIGIT,
  ART_FUN_PAPER,
  DOMESTIC_TRAVEL,
  HAKKA,
  I_YAUN,
  REGIONAL_REVITALIZATION,
  SPORTS,
} from 'src/constant/prizeNumber';

/**
 * Service class for check the voucher number.
 */
@injectable()
export class VoucherService {
  public checkNumber(input: string) {
    let message = `號碼 ${input}\n`;
    message += `國旅券：${this.getResult(input, DOMESTIC_TRAVEL, 1000)}\n`;
    message += `i原券：${this.getResult(input, I_YAUN, 1000)}\n`;
    message += `農遊券：${this.getResult(input, AGRICULTURE, 888)}\n`;
    message += `藝FUN券(數位)：${this.getResult(input, ART_FUN_DIGIT, 600)}\n`;
    message += `藝FUN券(紙本)：${this.getResult(input, ART_FUN_PAPER, 600)}\n`;
    message += `動滋券：${this.getResult(input, SPORTS, 500)}\n`;
    message += `客庄券：${this.getResult(input, HAKKA, 500)}\n`;
    message += `地方創生券：${this.getResult(
      input,
      REGIONAL_REVITALIZATION,
      500
    )}`;

    return message;
  }

  private getResult(input: string, prizeNumber: string[], amount: number) {
    let res: string | undefined;
    prizeNumber.every((v: string) => {
      if (input.endsWith(v)) {
        res = `中獎! $${amount} [${v}]`;

        return false;
      }

      return true;
    });
    if (res !== undefined) return res;
    else return '未中獎';
  }
}
