import * as Yup from 'yup';

export const taskFormSchema = Yup.object().shape({
  title: Yup.string('Enter title').required('This field is required'),
  start: Yup.string('Enter start').required('This field is required'),
  end: Yup.string('Enter end').required('This field is required'),
  priority: Yup.string('Enter priority').required('This field is required'),
  category: Yup.string('Enter category').required('This field is required'),
});
