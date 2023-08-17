import * as Yup from 'yup';

export const FeedbackFormSchema = Yup.object().shape({
  rating: Yup.number().required('Required'),
  text: Yup.string().required('Required'),
});
