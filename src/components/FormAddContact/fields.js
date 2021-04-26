const fields = {
    userName: {
        type: "text",
        name: "name",
        title: "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
        required : "required"
    },
    userPhone: {
        type: "tel",
        name: "number",
        pattern: "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}",
        title: "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
        required : "required"
    }
}

export default fields;