import { post } from '../../lib/data';


async function sendMessage(message, name) {
  const MESSAGE_MUTATION = `mutation MyMutation {
    createMessageBoard(data: {message: "${message}", name: "${name}"}) {
      id
    }
    publishManyMessageBoards(to: PUBLISHED) {
      count
    }
  }`;

  const result = await post({
    query: MESSAGE_MUTATION,
  });  
  
  return result;
}

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const result = await sendMessage(body.message, body.name);

  res.status(200).json({ name: 'John Doe' });
}
