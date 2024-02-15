import chalk from "chalk";
import mongoose from "mongoose";

mongoose
  .connect(process.env.CONNECTION_STRING_DB)
  .then(() => {
    console.log(
      chalk.green(
        "CONNTECTED TO DATABASE"
      )
    );
  })
  .catch((err) => {
    console.error(chalk.red("THERE IS A ERROR: "), err);
  });

export default mongoose;
