
export function randomString(length: number) {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

export function randomStringByTime() {
  const val =
    Math.round(Math.random() * 1000).toString(32) +
    new Date().getTime().toString(32) +
    Math.round(Math.random() * 1000).toString(32);
  return val;
}
