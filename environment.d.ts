declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CMS_TOKEN: string;
      NODE_ENV: "development" | "production";
      CMS_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
