import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBlog extends Document {
    title: string;
    content: string;
    image?: string;
}

const blogSchema = new Schema<IBlog>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
}, { timestamps: true }
);


const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;