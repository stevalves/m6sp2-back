import app from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("database connected");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
