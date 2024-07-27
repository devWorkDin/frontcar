import { Schema, model, models } from "mongoose";

const ServicesSchema = new Schema({
  ponctualite: {
    type: Boolean,
    default: false,
  },
  professionnalisme: {
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
  testimonial: {
    type: Schema.Types.ObjectId,
    ref: "Testimonial",
  },
});

const Service = models.Service || model("Service", ServicesSchema);

export default Service;
