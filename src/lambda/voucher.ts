import { WebhookRequestBody } from '@line/bot-sdk';
import { bindings } from 'src/bindings';
import { ChatService } from 'src/logic/ChatService';
import { BindingsHelper } from 'src/util/BindingsHelper';

export async function voucher(
  event: WebhookRequestBody,
  _context: any
): Promise<any> {
  BindingsHelper.bindClientConfig({
    channelAccessToken: String(process.env.CHANNEL_TOKEN),
    channelSecret: String(process.env.CHANNEL_SECRET),
  });

  const chatService: ChatService = bindings.get<ChatService>(ChatService);
  const eventType = event.events[0].type;

  try {
    switch (eventType) {
      case 'follow':
        await chatService.receiveFollowEvent(event.events[0]);
        break;
      case 'message':
        await chatService.receiveMessage(event.events[0]);
        break;
      default:
    }
  } catch (e) {
    console.error('[ERROR]', JSON.stringify(e));
  }
}
