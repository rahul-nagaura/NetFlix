import OpenAI from 'openai';
import { gptkey } from './constant';
const openai = new OpenAI({
  apiKey: gptkey, 
  dangerouslyAllowBrowser: true// This is the default and can be omitted
});

export default openai;