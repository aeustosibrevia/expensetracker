const FormField = (props) => {
    const { id, placeholder, type = "text" } = props;

    return (
        <input
            className="form-field"
            id={id}
            type={type}
            placeholder={placeholder}
            required
        />
    );
};

export default FormField;