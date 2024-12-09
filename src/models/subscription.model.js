import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // the one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // the one whom the subscriber is subscribing
        ref: "User"
    }
})



export const Subscription = mongoose.model("Subscription", subscriptionSchema)
