export enum DATE_FORMAT {
  YYYY=1, // Use 1 instead of zero because of checking, when 0 being ignored
  YYYYMM,
  YYYYMMDD,
}

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
