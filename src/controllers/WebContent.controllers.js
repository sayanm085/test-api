import WebContent  from '../models/WebContent.model.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';

// Create and Save a new WebContent

const WebContentcreate = asyncHandler(async(req, res) => {
  const { BrandPartners, Services, FAQs } = req.body;

  //send all the data to the database webcontent
  const webcontent = new WebContent({ BrandPartners, Services, FAQs });
  //save the data to the database
  let data = await webcontent.save();

  //send the response to the user

  res.status(201).json(ApiResponse(201, data, "WebContent created successfully"));
});

const WebContentget = asyncHandler(async(req, res) => {
  //get all the data from the database
  let data = await WebContent.find();

  //send the response to the user
  res.status(200).json({
    status: "success",
    data: data,
    message: "WebContent retrieved successfully",
  });
});

const photoUpload = asyncHandler(async(req, res) => {
  //get all the data from the database
   req.files.appphoto.map((item) => {
    console.log(item);
  } );
  console.log(req.files.appphoto.length);
  console.log('------------------- photos -------------------');
  req.files.photos.map((item) => {
    console.log(item);
  } );
  console.log(req.files.photos.length);


  //send the response to the user
  res.status(200).json({
    status: "success",
    data: null,
    message: "WebContent retrieved successfully",
  });
});



export {WebContentcreate,WebContentget,photoUpload};