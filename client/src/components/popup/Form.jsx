import "../../css/popup.css";

function Form(props) {
  return (
    <div className="form_div">
      <form
        className="form flexcol"
        onSubmit={props.formik.handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="title"
          placeholder={props.fillText.title || "title"}
          value={props.formik.values.title}
          onChange={props.formik.handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder={props.fillText.description || "description"}
          value={props.formik.values.description}
          max={350}
          onChange={props.formik.handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder={parseInt(props.fillText.price) || "price"}
          value={props.formik.values.price}
          onChange={props.formik.handleChange}
        />

        <input
          type="text"
          name="img"
          id="img"
          placeholder={props.fillText.description || "url"}
          value={props.formik.values.img}
          onChange={props.formik.handleChange}
        />

        <input type="submit" value={"send"} />
      </form>
    </div>
  );
}

export default Form;
