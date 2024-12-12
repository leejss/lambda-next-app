/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "lambda-next-app",
      // removal: input?.stage === "production" ? "retain" : "remove",
      removal: "remove",
      // protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "ap-northeast-2",
          profile: "personal-admin-user",
        },
      },
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("TinyyardAppBucket", {
      access: "public",
    });

    new sst.aws.Nextjs("TinyyardApp", {
      link: [bucket],
    });
  },
});
