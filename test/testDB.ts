import mongoose from "mongoose";

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect(
      "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele"
    );
  },
  disconnect: (done: mongoose.CallbackWithoutResult) => {
    mongoose.disconnect(done);
  },
};
