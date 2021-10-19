import { WebhookRequestBody } from '@line/bot-sdk';

export async function voucher(
  event: WebhookRequestBody,
  _context: any
): Promise<any> {
  console.log(event);

  // BindingsHelper.bindClientConfig(Channel.helpMeConfig[Channel.environment]);

  // const helpMeService: HelpMeService = bindings.get<HelpMeService>(
  //   HelpMeService
  // );
  // try {
  //   switch (
  //   event.events[0].type // eventType
  //   ) {
  //     case 'follow':
  //       await helpMeService.receiveFollowEvent(event.events[0]);
  //       break;
  //     case 'unfollow':
  //       await helpMeService.receiveUnFollowEvent(event.events[0]);
  //       break;
  //     case 'postback':
  //       await helpMeService.receivePostback(event.events[0]);
  //       break;
  //     case 'message':
  //       await helpMeService.receiveMessage(event.events[0]);
  //       break;
  //     default:
  //   }
  // } catch (e) {
  //   console.log(JSON.stringify(e));
  //   await helpMeService.informTeacher(`ERROR!!!!\n${new Date().toString()}`);
  // }
}
