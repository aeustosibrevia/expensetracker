import FormField from "./FormField.jsx";
import FormButton from "./FormButton.jsx";

const Form = () => {
    return (
        <form className="expense-form">
            <FormField
                id="description-field"
                placeholder="Description"
            />
            <FormField
                id="amount-field"
                placeholder="Amount"
                type="number"
            />
            <FormButton />
        </form>
    );
};

export default Form;