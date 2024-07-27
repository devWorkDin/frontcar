import { Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  content: {
    type: String,
    required: [true, "Content is required!"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required!"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: false,
  },
  ponctualite: {
    type: Boolean,
    default: false,
  },
  professionalisme: {
    type: Boolean,
    default: false,
  },

  proprete: {
    type: Boolean,
    default: false,
  },

  confort: {
    type: Boolean,
    default: false,
  },
});

const Testimonial =
  models.Testimonial || model("Testimonial", TestimonialSchema);

export default Testimonial;
