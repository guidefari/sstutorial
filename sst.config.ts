import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { StorageStack } from "./stacks/StorageStack";

export default {
  config(_input) {
    return {
      name: "sstutorial",
      region: "us-east-1",
      profile: "sst"
    };
  },
  stacks(app) {
    app.stack(StorageStack);
  }
} satisfies SSTConfig;
