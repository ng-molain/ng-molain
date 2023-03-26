

export const CHAR_CODE_A = 'A'.charCodeAt(0);

/**
 * seq from 0
 * @param seq
 */
export function seqToChar(seq: number): string {
  return String.fromCharCode(CHAR_CODE_A + seq);
}
