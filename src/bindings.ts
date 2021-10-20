import { Container } from 'inversify';
import 'reflect-metadata';
import { ChatService } from 'src/logic/ChatService';
import { VoucherService } from 'src/logic/VoucherService';

const container: Container = new Container();

container.bind<ChatService>(ChatService).toSelf();
container.bind<VoucherService>(VoucherService).toSelf();

export { container as bindings };
