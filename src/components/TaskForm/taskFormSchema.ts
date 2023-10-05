import * as Yup from 'yup';

export const taskFormSchema = Yup.object().shape({
  title: Yup.string()
    .max(250, 'Text must be at most 250 characters')
    .required('This field is required'),
  start: Yup.string()
    .required('This field is required')
    .test(
      'startBeforeEnd',
      'Start must be before or equal to End',
      function (startValue) {
        const endValue = this.parent.end;
        if (!startValue || !endValue) {
          return true;
        }
        return startValue <= endValue;
      }
    ),
  end: Yup.string().required('This field is required'),
  priority: Yup.string().required('This field is required'),
});
