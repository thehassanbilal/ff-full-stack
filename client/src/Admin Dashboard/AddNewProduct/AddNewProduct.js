import React, { Fragment, useState } from "react";
import "./newProduct.css";
import Select from "react-select";
import { Button, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import "../../App.css";
import { DropzoneArea } from "material-ui-dropzone";
import { addNewProductThunk } from "../../features/productSlice";
import { useDispatch } from "react-redux";
import { storage } from "../../../src/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const NewProduct = () => {
  const dispatch = useDispatch();
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [images, setSelectImage] = useState(null);

  const catOptions = [
    { value: "protien", label: "Protien" },
    { value: "fatBurner", label: "Fat Burner" },
    { value: "aminoAcid", label: "Amino Acid" },
    { value: "preWorkout", label: "Pre Workout" },
    { value: "postWorkout", label: "Post Workout" },
  ];

  const companyOptions = [
    { value: "on", label: "On" },
    { value: "theProteinWorks", label: "The Protein Works" },
    { value: "jackNeutrition", label: "Jack Neutrition" },
    { value: "optimumNutrition", label: "Optimum Nutrition" },
    { value: "rSPNutrition", label: "RSP Nutrition" },
  ];

  const suppOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "oreo", label: "Oreo" },
    { value: "vanilla", label: "Vanilla" },
    { value: "tuti fruiti", label: "Tuti Fruiti" },
  ];

  const supplimentWeights = [
    { value: "3 lbs", label: "3 lbs" },
    { value: "5 lbs", label: "5 lbs" },
    { value: "7 lbs", label: "7 lbs" },
  ];

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    const companyName = company.label;
    const categoryName = category.label;
    const productWeights = selectedWeights.map((weight) => weight.label);
    const productFlavours = selectedFlavours.map((flavour) => flavour.label);

    const data = {
      name,
      price: parseFloat(price),
      rating: parseFloat(rating),
      desc,
      company: companyName,
      supplementCategory: categoryName,
      image: imgUrl,
      flavour: productFlavours,
      weight: productWeights,
    };
    console.log(data);

    dispatch(addNewProductThunk(data));
  };

  const handleDropZoneImage = (e) => {
    e.preventDefault();

    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
    // const file = acceptedFiles[0];
    // if (file) {
    //   const fileObj = {
    //     ...file,
    //     preview: URL.createObjectURL(file),
    //     fileData: file,
    //   };
    //   setSelectImage(fileObj?.preview);
    // }

    // {
    //   file && (
    //     <button className="btn-uploadImage" onClick={imageHandleSubmit}>
    //       Add Image
    //     </button>
    //   );
    // }
  };

  // ------------------Image upload---------------------------

  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const [imageUpload, setimageUpload] = useState(null);

  const imageHandleSubmit = (e) => {
    console.log("Image upload envoked!");
    e.preventDefault();

    // const uploadImage = () => {
    //   if (imageUpload == null) return;
    //   const imageRef = ref(storage, `images/${imageUpload.name}`);
    //   uploadBytesResumable(imageRef, imageUpload).then(() => {
    //     alert("image Uploaded!");
    //   });
    // };

    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
    console.log(imgUrl);
  };

  return (
    <Fragment>
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <label className="addProduct-label">Name :</label>
              <TextField
                name="Name"
                fullWidth
                className="set-outline"
                variant="outlined"
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="addProduct-label">Price :</label>
              <TextField
                name="price"
                fullWidth
                className="set-outline"
                variant="outlined"
                type="number"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="addProduct-label">Rating :</label>
              <TextField
                name="rating"
                fullWidth
                className="set-outline"
                variant="outlined"
                type="number"
                placeholder="Rating"
                required
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div>
              <label className="addProduct-label">Company :</label>
              <Select
                fullWidth
                options={companyOptions}
                placeholder="Select  a Category..."
                value={company}
                onChange={(selectedOption) => setCompany(selectedOption)}
              />
            </div>

            <div>
              <label className="addProduct-label">Description :</label>
              <TextareaAutosize
                name="desc"
                fullWidth
                placeholder="Product Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="handleTextArea"
              ></TextareaAutosize>
            </div>

            <div>
              <label className="addProduct-label">Category :</label>
              <Select
                fullWidth
                options={catOptions}
                placeholder="Select  a Category..."
                value={category}
                onChange={(selectedOption) => setCategory(selectedOption)}
              />
            </div>
            <div>
              <label className="addProduct-label">Flavour :</label>
              <Select
                fullWidth
                isMulti={true}
                options={suppOptions}
                placeholder="Select  Flavours..."
                value={selectedFlavours}
                onChange={(selectedOption) =>
                  setSelectedFlavours(selectedOption)
                }
              />
            </div>

            <div>
              <label className="addProduct-label">Weight :</label>
              <Select
                isMulti={true}
                options={supplimentWeights}
                placeholder="Select  Weights..."
                value={selectedWeights}
                onChange={(selectedOption) =>
                  setSelectedWeights(selectedOption)
                }
              />
            </div>
            {/* <div>
              <TextField
                fullWidth
                className="set-outline"
                variant="outlined"
                type="text"
                placeholder="Company Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div> */}

            {/* <div>
              <label className="addProduct-label">Image :</label>
              <DropzoneArea
                acceptedFiles={["image/*"]}
                filesLimit={2}
                file={images}
                accept=".jpg,.png,.jpeg"
                dropzoneText={"Drag and drop an image here or click"}
                onChange={handleDropZoneImage}
              />
            </div> */}

            {/* <DropzoneArea
              acceptedFiles={["image/*"]}
              filesLimit={1}
              dropzoneText={
                "Drag and drop and add nutrition image here or click"
              }
            /> */}

            <Button id="createProductBtn" type="submit" className="btn-reset">
              Create
            </Button>
          </form>

          <form onSubmit={imageHandleSubmit} className="form">
            <label className="addProduct-label">Image :</label>
            <input type="file" />
            <button className="btn-uploadImage" type="submit">Upload</button>
          </form>

          {!imgUrl && (
            <div className="outerbar">
              <div
                className="innerbar"
                style={{ width: `${progresspercent}%` }}
              >
                {progresspercent}%
              </div>
            </div>
          )}
          {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}

        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
