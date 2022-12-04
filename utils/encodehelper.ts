import { 
    shaEncryption
} from "../dependence.ts";

export const shaEncrypt = (text: string) => 
    new shaEncryption().update(text).hex()