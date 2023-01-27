import { request } from '../../../lib/data'
import { formatDate } from '../../../lib/date_util'
import MessageBox from './MessageBox';

export const revalidate = 10;

export default async function Messages() {
  async function loadMessages() {
    const MESSAGES_QUERY = `query Keynotes {
      messageBoards(orderBy: updatedAt_DESC) {
        name
        message
        updatedAt
      }
    }
    `;
  
    const messages = await request({
      query: MESSAGES_QUERY,
    });  
  
    return messages.messageBoards.map((item) => {
      return {
        ...item,
        updatedAt: formatDate(item.updatedAt)
      }
    });
  }
  
  const messages = await loadMessages();

  return <>
    {
      messages.map((item) => {
        return <MessageBox key={`message${item.updatedAt}`} item={item} />
      })
    }
  </>
}