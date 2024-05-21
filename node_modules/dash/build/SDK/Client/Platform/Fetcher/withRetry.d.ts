/**
 * Maximum number of retry attempts
 */
declare const withRetry: <T>(query: (...args: any[]) => Promise<T>, maxAttempts: number, delayMulMs: number) => Promise<T>;
export default withRetry;
