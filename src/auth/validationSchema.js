import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required().matches(/^[A-Za-z\s]+$/, 'Nome não pode ter números'),
    phone: yup.string().required().matches(/^\d+$/, 'Somente números são permitidos no telefone'),
    email: yup.string().email().required(),
    dob: yup.date().required().max(new Date(), 'Data de Nascimento inválida'),
  });

export default validationSchema