export function limitStringTo100Chars(str: string): string {
  const limit = 100;

  if (str.length > limit) {
    return str.substring(0, limit) + "...";
  }
  return str;
}
