import * as Yup from 'yup';

export const FeedbackFormSchema = Yup.object().shape({
  rating: Yup.number().min(1, 'Required field').required(),
  text: Yup.string()
    .max(250, 'Text must be at most 250 characters')
    .required('Required field'),
});
