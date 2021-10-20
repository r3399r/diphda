import { Client, FollowEvent, Message, MessageEvent } from '@line/bot-sdk';
import { inject, injectable } from 'inversify';
import { StringHelper } from 'src/util/StringHelper';
import { VoucherService } from './VoucherService';

/**
 * Service class for line bot chatting.
 */
@injectable()
export class ChatService {
  @inject(Client)
  private readonly client!: Client;

  @inject(VoucherService)
  private readonly voucherService!: VoucherService;

  private async replyDefaultTextMessage(replyToken: string) {
    await this.client.replyMessage(replyToken, [
      {
        type: 'text',
        text: '請輸入身分證字號(至少末三碼)查詢五倍加碼券是否中獎\n亦可用","分隔一次查詢多筆\n[範例]\n123\n54321\n123,987,456',
      },
      {
        type: 'text',
        text: '非官方，加碼券說明請參閱 https://5000.gov.tw/\n關於程式碼，請參閱 https://tinyurl.com/vcsau6a2',
      },
    ]);
  }

  public async receiveFollowEvent(event: FollowEvent) {
    await this.replyDefaultTextMessage(event.replyToken);
  }

  public async receiveMessage(event: MessageEvent) {
    if (event.message.type === 'text') {
      const text = event.message.text;
      if (!StringHelper.allAreCorrectId(text.split(',')))
        await this.replyDefaultTextMessage(event.replyToken);
      else if (text.split(',').length > 5)
        await this.client.replyMessage(event.replyToken, {
          type: 'text',
          text: '一次最多只能查詢 5 個',
        });
      else {
        const messages: Message[] = text.split(',').map((v: string) => {
          return {
            type: 'text',
            text: this.voucherService.checkNumber(v),
          };
        });
        await this.client.replyMessage(event.replyToken, messages);
      }
    } else await this.replyDefaultTextMessage(event.replyToken);
  }
}
