export const logError = (url: string, err: Zod.ZodIssue) => {
  console.error(`⛔️ ERROR::[${url}]::[${err.path}]::${err.message}`);
};
