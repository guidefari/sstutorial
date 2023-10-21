import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sstutorial",
      region: "us-east-1",
      profile: "sst"
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
