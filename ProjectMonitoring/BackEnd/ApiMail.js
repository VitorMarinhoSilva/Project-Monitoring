import Express from 'Express';
import { Email } from './MailSend.js';

const app = Express();

app.get('/Email', () =>
    Email()
);


app.listen(5000, () => 
console.log('Servidor iniciado na porta 5000')
);