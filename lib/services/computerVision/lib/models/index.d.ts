/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the Word class.
 * @constructor
 * @member {array} [boundingBox]
 * @member {string} [text]
 */
export interface Word {
  boundingBox?: number[];
  text?: string;
}

/**
 * @class
 * Initializes a new instance of the Line class.
 * @constructor
 * @member {array} [boundingBox]
 * @member {string} [text]
 * @member {array} [words]
 */
export interface Line {
  boundingBox?: number[];
  text?: string;
  words?: Word[];
}

/**
 * @class
 * Initializes a new instance of the RecognitionResult class.
 * @constructor
 * @member {array} [lines]
 */
export interface RecognitionResult {
  lines?: Line[];
}

/**
 * @class
 * Initializes a new instance of the TextOperationResult class.
 * @constructor
 * @member {string} [status] Status of the text operation. Possible values
 * include: 'Not Started', 'Running', 'Failed', 'Succeeded'
 * @member {object} [recognitionResult]
 * @member {array} [recognitionResult.lines]
 */
export interface TextOperationResult {
  status?: string;
  recognitionResult?: RecognitionResult;
}

/**
 * @class
 * Initializes a new instance of the FaceRectangle class.
 * @constructor
 * An object describing face rectangle.
 *
 * @member {number} [left] X-coordinate of the top left point of the face.
 * @member {number} [top] Y-coordinate of the top left point of the face.
 * @member {number} [width] Width measured from the top-left point of the face.
 * @member {number} [height] Height measured from the top-left point of the
 * face.
 */
