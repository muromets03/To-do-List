
import * as Yup from 'yup';

export const SCHEMA_INPUT = Yup.object({
    body:Yup.string('Must be string').matches( /^[A-Z][a-z]{1,16}$/,'Invalid string').required('Must be required')
})


