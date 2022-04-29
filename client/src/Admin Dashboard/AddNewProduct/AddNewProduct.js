import React, { Fragment, useState } from "react";
import "./newProduct.css";
// import { Select, SelectOption, SelectInput } from "reaselct";
import Select from "react-select";
import { Button, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import "../../App.css";
import { DropzoneArea } from "material-ui-dropzone";

const NewProduct = () => {
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [images, setSelectImage] = useState(null);

  const catOptions = [
    { value: "Protien", label: "Protien" },
    { value: "water", label: "water" },
    { value: "sugar", label: "Aston Martin" },
    { value: "furits", label: "furits" },
    { value: "bmw", label: "BMW" },
    { value: "cadillac", label: "Cadillac" },
  ];

  const suppOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "oreo", label: "Oreo" },
    { value: "vanilla", label: "Vanilla" },
    { value: "tutiFruiti", label: "Tuti Fruiti" },
  ];

  const supplimentWeights = [
    { value: "3", label: "3 lbs" },
    { value: "5", label: "5 lbs" },
    { value: "12", label: "12 lbs" },
  ];

  // const alert = useAlert();

  // const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name,
      price,
      category,
      images,
      selectedFlavours,
      selectedWeights,
      description,
      company,
    };
    try {
      const response = await fetch("http://localhost:5000/api/product", {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ data }),
      });
      const product = await response.json();
      console.log(product);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDropZoneImage = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const fileObj = {
        ...file,
        preview: URL.createObjectURL(file),
        fileData: file,
      };
      setSelectImage(fileObj?.preview);
    }
  };
  console.log("For First dropZone", images);

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
              <TextField
                name="name"
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
              <TextareaAutosize
              name="desc"
                fullWidth
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="handleTextArea"
              ></TextareaAutosize>
            </div>
            <div>
              <Select
                fullWidth
                options={catOptions}
                placeholder="Select  a Category..."
                value={category}
                onChange={(selectedOption) => setCategory(selectedOption)}
              />
            </div>
            <div>
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
            <div>
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
            </div>

            <DropzoneArea
              acceptedFiles={["image/*"]}
              filesLimit={2}
              file={images}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={handleDropZoneImage}
            />

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
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
