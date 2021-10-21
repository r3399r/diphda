import { injectable } from 'inversify';
import { vouchers } from 'src/constant/voucher';

/**
 * Service class for check the voucher number.
 */
@injectable()
export class VoucherService {
  public checkNumber(input: string) {
    let message = `號碼 ${input}\n`;
    message += `第1週: ${this.checkWeek(input, 0)}\n`;
    message += `第2週: ${this.checkWeek(input, 1)}\n`;
    message += `第3週: ${this.checkWeek(input, 2)}\n`;
    message += `第4週: ${this.checkWeek(input, 3)}\n\n`;
    message += '由於規則繁複，請以官方公告為準';

    return message;
  }

  private isBingo(input: string, prizeNumber: string[]) {
    let isBingo: boolean = false;
    prizeNumber.every((v: string) => {
      if (input.endsWith(v)) {
        isBingo = true;

        return false;
      }

      return true;
    });

    return isBingo;
  }

  private checkWeek(input: string, week: number) {
    let message = '未中';
    for (const v of vouchers) {
      if (v.prizeNumberByWeek[week] === undefined) {
        message += ' (本週尚未開完)';
        break;
      }
      const isBingo = this.isBingo(input, v.prizeNumberByWeek[week]);
      if (isBingo && message === '未中') message = `中! ${v.name}$${v.amount}`;
      else if (isBingo) message += `、${v.name}$${v.amount}`;
    }

    return message;
  }
}
