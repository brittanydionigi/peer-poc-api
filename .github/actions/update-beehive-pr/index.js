// const github = require("@actions/github-script");

// async function run() {
//   const inputs = {
//     githubToken: github.core.getInput("github_token", { required: true }),
//     prEndpoint: github.core.getInput("pr_endpoint", { required: true })
//   };

//   const octokit = new github.GitHub(inputs.githubToken);

//   core.info(`Look up a pull request at ${prEndpoint}`);

//   const { data: pulls } = await octokit.pulls.list({
//     owner: github.context.repo.owner,
//     repo: github.context.repo.repo,
//     base,
//     head: `${github.context.repo.owner}:${source}`
//   });

//   if (pulls.length == 0) {
//     core.info(`No such pull request: source=${source} base=${base}`);
//     return;
//   }

//   const { number } = pulls[0];
//   core.info(`Found pull request #${number}`);

//   const params = {
//     owner: github.context.repo.owner,
//     repo: github.context.repo.repo,
//     pull_number: number
//   };

//   if (inputs.prBody) {
//     core.info(`Updating with body=${inputs.prBody}`);
//     params.body = inputs.prBody;
//   }

//   await octokit.pulls.update(params);
// }

// run();



// //         # https://api.github.com/repos/brittanystoroz/peer-poc-api/pulls/1 
// //         # return this.body and append to it
// // #         -------------------------------
// // # <div id="beehive-status">
// // #   <p><b>🐝 Beehive Status</b><br />
// // #   <a href="">Default Configuration</a> | <a href="">Not Yet Running</a></p>
// // # </div>