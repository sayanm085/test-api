import mongoose from "mongoose";

const webContentSchema = new mongoose.Schema(
  {
    BrandPartners: [
      {
        brandName: String,
        brandLink: String,
      },
    ],

    Services: [
      {
        serviceName: String,
        serviceDescription: String,
      },
    ],

    comparison: [
      {
        Shotlin: [
          {
            description: {
              type: String,
              required: true,
            },
          },
        ],
      },
      {
        OtherAgencies: [
          {
            description: String,
          },
        ],
      },
    ],

    FAQs: [
      {
        FAQsQuestion: String,
        FAQsAnswer: String,
      },
    ],
    clientsreview: [
      {
        clientName: {
          type: String,
          required: true,
        },
        clientService: {
          type: String,
          required: true,
        },
        clientReview: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const WebContent = mongoose.model("WebContent", webContentSchema);
export default WebContent;

