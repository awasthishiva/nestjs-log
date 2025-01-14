export interface LogConfig {
  elasticsearch?: {
    nodes: string | string[];
    auth?: {
      username?: string;
      password?: string;
    },
    ssl?: {
      rejectUnauthorized?: boolean;
    },
    prefix?: string;
    type?: string;
  }
}
