import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";

export default {
  config(_input) {
    return {
      name: "sstutorial",
      region: "us-east-1",
      profile: "sst"
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack);
  }
} satisfies SSTConfig;
