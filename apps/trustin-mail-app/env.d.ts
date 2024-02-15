declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    SALT_ROUND: string;
  }
}