export interface FaceRectangle {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

/**
 * @class
 * Initializes a new instance of the CelebritiesModel class.
 * @constructor
 * An object describing possible celebrity identification.
 *
 * @member {string} [name] Name of the celebrity.
 * @member {number} [confidence] Level of confidence ranging from 0 to 1.
 * @member {object} [faceRectangle]
 * @member {number} [faceRectangle.left] X-coordinate of the top left point of
 * the face.
 * @member {number} [faceRectangle.top] Y-coordinate of the top left point of
 * the face.
 * @member {number} [faceRectangle.width] Width measured from the top-left
 * point of the face.
 * @member {number} [faceRectangle.height] Height measured from the top-left
 * point of the face.
 */
export interface CelebritiesModel {
  name?: string;
  confidence?: number;
  faceRectangle?: FaceRectangle;
}

/**
 * @class
 * Initializes a new instance of the CategoryDetail class.
 * @constructor
 * An object describing additional category details.
 *
 * @member {array} [celebrities] An array of celebrities if any identified.
 */
export interface CategoryDetail {
  celebrities?: CelebritiesModel[];
}

/**
 * @class
 * Initializes a new instance of the Category class.
 * @constructor
 * An object describing identified category.
 *
 * @member {string} [name] Name of the category.
 * @member {number} [score] Scoring of the category.
 * @member {object} [detail]
 * @member {array} [detail.celebrities] An array of celebrities if any
 * identified.
 */
export interface Category {
  name?: string;
  score?: number;
  detail?: CategoryDetail;
}

/**
 * @class
 * Initializes a new instance of the AdultInfo class.
 * @constructor
 * An object describing whether the image contains adult-oriented content
 * and/or is racy.
 *
 * @member {boolean} [isAdultContent] A value indicating if the image contains
 * adult-oriented content.
 * @member {boolean} [isRacyContent] A value indicating if the image is race.
 * @member {number} [adultScore] Score from 0 to 1 that indicates how much of
 * adult content is within the image.
 * @member {number} [racyScore] Score from 0 to 1 that indicates how suggestive
 * is the image.
 */
export interface AdultInfo {
  isAdultContent?: boolean;
  isRacyContent?: boolean;
  adultScore?: number;
  racyScore?: number;
}

/**
 * @class
 * Initializes a new instance of the ColorInfo class.
 * @constructor
 * An object providing additional metadata describing color attributes.
 *
 * @member {string} [dominantColorForeground] Possible dominant foreground
 * color.
 * @member {string} [dominantColorBackground] Possible dominant background
 * color.
 * @member {array} [dominantColors] An array of possible dominant colors.
 * @member {string} [accentColor] Possible accent color.
 * @member {boolean} [isBWImg] A value indicating if the image is black and
 * white.
 */
export interface ColorInfo {
  dominantColorForeground?: string;
  dominantColorBackground?: string;
  dominantColors?: string[];
  accentColor?: string;
  isBWImg?: boolean;
}

/**
 * @class
 * Initializes a new instance of the ImageType class.
 * @constructor
 * An object providing possible image types and matching confidence levels.
 *
 * @member {number} [clipArtType] Confidence level that the image is a clip
 * art.
 * @member {number} [lineDrawingType] Confidence level that the image is a line
 * drawing.
 */
export interface ImageType {
  clipArtType?: number;
  lineDrawingType?: number;
}

/**
 * @class
 * Initializes a new instance of the ImageTag class.
 * @constructor
 * An image caption, i.e. a brief description of what the image depicts.
 *
 * @member {string} [name] The tag value
 * @member {number} [confidence] The level of confidence the service has in the
 * caption
 */
export interface ImageTag {
  name?: string;
  confidence?: number;
}

/**
 * @class
 * Initializes a new instance of the ImageCaption class.
 * @constructor
 * An image caption, i.e. a brief description of what the image depicts.
 *
 * @member {string} [text] The text of the caption
 * @member {number} [confidence] The level of confidence the service has in the
 * caption
 */
export interface ImageCaption {
  text?: string;
  confidence?: number;
}

/**
 * @class
 * Initializes a new instance of the ImageMetadata class.
 * @constructor
 * Image metadata
 *
 * @member {number} [width] Image width
 * @member {number} [height] Image height
 * @member {string} [format] Image format
 */
export interface ImageMetadata {
  width?: number;
  height?: number;
  format?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageDescriptionDetails class.
 * @constructor
 * A collection of content tags, along with a list of captions sorted by
 * confidence level, and image metadata.
 *
 * @member {array} [tags] A collection of image tags.
 * @member {array} [captions] A list of captions, sorted by confidence level.
 * @member {string} [requestId] Id of the REST API request.
 * @member {object} [metadata]
 * @member {number} [metadata.width] Image width
 * @member {number} [metadata.height] Image height
 * @member {string} [metadata.format] Image format
 */
export interface ImageDescriptionDetails {
  tags?: string[];
  captions?: ImageCaption[];
  requestId?: string;
  metadata?: ImageMetadata;
}

/**
 * @class
 * Initializes a new instance of the FaceDescription class.
 * @constructor
 * An object describing a face identified in the image.
 *
 * @member {number} [age] Possible age of the face.
 * @member {string} [gender] Possible gender of the face. Possible values
 * include: 'Male', 'Female'
 * @member {object} [faceRectangle]
 * @member {number} [faceRectangle.left] X-coordinate of the top left point of
 * the face.
 * @member {number} [faceRectangle.top] Y-coordinate of the top left point of
 * the face.
 * @member {number} [faceRectangle.width] Width measured from the top-left
 * point of the face.
 * @member {number} [faceRectangle.height] Height measured from the top-left
 * point of the face.
 */
export interface FaceDescription {
  age?: number;
  gender?: string;
  faceRectangle?: FaceRectangle;
}

/**
 * @class
 * Initializes a new instance of the ImageAnalysis class.
 * @constructor
 * Result of AnalyzeImage operation.
 *
 * @member {array} [categories] An array indicating identified categories.
 * @member {object} [adult]
 * @member {boolean} [adult.isAdultContent] A value indicating if the image
 * contains adult-oriented content.
 * @member {boolean} [adult.isRacyContent] A value indicating if the image is
 * race.
 * @member {number} [adult.adultScore] Score from 0 to 1 that indicates how
 * much of adult content is within the image.
 * @member {number} [adult.racyScore] Score from 0 to 1 that indicates how
 * suggestive is the image.
 * @member {object} [color]
 * @member {string} [color.dominantColorForeground] Possible dominant
 * foreground color.
 * @member {string} [color.dominantColorBackground] Possible dominant
 * background color.
 * @member {array} [color.dominantColors] An array of possible dominant colors.
 * @member {string} [color.accentColor] Possible accent color.
 * @member {boolean} [color.isBWImg] A value indicating if the image is black
 * and white.
 * @member {object} [imageType]
 * @member {number} [imageType.clipArtType] Confidence level that the image is
 * a clip art.
 * @member {number} [imageType.lineDrawingType] Confidence level that the image
 * is a line drawing.
 * @member {array} [tags] A list of tags with confidence level.
 * @member {object} [description]
 * @member {array} [description.tags] A collection of image tags.
 * @member {array} [description.captions] A list of captions, sorted by
 * confidence level.
 * @member {string} [description.requestId] Id of the REST API request.
 * @member {object} [description.metadata]
 * @member {number} [description.metadata.width] Image width
 * @member {number} [description.metadata.height] Image height
 * @member {string} [description.metadata.format] Image format
 * @member {array} [faces] An array of possible faces within the image.
 * @member {string} [requestId] Id of the request for tracking purposes.
 * @member {object} [metadata]
 * @member {number} [metadata.width] Image width
 * @member {number} [metadata.height] Image height
 * @member {string} [metadata.format] Image format
 */
export interface ImageAnalysis {
  categories?: Category[];
  adult?: AdultInfo;
  color?: ColorInfo;
  imageType?: ImageType;
  tags?: ImageTag[];
  description?: ImageDescriptionDetails;
  faces?: FaceDescription[];
  requestId?: string;
  metadata?: ImageMetadata;
}

/**
 * @class
 * Initializes a new instance of the OcrWord class.
 * @constructor
 * Information on a recognized word.
 *
 * @member {string} [boundingBox] Bounding box of a recognized word. The four
 * integers represent the x-coordinate of the left edge, the y-coordinate of
 * the top edge, width, and height of the bounding box, in the coordinate
 * system of the input image, after it has been rotated around its center
 * according to the detected text angle (see textAngle property), with the
 * origin at the top-left corner, and the y-axis pointing down.
 * @member {string} [text] String value of a recognized word.
 */
export interface OcrWord {
  boundingBox?: string;
  text?: string;
}

/**
 * @class
 * Initializes a new instance of the OcrLine class.
 * @constructor
 * An object describing a single recognized line of text.
 *
 * @member {string} [boundingBox] Bounding box of a recognized line. The four
 * integers represent the x-coordinate of the left edge, the y-coordinate of
 * the top edge, width, and height of the bounding box, in the coordinate
 * system of the input image, after it has been rotated around its center
 * according to the detected text angle (see textAngle property), with the
 * origin at the top-left corner, and the y-axis pointing down.
 * @member {array} [words] An array of objects, where each object represents a
 * recognized word.
 */
export interface OcrLine {
  boundingBox?: string;
  words?: OcrWord[];
}

/**
 * @class
 * Initializes a new instance of the OcrRegion class.
 * @constructor
 * A region consists of multiple lines (e.g. a column of text in a multi-column
 * document).
 *
 * @member {string} [boundingBox] Bounding box of a recognized region. The four
 * integers represent the x-coordinate of the left edge, the y-coordinate of
 * the top edge, width, and height of the bounding box, in the coordinate
 * system of the input image, after it has been rotated around its center
 * according to the detected text angle (see textAngle property), with the
 * origin at the top-left corner, and the y-axis pointing down.
 * @member {array} [lines]
 */
export interface OcrRegion {
  boundingBox?: string;
  lines?: OcrLine[];
}

/**
 * @class
 * Initializes a new instance of the OcrResult class.
 * @constructor
 * @member {object} [language]
 * @member {number} [textAngle] The angle, in degrees, of the detected text
 * with respect to the closest horizontal or vertical direction. After rotating
 * the input image clockwise by this angle, the recognized text lines become
 * horizontal or vertical. In combination with the orientation property it can
 * be used to overlay recognition results correctly on the original image, by
 * rotating either the original image or recognition results by a suitable
 * angle around the center of the original image. If the angle cannot be
 * confidently detected, this property is not present. If the image contains
 * text at different angles, only part of the text will be recognized
 * correctly.
 * @member {string} [orientation] Orientation of the text recognized in the
 * image. The value (up,down,left, or right) refers to the direction that the
 * top of the recognized text is facing, after the image has been rotated
 * around its center according to the detected text angle (see textAngle
 * property).
 * @member {array} [regions] An array of objects, where each object represents
 * a region of recognized text.
 */
export interface OcrResult {
  language?: OcrResult;
  textAngle?: number;
  orientation?: string;
  regions?: OcrRegion[];
}

/**
 * @class
 * Initializes a new instance of the ModelDescription class.
 * @constructor
 * An object describing supported model by name and categories.
 *
 * @member {string} [name]
 * @member {array} [categories]
 */
export interface ModelDescription {
  name?: string;
  categories?: string[];
}

/**
 * @class
 * Initializes a new instance of the ListModelsResult class.
 * @constructor
 * Result of the List Domain Models operation.
 *
 * @member {array} [modelsProperty] An array of supported models.
 */
export interface ListModelsResult {
  readonly modelsProperty?: ModelDescription[];
}

/**
 * @class
 * Initializes a new instance of the DomainModelResults class.
 * @constructor
 * Result of image analysis using a specific domain model including additional
 * metadata.
 *
 * @member {array} [celebrities] An array of possible celebritied identified in
 * the image.
 * @member {string} [requestId] Id of the REST API request.
 * @member {object} [metadata]
 * @member {number} [metadata.width] Image width
 * @member {number} [metadata.height] Image height
 * @member {string} [metadata.format] Image format
 */
export interface DomainModelResults {
  celebrities?: CelebritiesModel[];
  requestId?: string;
  metadata?: ImageMetadata;
}

/**
 * @class
 * Initializes a new instance of the ImageDescription class.
 * @constructor
 * A collection of content tags, along with a list of captions sorted by
 * confidence level, and image metadata.
 *
 * @member {array} [tags] A collection of image tags.
 * @member {array} [captions] A list of captions, sorted by confidence level.
 * @member {string} [requestId] Id of the REST API request.
 * @member {object} [metadata]
 * @member {number} [metadata.width] Image width
 * @member {number} [metadata.height] Image height
 * @member {string} [metadata.format] Image format
 */
export interface ImageDescription {
  tags?: string[];
  captions?: ImageCaption[];
  requestId?: string;
  metadata?: ImageMetadata;
}

/**
 * @class
 * Initializes a new instance of the TagResult class.
 * @constructor
 * The results of a image tag operation, including any tags and image metadata.
 *
 * @member {array} [tags] A list of tags with confidence level.
 * @member {string} [requestId] Id of the REST API request.
 * @member {object} [metadata]
 * @member {number} [metadata.width] Image width
 * @member {number} [metadata.height] Image height
 * @member {string} [metadata.format] Image format
 */
export interface TagResult {
  tags?: ImageTag[];
  requestId?: string;
  metadata?: ImageMetadata;
}

/**
 * @class
 * Initializes a new instance of the ComputerVisionError class.
 * @constructor
 * @member {string} code The error code. Possible values include:
 * 'InvalidImageUrl', 'InvalidImageFormat', 'InvalidImageSize',
 * 'NotSupportedVisualFeature', 'NotSupportedImage', 'InvalidDetails',
 * 'NotSupportedLanguage', 'BadArgument', 'FailedToProcess', 'Timeout',
 * 'InternalServerError', 'Unspecified', 'StorageException'
 * @member {string} message A message explaining the error reported by the
 * service.
 * @member {string} [requestId] A unique request identifier.
 */
export interface ComputerVisionError {
  code: string;
  message: string;
  requestId?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageUrl class.
 * @constructor
 * @member {string} url Publicly reachable URL of an image
 */
export interface ImageUrl {
  url: string;
}
