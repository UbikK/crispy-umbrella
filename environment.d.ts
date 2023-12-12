declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CMS_TOKEN: string;
      NODE_ENV: "development" | "production";
      CMS_URL: string;
      AUTH0_CLIENT_ID: string;
      AUTH0_CLIENT_SECRET: string;
      AUTH0_ISSUER: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
