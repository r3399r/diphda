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

  private readonly defaultMessage: Message[] = [
    {
      type: 'text',
      text: '請輸入身分證字號(至少末三碼)查詢五倍加碼券是否中獎，亦可一次查詢多筆(用「，」分隔)',
    },
    {
      type: 'text',
      text: '[範例]\n123\n123，987，456',
    },
    {
      type: 'text',
      text: '非官方，加碼券說明請參閱 https://5000.gov.tw/\n關於程式碼，請參閱 https://tinyurl.com/vcsau6a2',
    },
  ];

  private async replyDefaultTextMessage(replyToken: string) {
    await this.client.replyMessage(replyToken, this.defaultMessage);
  }

  public async receiveFollowEvent(event: FollowEvent) {
    await this.replyDefaultTextMessage(event.replyToken);
  }

  public async receiveMessage(event: MessageEvent) {
    if (event.message.type === 'text') {
      const text = event.message.text;
      if (!StringHelper.allAreCorrectId(text.split('，')))
        await this.client.replyMessage(event.replyToken, [
          {
            type: 'text',
            text: '格式錯誤，請參考下方範例',
          },
          ...this.defaultMessage,
        ]);
      else if (text.split('，').length > 4)
        await this.client.replyMessage(event.replyToken, {
          type: 'text',
          text: '一次最多只能查詢 4 個',
        });
      else {
        const messages: Message[] = text.split('，').map((v: string) => ({
          type: 'text',
          text: this.voucherService.checkNumber(v),
        }));
        await this.client.replyMessage(event.replyToken, [
          ...messages,
          {
            type: 'text',
            text: '由於規則繁複，請以官方公告為準 https://5000.gov.tw/',
          },
        ]);
      }
    } else await this.replyDefaultTextMessage(event.replyToken);
  }
}
