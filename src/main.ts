import { program } from 'commander';
import { encrypt } from './commands/encrypt.cmd';
import { publish } from './commands/publish.cmd';

program.version('0.0.1');

program.addCommand(encrypt);
program.addCommand(publish);

program.parse(process.argv);
