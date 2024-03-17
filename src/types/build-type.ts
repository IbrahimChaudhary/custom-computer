export type buildT = {
  name: string;
  status: string;
  inCart: boolean;
  parts: {
    type: string;
    id: string;
  }[];
};
